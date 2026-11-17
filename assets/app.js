/* ===================== FOOD ICONS ===================== */
const ICON = {
 Donuts:`<svg viewBox="0 0 100 100"><circle cx="50" cy="52" r="40" fill="#D9964C"/><path d="M14 50c4-20 20-32 36-32s34 10 37 30c1 8-5 6-8 10-4 5-2 10-9 10-6 0-6-6-12-5-7 1-8 8-15 6-6-2-3-8-9-10-6-2-11 5-16 1-4-3-4-6-4-10z" fill="#E8679A"/><circle cx="50" cy="50" r="12" fill="var(--ph,#fff)"/><g stroke-width="4" stroke-linecap="round"><path d="M30 34l5 3" stroke="#fff"/><path d="M62 30l5-2" stroke="#E9A923"/><path d="M72 46l3 5" stroke="#5BC0EB"/><path d="M27 52l1 5" stroke="#E9A923"/><path d="M45 28l-4 3" stroke="#5BC0EB"/><path d="M64 62l5 2" stroke="#fff"/></g></svg>`,
 Pizza:`<svg viewBox="0 0 100 100"><path d="M50 92L14 22c22-12 50-12 72 0z" fill="#F5C04A"/><path d="M14 22c22-12 50-12 72 0l-4 8c-20-10-44-10-64 0z" fill="#C9822F"/><circle cx="44" cy="40" r="7" fill="#D93A2B"/><circle cx="60" cy="52" r="6" fill="#D93A2B"/><circle cx="48" cy="66" r="5" fill="#D93A2B"/><path d="M34 40c0 10-2 14 0 18" stroke="#E9A923" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
 Sandwiches:`<svg viewBox="0 0 100 100"><path d="M10 46c0-14 18-24 40-24s40 10 40 24z" fill="#D9964C"/><path d="M8 50h84l-4 6H12z" fill="#7CB342"/><path d="M10 56h80v7H10z" fill="#D93A2B"/><path d="M10 63h80v6H10z" fill="#F5C04A"/><path d="M12 69h76c0 8-10 12-38 12S12 77 12 69z" fill="#D9964C"/><g fill="#F7E2B5"><ellipse cx="34" cy="32" rx="2.5" ry="1.4"/><ellipse cx="52" cy="28" rx="2.5" ry="1.4"/><ellipse cx="66" cy="34" rx="2.5" ry="1.4"/></g></svg>`,
 Bakery:`<svg viewBox="0 0 100 100"><path d="M10 64c6-20 22-34 40-34s34 14 40 34c-8 8-20 10-40 10s-32-2-40-10z" fill="#D9964C"/><path d="M30 40c4 8 4 22 0 32M50 32v42M70 40c-4 8-4 22 0 32" stroke="#A86A2B" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
 Seafood:`<svg viewBox="0 0 100 100"><path d="M12 58c0-10 16-16 38-16s38 6 38 16c0 10-16 18-38 18S12 68 12 58z" fill="#E7C27A"/><path d="M18 52c4-8 16-12 32-12s28 4 32 12c-8 4-20 6-32 6s-24-2-32-6z" fill="#E1573E"/><circle cx="34" cy="48" r="4" fill="#F28B6D"/><circle cx="52" cy="46" r="5" fill="#F28B6D"/><circle cx="68" cy="49" r="4" fill="#F28B6D"/><path d="M30 44c4-2 6 0 8-2" stroke="#7CB342" stroke-width="3" fill="none"/></svg>`
};
const BG = {Donuts:"#FBD7E5",Pizza:"#F9D4CE",Sandwiches:"#FBEBC3",Bakery:"#D7EBDD",Seafood:"#D6E3EC"};
const esc = s => String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $ = s => document.querySelector(s);
const price = p => "$".repeat(p);
const art = (cat,ph) => ICON[cat].replace('var(--ph,#fff)',ph||BG[cat]);

/* ===================== AVATAR ===================== */
const avatarSVG = (id) => `
<svg ${id?`id="${id}"`:""} viewBox="0 0 400 440" role="img" aria-label="Cartoon Kasey holding a slice of pizza and a donut">
 <defs>
  <radialGradient id="${id}-skin" cx="36%" cy="26%" r="77%">
   <stop stop-color="#ffe5bf"/><stop offset=".57" stop-color="#eeb18b"/><stop offset="1" stop-color="#b96e56"/>
  </radialGradient>
  <radialGradient id="${id}-hood" cx="32%" cy="14%" r="87%">
   <stop stop-color="#e3e9ef"/><stop offset=".5" stop-color="#9caabd"/><stop offset="1" stop-color="#505d73"/>
  </radialGradient>
  <radialGradient id="${id}-cap" cx="33%" cy="23%" r="80%">
   <stop stop-color="#b8cda1"/><stop offset=".5" stop-color="#789275"/><stop offset="1" stop-color="#354e46"/>
  </radialGradient>
  <radialGradient id="${id}-icing" cx="34%" cy="15%" r="86%">
   <stop stop-color="#ffc0dc"/><stop offset=".53" stop-color="#f276ac"/><stop offset="1" stop-color="#bd3b78"/>
  </radialGradient>
  <radialGradient id="${id}-dough" cx="34%" cy="23%" r="81%">
   <stop stop-color="#ffda8b"/><stop offset=".62" stop-color="#db9346"/><stop offset="1" stop-color="#985020"/>
  </radialGradient>
  <linearGradient id="${id}-cheese" x2=".8" y2="1">
   <stop stop-color="#fff0a2"/><stop offset="1" stop-color="#ed9d31"/>
  </linearGradient>
  <radialGradient id="${id}-iris" cx="38%" cy="34%" r="65%">
   <stop stop-color="#a66d3b"/><stop offset="1" stop-color="#342015"/>
  </radialGradient>
 </defs>
 <g class="bob">
  <!-- body / hoodie -->
  <path d="M106 440L98 336C98 316 108 304 128 300L170 290H230L272 300C292 304 302 316 302 336L294 440z" fill="url(#${id}-hood)"/>
  <path d="M150 292c10 26 30 40 50 40s40-14 50-40l-16-6c-6 18-20 28-34 28s-28-10-34-28z" fill="#8A8E93"/>
  <path d="M190 312v52M210 312v52" stroke="#E6E6E6" stroke-width="4" stroke-linecap="round"/>
  <circle cx="190" cy="366" r="4" fill="#E6E6E6"/><circle cx="210" cy="366" r="4" fill="#E6E6E6"/>
  <!-- neck -->
  <path d="M178 250h44v40c0 10-10 16-22 16s-22-6-22-16z" fill="url(#${id}-skin)"/>
  <!-- left arm with pizza -->
  <g class="armL">
   <path d="M126 314Q60 380 64 322L70 272" stroke="url(#${id}-hood)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M58 274l30-4" stroke="#8A8E93" stroke-width="6" stroke-linecap="round"/>
   <g transform="rotate(-14 70 200)">
    <path d="M70 258L22 140c30-16 66-16 96 0z" fill="url(#${id}-cheese)"/>
    <path d="M22 140c30-16 66-16 96 0l-6 13c-26-12-58-12-84 0z" fill="url(#${id}-dough)"/>
    <circle cx="62" cy="176" r="9" fill="#D93A2B"/><circle cx="84" cy="196" r="8" fill="#D93A2B"/><circle cx="64" cy="216" r="6" fill="#D93A2B"/>
    <path d="M44 168c-2 14 2 22 0 30" stroke="url(#${id}-cheese)" stroke-width="6" stroke-linecap="round"/>
   </g>
   <ellipse cx="70" cy="252" rx="22" ry="20" fill="url(#${id}-skin)"/>
   <path d="M54 246c6-6 26-6 32 0" stroke="#B57A52" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <!-- right arm with donut -->
  <g class="armR">
   <path d="M274 314Q340 380 336 322L330 272" stroke="url(#${id}-hood)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M342 274l-30-4" stroke="#8A8E93" stroke-width="6" stroke-linecap="round"/>
   <circle cx="334" cy="196" r="48" fill="url(#${id}-dough)"/>
   <path d="M288 192c4-26 24-40 46-40s42 12 46 36c1 10-6 8-10 13-5 6-3 12-11 12-7 0-7-7-14-6-9 1-10 10-19 8-7-2-4-10-11-12-7-2-13 6-19 1-5-4-8-6-8-12z" fill="url(#${id}-icing)"/>
   <circle cx="334" cy="192" r="13" fill="#592a24"/><path d="M298 182q10-17 26-18M350 217q14-4 20-15" fill="none" stroke="#fff0f7" stroke-width="3" opacity=".5" stroke-linecap="round"/>
   <g stroke-width="5" stroke-linecap="round"><path d="M306 172l6 3" stroke="#fff"/><path d="M346 164l6-2" stroke="#E9A923"/><path d="M360 182l3 6" stroke="#5BC0EB"/><path d="M302 196l1 6" stroke="#E9A923"/><path d="M326 162l-5 3" stroke="#5BC0EB"/><path d="M352 206l6 2" stroke="#fff"/></g>
   <ellipse cx="330" cy="252" rx="22" ry="20" fill="url(#${id}-skin)"/>
   <path d="M314 246c6-6 26-6 32 0" stroke="#B57A52" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <!-- head -->
  <g transform="translate(-34 -39) scale(1.17 1.15)">
  <ellipse cx="133" cy="190" rx="13" ry="21" fill="url(#${id}-skin)"/><path d="M130 180c5 4 6 14 2 20" stroke="#B9805C" stroke-width="3" fill="none" stroke-linecap="round"/>
  <ellipse cx="267" cy="190" rx="13" ry="21" fill="url(#${id}-skin)"/><path d="M270 180c-5 4-6 14-2 20" stroke="#B9805C" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M138 150c0-56 124-56 124 0v46c0 44-26 78-62 80-36-2-62-36-62-80z" fill="url(#${id}-skin)"/>
  <!-- smile cheeks -->
  <ellipse cx="160" cy="203" rx="15" ry="9" fill="#E8907A" opacity=".35"/><ellipse cx="240" cy="203" rx="15" ry="9" fill="#E8907A" opacity=".35"/>
  <!-- beard: full, trimmed, sharp cheek line -->
  <path d="M138 194c0 46 26 80 62 82 36-2 62-36 62-82h-7c0 28-10 44-24 52-8 5-16 12-31 12s-23-7-31-12c-14-8-24-24-24-52z" fill="#3A2E26" opacity=".9"/><path d="M186 258q14 6 28 0q-4 8-14 8t-14-8z" fill="#3A2E26" opacity=".9"/>
  <!-- mustache -->
  <path d="M172 228c8-9 48-9 56 0-10-2-19-2-28-1-9-1-18-1-28 1z" fill="#3A2E26" stroke="#3A2E26" stroke-width="2" stroke-linejoin="round"/>
  <!-- big grin -->
  <path d="M166 230q34 8 68 0q-8 30-34 31q-26-1-34-31z" fill="#6E1F1A"/>
  <path d="M169 231q31 7 62 0l-3 11q-28 7-56 0z" fill="#FFFFFF"/>
  <path d="M200 237v8M186 236v8M214 236v8M174 234v7M226 234v7" stroke="#E5DED6" stroke-width="1.5"/>
  <path d="M182 254q18 7 36 0" stroke="#C67B6A" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- nose -->
  <path d="M202 170c-1 16-2 28-8 36 5 6 14 6 20 0" stroke="#B9805C" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- smiling eyes -->
  <g class="eyes">
   <ellipse cx="174" cy="178" rx="15" ry="12" fill="#fff"/><ellipse cx="226" cy="178" rx="15" ry="12" fill="#fff"/>
   <circle cx="175" cy="178" r="8.5" fill="url(#${id}-iris)"/><circle cx="227" cy="178" r="8.5" fill="url(#${id}-iris)"/><circle cx="175" cy="179" r="4.5" fill="#271812"/><circle cx="227" cy="179" r="4.5" fill="#271812"/><circle cx="177" cy="176" r="2" fill="#fff"/><circle cx="229" cy="176" r="2" fill="#fff"/>
   <path d="M159 176q15-20 30 0M211 176q15-20 30 0" stroke="#2B211B" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
  <path d="M164 189q10 4 20 0M216 189q10 4 20 0" stroke="#C88E68" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <path d="M155 180l-7-3M155 184l-7 1M245 180l7-3M245 184l7 1" stroke="#C88E68" stroke-width="2" stroke-linecap="round"/>
  <!-- strong straight brows -->
  <path d="M152 162q18-8 38-3" stroke="#221A15" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M210 159q20-5 38 3" stroke="#221A15" stroke-width="8" fill="none" stroke-linecap="round"/>
  <!-- backwards trucker cap -->
  <path d="M137 176v-30c0-4 2-6 5-6v40z M263 176v-30c0-4-2-6-5-6v40z" fill="#2B211B"/>
  <path d="M130 166C122 108 150 58 200 56C250 56 278 108 270 166C252 151 228 144 200 144C172 144 148 151 130 166z" fill="url(#${id}-cap)"/>
  <path d="M200 58C186 80 180 112 182 144M200 58C214 80 220 112 218 144M200 58C168 72 146 104 140 156M200 58C232 72 254 104 260 156" stroke="#5B705D" stroke-width="2.5" fill="none"/>
  <path d="M138 150C150 140 172 134 200 134C228 134 250 140 262 150" stroke="#86A088" stroke-width="2" fill="none" opacity=".6"/>
  <path d="M162 146C162 122 178 106 200 106C222 106 238 122 238 146C226 143 214 142 200 142C186 142 174 143 162 146z" fill="#2B211B"/>
  <path d="M176 118c8-6 18-8 24-8s16 2 24 8" stroke="#4E4036" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <rect x="152" y="124" width="96" height="14" rx="7" fill="#7E977F" stroke="#5B705D" stroke-width="2"/>
  <rect x="196" y="122" width="40" height="18" rx="6" fill="#86A088" stroke="#5B705D" stroke-width="2"/>
  <g fill="#4C5F4E"><circle cx="162" cy="131" r="2"/><circle cx="171" cy="131" r="2"/><circle cx="180" cy="131" r="2"/><circle cx="189" cy="131" r="2"/><circle cx="242" cy="131" r="2"/></g>
  <g fill="none" stroke="#5B705D" stroke-width="1.8"><circle cx="205" cy="131" r="2.6"/><circle cx="214" cy="131" r="2.6"/><circle cx="223" cy="131" r="2.6"/></g>
  <circle cx="200" cy="58" r="6" fill="#5B705D"/>
  </g>
 </g>
</svg>`;

document.getElementById("avStage").innerHTML = avatarSVG("av");
document.getElementById("aboutAv").innerHTML = avatarSVG("av2");
document.getElementById("landAv").innerHTML = avatarSVG("av3");


function hearts(){
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const st = $("#avStage");
  ["♥","XO","♥","♥","XO"].forEach((t,i)=>{
    const h=document.createElement("span");h.className="heart";h.textContent=t;
    h.style.left=(38+Math.random()*24)+"%";h.style.top="40%";
    h.style.setProperty("--dx",(Math.random()*120-60)+"px");
    h.style.animationDelay=(i*0.22)+"s";
    if(t==="XO"){h.style.fontFamily="var(--display)";h.style.fontSize="16px";h.style.color="#fff"}
    st.appendChild(h);setTimeout(()=>h.remove(),4000);
  });
}
$("#avStage").addEventListener("click",hearts);
setTimeout(hearts,700);

/* ===================== DATA MODEL ===================== */
// Restaurants: {id,name,country,ne,state,city,address,lat,lng,foods:[{cat,rating,video,series,ep}]}
// Items:       {id,name,rating,cat,sub,spot}
const CAT_COLORS = {Donuts:"var(--frosting)",Sandwiches:"var(--mustard)",Pizza:"var(--sauce)",Bakery:"var(--basil)",Seafood:"var(--other)"};
const PALETTE = ["#6C8EBF","#9B6BB3","#3E8E8E","#C9772E","#5E7D3A","#B5476B"];
const catColor = c => CAT_COLORS[c] || PALETTE[Math.abs([...String(c)].reduce((a,ch)=>a*31+ch.charCodeAt(0),7))%PALETTE.length];
const ABBR = {MA:"Massachusetts",NH:"New Hampshire",ME:"Maine",VT:"Vermont",RI:"Rhode Island",CT:"Connecticut"};
function normSpot(s){ // also accepts the older one-category format
  if(Array.isArray(s.foods)) return s;
  const state=ABBR[s.st]||s.st||"";
  return {...s, country:s.country||(ABBR[s.st]?"United States":""), ne:s.ne??!!ABBR[s.st], state, city:s.city||s.town||"",
    foods:s.cat?[{cat:s.cat,rating:s.rating,video:s.video||"",series:false,ep:null}]:[]};
}
const PLACES = (typeof SPOTS!=="undefined"?SPOTS:[]).map(normSpot).filter(s=>s&&s.id&&Number.isFinite(+s.lat)&&Number.isFinite(+s.lng));
PLACES.forEach(s=>{s.lat=+s.lat;s.lng=+s.lng;s.foods=(s.foods||[]).filter(f=>f&&f.cat)});
const PLACE_BY_ID = Object.fromEntries(PLACES.map(s=>[s.id,s]));
const ALL_ITEMS = (typeof ITEMS!=="undefined"?ITEMS:[]).filter(i=>i&&PLACE_BY_ID[i.spot]);
const where = s => [s.city,s.state,s.country==="United States"?"":s.country].filter(Boolean).join(", ");
const stateLabel = s => s.state||s.country||"";

/* ---------- stamps (the number is never shown) ---------- */
function stampOf(r){
  r=+r; if(!Number.isFinite(r)) return null;
  for(const [min,label] of RATING_STAMPS) if(r>=min) return label;
  return null;
}
const stampClass = l => "st-"+String(l).toLowerCase().replace(/[^a-z]+/g,"");
const stampHTML = (r,small) => { const l=stampOf(r); return l?`<span class="stamp ${stampClass(l)}${small?" sm":""}">${l==="All-Star"?"★ ":""}${esc(l)}${l==="All-Star"?" ★":""}</span>`:""; };
const foodRating = (s,cat) => { const f=s.foods.find(f=>f.cat===cat); return f?+f.rating:NaN; };
const bestFood = s => [...s.foods].sort((a,b)=>(+b.rating||0)-(+a.rating||0))[0];
const byRating = get => (a,b)=>((get(b)||0)-(get(a)||0))||a.name.localeCompare(b.name);
const badge = cat => `<span class="badge" style="background:${BG[cat]||"var(--soft)"}">${ICON[cat]?art(cat):`<b style="font-family:var(--display);font-size:15px">${esc(String(cat||"?").slice(0,1))}</b>`}</span>`;
const vlink = s => (s.foods.find(f=>f.video)||{}).video||IG;
const slugify = t => String(t).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

/* ===================== REGIONS & CLEAN PATHS ===================== */
let region=null;
const R=()=>REGIONS[region]||REGIONS.newengland;
function placeInRegion(s,r=region){
  if(r==="newengland") return !!s.ne;
  if(r==="hongkong") return s.country==="Hong Kong";
  return true; // global = everything
}
const inRegion = s => placeInRegion(s);
const rSpots=()=>PLACES.filter(inRegion);
const rItems=()=>ALL_ITEMS.filter(i=>inRegion(PLACE_BY_ID[i.spot]));
const isEmpty=()=>rSpots().length===0;
const P=(p="/")=>`/${region||"newengland"}${p}`;
function go(url,replace){ history[replace?"replaceState":"pushState"](null,"",url); route(); }
async function copyText(text,btn){
  try{ await navigator.clipboard.writeText(text); }catch{ const t=document.createElement("textarea"); t.value=text; document.body.appendChild(t); t.select(); try{document.execCommand("copy")}catch{} t.remove(); }
  if(btn){ const o=btn.textContent; btn.textContent="Copied!"; setTimeout(()=>btn.textContent=o,1800); }
}
document.addEventListener("click",e=>{ const b=e.target.closest("[data-copy]"); if(b){ e.preventDefault(); copyText(b.dataset.copy,b); } });
const addrButtons = s => s.address?`<button class="btn ghost sm" type="button" data-copy="${esc(s.address)}">Copy address</button><a class="btn ghost sm" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.address)}" target="_blank" rel="noopener">Open in Maps</a>`:"";

/* ===================== MAP (detailed street map, with a simple fallback) ===================== */
// The detailed map uses MapLibre + OpenFreeMap tiles (MAP_STYLE in data/regions.js).
// If that can't load (offline, blocked, or MAP_STYLE is ""), the simple built-in map is used.
const NS="http://www.w3.org/2000/svg";
const svg = $("#map"), box = $("#mapbox");
const projection = d3.geoMercator(); // flat map
const path = d3.geoPath(projection);
const mk=(cls)=>{const e=document.createElementNS(NS,"path");e.setAttribute("class",cls);return e};
const ocean=mk("globe-ocean"), land=mk("globe-land"), dMask=mk("globe-mask"), dLand=mk("globe-detail"), dCoast=mk("globe-coast"), graticule=mk("globe-grid");
const gMk = document.createElementNS(NS,"g");
const sphere = {type:"Sphere"};
const grid = d3.geoGraticule10();
svg.append(ocean,land,dMask,dLand,dCoast,graticule,gMk);
const HAS_DETAIL = typeof DETAIL!=="undefined";

let engine="simple";       // "simple" or "detailed"
let gl=null, glMarkers={};
let mapCat = null;         // null = all food
const mkEls = {};
PLACES.forEach(s=>{
  const c=document.createElementNS(NS,"circle");
  c.setAttribute("class","mk");
  c.setAttribute("tabindex","0");c.setAttribute("role","button");c.setAttribute("aria-label",`${s.name}, ${where(s)}`);
  c.addEventListener("click",e=>{if(!moved){openPop(s);}});
  c.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openPop(s)}});
  c.addEventListener("pointerenter",()=>hl(s.id,true));c.addEventListener("pointerleave",()=>hl(s.id,false));
  gMk.appendChild(c);mkEls[s.id]=c;
});
let mapScore = ""; // "" = all scores
const foodsFor = s => s.foods.filter(f=>!mapCat||f.cat===mapCat);
const showsCat = s => foodsFor(s).length>0 && (!mapScore || foodsFor(s).some(f=>stampOf(f.rating)===mapScore));
const markerColor = s => catColor(mapCat||(s.foods[0]||{}).cat);

let longitude=-38, latitude=22, zoom=1, popSpot=null, raf=0;
const clampZoom = value => Math.max(0.4, Math.min(2000, value));
function visible(s){
  if(!inRegion(s)) return false;
  return s.x>=0 && s.x<=box.clientWidth && s.y>=0 && s.y<=box.clientHeight;
}
function draw(){
  const {clientWidth:w,clientHeight:h}=box;
  if(!w||!h)return;
  if(engine==="detailed"&&gl){
    for(const s of PLACES){
      const p=gl.project([s.lng,s.lat]); s.x=p.x; s.y=p.y;
      const m=glMarkers[s.id]; if(!m) continue;
      const el=m.getElement(); el.style.background=markerColor(s);
      el.style.display=visible(s)&&showsCat(s)?"":"none";
    }
    placePop();updateSide();return;
  }
  projection.translate([w/2,h/2]).scale(Math.min(w,h)*.46*zoom).rotate([-longitude,0]).center([0,latitude]);
  svg.setAttribute("viewBox",`0 0 ${w} ${h}`);
  ocean.setAttribute("d",path(sphere));
  land.setAttribute("d",path(WORLD_LAND)||"");
  const detail=HAS_DETAIL&&zoom>=5;
  dMask.setAttribute("d",detail?path(DETAIL.mask)||"":"");
  dLand.setAttribute("d",detail?path(DETAIL.land)||"":"");
  dCoast.setAttribute("d",detail?path(DETAIL.coast)||"":"");
  graticule.setAttribute("d",zoom<8?path(grid)||"":"");
  for(const s of PLACES){
    [s.x,s.y]=projection([s.lng,s.lat]);
    const c=mkEls[s.id];
    c.setAttribute("cx",s.x);c.setAttribute("cy",s.y);c.setAttribute("r",8);
    c.setAttribute("fill",markerColor(s));
    c.style.display=visible(s)&&showsCat(s)?"":"none";
  }
  placePop();updateSide();
}
function render(){ cancelAnimationFrame(raf); raf=requestAnimationFrame(draw); }
function flyTo(v,instant){ // v = [lng, lat, simpleZoom, detailedZoom]
  const [lng,lat,z1,z2]=v;
  if(engine==="detailed"&&gl){ (instant||REDUCED)?gl.jumpTo({center:[lng,lat],zoom:z2}):gl.flyTo({center:[lng,lat],zoom:z2,speed:1.6,essential:true}); return; }
  longitude=lng;latitude=lat;zoom=z1;render();
}
function setProjectionForRegion(){
  if(!(engine==="detailed"&&gl&&gl.setProjection)) return;
  try{ gl.setProjection({type:"mercator"}); }catch(e){}
}

/* detailed map setup */
function useSimple(){
  engine="simple"; box.classList.remove("is-detailed");
  if(gl){ try{gl.remove()}catch(e){} gl=null; glMarkers={}; }
  render();
}
function startDetailed(){
  if(typeof MAP_STYLE==="undefined"||!MAP_STYLE||!window.maplibregl) return;
  let loaded=false;
  try{
    gl=new maplibregl.Map({container:"glmap",style:MAP_STYLE,center:[R().view[0],R().view[1]],zoom:R().view[3],minZoom:1,maxZoom:19,
      attributionControl:{compact:true},dragRotate:false,pitchWithRotate:false,touchPitch:false,maxPitch:0,cooperativeGestures:false});
  }catch(e){ gl=null; return; }
  gl.touchZoomRotate.disableRotation();
  const fail=()=>{ if(!loaded) useSimple(); };
  const timer=setTimeout(fail,9000);
  gl.on("error",fail);
  gl.on("load",()=>{
    loaded=true; clearTimeout(timer);
    engine="detailed"; box.classList.add("is-detailed");
    for(const s of PLACES){
      const el=document.createElement("button");
      el.type="button"; el.className="glmk"; el.setAttribute("aria-label",`${s.name}, ${where(s)}`);
      el.addEventListener("click",e=>{e.stopPropagation();openPop(s)});
      el.addEventListener("pointerenter",()=>hl(s.id,true));el.addEventListener("pointerleave",()=>hl(s.id,false));
      glMarkers[s.id]=new maplibregl.Marker({element:el}).setLngLat([s.lng,s.lat]).addTo(gl);
    }
    setProjectionForRegion(); flyTo(R().view,true); render();
  });
  gl.on("move",render);
  gl.on("movestart",e=>{ if(e.originalEvent){ pauseSpin(); $("#mapHint").hidden=true; } });
  gl.on("click",()=>closePop());
}

/* slow spin for the Global globe */
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
let spinOn=false, spinLast=0, idleUntil=0;
const pauseSpin = (ms=6000) => { idleUntil=performance.now()+ms; };
function spinLoop(t){
  if(!spinOn) return;
  const homeShown=!$('[data-view="home"]').hidden && !$("#mapPane").hidden;
  if(homeShown && t>idleUntil && !popSpot && !pointers.size){
    const dt=spinLast?Math.min(t-spinLast,50):16;
    if(engine==="detailed"&&gl){
      if(gl.getZoom()<3.2&&!gl.isMoving()){ const c=gl.getCenter(); gl.setCenter([((c.lng+dt*0.004+180)%360+360)%360-180,c.lat]); }
    }else{
      longitude=((longitude+dt*0.004+180)%360+360)%360-180; draw();
    }
  }
  spinLast=t; requestAnimationFrame(spinLoop);
}
function setSpin(on){ const want=on&&!REDUCED; if(want&&!spinOn){spinOn=true;spinLast=0;requestAnimationFrame(spinLoop);} else if(!want) spinOn=false; }

/* simple-map dragging and zooming */
const pointers=new Map();
let moved=false;
box.addEventListener("pointerdown",e=>{
  if(engine==="detailed") return;
  if(e.target.closest(".pop,.map-ui,.map-top,.soon"))return;
  if(!pointers.size)moved=false;
  pointers.set(e.pointerId,[e.clientX,e.clientY]);
  $("#mapHint").hidden=true; pauseSpin();
});
box.addEventListener("pointermove",e=>{
  if(engine==="detailed") return;
  const previous=pointers.get(e.pointerId);
  if(!previous)return;
  const next=[e.clientX,e.clientY];
  const dx=next[0]-previous[0],dy=next[1]-previous[1];
  if(!moved&&Math.abs(dx)+Math.abs(dy)<4)return;
  if(!moved){ moved=true; box.classList.add("dragging"); for(const id of pointers.keys())box.setPointerCapture(id); }
  const other=[...pointers].find(([id])=>id!==e.pointerId)?.[1];
  if(other){
    const before=Math.hypot(previous[0]-other[0],previous[1]-other[1]);
    const after=Math.hypot(next[0]-other[0],next[1]-other[1]);
    if(before&&after)zoom=clampZoom(zoom*after/before);
  }else{
    const c=projection.invert([box.clientWidth/2-dx,box.clientHeight/2-dy]);
    if(c){ longitude=((c[0]+180)%360+360)%360-180; latitude=Math.max(-80,Math.min(80,c[1])); }
  }
  pointers.set(e.pointerId,next); pauseSpin();
  closePop();render();
});
function endPointer(e){ pointers.delete(e.pointerId); if(!pointers.size)box.classList.remove("dragging"); }
box.addEventListener("pointerup",endPointer);
box.addEventListener("pointercancel",endPointer);
box.addEventListener("click",e=>{ if(engine==="simple"&&!moved&&!e.target.closest(".mk,.pop,.map-ui,.map-top,.soon"))closePop(); });
function zoomBy(factor){
  pauseSpin();
  if(engine==="detailed"&&gl){ factor>1?gl.zoomIn():gl.zoomOut(); return; }
  zoom=clampZoom(zoom*factor);render();
}
box.addEventListener("wheel",e=>{ if(engine==="detailed") return; e.preventDefault();zoomBy(Math.exp(-e.deltaY*.0016))},{passive:false});
$("#zin").onclick=()=>zoomBy(1.6);
$("#zout").onclick=()=>zoomBy(1/1.6);
$("#zall").onclick=()=>{ // fit all pins in this region
  closePop(); const list=rSpots().filter(showsCat);
  if(engine==="detailed"&&gl&&list.length){
    if(list.length===1){ gl.flyTo({center:[list[0].lng,list[0].lat],zoom:14}); return; }
    const b=new maplibregl.LngLatBounds(); list.forEach(s=>b.extend([s.lng,s.lat]));
    gl.fitBounds(b,{padding:70,maxZoom:14,duration:REDUCED?0:900}); return;
  }
  flyTo(R().view);
};
$("#jumps").onclick=e=>{const b=e.target.closest("[data-j]");if(!b)return;const j=R().jumps[b.dataset.j];closePop();pauseSpin(20000);flyTo(j.slice(1))};

function fillMapCats(){
  const cats=[...new Set(rSpots().flatMap(s=>s.foods.map(f=>f.cat)))];
  const ordered=[...FOOD_CATEGORIES.filter(c=>cats.includes(c)),...cats.filter(c=>!FOOD_CATEGORIES.includes(c))];
  mapCat=null;
  $("#mapCats").innerHTML=ordered.map(c=>`<button class="chip" aria-pressed="false" data-c="${esc(c)}"><span class="dot" style="background:${catColor(c)}"></span>${esc(c)}</button>`).join("");
  $("#mapCats").style.display=ordered.length?"":"none";
  mapScore=""; $("#mapScore").value=""; $("#mapScore").style.display=rSpots().length?"":"none";
}
$("#mapScore").addEventListener("change",()=>{ mapScore=$("#mapScore").value; if(popSpot&&!showsCat(popSpot))closePop(); sideKey=null; render(); });
$("#mapCats").onclick=e=>{const b=e.target.closest("[data-c]");if(!b)return;
  const on=b.getAttribute("aria-pressed")==="true";
  $("#mapCats").querySelectorAll("[data-c]").forEach(x=>x.setAttribute("aria-pressed","false"));
  if(on){mapCat=null}else{b.setAttribute("aria-pressed","true");mapCat=b.dataset.c}
  if(popSpot&&!showsCat(popSpot))closePop(); sideKey=null; render();};

const foodLine = s => s.foods.map(f=>`<span class="fl"><span class="dot" style="background:${catColor(f.cat)}"></span>${esc(f.cat)} ${stampHTML(f.rating,true)}</span>`).join("");
function openPop(s){
  popSpot=s; pauseSpin(30000); const p=$("#pop");
  p.innerHTML=`<button class="x" aria-label="Close">×</button><h4>${esc(s.name)}</h4>
   <div class="meta">${esc(where(s))}</div>
   <div class="foods">${foodLine(s)}</div>
   <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><a class="btn red sm" href="${esc(vlink(s))}" target="_blank" rel="noopener">▶ Watch review</a><a class="btn ghost sm" href="${P('/spot/'+s.id)}">Details</a></div>`;
  p.hidden=false; p.querySelector(".x").onclick=closePop;
  if(engine==="detailed"&&gl){ const pt=gl.project([s.lng,s.lat]); if(pt.y<230||pt.x<140||pt.x>box.clientWidth-140) gl.easeTo({center:[s.lng,s.lat],offset:[0,110],duration:REDUCED?0:500}); }
  render();
}
function closePop(){popSpot=null;$("#pop").hidden=true}
function placePop(){
  if(!popSpot)return;
  const p=$("#pop");
  p.hidden=!visible(popSpot);
  const half=p.offsetWidth/2;
  p.style.left=Math.max(half+6,Math.min(box.clientWidth-half-6,popSpot.x))+"px";
  p.style.top=Math.max(p.offsetHeight+24,popSpot.y-6)+"px";
}
function hl(id,on){ mkEls[id]?.classList.toggle("hl",on); glMarkers[id]?.getElement().classList.toggle("hl",on); document.querySelector(`#inView [data-id="${id}"]`)?.classList.toggle("hl",on); }

let sideKey=null;
function updateSide(){
  let inView=PLACES.filter(s=>showsCat(s)&&visible(s));
  inView.sort(mapCat?byRating(s=>foodRating(s,mapCat)):(a,b)=>a.name.localeCompare(b.name));
  const key=region+":"+mapCat+":"+mapScore+":"+inView.map(s=>s.id).join();
  if(key===sideKey)return; sideKey=key;
  const empty=isEmpty();
  $("#inViewCount").textContent=empty?"Places I've been":`${inView.length} ${inView.length===1?"spot":"spots"} in this area${mapCat?` · best ${mapCat.toLowerCase()} first`:""}`;
  $("#inView").innerHTML=inView.length?inView.map(s=>{const f=mapCat?s.foods.find(f=>f.cat===mapCat):bestFood(s);return `<li><button data-id="${s.id}">${badge(f?f.cat:"")}<span><span class="nm">${esc(s.name)}</span><span class="tw">${esc(where(s))}</span>${f?stampHTML(f.rating,true):""}</span></button></li>`}).join("")
   :(empty?`<li class="empty"><strong style="color:var(--text)">${esc(R().name)} reviews coming soon.</strong><br>I'm pinning every place I've been. Follow along on <a href="${IG}" target="_blank" rel="noopener">Instagram</a> or <a href="${P('/next')}">tell me where to go</a>.</li>`:`<li class="empty">No spots here yet. Zoom out, or <a href="${P('/next')}">tell me where to go</a>.</li>`);
}
$("#inView").addEventListener("click",e=>{const b=e.target.closest("[data-id]");if(b){pauseSpin(15000);openPop(PLACE_BY_ID[b.dataset.id])}});
$("#inView").addEventListener("pointerover",e=>{const b=e.target.closest("[data-id]");if(b)hl(b.dataset.id,true)});
$("#inView").addEventListener("pointerout",e=>{const b=e.target.closest("[data-id]");if(b)hl(b.dataset.id,false)});
new ResizeObserver(()=>{ if(gl) gl.resize(); render(); }).observe(box);
$("#mapSoon .x").onclick=()=>{$("#mapSoon").hidden=true;$("#mapHint").hidden=false};
$("#mapSoon").addEventListener("pointerdown",e=>e.stopPropagation());

/* ===================== LIST (restaurants) ===================== */
const opts = (arr,all) => `<option value="">${all}</option>`+arr.map(v=>`<option>${esc(v)}</option>`).join("");
const uniq = arr => [...new Set(arr.filter(Boolean))].sort((a,b)=>a.localeCompare(b));
function fillListFilters(){
  const list=rSpots();
  $("#fst").innerHTML=opts(uniq(list.map(stateLabel)),"All");
  $("#fcity").innerHTML=opts(uniq(list.map(s=>s.city)),"All");
  $("#fcat").innerHTML=opts(uniq(list.flatMap(s=>s.foods.map(f=>f.cat))),"All food");
  $("#fscore").innerHTML=opts(RATING_STAMPS.map(x=>x[1]),"All scores");
  $("#fst").closest("label").style.display=$("#fst").options.length>2?"":"none";
}
$("#fst").addEventListener("change",()=>{ const st=$("#fst").value; const list=rSpots().filter(s=>!st||stateLabel(s)===st); const cur=$("#fcity").value; $("#fcity").innerHTML=opts(uniq(list.map(s=>s.city)),"All"); if([...$("#fcity").options].some(o=>o.value===cur)) $("#fcity").value=cur; });
function renderList(){
  const rows=$("#frows"), list=rSpots();
  if(!list.length){ $("#listPane .filters").style.display="none"; $("#fcount").textContent="";
    rows.className="soon-block"; rows.innerHTML=`<h3>${esc(R().name)} reviews coming soon</h3><p>Every place I've been will be listed here, searchable by area and food, with a link to the review.</p><a class="btn red" href="${IG}" target="_blank" rel="noopener">Follow for updates</a>`; return; }
  $("#listPane .filters").style.display=""; rows.className="rows";
  const q=$("#fq").value.trim().toLowerCase(), st=$("#fst").value, city=$("#fcity").value, c=$("#fcat").value, sort=$("#fsort").value, sc=$("#fscore").value;
  let r=list.filter(s=>(!q||[s.name,s.city,s.state,s.country,...s.foods.map(f=>f.cat)].join(" ").toLowerCase().includes(q))&&(!st||stateLabel(s)===st)&&(!city||s.city===city)&&(!c||s.foods.some(f=>f.cat===c))
    &&(!sc||s.foods.some(f=>(!c||f.cat===c)&&stampOf(f.rating)===sc)));
  r.sort(sort==="best"?byRating(s=>c?foodRating(s,c):+(bestFood(s)||{}).rating):(a,b)=>a.name.localeCompare(b.name));
  $("#fcount").textContent=`${r.length} of ${list.length} places`+(sort==="best"?(c?` · best ${c.toLowerCase()} first`:" · best first"):"");
  rows.innerHTML=r.length?r.map(s=>rowHTML(s,c)).join("")
   :`<p class="empty">Nothing matches those filters. Try removing one, or <a href="${P('/next')}">suggest a spot</a>.</p>`;
}
const rowHTML = (s,cat) => { const f=cat?s.foods.find(f=>f.cat===cat):bestFood(s);
  return `<a class="rowi" href="${P('/spot/'+s.id)}">${badge(f?f.cat:"")}<span><span class="nm">${esc(s.name)}</span><br><span class="tw">${esc(where(s))} · ${esc(s.foods.map(f=>f.cat).join(", "))}</span></span><span class="rowstamp">${f?stampHTML(f.rating,true):""}</span></a>`; };
["fq","fst","fcity","fcat","fscore","fsort"].forEach(id=>$("#"+id).addEventListener("input",renderList));
function tab(which){
  $("#tabMap").setAttribute("aria-selected",which==="map");$("#tabList").setAttribute("aria-selected",which==="list");
  $("#mapPane").hidden=which!=="map";$("#listPane").hidden=which!=="list"; if(which==="map"){ if(gl) gl.resize(); render(); }
}
$("#tabMap").onclick=()=>tab("map");$("#tabList").onclick=()=>tab("list");

/* ===================== SERIES (named series, episodes set in the admin) ===================== */
const ALL_SERIES = typeof SERIES!=="undefined"&&Array.isArray(SERIES)?SERIES:[];
const seriesInRegion = () => ALL_SERIES.filter(x=>region==="global"||x.region===region);
function episodesOf(id){
  const eps=[];
  for(const s of rSpots()) for(const f of s.foods) if(f.series===id) eps.push({s,f});
  return eps.sort((a,b)=>(+a.f.ep||9999)-(+b.f.ep||9999)||a.s.name.localeCompare(b.s.name));
}
function fillSeriesMenu(){
  const list=seriesInRegion();
  $("#seriesMenu").innerHTML=`<a href="${P('/series')}">All series</a>`+list.map(x=>`<a href="${P('/series/'+x.id)}">${esc(x.name)}</a>`).join("");
}
function renderSeries(id){
  const list=seriesInRegion(), el=$("#seriesBody");
  const one=id&&list.find(x=>x.id===id);
  if(one){
    const eps=episodesOf(one.id);
    el.innerHTML=`<a class="back" href="${P('/series')}">‹ All series</a><h1 class="big series-title">${esc(one.name)}</h1>
      <p class="lede">${eps.length?`${eps.length} ${eps.length===1?"episode":"episodes"} so far, in order.`:"Episodes are on the way."}</p>
      ${eps.length?`<ol class="eps big-eps">${eps.map(({s,f})=>`<li><span class="epn">${f.ep?"Ep "+esc(f.ep):"Ep"}</span>${badge(f.cat)}<span class="ept"><a href="${P('/spot/'+s.id)}">${esc(s.name)}</a><small>${esc(where(s))} · ${esc(f.cat)}</small></span>${stampHTML(f.rating,true)}${f.video?`<a class="btn ghost sm" href="${esc(f.video)}" target="_blank" rel="noopener">▶ Watch</a>`:""}</li>`).join("")}</ol>`
        :`<div class="soon-block"><h3>Episodes coming soon</h3><p>New episodes of ${esc(one.name)} will show up here as they drop.</p><a class="btn red" href="${IG}" target="_blank" rel="noopener">Follow for updates</a></div>`}`;
    document.title=`${one.name} · Kasey Feasts`; return;
  }
  el.innerHTML=`<h1 class="big">The series</h1><p class="lede">Every ${esc(R().name)} series, one episode at a time.</p>
    <div class="series-list">${list.map(x=>{const n=episodesOf(x.id).length;return `<a class="series-row" href="${P('/series/'+x.id)}"><span class="sr-name">${esc(x.name)}</span><span class="sr-count">${n?`${n} ${n===1?"episode":"episodes"}`:"Coming soon"}</span><span class="sr-go" aria-hidden="true">→</span></a>`}).join("")}</div>`;
}

/* ===================== FOOD ITEM RANKINGS (multi-select filters) ===================== */
const RF={cat:new Set(),sub:new Set(),country:new Set(),state:new Set(),city:new Set()};
const itemCats = () => [...new Set([...Object.keys(ITEM_CATEGORIES),...rItems().map(i=>i.cat)])].filter(Boolean);
function msHTML(key,label){ return `<div class="ms" data-ms="${key}"><span class="ms-label">${label}</span><button type="button" class="field ms-btn" aria-haspopup="true" aria-expanded="false"></button><div class="ms-panel" hidden></div></div>`; }
function msSet(key,options,allText){
  const box=document.querySelector(`.ms[data-ms="${key}"]`); if(!box) return;
  const sel=RF[key]; [...sel].forEach(v=>{ if(!options.includes(v)) sel.delete(v); });
  box.dataset.all=allText;
  box.querySelector(".ms-panel").innerHTML=(options.length?options.map(o=>`<label class="ms-opt"><input type="checkbox" value="${esc(o)}" ${sel.has(o)?"checked":""}><span>${esc(o)}</span></label>`).join(""):`<p class="ms-none">Nothing to pick yet</p>`)
    +`<div class="ms-actions"><button type="button" data-act="clear">Clear</button><button type="button" data-act="done" class="btn sm">Done</button></div>`;
  msSummary(key);
}
function msSummary(key){
  const box=document.querySelector(`.ms[data-ms="${key}"]`), sel=[...RF[key]];
  box.querySelector(".ms-btn").textContent=!sel.length?box.dataset.all:sel.length<=2?sel.join(", "):`${sel.length} selected`;
}
function closeMs(except){ document.querySelectorAll(".ms[data-ms]").forEach(m=>{ if(m!==except){ m.querySelector(".ms-panel").hidden=true; m.querySelector(".ms-btn").setAttribute("aria-expanded","false"); } }); }
function renderRankings(catSlug){
  const el=$("#rankBody");
  if(!el.dataset.ready){
    el.dataset.ready="1";
    el.innerHTML=`<h1 class="big">Food item rankings</h1>
      <p class="lede" id="rankLede"></p>
      <div class="rankfilters">${msHTML("cat","Food")}${msHTML("sub","Type")}${msHTML("country","Country")}${msHTML("state","State / area")}${msHTML("city","City / district")}
        <label class="ms"><span class="ms-label">Show</span><select class="field" id="rtop"><option value="5">Top 5</option><option value="10">Top 10</option><option value="25">Top 25</option><option value="0" selected>All</option></select></label></div>
      <p class="count" id="rcount"></p><ol class="ranklist" id="rlist"></ol>`;
    el.addEventListener("click",e=>{
      const btn=e.target.closest(".ms-btn"); const ms=e.target.closest(".ms[data-ms]");
      if(btn){ const p=ms.querySelector(".ms-panel"); const open=p.hidden; closeMs(ms); p.hidden=!open; btn.setAttribute("aria-expanded",open); return; }
      const act=e.target.closest("[data-act]");
      if(act&&ms){ if(act.dataset.act==="clear"){ RF[ms.dataset.ms].clear(); ms.querySelectorAll("input").forEach(i=>i.checked=false); onRankChange(ms.dataset.ms); } else closeMs(); }
    });
    el.addEventListener("change",e=>{
      const cb=e.target.closest('.ms-panel input[type="checkbox"]');
      if(cb){ const key=cb.closest(".ms").dataset.ms; cb.checked?RF[key].add(cb.value):RF[key].delete(cb.value); onRankChange(key); }
    });
    $("#rtop").addEventListener("input",drawRank);
    document.addEventListener("click",e=>{ if(!e.target.closest(".ms")) closeMs(); });
  }
  if(el.dataset.region!==region){ el.dataset.region=region; Object.values(RF).forEach(s=>s.clear()); }
  const cats=itemCats();
  if(catSlug!==undefined){ RF.cat.clear(); const c=cats.find(c=>slugify(c)===catSlug); if(c) RF.cat.add(c); }
  $("#rankLede").textContent=`Every ${R().name} item I've ranked, best first. Tick as many boxes as you like, for example glazed donuts in NH, MA and ME.`;
  refreshRankFilters(); drawRank();
}
function onRankChange(key){
  if(key==="cat"){ const c=[...RF.cat]; history.replaceState(null,"",P(c.length===1?"/rankings/"+slugify(c[0]):"/rankings")); }
  msSummary(key); refreshRankFilters(key); drawRank();
}
// Filters always show, using the dropdown lists in data/lists.js plus anything in the data.
const ordered = (base,extra) => [...base,...uniq(extra).filter(x=>!base.includes(x))];
function regionStates(countries){
  if(region==="newengland") return NEW_ENGLAND_STATES;
  if(region==="hongkong") return STATES["Hong Kong"]||[];
  const cs=countries.length?countries:["United States","Hong Kong"];
  return cs.flatMap(c=>STATES[c]||[]);
}
function refreshRankFilters(changed){
  const items=rItems(), spotOf=i=>PLACE_BY_ID[i.spot];
  if(changed!=="cat") msSet("cat",itemCats(),"All food");
  const byCat=items.filter(i=>!RF.cat.size||RF.cat.has(i.cat));
  const subBase=(RF.cat.size?[...RF.cat]:itemCats()).flatMap(c=>ITEM_CATEGORIES[c]||[]);
  if(changed!=="sub") msSet("sub",ordered([...new Set(subBase)],byCat.map(i=>i.sub)),"All types");
  const isGlobal=region==="global";
  if(changed!=="country") msSet("country",ordered(["United States","Hong Kong"],items.map(i=>spotOf(i).country)),"All countries");
  document.querySelector('.ms[data-ms="country"]').style.display=isGlobal?"":"none";
  const byCountry=items.filter(i=>!RF.country.size||RF.country.has(spotOf(i).country));
  const stateBase=regionStates(isGlobal?[...RF.country]:[]);
  if(changed!=="state") msSet("state",ordered(stateBase,byCountry.map(i=>spotOf(i).state)),"All");
  const byState=byCountry.filter(i=>!RF.state.size||RF.state.has(spotOf(i).state));
  const cityBase=(RF.state.size?[...RF.state]:stateBase).flatMap(st=>CITIES[st]||[]);
  if(changed!=="city") msSet("city",ordered([...new Set(cityBase)],byState.map(i=>spotOf(i).city)),"All");
}
function drawRank(){
  const top=+$("#rtop").value, all=rItems();
  let r=all.filter(i=>{const s=PLACE_BY_ID[i.spot];
    return (!RF.cat.size||RF.cat.has(i.cat))&&(!RF.sub.size||RF.sub.has(i.sub))&&(!RF.country.size||RF.country.has(s.country))&&(!RF.state.size||RF.state.has(s.state))&&(!RF.city.size||RF.city.has(s.city));});
  r.sort(byRating(i=>+i.rating));
  const shown=top?r.slice(0,top):r;
  $("#rcount").textContent=all.length?`${shown.length} of ${r.length} ${r.length===1?"item":"items"}`:"";
  $("#rlist").innerHTML=!all.length?`<li class="soon-block"><h3>${esc(R().name)} rankings coming soon</h3><p>Glazed donuts, Italian subs, pepperoni slices: every item I rate will be ranked here, best first.</p><a class="btn red" href="${IG}" target="_blank" rel="noopener">Follow for updates</a></li>`
    :shown.length?shown.map((i,n)=>{const s=PLACE_BY_ID[i.spot];const f=s.foods.find(f=>f.cat===i.cat);return `<li class="rank">
      <span class="rn">${n+1}</span>${badge(i.cat)}
      <span class="ri"><span class="nm">${esc(i.name)}</span><span class="tw">${esc(i.sub?i.cat+" · "+i.sub:i.cat)}</span><a class="rr" href="${P('/spot/'+s.id)}">${esc(s.name)}</a><span class="tw">${esc(where(s))}</span></span>
      <span class="ra">${stampHTML(i.rating)}<span class="rbtns">${s.address?`<button class="btn ghost sm" type="button" data-copy="${esc(s.address)}">Copy address</button>`:""}${f&&f.video?`<a class="btn ghost sm" href="${esc(f.video)}" target="_blank" rel="noopener">▶ Watch</a>`:""}</span></span></li>`}).join("")
    :`<li class="empty">Nothing matches those filters yet. Try widening them.</li>`;
}

/* ===================== SPOT PAGE ===================== */
const seriesName = id => (ALL_SERIES.find(x=>x.id===id)||{}).name;
function renderSpot(id){
  const s=PLACE_BY_ID[id]; const el=$("#spotBody");
  if(!s){el.innerHTML=`<a class="back" href="${P('/')}">‹ Back to the map</a><p>That spot isn't on the map. <a href="${P('/')}">See all spots</a>.</p>`;return}
  const near=rSpots().filter(x=>x.id!==s.id).map(x=>({x,d:Math.hypot(x.lat-s.lat,(x.lng-s.lng)*Math.cos(s.lat*Math.PI/180))})).sort((a,b)=>a.d-b.d).slice(0,3).map(o=>o.x);
  const here=ALL_ITEMS.filter(i=>i.spot===s.id).sort(byRating(i=>+i.rating));
  const main=bestFood(s);
  el.innerHTML=`<a class="back" href="${P('/')}">‹ Back to the map</a>
   <div class="spot-head">${badge(main?main.cat:"").replace('class="badge"','class="badge" style="width:64px;height:64px;border-radius:16px"')}<div><h1>${esc(s.name)}</h1><div class="tw">${esc(where(s))}</div></div></div>
   <div class="spot-grid">
     <div class="vid"><div class="art">${main&&ICON[main.cat]?art(main.cat,"#161616"):""}</div><div class="cap">My ${esc(s.name)} review</div><a class="btn" href="${esc(vlink(s))}" target="_blank" rel="noopener">▶ Watch the review</a></div>
     <div>
       <div class="foodcards">${s.foods.map(f=>{const sn=seriesName(f.series);return `<div class="foodcard"><div class="fc-top">${badge(f.cat)}<div><h3>${esc(f.cat)}</h3>${sn?`<small>${f.ep?"Episode "+esc(f.ep)+" of ":"Part of "}<a href="${P('/series/'+f.series)}">${esc(sn)}</a></small>`:""}</div>${stampHTML(f.rating)}</div>${f.video?`<a class="btn red sm" href="${esc(f.video)}" target="_blank" rel="noopener">▶ Watch the ${esc(f.cat.toLowerCase())} review</a>`:""}</div>`}).join("")}</div>
       ${here.length?`<h3 class="sub">What I've ranked here</h3><ol class="ranklist compact">${here.map(i=>`<li class="rank"><span class="ri"><span class="nm">${esc(i.name)}</span><span class="tw">${esc(i.sub?i.cat+" · "+i.sub:i.cat)}</span></span><span class="ra">${stampHTML(i.rating,true)}</span></li>`).join("")}</ol>`:""}
       ${s.address?`<h3 class="sub">Address</h3><p class="addr">${esc(s.address)}</p>`:""}
       <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:34px">${addrButtons(s)||`<a class="btn ghost" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.name+" "+where(s))}" target="_blank" rel="noopener">Open in Maps</a>`}</div>
       ${near.length?`<h3 class="sub">Nearby on the map</h3><div class="rows">${near.map(x=>rowHTML(x)).join("")}</div>`:""}
     </div>
   </div>`;
  document.title=`${s.name} · Kasey Feasts`;
}

/* ===================== ABOUT (one per region) ===================== */
function renderAbout(){
  $("#aboutText").innerHTML=R().about.map(p=>`<p>${esc(p)}</p>`).join("");
  $("#aboutPolicy").innerHTML=`<strong>No paid praise.</strong> ${esc(ABOUT_POLICY)}`;
}

/* ===================== LANDING + SWITCHER ===================== */
$("#regionCards").innerHTML=REGION_ORDER.map(k=>{const r=REGIONS[k];return `<a class="rcard" href="/${k}/" style="--c:${r.color};--i:${r.text}"><h2>${esc(r.name.toUpperCase())}</h2></a>`}).join("");
$("#switchBubbles").innerHTML=REGION_ORDER.map(k=>`<a class="sbub" data-region="${k}" href="/${k}/" style="--c:${REGIONS[k].color};--i:${REGIONS[k].text}">${esc(REGIONS[k].name)}</a>`).join("");

/* ===================== ROUTER ===================== */
const TITLES={home:"",series:"Series",rankings:"Food Item Rankings",about:"About",work:"Work with Me",next:"Where Next?"};
function applyRegion(r){
  if(region===r) return;
  region=r; const cfg=R();
  $("#heroCopy").textContent=cfg.hero;
  $("#dirTitle").textContent=r==="global"?"Places I've been around the world":`Places I've been in ${cfg.name}`;
  document.querySelectorAll(".sbub").forEach(b=>{const on=b.dataset.region===r;b.classList.toggle("on",on);on?b.setAttribute("aria-current","true"):b.removeAttribute("aria-current")});
  $("#jumps").innerHTML=cfg.jumps.map((j,i)=>`<button class="chip" data-j="${i}">${esc(j[0])}</button>`).join("");
  const empty=isEmpty();
  $("#mapSoon").hidden=!empty; $("#mapHint").hidden=empty;
  $("#mapHint").textContent=cfg.spin?"Drag to spin · scroll or pinch to zoom":"Drag to move · scroll or pinch to zoom";
  $("#mapSoonText").textContent=`Every place I review${r==="global"?"":" in "+cfg.name} will be pinned here with a link to the video. ${cfg.spin?"Watch the globe spin":"Look around"} while you wait.`;
  $(".side-h small").textContent=empty?"Jump to an area":"Updates as you move the map";
  $("#dirLede").textContent=empty?`The map is ready. The ${cfg.name} pins are coming soon, each linked to my review.`:"Drag the map to your area, then tap a dot to watch my review.";
  $("#homeSeriesLede").textContent=seriesInRegion().map(x=>x.name).join(" · ");
  $("#fq").value=""; $("#fsort").value="name"; fillMapCats(); fillListFilters(); renderList(); fillSeriesMenu(); renderAbout();
  closePop(); sideKey=null; idleUntil=0; setProjectionForRegion(); flyTo(cfg.view,true); setSpin(!!cfg.spin);
}
function route(){
  const segs=location.pathname.split("/").filter(Boolean);
  const r=REGIONS[segs[0]]?segs[0]:null;
  const landing=!r;
  if(landing && segs.length){ history.replaceState(null,"","/"); }
  let v=landing?"landing":(segs[1]||"home"); const arg=segs[2];
  if(v==="hitlist") v="rankings";
  if(!landing&&!["home","series","rankings","spot","about","work","next"].includes(v)){ history.replaceState(null,"",P("/")); v="home"; }
  if(r) applyRegion(r); else setSpin(false);
  // a restaurant opened from a region it isn't part of moves to its own region
  if(v==="spot"){ const s=PLACE_BY_ID[arg]; if(s&&!inRegion(s)){ const home=s.country==="Hong Kong"?"hongkong":s.ne?"newengland":"global"; history.replaceState(null,"",`/${home}/spot/${s.id}`); return route(); } }
  document.body.classList.toggle("is-landing",landing);
  $("#switchbar").hidden=landing; $("#menuBtn").hidden=landing;
  document.querySelectorAll("[data-view]").forEach(s=>s.hidden=s.dataset.view!==v);
  document.querySelectorAll("[data-path]").forEach(a=>a.setAttribute("href",P(a.dataset.path)));
  $(".logo").setAttribute("href",landing?"/":P("/"));
  document.querySelectorAll("nav.main [data-r]").forEach(l=>l.removeAttribute("aria-current"));
  const cur=document.querySelector(`nav.main [data-r="${v}"]`); if(cur&&!landing) cur.setAttribute("aria-current","page");
  document.title=landing?"Kasey Feasts · New England, Hong Kong & beyond":`${TITLES[v]?TITLES[v]+" · ":""}Kasey Feasts ${R().name}`;
  if(v==="spot") renderSpot(arg);
  if(v==="series") renderSeries(arg);
  if(v==="rankings") renderRankings(arg);
  if(v==="home") { closePop(); if(gl) gl.resize(); render(); }
  closeMenus();
  window.scrollTo(0,0);
}
function closeMenus(){ $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded","false"); $("#seriesDrop").classList.remove("open"); $("#seriesBtn").setAttribute("aria-expanded","false"); }
addEventListener("popstate",route);
// Old links like kaseyfeasts.com/#/series go to the New England version.
if(/^#\/./.test(location.hash)||location.hash==="#/"){
  let old=location.hash.slice(1).replace(/^\/hitlist/,"/rankings").replace(/^\/blog.*/,"/");
  history.replaceState(null,"",old==="/"?"/":"/newengland"+old);
}
// Internal links change the page without reloading.
document.addEventListener("click",e=>{
  if(!e.target.closest("#seriesDrop")) { $("#seriesDrop").classList.remove("open"); $("#seriesBtn").setAttribute("aria-expanded","false"); }
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
  const a=e.target.closest("a[href]"); if(!a||a.target) return;
  const href=a.getAttribute("href");
  if(href==="#directory"){
    e.preventDefault(); closeMenus();
    if($('[data-view="home"]').hidden){ go(P("/")); }
    setTimeout(()=>$("#directory").scrollIntoView({behavior:"smooth"}),50); return;
  }
  if(!href.startsWith("/")||href.startsWith("//")||href.startsWith("/admin")) return;
  e.preventDefault(); go(href);
});
$("#seriesBtn").onclick=e=>{ e.stopPropagation(); const o=$("#seriesDrop").classList.toggle("open"); $("#seriesBtn").setAttribute("aria-expanded",o); };
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ closeMenus(); closeMs(); } });
$("#menuBtn").onclick=()=>{const o=$("#nav").classList.toggle("open");$("#menuBtn").setAttribute("aria-expanded",o)};
route();
startDetailed();

/* ===================== FORMS → EMAIL ===================== */
const MAIL = "kaseyfeasts@gmail.com";
function openEmail(subject, lines){
  const body = lines.filter(x=>x!=null).join("\n");
  const url = `mailto:${MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const a=document.createElement("a"); a.href=url; a.target="_top"; document.body.appendChild(a); a.click(); a.remove();
}
function sentNote(out, what){
  out.innerHTML=`<div class="ok">Your email app should open with your ${what} ready. Just hit send.</div>
   <p class="note" style="margin:8px 0 0">Nothing opened? Email <a href="mailto:${MAIL}">${MAIL}</a> directly.</p>`;
}
$("#workForm").addEventListener("submit",e=>{
  e.preventDefault(); const f=Object.fromEntries(new FormData(e.target).entries());
  openEmail(`${f.topic}: ${f.name}`, [
    `Name: ${f.name}`, `Email: ${f.email}`, `I'm a: ${f.who}`, `About: ${f.topic}`, "", f.msg, "", "(Sent from kaseyfeasts.com)"
  ]);
  sentNote($("#workMsg"),"message");
});
$("#recForm").addEventListener("submit",e=>{
  e.preventDefault(); const f=Object.fromEntries(new FormData(e.target).entries());
  openEmail(`Where next? ${f.place} in ${f.town}`, [
    `Place: ${f.place}`, `Town: ${f.town}`, f.order?`Order: ${f.order}`:null, f.why?`\nWhy it's great:\n${f.why}`:null, f.by?`\nFrom: ${f.by}`:null, "", "(Sent from kaseyfeasts.com)"
  ]);
  sentNote($("#recMsg"),"tip");
});
$("#copyMail").onclick=async()=>{const b=$("#copyMail");try{await navigator.clipboard.writeText(MAIL);b.textContent="Copied!"}catch{b.textContent=MAIL}setTimeout(()=>b.textContent="Copy address",2200)};
