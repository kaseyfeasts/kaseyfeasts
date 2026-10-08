
(() => {
  'use strict';

  const cfg = window.KASEY_ADMIN;
  const $ = id => document.getElementById(id);

  let token = sessionStorage.getItem('kf_token');
  let tab = 'spots';
  let spots = [];
  let posts = [];
  let editing = null;
  let sha = {};

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));

  const slug = s => String(s)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const enc = s => btoa(
    Array.from(
      new TextEncoder().encode(s),
      b => String.fromCharCode(b)
    ).join('')
  );

  const dec = s => new TextDecoder().decode(
    Uint8Array.from(
      atob(s.replace(/\s/g, '')),
      c => c.charCodeAt(0)
    )
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
        throw Error(j.message || 'GitHub request failed');
      }

      return j;
    });
  }

  const file = p =>
    `/repos/${encodeURIComponent(cfg.repoOwner)}/${encodeURIComponent(cfg.repoName)}/contents/${p}`;

  async function load() {
    try {
      note('Loading content...');

      const [user, a, b] = await Promise.all([
        api('/user'),
        api(file('data/content.js') + '?ref=' + cfg.branch),
        api(file('data/posts.js') + '?ref=' + cfg.branch)
      ]);

      if (
        user.login.toLowerCase() !==
        cfg.allowedLogin.toLowerCase()
      ) {
        throw Error(
          'This GitHub account is not authorized. Sign in as ' +
          cfg.allowedLogin
        );
      }

      $('who').textContent = '@' + user.login;

      sha = {
        'data/content.js': a.sha,
        'data/posts.js': b.sha
      };

      const s = dec(a.content);
      const p = dec(b.content);

      spots = Function(
        '"use strict";' + s + ';return SPOTS'
      )();

      posts = Function(
        '"use strict";' + p + ';return POSTS'
      )();

      if (!Array.isArray(spots) || !Array.isArray(posts)) {
        throw Error('Unexpected content format');
      }

      $('login').hidden = true;
      $('dashboard').hidden = false;
      $('logout').hidden = false;

      render();
      note('Connected to GitHub.');

    } catch (e) {
      note(e.message, true);

      if (!$('dashboard').hidden) return;

      alert('Unable to connect: ' + e.message);
    }
  }

  function render() {
    const arr = tab === 'spots' ? spots : posts;

    $('spotcount').textContent = spots.length;
    $('postcount').textContent = posts.length;

    $('new').textContent = tab === 'spots'
      ? '+ Add restaurant'
      : '+ Add blog post';

    const q = $('search').value.toLowerCase();

    const items = arr
      .map((v, i) => ({ ...v, _i: i }))
      .filter(v =>
        JSON.stringify(v).toLowerCase().includes(q)
      );

    $('items').innerHTML = items.length
      ? items.map(v => `
        <div class="item">
          <div>
            <strong>
              ${esc(tab === 'spots' ? v.name : v.title)}
            </strong>
            <small>
              ${esc(
                tab === 'spots'
                  ? `${v.town || ''}, ${v.st || ''} · ${v.cat || ''}${v.hit ? ' · ★ Hit List' : ''}`
                  : `${v.date || ''} · ${v.slug || ''}`
              )}
            </small>
          </div>
          <div>
            <button data-edit="${v._i}">Edit</button>
            <button class="delete" data-delete="${v._i}">
              Delete
            </button>
          </div>
        </div>
      `).join('')
      : '<div class="empty">Nothing here yet. Add your first ' +
        (tab === 'spots' ? 'restaurant' : 'blog post') +
        '!</div>';
  }

  function field(
    name,
    label,
    value = '',
    type = 'text',
    required = false
  ) {
    return `
      <div>
        <label for="f_${name}">${label}</label>
        ${
          type === 'textarea'
            ? `<textarea id="f_${name}" name="${name}" ${required ? 'required' : ''}>${esc(value)}</textarea>`
            : `<input id="f_${name}" name="${name}" type="${type}" value="${esc(value)}" ${required ? 'required' : ''}>`
        }
      </div>
    `;
  }

  function openEditor(i = null) {
    editing = i;

    const v = i === null
      ? {}
      : (tab === 'spots' ? spots : posts)[i];

    $('editorTitle').textContent =
      (i === null ? 'Add ' : 'Edit ') +
      (tab === 'spots' ? 'restaurant' : 'blog post');

    $('fields').innerHTML = tab === 'spots'
      ? field(
          'name',
          'Restaurant name',
          v.name,
          'text',
          true
        )
        + `<div class="twocol">
            ${field('town', 'Town', v.town, 'text', true)}
            ${field('st', 'State (MA, NH, ME, VT, RI, CT)', v.st, 'text', true)}
          </div>`
        + `<div class="twocol">
            ${field('lat', 'Latitude', v.lat, 'number', true)}
            ${field('lng', 'Longitude', v.lng, 'number', true)}
          </div>`
        + `<label for="f_cat">Category</label>
          <select name="cat" id="f_cat">
            ${[
              'Donuts',
              'Sandwiches',
              'Pizza',
              'Bakery',
              'Seafood'
            ].map(c =>
              `<option ${v.cat === c ? 'selected' : ''}>${c}</option>`
            ).join('')}
          </select>`
        + field(
            'video',
            'Instagram or TikTok review URL',
            v.video || '',
            'url'
          )
        + field(
            'verdict',
            'Your review / verdict',
            v.verdict || '',
            'textarea'
          )
        + field(
            'order',
            'What to order (one item per line)',
            (v.order || []).join('\n'),
            'textarea'
          )
        + field(
            'tags',
            'Tags (one per line)',
            (v.tags || []).join('\n'),
            'textarea'
          )
        + `<div class="checkrow">
            <input
              type="checkbox"
              name="hit"
              id="f_hit"
              ${v.hit ? 'checked' : ''}
            >
            <label for="f_hit">Feature on Hit List</label>
          </div>`
      : field(
          'title',
          'Post title',
          v.title,
          'text',
          true
        )
        + field(
            'date',
            'Publication date',
            v.date || new Date().toISOString().slice(0, 10),
            'date',
            true
          )
        + field(
            'excerpt',
            'Short description',
            v.excerpt,
            'textarea',
            true
          )
        + field(
            'body',
            'Article content (Markdown supported)',
            v.body,
            'textarea',
            true
          )
        + `<div style="margin-top:10px">
            <button type="button" id="markdownHelpToggle" aria-expanded="false"
              aria-controls="markdownHelpPanel"
              style="cursor:pointer;border:1px solid #ddd;border-radius:8px;padding:9px 12px;background:white;font:inherit">
              ⓘ Formatting help
            </button>
            <div id="markdownHelpPanel" hidden
              style="margin-top:10px;padding:16px;border:1px solid #e4e4e7;border-radius:10px;background:#fafafa">
              <strong>How to format your blog post</strong>
              <p>Type these symbols in the article box:</p>
              <pre style="white-space:pre-wrap;overflow-wrap:anywhere;font-size:13px;line-height:1.8"># Main heading
## Section heading
**Bold text**
*Italic text*
- First bullet
- Second bullet
[Link text](https://example.com)</pre>
              <p>Leave a blank line between paragraphs. Formatting depends on what the public blog supports.</p>
            </div>
          </div>`;

    $('editor').hidden = false;

    const helpToggle = $('markdownHelpToggle');
    const helpPanel = $('markdownHelpPanel');
    if (helpToggle && helpPanel) {
      helpToggle.addEventListener('click', () => {
        helpPanel.hidden = !helpPanel.hidden;
        helpToggle.setAttribute('aria-expanded', String(!helpPanel.hidden));
      });
    }
  }

  function formatSpots() {
    return '// Restaurant data managed by Kasey Feasts Admin.\n'
      + 'const IG = "https://www.instagram.com/kaseyfeasts/";\n'
      + 'const CATS = {Donuts:"var(--frosting)",Sandwiches:"var(--mustard)",Pizza:"var(--sauce)",Bakery:"var(--basil)",Seafood:"var(--other)"};\n'
      + 'const STATES = {MA:"Massachusetts",NH:"New Hampshire",ME:"Maine",VT:"Vermont",RI:"Rhode Island",CT:"Connecticut"};\n'
      + 'const SPOTS = ' +
        JSON.stringify(spots, null, 2) +
        ';\n';
  }

  function formatPosts() {
    return '// Blog posts managed by Kasey Feasts Admin.\n'
      + 'const POSTS = ' +
        JSON.stringify(posts, null, 2) +
        ';\n';
  }

  async function publish() {
    const path = tab === 'spots'
      ? 'data/content.js'
      : 'data/posts.js';

    const content = tab === 'spots'
      ? formatSpots()
      : formatPosts();

    const out = await api(file(path), {
      method: 'PUT',
      body: JSON.stringify({
        message: 'Update ' +
          (tab === 'spots' ? 'restaurants' : 'blog posts') +
          ' via Kasey Feasts Admin',
        content: enc(content),
        sha: sha[path],
        branch: cfg.branch
      })
    });

    sha[path] = out.content.sha;

    note(
      'Published to GitHub! Your site should update after deployment.'
    );
  }

  function entries(s) {
    return s
      .split('\n')
      .map(x => x.trim())
      .filter(Boolean);
  }

  $('form').addEventListener('submit', async e => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const v = Object.fromEntries(fd.entries());

    let obj;

    if (tab === 'spots') {
      if (
        !['MA', 'NH', 'ME', 'VT', 'RI', 'CT']
          .includes(v.st.toUpperCase())
      ) {
        return note(
          'Use a supported state abbreviation.',
          true
        );
      }

      obj = {
        id: editing === null
          ? slug(v.name)
          : spots[editing].id,
        name: v.name.trim(),
        town: v.town.trim(),
        st: v.st.toUpperCase(),
        lat: Number(v.lat),
        lng: Number(v.lng),
        cat: v.cat,
        video: v.video || '',
        hit: fd.has('hit'),
        verdict: v.verdict || '',
        order: entries(v.order || ''),
        tags: entries(v.tags || '')
      };

      if (
        !Number.isFinite(obj.lat) ||
        !Number.isFinite(obj.lng) ||
        Math.abs(obj.lat) > 90 ||
        Math.abs(obj.lng) > 180
      ) {
        return note(
          'Please enter valid coordinates.',
          true
        );
      }

      if (
        spots.some(
          (x, i) => i !== editing && x.id === obj.id
        )
      ) {
        return note(
          'A restaurant with this ID already exists.',
          true
        );
      }

    } else {
      obj = {
        slug: editing === null
          ? slug(v.title)
          : posts[editing].slug,
        date: v.date,
        title: v.title.trim(),
        excerpt: v.excerpt.trim(),
        body: v.body
      };

      if (
        posts.some(
          (x, i) => i !== editing && x.slug === obj.slug
        )
      ) {
        return note(
          'A post with this URL slug already exists.',
          true
        );
      }
    }

    const arr = tab === 'spots' ? spots : posts;
    const old = arr.slice();

    if (editing === null) {
      arr.unshift(obj);
    } else {
      arr[editing] = obj;
    }

    $('save').disabled = true;

    try {
      await publish();
      $('editor').hidden = true;
      render();

    } catch (e) {
      if (tab === 'spots') {
        spots = old;
      } else {
        posts = old;
      }

      note('Save failed: ' + e.message, true);

    } finally {
      $('save').disabled = false;
    }
  });

  $('items').addEventListener('click', async e => {
    const b = e.target.closest('button');

    if (!b) return;

    if (b.dataset.edit !== undefined) {
      openEditor(Number(b.dataset.edit));
    }

    if (b.dataset.delete !== undefined) {
      const i = Number(b.dataset.delete);
      const arr = tab === 'spots' ? spots : posts;

      if (
        !confirm(
          'Permanently delete ' +
          (arr[i].name || arr[i].title) +
          '?'
        )
      ) {
        return;
      }

      const old = arr.slice();
      arr.splice(i, 1);

      try {
        await publish();
        render();

      } catch (err) {
        if (tab === 'spots') {
          spots = old;
        } else {
          posts = old;
        }

        note(err.message, true);
      }
    }
  });

  document.querySelectorAll('[data-tab]').forEach(b => {
    b.onclick = () => {
      tab = b.dataset.tab;

      document.querySelectorAll('[data-tab]').forEach(x => {
        x.classList.toggle('active', x === b);
      });

      $('search').value = '';
      render();
    };
  });

  $('search').oninput = render;

  $('new').onclick = () => openEditor();

  $('close').onclick =
    $('cancel').onclick =
      () => $('editor').hidden = true;

  $('refresh').onclick = load;

  $('logout').onclick = () => {
    sessionStorage.removeItem('kf_token');
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
