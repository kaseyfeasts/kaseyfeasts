(() => {
  'use strict';

  const cfg = window.KASEY_ADMIN;
  const $ = id => document.getElementById(id);

  let token = sessionStorage.getItem('kf_token');
  let region = sessionStorage.getItem('kf_region') || null; // newengland | hongkong | global
  let tab = 'spots';                                         // spots | items
  let spots = [];
  let items = [];
  let editing = null;
  let sha = {};

  const FILES = { spots: 'data/content.js', items: 'data/items.js' };
  const REGION_NAMES = { newengland: 'New England', hongkong: 'Hong Kong', global: 'Global' };
  const RATINGS = []; for (let r = 100; r >= 60; r -= 2.5) RATINGS.push(r);

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const slug = s => String(s)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const enc = s => btoa(
    Array.from(new TextEncoder().encode(s), b => String.fromCharCode(b)).join('')
  );

  const dec = s => new TextDecoder().decode(
    Uint8Array.from(atob(s.replace(/\s/g, '')), c => c.charCodeAt(0))
  );

  function note(s, error = false) {
    $('notice').textContent = s;
    $('notice').style.color = error ? '#b02d4b' : '#386b48';
  }

  function api(path, opts = {}) {
    return fetch('https://api.github.com' + path, {
      ...opts,
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: 'Bearer ' + token,
        'X-GitHub-Api-Version': '2022-11-28',
        ...(opts.headers || {})
      }
    }).then(async r => {
      const j = await r.json();
      if (!r.ok) {
        const err = Error(j.message || 'GitHub request failed');
        err.status = r.status;
        throw err;
      }
      return j;
    });
  }

  const file = p =>
    `/repos/${encodeURIComponent(cfg.repoOwner)}/${encodeURIComponent(cfg.repoName)}/contents/${p}`;

  /* ---------- lists (from /data/lists.js) ---------- */
  const L = {
    countries: typeof COUNTRIES !== 'undefined' ? COUNTRIES : ['United States', 'Hong Kong'],
    states: typeof STATES !== 'undefined' ? STATES : {},
    cities: typeof CITIES !== 'undefined' ? CITIES : {},
    neStates: typeof NEW_ENGLAND_STATES !== 'undefined' ? NEW_ENGLAND_STATES : ['Connecticut', 'Maine', 'Massachusetts', 'New Hampshire', 'Rhode Island', 'Vermont'],
    foods: typeof FOOD_CATEGORIES !== 'undefined' ? FOOD_CATEGORIES : ['Donuts', 'Pizza', 'Sandwiches'],
    itemCats: typeof ITEM_CATEGORIES !== 'undefined' ? ITEM_CATEGORIES : {},
    series: typeof SERIES !== 'undefined' ? SERIES : [],
    stamps: typeof RATING_STAMPS !== 'undefined' ? RATING_STAMPS : [[100, 'All-Star'], [90, 'Fantastic'], [80, 'Great'], [70, 'Very Good'], [60, 'Good']]
  };
  const stampOf = r => { r = +r; if (!Number.isFinite(r)) return ''; for (const [min, l] of L.stamps) if (r >= min) return l; return ''; };
  const ratingLabel = r => Number.isFinite(+r) && r !== '' && r != null ? `${+r} · ${stampOf(r)}` : '';

  /* ---------- data shape ---------- */
  const ABBR = { MA: 'Massachusetts', NH: 'New Hampshire', ME: 'Maine', VT: 'Vermont', RI: 'Rhode Island', CT: 'Connecticut' };
  function normSpot(s) { // converts the older one-category format
    if (Array.isArray(s.foods)) return s;
    const state = ABBR[s.st] || s.st || '';
    return {
      id: s.id, name: s.name, country: ABBR[s.st] ? 'United States' : (s.country || ''),
      ne: s.ne ?? !!ABBR[s.st], state, city: s.city || s.town || '', address: s.address || '',
      lat: s.lat, lng: s.lng,
      foods: s.cat ? [{ cat: s.cat, rating: s.rating ?? null, video: s.video || '', series: false, ep: null }] : []
    };
  }
  const inRegion = s => region === 'newengland' ? !!s.ne : region === 'hongkong' ? s.country === 'Hong Kong' : true;
  const spotById = id => spots.find(s => s.id === id);
  const itemInRegion = i => { const s = spotById(i.spot); return s ? inRegion(s) : region === 'global'; };
  const where = s => [s.city, s.state, s.country].filter(Boolean).join(', ');
  const seriesName = id => typeof id === 'string' ? (L.series.find(x => x.id === id) || {}).name || '' : '';

  async function getFile(path) {
    try {
      const f = await api(file(path) + '?ref=' + cfg.branch);
      sha[path] = f.sha;
      return dec(f.content);
    } catch (e) {
      if (e.status === 404) { sha[path] = undefined; return null; }
      throw e;
    }
  }

  async function load() {
    try {
      note('Loading content...');
      const user = await api('/user');
      if (user.login.toLowerCase() !== cfg.allowedLogin.toLowerCase()) {
        throw Error('This GitHub account is not authorized. Sign in as ' + cfg.allowedLogin);
      }
      $('who').textContent = '@' + user.login;

      const [s, it] = await Promise.all([getFile(FILES.spots), getFile(FILES.items)]);
      spots = s ? Function('"use strict";' + s + ';return SPOTS')() : [];
      items = it ? Function('"use strict";' + it + ';return ITEMS')() : [];
      if (!Array.isArray(spots) || !Array.isArray(items)) throw Error('Unexpected content format');
      spots = spots.map(normSpot);

      $('login').hidden = true;
      $('logout').hidden = false;
      if (region) openRegion(region); else showChooser();
      note('Connected to GitHub.');
    } catch (e) {
      note(e.message, true);
      if (!$('dashboard').hidden || !$('chooser').hidden) return;
      alert('Unable to connect: ' + e.message);
    }
  }

  /* ---------- "I'M HERE FOR" chooser + switcher ---------- */
  function showChooser() {
    $('dashboard').hidden = true;
    $('chooser').hidden = false;
  }
  function openRegion(r) {
    region = r;
    sessionStorage.setItem('kf_region', r);
    $('chooser').hidden = true;
    $('dashboard').hidden = false;
    $('editor').hidden = true;
    document.querySelectorAll('[data-region]').forEach(b => b.classList.toggle('on', b.dataset.region === r));
    $('regionTitle').textContent = REGION_NAMES[r] + (r === 'global' ? ' database (everything)' : ' database');
    $('regionNote').textContent = r === 'newengland'
      ? 'Only restaurants in New England, and their food items.'
      : r === 'hongkong'
        ? 'Only restaurants in Hong Kong, and their food items.'
        : 'Every restaurant and food item, from every country.';
    resetFilters();
    render();
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-region]');
    if (b) { e.preventDefault(); openRegion(b.dataset.region); }
  });
  $('changeRegion').onclick = showChooser;

  /* ---------- filters ---------- */
  const uniq = a => [...new Set(a.filter(Boolean))].sort((x, y) => x.localeCompare(y));
  const optList = (arr, all, val) => `<option value="">${all}</option>` + arr.map(v => `<option ${v === val ? 'selected' : ''}>${esc(v)}</option>`).join('');
  function resetFilters() { ['fCountry', 'fState', 'fCity', 'fCat', 'fSub'].forEach(id => { $(id).value = ''; }); $('search').value = ''; $('fSort').value = 'name'; }
  function fillFilters() {
    const rs = spots.filter(inRegion);
    const keep = id => $(id).value;
    const c = keep('fCountry'), st = keep('fState'), ci = keep('fCity'), cat = keep('fCat'), sub = keep('fSub');
    $('fCountry').innerHTML = optList(uniq(rs.map(s => s.country)), 'All countries', c);
    $('fCountry').hidden = region !== 'global';
    const byC = rs.filter(s => !c || s.country === c);
    $('fState').innerHTML = optList(uniq(byC.map(s => s.state)), 'All states / areas', st);
    const byS = byC.filter(s => !st || s.state === st);
    $('fCity').innerHTML = optList(uniq(byS.map(s => s.city)), 'All cities / districts', ci);
    const cats = tab === 'items' ? uniq(items.map(i => i.cat)) : uniq(rs.flatMap(s => s.foods.map(f => f.cat)));
    $('fCat').innerHTML = optList(cats, 'All food categories', cat);
    const subs = uniq(items.filter(i => !cat || i.cat === cat).map(i => i.sub));
    $('fSub').innerHTML = optList(subs, 'All types', sub);
    $('fSub').hidden = tab !== 'items';
  }
  ['fCountry', 'fState', 'fCity', 'fCat', 'fSub', 'fSort'].forEach(id => $(id).addEventListener('change', render));

  /* ---------- list ---------- */
  function render() {
    if (!region) return;
    fillFilters();
    const rs = spots.filter(inRegion), ri = items.filter(itemInRegion);
    $('spotcount').textContent = rs.length;
    $('itemcount').textContent = ri.length;
    $('new').textContent = tab === 'spots' ? '+ Add restaurant' : '+ Add food item';

    const q = $('search').value.toLowerCase();
    const c = $('fCountry').value, st = $('fState').value, ci = $('fCity').value, cat = $('fCat').value, sub = $('fSub').value, sort = $('fSort').value;
    const locOk = s => s && (!c || s.country === c) && (!st || s.state === st) && (!ci || s.city === ci);
    let rows;
    if (tab === 'spots') {
      rows = spots.map((v, i) => ({ v, i })).filter(({ v }) => inRegion(v) && locOk(v) && (!cat || v.foods.some(f => f.cat === cat)) && JSON.stringify(v).toLowerCase().includes(q));
      const score = v => cat ? +(v.foods.find(f => f.cat === cat) || {}).rating || 0 : Math.max(0, ...v.foods.map(f => +f.rating || 0));
      rows.sort(sort === 'best' ? (a, b) => score(b.v) - score(a.v) || a.v.name.localeCompare(b.v.name) : (a, b) => a.v.name.localeCompare(b.v.name));
    } else {
      rows = items.map((v, i) => ({ v, i })).filter(({ v }) => itemInRegion(v) && locOk(spotById(v.spot) || {}) && (!cat || v.cat === cat) && (!sub || v.sub === sub) && JSON.stringify(v).toLowerCase().includes(q));
      rows.sort(sort === 'best' ? (a, b) => (+b.v.rating || 0) - (+a.v.rating || 0) || a.v.name.localeCompare(b.v.name) : (a, b) => a.v.name.localeCompare(b.v.name));
    }
    $('resultcount').textContent = `${rows.length} shown`;

    $('items').innerHTML = rows.length ? rows.map(({ v, i }) => {
      let title, meta;
      if (tab === 'spots') {
        title = v.name;
        meta = `${esc(where(v))}${v.ne ? ' · <span class="ne">New England</span>' : ''}<br>${v.foods.map(f => `<span class="pill">${esc(f.cat)} ${esc(ratingLabel(f.rating))}${seriesName(f.series) ? ` · ${esc(seriesName(f.series))} #${esc(f.ep || '?')}` : ''}</span>`).join(' ')}`;
      } else {
        const s = spotById(v.spot);
        title = v.name;
        meta = `${esc(v.cat)}${v.sub ? ' · ' + esc(v.sub) : ''} · <span class="pill">${esc(ratingLabel(v.rating))}</span><br>${s ? esc(s.name) + ' · ' + esc(where(s)) : '<span class="warn">Restaurant missing</span>'}`;
      }
      return `<div class="item"><div><strong>${esc(title)}</strong><small>${meta}</small></div>
        <div><button data-edit="${i}">Edit</button><button class="delete" data-delete="${i}">Delete</button></div></div>`;
    }).join('') : `<div class="empty">Nothing here yet in ${esc(REGION_NAMES[region])}. Add your first ${tab === 'spots' ? 'restaurant' : 'food item'}!</div>`;
  }

  /* ---------- form helpers ---------- */
  function field(name, label, value = '', type = 'text', required = false, extra = '') {
    return `<div><label for="f_${name}">${label}</label>${type === 'textarea'
      ? `<textarea id="f_${name}" name="${name}" ${required ? 'required' : ''} ${extra}>${esc(value)}</textarea>`
      : `<input id="f_${name}" name="${name}" type="${type}" value="${esc(value)}" ${required ? 'required' : ''} ${extra}>`}</div>`;
  }
  // Dropdown with an "Other…" choice that reveals a text box.
  function selectField(name, label, options, value = '', { required = false, placeholder = 'Choose…', other = true, hint = '' } = {}) {
    return `<div class="sf" data-sf="${name}"><label for="f_${name}">${label}</label>
      <select id="f_${name}" ${required ? 'required' : ''}>${selectOptions(options, value, placeholder, other)}</select>
      <input class="otherinput" id="f_${name}_other" placeholder="Type it here" value="${value && !options.includes(value) ? esc(value) : ''}" ${value && !options.includes(value) ? '' : 'hidden'}>
      ${hint ? `<small class="hint">${hint}</small>` : ''}</div>`;
  }
  function selectOptions(options, value, placeholder = 'Choose…', other = true) {
    const isOther = value && !options.includes(value);
    return `<option value="">${esc(options.length ? placeholder : '')}</option>` + options.map(o => `<option ${o === value ? 'selected' : ''}>${esc(o)}</option>`).join('')
      + (other ? `<option value="__other" ${isOther ? 'selected' : ''}>＋ Add new…</option>` : '');
  }
  function setSelect(name, options, value, placeholder) {
    const sel = $('f_' + name); if (!sel) return;
    sel.innerHTML = selectOptions(options, value, placeholder);
    const o = $('f_' + name + '_other'); const isOther = value && !options.includes(value);
    o.hidden = !isOther; o.value = isOther ? value : '';
  }
  const readSel = name => { const s = $('f_' + name); if (!s) return ''; return s.value === '__other' ? $('f_' + name + '_other').value.trim() : s.value.trim(); };
  const ratingSelect = (name, label, value, required) => `<div><label for="f_${name}">${label} <span class="hidden-tag">Hidden</span></label>
    <select id="f_${name}" name="${name}" ${required ? 'required' : ''}><option value="">Choose a rating…</option>${RATINGS.map(r => `<option value="${r}" ${value !== '' && value != null && +value === r ? 'selected' : ''}>${r} · ${stampOf(r)}</option>`).join('')}</select>
    <small class="hint">Only the stamp shows on the site. The number is used to rank best to worst.</small></div>`;

  function parsePin(text) {
    const t = String(text || '');
    const m = t.match(/@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/) || t.match(/(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)/);
    if (!m) return null;
    const lat = +m[1], lng = +m[2];
    return Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180 ? { lat, lng } : null;
  }

  /* ---------- dropdown choices: only what has been entered before ---------- */
  const U = arr => [...new Set(arr.filter(Boolean).map(x => String(x).trim()))].sort((a, b) => a.localeCompare(b));
  const used = {
    countries: () => U(spots.map(s => s.country)),
    states: country => U(spots.filter(s => !country || s.country === country).map(s => s.state)),
    cities: state => U(spots.filter(s => !state || s.state === state).map(s => s.city)),
    foods: () => U(spots.flatMap(s => (s.foods || []).map(f => f.cat))),
    itemCats: () => U(items.map(i => i.cat)),
    subs: cat => U(items.filter(i => !cat || i.cat === cat).map(i => i.sub))
  };

  /* ---------- editors ---------- */
  function foodBlock(n, f = {}) {
    return `<fieldset class="foodset" data-food="${n}"><legend>Food category ${n}${n > 1 ? ' <span class="opt">(optional)</span>' : ''}</legend>
      ${selectField('cat' + n, 'Food category', used.foods(), f.cat || '', { required: n === 1 })}
      ${ratingSelect('rating' + n, 'Rating', f.rating, false)}
      ${field('video' + n, 'Instagram video link', f.video || '', 'url', false, 'placeholder="https://www.instagram.com/reel/..."')}
      <div class="twocol">
        <div><label for="f_series${n}">Series</label>
          <select id="f_series${n}"><option value="">Not part of a series</option>${L.series.map(x => `<option value="${esc(x.id)}" ${x.id === f.series ? 'selected' : ''}>${esc(x.name)}</option>`).join('')}</select></div>
        ${field('ep' + n, 'Number in series', f.ep ?? '', 'number', false, `min="1" step="1" ${f.series && typeof f.series === 'string' ? '' : 'disabled'}`)}
      </div></fieldset>`;
  }

  function openEditor(i = null) {
    editing = i;
    const v = i === null ? {} : (tab === 'spots' ? spots : items)[i];
    $('editorTitle').textContent = (i === null ? 'Add ' : 'Edit ') + (tab === 'spots' ? 'restaurant' : 'food item');

    if (tab === 'spots') {
      const country = v.country || (region === 'hongkong' ? 'Hong Kong' : region === 'newengland' ? 'United States' : '');
      const ne = i === null ? region === 'newengland' : !!v.ne;
      const foods = v.foods || [];
      $('fields').innerHTML =
        field('name', 'Restaurant name', v.name, 'text', true)
        + selectField('country', 'Country', used.countries(), country, { required: true })
        + `<div class="checkrow necheck"><input type="checkbox" id="f_ne" ${ne ? 'checked' : ''}><label for="f_ne">New England <span class="hidden-tag">Hidden</span></label></div>
           <small class="hint">Ticked = this restaurant shows in the New England section of the site and admin.</small>`
        + `<div class="twocol">${selectField('state', 'State', used.states(country), v.state || '')}${selectField('city', 'City / District', used.cities(v.state), v.city || '')}</div>`
        + field('address', 'Google Maps address', v.address || '', 'text', false, 'placeholder="123 Main St, Boston, MA 02110"')
        + field('pin', 'Map pin (latitude, longitude)', Number.isFinite(+v.lat) && v.lat !== undefined ? `${v.lat}, ${v.lng}` : '', 'text', true, 'placeholder="42.3601, -71.0589"')
        + `<small class="hint">In Google Maps, right-click the restaurant and click the numbers at the top to copy them, then paste here. <a href="#" id="findPin">Search Google Maps for this address ↗</a></small>`
        + [1, 2, 3].map(n => foodBlock(n, foods[n - 1])).join('');
    } else {
      const rs = spots.filter(inRegion).sort((a, b) => a.name.localeCompare(b.name));
      const cat = v.cat || '';
      $('fields').innerHTML =
        field('name', 'Item name', v.name, 'text', true, 'placeholder="e.g. Honey glazed"')
        + ratingSelect('rating', 'Rating', v.rating, true)
        + selectField('icat', 'Food (category)', used.itemCats(), cat, { required: true, hint: 'For example Pizza or Donuts.' })
        + selectField('isub', 'Type (sub-category)', used.subs(cat), v.sub || '', { hint: 'For example NY Style Pizza. This is the "Type" filter on the Food Item Rankings page. Pick the food first to see its types.' })
        + `<div><label for="f_spot">Restaurant</label>
            <select id="f_spot" required><option value="">${rs.length ? 'Choose the restaurant…' : 'Add the restaurant first'}</option>${rs.map(s => `<option value="${esc(s.id)}" ${s.id === v.spot ? 'selected' : ''}>${esc(s.name)} — ${esc([s.city, s.state || s.country].filter(Boolean).join(', '))}</option>`).join('')}</select>
            <small class="hint">The item's location and Google Maps address come from its restaurant.</small>
            <div id="spotAddr" class="addrbox"></div></div>`;
      showSpotAddr();
    }
    $('editor').hidden = false;
    $('editor').scrollTop = 0;
  }

  function showSpotAddr() {
    const box = $('spotAddr'); if (!box) return;
    const s = spotById($('f_spot').value);
    box.innerHTML = s ? `${esc(where(s))}${s.address ? `<br>${esc(s.address)} <button type="button" class="mini" data-copyaddr="${esc(s.address)}">Copy address</button>` : ''}` : '';
  }

  // Live updates inside the editor
  $('fields').addEventListener('change', e => {
    const t = e.target;
    if (t.tagName === 'SELECT' && $(t.id + '_other')) {
      const o = $(t.id + '_other'); o.hidden = t.value !== '__other'; if (!o.hidden) o.focus();
    }
    if (t.id === 'f_country' || t.id === 'f_country_other') { setSelect('state', used.states(readSel('country')), '', 'Choose…'); setSelect('city', [], '', 'Choose…'); }
    if (t.id === 'f_state' || t.id === 'f_state_other') {
      const st = readSel('state');
      setSelect('city', used.cities(st), '', 'Choose…');
      if (L.neStates.includes(st) && readSel('country') === 'United States') $('f_ne').checked = true;
    }
    if (/^f_series\d$/.test(t.id)) { const n = t.id.slice(-1); $('f_ep' + n).disabled = !t.value; if (t.value) $('f_ep' + n).focus(); }
    if (t.id === 'f_icat' || t.id === 'f_icat_other') setSelect('isub', used.subs(readSel('icat')), '', 'Choose…');
    if (t.id === 'f_spot') showSpotAddr();
  });
  $('fields').addEventListener('click', e => {
    if (e.target.id === 'findPin') {
      e.preventDefault();
      const q = $('f_address').value || $('f_name').value;
      window.open('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q), '_blank', 'noopener');
    }
    const c = e.target.closest('[data-copyaddr]');
    if (c) { navigator.clipboard.writeText(c.dataset.copyaddr).then(() => { c.textContent = 'Copied!'; setTimeout(() => c.textContent = 'Copy address', 1500); }); }
  });

  /* ---------- saving ---------- */
  const formatters = {
    spots: () => '// Restaurant data managed by Kasey Feasts Admin.\nconst SPOTS = ' + JSON.stringify(spots, null, 2) + ';\n',
    items: () => '// Food item rankings managed by Kasey Feasts Admin.\nconst ITEMS = ' + JSON.stringify(items, null, 2) + ';\n',
  };
  async function publish(which = tab) {
    const path = FILES[which];
    const body = {
      message: `Update ${which === 'spots' ? 'restaurants' : 'food items'} via Kasey Feasts Admin`,
      content: enc(formatters[which]()),
      branch: cfg.branch
    };
    if (sha[path]) body.sha = sha[path];
    const out = await api(file(path), { method: 'PUT', body: JSON.stringify(body) });
    sha[path] = out.content.sha;
    note('Published to GitHub! Your site should update after deployment.');
  }

  function buildSpot() {
    const name = $('f_name').value.trim();
    const pin = parsePin($('f_pin').value);
    if (!pin) throw Error('Paste the map pin as "latitude, longitude" (for example 42.3601, -71.0589).');
    const country = readSel('country');
    if (!country) throw Error('Choose a country.');
    const foods = [];
    for (const n of [1, 2, 3]) {
      const cat = readSel('cat' + n);
      const rating = $('f_rating' + n).value;
      if (!cat) { if (n === 1) throw Error('Food category 1 is required.'); continue; }
      if (rating === '') throw Error(`Choose a rating for ${cat}.`);
      if (foods.some(f => f.cat === cat)) throw Error(`${cat} is listed twice. Use each food category once per restaurant.`);
      const series = $('f_series' + n).value;
      const ep = $('f_ep' + n).value;
      if (series && !ep) throw Error(`Add the episode number for ${cat} in "${seriesName(series)}".`);
      foods.push({ cat, rating: +rating, video: $('f_video' + n).value.trim(), series: series || '', ep: series && ep ? +ep : null });
    }
    return {
      id: editing === null ? slug(name) : spots[editing].id,
      name, country, ne: $('f_ne').checked, state: readSel('state'), city: readSel('city'),
      address: $('f_address').value.trim(), lat: pin.lat, lng: pin.lng, foods
    };
  }
  function buildItem() {
    const name = $('f_name').value.trim();
    const spot = $('f_spot').value;
    if (!spot) throw Error('Choose the restaurant this item is from.');
    const cat = readSel('icat'); if (!cat) throw Error('Choose a category.');
    const s = spotById(spot);
    return {
      id: editing === null ? slug(name + '-' + (s ? s.name : spot)) : items[editing].id,
      name, rating: +$('f_rating').value, cat, sub: readSel('isub'), spot
    };
  }
  $('form').addEventListener('submit', async e => {
    e.preventDefault();
    let obj;
    try {
      obj = tab === 'spots' ? buildSpot() : buildItem();
    } catch (err) { return note(err.message, true); }

    const arr = tab === 'spots' ? spots : items;
    const key = 'id';
    if (!obj[key]) return note('Please add a name or title.', true);
    if (arr.some((x, i) => i !== editing && x[key] === obj[key])) {
      return note(tab === 'spots' ? 'A restaurant with this name already exists.' : 'This item already exists for that restaurant.', true);
    }
    const old = arr.slice();
    if (editing === null) arr.unshift(obj); else arr[editing] = obj;

    $('save').disabled = true;
    try {
      await publish();
      $('editor').hidden = true;
      render();
    } catch (err) {
      arr.length = 0; arr.push(...old);
      note('Save failed: ' + err.message, true);
    } finally {
      $('save').disabled = false;
    }
  });

  $('items').addEventListener('click', async e => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.edit !== undefined) openEditor(Number(b.dataset.edit));
    if (b.dataset.delete !== undefined) {
      const i = Number(b.dataset.delete);
      const arr = tab === 'spots' ? spots : items;
      const v = arr[i];
      if (tab === 'spots') {
        const linked = items.filter(it => it.spot === v.id).length;
        if (linked) return note(`${v.name} has ${linked} food item${linked === 1 ? '' : 's'} linked to it. Delete or move those items first.`, true);
      }
      if (!confirm(`Delete "${v.name}"?`)) return;
      const old = arr.slice();
      arr.splice(i, 1);
      try { await publish(); render(); }
      catch (err) { arr.length = 0; arr.push(...old); note(err.message, true); }
    }
  });

  document.querySelectorAll('[data-tab]').forEach(b => {
    b.onclick = () => {
      tab = b.dataset.tab;
      document.querySelectorAll('[data-tab]').forEach(x => x.classList.toggle('active', x === b));
      resetFilters();
      $('editor').hidden = true;
      render();
    };
  });

  $('search').oninput = render;
  $('new').onclick = () => {
    if (tab === 'items' && !spots.some(inRegion)) return note('Add a restaurant first. Every food item belongs to a restaurant.', true);
    openEditor();
  };
  $('close').onclick = $('cancel').onclick = () => $('editor').hidden = true;
  $('refresh').onclick = load;

  $('logout').onclick = () => {
    sessionStorage.removeItem('kf_token');
    sessionStorage.removeItem('kf_region');
    token = null;
    location.reload();
  };

  // Generate a secure OAuth state.
  // Uses getRandomValues instead of randomUUID.

  function generateOAuthState() {
    const bytes = new Uint8Array(16);

    crypto.getRandomValues(bytes);

    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;

    const hex = Array.from(
      bytes,
      b => b.toString(16).padStart(2, '0')
    );

    return [
      hex.slice(0, 4).join(''),
      hex.slice(4, 6).join(''),
      hex.slice(6, 8).join(''),
      hex.slice(8, 10).join(''),
      hex.slice(10, 16).join('')
    ].join('-');
  }

  // GitHub login button.

  $('signin').onclick = () => {
    if (!cfg || !cfg.oauthWorker) {
      alert(
        'GitHub login has not been configured yet. See ADMIN-SETUP.md.'
      );
      return;
    }

    try {
      const state = generateOAuthState();

      sessionStorage.setItem(
        'kf_oauth_state',
        state
      );

      const loginURL =
        cfg.oauthWorker.replace(/\/$/, '') +
        '/login?state=' +
        encodeURIComponent(state);

      console.log('Redirecting to GitHub login');

      window.location.assign(loginURL);

    } catch (error) {
      console.error('GitHub login error:', error);

      alert(
        'Unable to start GitHub login: ' +
        error.message
      );
    }
  };

  // Handle GitHub OAuth callback.

  const params = new URLSearchParams(
    location.hash.slice(1)
  );

  if (params.has('token')) {
    const returnedState = params.get('state');
    const savedState = sessionStorage.getItem(
      'kf_oauth_state'
    );

    if (
      !savedState ||
      returnedState !== savedState
    ) {
      alert('Login security check failed.');

      history.replaceState(
        null,
        '',
        location.pathname
      );

    } else {
      token = params.get('token');

      sessionStorage.setItem(
        'kf_token',
        token
      );

      sessionStorage.removeItem(
        'kf_oauth_state'
      );

      // fresh sign-in: start on the "I'M HERE FOR" page
      sessionStorage.removeItem('kf_region');
      region = null;

      history.replaceState(
        null,
        '',
        location.pathname
      );
    }
  }

  if (token) {
    load();
  }

})();
