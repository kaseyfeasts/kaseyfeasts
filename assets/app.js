/* ===================== DATA (sample — replace with real reviews) ===================== */
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
const EMPTY = SPOTS.length===0;
const badge = s => `<span class="badge" style="background:${BG[s.cat]||"var(--soft)"}">${ICON[s.cat]?art(s.cat):""}</span>`;
const vlink = s => s.video||IG;
const art = (cat,ph) => ICON[cat].replace('var(--ph,#fff)',ph||BG[cat]);

/* ===================== AVATAR ===================== */
const avatarSVG = (id) => `
<svg ${id?`id="${id}"`:""} viewBox="0 0 400 440" role="img" aria-label="Cartoon Kasey holding a slice of pizza and a donut">
 <g class="bob">
  <!-- body / hoodie -->
  <path d="M106 440L98 336C98 316 108 304 128 300L170 290H230L272 300C292 304 302 316 302 336L294 440z" fill="#A3A7AC"/>
  <path d="M150 292c10 26 30 40 50 40s40-14 50-40l-16-6c-6 18-20 28-34 28s-28-10-34-28z" fill="#8A8E93"/>
  <path d="M190 312v52M210 312v52" stroke="#E6E6E6" stroke-width="4" stroke-linecap="round"/>
  <circle cx="190" cy="366" r="4" fill="#E6E6E6"/><circle cx="210" cy="366" r="4" fill="#E6E6E6"/>
  <!-- neck -->
  <path d="M178 250h44v40c0 10-10 16-22 16s-22-6-22-16z" fill="#D9A07C"/>
  <!-- left arm with pizza -->
  <g class="armL">
   <path d="M126 314L68 346L70 272" stroke="#A3A7AC" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M58 274l30-4" stroke="#8A8E93" stroke-width="6" stroke-linecap="round"/>
   <g transform="rotate(-14 70 200)">
    <path d="M70 258L22 140c30-16 66-16 96 0z" fill="#F5C04A"/>
    <path d="M22 140c30-16 66-16 96 0l-6 13c-26-12-58-12-84 0z" fill="#C9822F"/>
    <circle cx="62" cy="176" r="9" fill="#D93A2B"/><circle cx="84" cy="196" r="8" fill="#D93A2B"/><circle cx="64" cy="216" r="6" fill="#D93A2B"/>
    <path d="M44 168c-2 14 2 22 0 30" stroke="#F5C04A" stroke-width="6" stroke-linecap="round"/>
   </g>
   <ellipse cx="70" cy="252" rx="22" ry="20" fill="#E3AF8A"/>
   <path d="M54 246c6-6 26-6 32 0" stroke="#B57A52" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <!-- right arm with donut -->
  <g class="armR">
   <path d="M274 314L332 346L330 272" stroke="#A3A7AC" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M342 274l-30-4" stroke="#8A8E93" stroke-width="6" stroke-linecap="round"/>
   <circle cx="334" cy="196" r="48" fill="#D9964C"/>
   <path d="M288 192c4-26 24-40 46-40s42 12 46 36c1 10-6 8-10 13-5 6-3 12-11 12-7 0-7-7-14-6-9 1-10 10-19 8-7-2-4-10-11-12-7-2-13 6-19 1-5-4-8-6-8-12z" fill="#E8679A"/>
   <circle cx="334" cy="192" r="14" fill="#161616"/>
   <g stroke-width="5" stroke-linecap="round"><path d="M306 172l6 3" stroke="#fff"/><path d="M346 164l6-2" stroke="#E9A923"/><path d="M360 182l3 6" stroke="#5BC0EB"/><path d="M302 196l1 6" stroke="#E9A923"/><path d="M326 162l-5 3" stroke="#5BC0EB"/><path d="M352 206l6 2" stroke="#fff"/></g>
   <ellipse cx="330" cy="252" rx="22" ry="20" fill="#E3AF8A"/>
   <path d="M314 246c6-6 26-6 32 0" stroke="#B57A52" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <!-- head -->
  <ellipse cx="133" cy="190" rx="13" ry="21" fill="#D9A07C"/><path d="M130 180c5 4 6 14 2 20" stroke="#B9805C" stroke-width="3" fill="none" stroke-linecap="round"/>
  <ellipse cx="267" cy="190" rx="13" ry="21" fill="#D9A07C"/><path d="M270 180c-5 4-6 14-2 20" stroke="#B9805C" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M138 150c0-56 124-56 124 0v46c0 44-26 78-62 80-36-2-62-36-62-80z" fill="#E3AF8A"/>
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
   <ellipse cx="174" cy="178" rx="10" ry="9" fill="#fff"/><ellipse cx="226" cy="178" rx="10" ry="9" fill="#fff"/>
   <circle cx="175" cy="178" r="6" fill="#3B2618"/><circle cx="227" cy="178" r="6" fill="#3B2618"/><circle cx="177" cy="176" r="2" fill="#fff"/><circle cx="229" cy="176" r="2" fill="#fff"/>
   <path d="M163 173q11-8 22 0M215 173q11-8 22 0" stroke="#2B211B" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
  <path d="M164 189q10 4 20 0M216 189q10 4 20 0" stroke="#C88E68" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <path d="M155 180l-7-3M155 184l-7 1M245 180l7-3M245 184l7 1" stroke="#C88E68" stroke-width="2" stroke-linecap="round"/>
  <!-- strong straight brows -->
  <path d="M152 162q18-8 38-3" stroke="#221A15" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M210 159q20-5 38 3" stroke="#221A15" stroke-width="8" fill="none" stroke-linecap="round"/>
  <!-- backwards trucker cap -->
  <path d="M137 176v-30c0-4 2-6 5-6v40z M263 176v-30c0-4-2-6-5-6v40z" fill="#2B211B"/>
  <path d="M130 166C122 108 150 58 200 56C250 56 278 108 270 166C252 151 228 144 200 144C172 144 148 151 130 166z" fill="#6E8570"/>
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
</svg>`;

document.getElementById("avStage").innerHTML = avatarSVG("av");
document.getElementById("aboutAv").innerHTML = avatarSVG("");
$("#aboutAv svg").id="av2";


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

/* ===================== MAP ===================== */
const NS="http://www.w3.org/2000/svg";
const proj = (lng,lat) => [(lng-MAP.lon0)*MAP.k*MAP.S,(MAP.lat1-lat)*MAP.S];
SPOTS.forEach(s=>{[s.x,s.y]=proj(s.lng,s.lat)});
const svg = $("#map"), box = $("#mapbox");
const gWorld = document.createElementNS(NS,"g"), gLbl=document.createElementNS(NS,"g"), gMk=document.createElementNS(NS,"g");
let html = `<rect x="-2000" y="-2000" width="5000" height="5000" fill="transparent"/>`;
html += `<path class="st ctx" d="${MAP.states.NY}"/>`;
for (const k of ["CT","RI","MA","VT","NH","ME"]) html += `<path class="st" d="${MAP.states[k]}"/>`;
html += `<path class="cty" d="${MAP.counties}"/>`;
gWorld.innerHTML = html;
svg.append(gWorld,gLbl,gMk);
const STLBL = [["MAINE",-69.3,45.4],["NEW HAMPSHIRE",-71.6,43.75],["VERMONT",-72.75,44.05],["MASSACHUSETTS",-71.9,42.45],["CONNECTICUT",-72.75,41.62],["R.I.",-71.55,41.65],["NEW YORK",-73.95,43.2]];
const CITIES = [["Boston",-71.06,42.36],["Worcester",-71.80,42.26],["Springfield",-72.59,42.10],["Providence",-71.41,41.82],["Hartford",-72.67,41.76],["New Haven",-72.92,41.31],["Portland",-70.26,43.66],["Portsmouth",-70.76,43.07],["Manchester",-71.46,42.99],["Burlington",-73.21,44.48],["Bangor",-68.77,44.80],["Cape Cod",-70.30,41.70],["Concord",-71.54,43.21]];
const stEls = STLBL.map(([t,lng,lat])=>{const [x,y]=proj(lng,lat);const e=document.createElementNS(NS,"text");e.setAttribute("class","stlbl");e.setAttribute("x",x);e.setAttribute("y",y);e.setAttribute("text-anchor","middle");e.textContent=t;gLbl.appendChild(e);return e});
const cityEls = CITIES.map(([t,lng,lat])=>{const [x,y]=proj(lng,lat);const e=document.createElementNS(NS,"text");e.setAttribute("class","lbl");e.setAttribute("x",x);e.setAttribute("y",y);e.textContent=t;gLbl.appendChild(e);return {e,x,y}});

let mapCat = new Set(Object.keys(CATS));
const mkEls = {};
SPOTS.forEach(s=>{
  const c=document.createElementNS(NS,"circle");
  c.setAttribute("class","mk"+(s.hit?" star":""));c.setAttribute("cx",s.x);c.setAttribute("cy",s.y);c.setAttribute("fill",CATS[s.cat]);
  c.setAttribute("tabindex","0");c.setAttribute("role","button");c.setAttribute("aria-label",`${s.name}, ${s.town}`);
  c.addEventListener("click",e=>{if(!moved){openPop(s);}});
  c.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openPop(s)}});
  c.addEventListener("pointerenter",()=>hl(s.id,true));c.addEventListener("pointerleave",()=>hl(s.id,false));
  gMk.appendChild(c);mkEls[s.id]=c;
});

const [c0x,c0y]=proj(-71.05,42.75);
let vb = {x:c0x-260,y:c0y-230,w:520,h:460};
let scale = 1, popSpot=null;
function fit(){ const r=box.getBoundingClientRect(); if(!r.width) return; const cx=vb.x+vb.w/2, cy=vb.y+vb.h/2; vb.h = vb.w*r.height/r.width; vb.y=cy-vb.h/2; scale=r.width/vb.w; }
let raf=0;
function render(){
  cancelAnimationFrame(raf);
  raf=requestAnimationFrame(()=>{
    const r=box.getBoundingClientRect(); if(!r.width) return;
    scale=r.width/vb.w; vb.h=vb.w*r.height/r.width;
    svg.setAttribute("viewBox",`${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
    const u=1/scale;
    for (const s of SPOTS){const c=mkEls[s.id];c.setAttribute("r",(s.hit?9:7.5)*u);c.style.display=mapCat.has(s.cat)?"":"none";}
    stEls.forEach(e=>{e.setAttribute("font-size",11*u);e.style.display=scale<2.6?"":"none"});
    const showCity=scale>0.9;
    cityEls.forEach(({e,x,y})=>{e.setAttribute("font-size",12.5*u);e.setAttribute("dx",10*u);e.setAttribute("dy",-8*u);e.style.display=showCity?"":"none"});
    placePop(); updateSide();
  });
}
function clampVb(){ vb.w=Math.max(30,Math.min(1100,vb.w)); }
function toWorld(px,py){const r=box.getBoundingClientRect();return [vb.x+(px-r.left)/scale, vb.y+(py-r.top)/scale]}
function zoomAt(f,px,py){ const [wx,wy]=toWorld(px,py); const nw=Math.max(30,Math.min(1100,vb.w*f)); const k=nw/vb.w; vb.x=wx-(wx-vb.x)*k; vb.y=wy-(wy-vb.y)*k; vb.w=nw; vb.h*=k; render(); }

const ptrs=new Map(); let moved=false, start=null, pinch0=null;
box.addEventListener("pointerdown",e=>{
  if(e.target.closest(".pop,.map-ui,.map-top,.soon")) return;
  ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  moved=false; start={x:e.clientX,y:e.clientY,vx:vb.x,vy:vb.y};
  if(ptrs.size===2){const [a,b]=[...ptrs.values()];pinch0={d:Math.hypot(a.x-b.x,a.y-b.y),w:vb.w,mx:(a.x+b.x)/2,my:(a.y+b.y)/2,vx:vb.x,vy:vb.y}}
  $("#mapHint").hidden=true;
});
box.addEventListener("pointermove",e=>{
  if(!ptrs.has(e.pointerId)) return;
  ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(ptrs.size===2&&pinch0){
    const [a,b]=[...ptrs.values()];const d=Math.hypot(a.x-b.x,a.y-b.y);
    const nw=Math.max(30,Math.min(1100,pinch0.w*pinch0.d/d));
    const r=box.getBoundingClientRect();
    const wx=pinch0.vx+(pinch0.mx-r.left)*pinch0.w/r.width, wy=pinch0.vy+(pinch0.my-r.top)*pinch0.w/r.width;
    const mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
    vb.w=nw; vb.x=wx-(mx-r.left)*nw/r.width; vb.y=wy-(my-r.top)*nw/r.width; if(!moved){moved=true;for(const id of ptrs.keys()){try{box.setPointerCapture(id)}catch{}}} render(); return;
  }
  const dx=e.clientX-start.x, dy=e.clientY-start.y;
  if(!moved&&Math.abs(dx)+Math.abs(dy)>4){moved=true;box.classList.add("dragging");try{box.setPointerCapture(e.pointerId)}catch{}}
  if(moved){vb.x=start.vx-dx/scale; vb.y=start.vy-dy/scale; render();}
});
const endPtr=e=>{ptrs.delete(e.pointerId);if(ptrs.size<2)pinch0=null;if(ptrs.size===1){const p=[...ptrs.values()][0];start={x:p.x,y:p.y,vx:vb.x,vy:vb.y}}box.classList.remove("dragging");setTimeout(()=>{if(!ptrs.size)moved=false},0)};
box.addEventListener("pointerup",endPtr);box.addEventListener("pointercancel",endPtr);
box.addEventListener("click",e=>{ if(!moved && !e.target.closest(".mk,.pop,.map-ui,.map-top")) closePop(); });
box.addEventListener("wheel",e=>{e.preventDefault();zoomAt(Math.exp(e.deltaY*0.0016),e.clientX,e.clientY)},{passive:false});
function zoomCenter(f){const r=box.getBoundingClientRect();zoomAt(f,r.left+r.width/2,r.top+r.height/2)}
$("#zin").onclick=()=>zoomCenter(0.6);$("#zout").onclick=()=>zoomCenter(1.6);
$("#zall").onclick=()=>flyTo(-71.0,43.9,700);

function flyTo(lng,lat,w){
  const [cx,cy]=proj(lng,lat); const r=box.getBoundingClientRect(); const aspect=r.height/r.width||1;
  const from={...vb}, to={w, x:cx-w/2, y:cy-w*aspect/2};
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){Object.assign(vb,to);render();return}
  const t0=performance.now();
  (function step(t){const p=Math.min(1,(t-t0)/600), e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
    vb.w=from.w+(to.w-from.w)*e; vb.x=from.x+(to.x-from.x)*e; vb.y=from.y+(to.y-from.y)*e; render(); if(p<1)requestAnimationFrame(step)})(t0);
}
const JUMPS=[["Boston area",-71.15,42.38,150],["North Shore & Seacoast",-70.85,42.85,190],["Cape Cod",-70.35,41.8,180],["Maine coast",-69.7,43.9,360],["Western MA & VT",-72.8,43.3,330],["RI & CT",-72.2,41.6,250],["All",-71.0,43.9,700]];
$("#jumps").innerHTML=JUMPS.map((j,i)=>`<button class="chip" data-j="${i}">${j[0]}</button>`).join("");
$("#jumps").onclick=e=>{const b=e.target.closest("[data-j]");if(!b)return;const j=JUMPS[b.dataset.j];closePop();flyTo(j[1],j[2],j[3])};

$("#mapCats").innerHTML=Object.keys(CATS).map(c=>`<button class="chip" aria-pressed="false" data-c="${c}"><span class="dot" style="background:${CATS[c]}"></span>${c}</button>`).join("");
$("#mapCats").onclick=e=>{const b=e.target.closest("[data-c]");if(!b)return;
  const on=b.getAttribute("aria-pressed")==="true";
  $("#mapCats").querySelectorAll("[data-c]").forEach(x=>x.setAttribute("aria-pressed","false"));
  if(on){mapCat=new Set(Object.keys(CATS))}else{b.setAttribute("aria-pressed","true");mapCat=new Set([b.dataset.c])}
  if(popSpot&&!mapCat.has(popSpot.cat))closePop(); render();};

function openPop(s){
  popSpot=s; const p=$("#pop");
  p.innerHTML=`<button class="x" aria-label="Close">×</button><h4>${esc(s.name)}</h4>
   <div class="meta">${esc(s.town)}, ${s.st} · ${esc(s.cat)}</div>
   ${s.verdict?`<p>${esc(s.verdict)}</p>`:'<div style="height:10px"></div>'}
   <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><a class="btn red" style="padding:8px 14px;font-size:14px" href="${esc(vlink(s))}" target="_blank" rel="noopener">▶ Watch review</a><a class="btn ghost" style="padding:8px 14px;font-size:14px" href="#/spot/${s.id}">Details</a></div>`;
  p.hidden=false; p.querySelector(".x").onclick=closePop;
  const r=box.getBoundingClientRect(); const px=(s.x-vb.x)*scale, py=(s.y-vb.y)*scale;
  if(py<230||px<130||px>r.width-130||py>r.height-20){ vb.x=s.x-vb.w/2; vb.y=s.y-vb.h*0.62; }
  render();
}
function closePop(){popSpot=null;$("#pop").hidden=true}
function placePop(){ if(!popSpot)return; const p=$("#pop"); p.style.left=((popSpot.x-vb.x)*scale)+"px"; p.style.top=((popSpot.y-vb.y)*scale-6)+"px"; }
function hl(id,on){ mkEls[id]?.classList.toggle("hl",on); document.querySelector(`#inView [data-id="${id}"]`)?.classList.toggle("hl",on); }

let sideKey=null;
function updateSide(){
  const inView=SPOTS.filter(s=>mapCat.has(s.cat)&&s.x>=vb.x&&s.x<=vb.x+vb.w&&s.y>=vb.y&&s.y<=vb.y+vb.h).sort((a,b)=>a.name.localeCompare(b.name));
  const key=inView.map(s=>s.id).join();
  if(key===sideKey)return; sideKey=key;
  $("#inViewCount").textContent=EMPTY?"Places I've been":`${inView.length} ${inView.length===1?"spot":"spots"} in this area`;
  $("#inView").innerHTML=inView.length?inView.map(s=>`<li><button data-id="${s.id}">${badge(s)}<span><span class="nm">${esc(s.name)}</span><span class="tw">${esc(s.town)}, ${s.st} · ${s.cat}</span></span></button></li>`).join("")
   :(EMPTY?`<li class="empty"><strong style="color:var(--text)">Reviews coming soon.</strong><br>I'm pinning every place I've been. Follow along on <a href="${IG}" target="_blank" rel="noopener">Instagram</a> or <a href="#/next">tell me where to go</a>.</li>`:`<li class="empty">No spots here yet. Zoom out, or <a href="#/next">tell me where to go</a>.</li>`);
}
$("#inView").addEventListener("click",e=>{const b=e.target.closest("[data-id]");if(b)openPop(SPOTS.find(s=>s.id===b.dataset.id))});
$("#inView").addEventListener("pointerover",e=>{const b=e.target.closest("[data-id]");if(b)hl(b.dataset.id,true)});
$("#inView").addEventListener("pointerout",e=>{const b=e.target.closest("[data-id]");if(b)hl(b.dataset.id,false)});
new ResizeObserver(()=>render()).observe(box);
if(EMPTY){ $("#mapSoon").hidden=false; $(".side-h small").textContent="Jump to an area"; $("#mapCats").style.display="none"; $("#mapHint").hidden=true;
  $("#dirLede").textContent="The map is ready. The pins are coming soon: every place I've been, each linked to my review.";
  $("#mapSoon .x").onclick=()=>{$("#mapSoon").hidden=true;$("#mapHint").hidden=false};
  $("#mapSoon").addEventListener("pointerdown",e=>e.stopPropagation()); }

/* ===================== LIST ===================== */
const cats=Object.keys(CATS), sts=Object.keys(STATES);
$("#fst").innerHTML+=sts.map(s=>`<option value="${s}">${STATES[s]}</option>`).join("");
$("#fcat").innerHTML+=cats.map(c=>`<option>${c}</option>`).join("");
function renderList(){
  if(EMPTY){ $("#listPane .filters").style.display="none"; $("#fcount").textContent="";
    $("#frows").outerHTML=`<div id="frows" class="soon-block"><h3>Reviews coming soon</h3><p>Every place I've been will be listed here, searchable by town, state and food, with a link to the review.</p><a class="btn red" href="${IG}" target="_blank" rel="noopener">Follow for updates</a></div>`; return; }
  const q=$("#fq").value.trim().toLowerCase(), st=$("#fst").value, c=$("#fcat").value, hit=$("#fhit").checked;
  let r=SPOTS.filter(s=>(!q||[s.name,s.town,s.cat,...(s.order||[])].join(" ").toLowerCase().includes(q))&&(!st||s.st===st)&&(!c||s.cat===c)&&(!hit||s.hit));
  r.sort((a,b)=>a.name.localeCompare(b.name));
  $("#fcount").textContent=`${r.length} of ${SPOTS.length} places`;
  $("#frows").innerHTML=r.length?r.map(rowHTML).join("")
   :`<p class="empty">Nothing matches those filters. Try removing one, or <a href="#/next">suggest a spot</a>.</p>`;
}
const rowHTML = s => `<a class="rowi" href="#/spot/${s.id}">${badge(s)}<span><span class="nm">${esc(s.name)}</span>${s.hit?' <span class="tag" style="background:var(--frosting);color:#161616">Hit list</span>':''}<br><span class="tw">${esc(s.town)}, ${s.st} · ${esc(s.cat)}</span></span><span class="tag go">View review ›</span></a>`;
["fq","fst","fcat","fhit"].forEach(id=>$("#"+id).addEventListener("input",renderList));
renderList();
function tab(which){
  $("#tabMap").setAttribute("aria-selected",which==="map");$("#tabList").setAttribute("aria-selected",which==="list");
  $("#mapPane").hidden=which!=="map";$("#listPane").hidden=which!=="list"; if(which==="map")render();
}
$("#tabMap").onclick=()=>tab("map");$("#tabList").onclick=()=>tab("list");

/* ===================== HIT LIST ===================== */
const hitCard = s => `<a class="hit" href="#/spot/${s.id}"><div class="art" style="background:${BG[s.cat]}">${art(s.cat)}</div><div class="bd"><div class="nm">${esc(s.name)}</div><div class="tw">${esc(s.town)}, ${s.st} · ${esc(s.cat)}</div>${s.verdict?`<q>${esc(s.verdict)}</q>`:""}</div></a>`;
const SOON_HITS=`<div class="soon-block" style="grid-column:1/-1"><h3>The hit list is coming soon</h3><p>My top recommendations across New England, the places worth a two-hour drive. Follow along on Instagram to see them as they drop.</p><a class="btn red" href="${IG}" target="_blank" rel="noopener">Follow for updates</a></div>`;
const hitsNow=SPOTS.filter(s=>s.hit);
$("#hitPreview").innerHTML=hitsNow.length?hitsNow.slice(0,4).map(hitCard).join(""):SOON_HITS;
if(!hitsNow.length){ $("#hlCats").style.display="none"; $("#hlStates").style.display="none"; }
let hlCat="",hlSt="";
$("#hlCats").innerHTML=`<button class="chip" aria-pressed="true" data-c="">All food</button>`+cats.filter(c=>SPOTS.some(s=>s.hit&&s.cat===c)).map(c=>`<button class="chip" aria-pressed="false" data-c="${c}"><span class="dot" style="background:${CATS[c]}"></span>${c}</button>`).join("");
$("#hlStates").innerHTML=`<button class="chip" aria-pressed="true" data-s="">All states</button>`+sts.filter(t=>SPOTS.some(s=>s.hit&&s.st===t)).map(t=>`<button class="chip" aria-pressed="false" data-s="${t}">${STATES[t]}</button>`).join("");
function renderHits(){const r=SPOTS.filter(s=>s.hit&&(!hlCat||s.cat===hlCat)&&(!hlSt||s.st===hlSt));
  $("#hitAll").innerHTML=r.length?r.map(hitCard).join(""):(hitsNow.length?`<p class="empty">No hit list spots for that combo yet.</p>`:SOON_HITS)}
$("#hlCats").onclick=e=>{const b=e.target.closest("[data-c]");if(!b)return;hlCat=b.dataset.c;$("#hlCats").querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x===b));renderHits()};
$("#hlStates").onclick=e=>{const b=e.target.closest("[data-s]");if(!b)return;hlSt=b.dataset.s;$("#hlStates").querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x===b));renderHits()};
renderHits();

/* ===================== SPOT PAGE ===================== */
function renderSpot(id){
  const s=SPOTS.find(x=>x.id===id); const el=$("#spotBody");
  if(!s){el.innerHTML=`<a class="back" href="#/">‹ Back to the map</a><p>That spot isn't on the map. <a href="#/">See all spots</a>.</p>`;return}
  const near=SPOTS.filter(x=>x.id!==s.id).map(x=>({x,d:Math.hypot(x.lat-s.lat,(x.lng-s.lng)*0.73)})).sort((a,b)=>a.d-b.d).slice(0,3).map(o=>o.x);
  const q=encodeURIComponent(`${s.name} ${s.town} ${STATES[s.st]}`);
  el.innerHTML=`<a class="back" href="#/">‹ Back to the map</a>
   <div class="spot-head">${badge(s).replace('class="badge"','class="badge" style="width:64px;height:64px;border-radius:16px;background:'+(BG[s.cat]||"var(--soft)")+'"')}<div><h1>${esc(s.name)}</h1><div class="tw">${esc(s.town)}, ${STATES[s.st]||s.st} · ${esc(s.cat)}${s.hit?' · <strong style="color:var(--sauce)">On the hit list</strong>':''}</div></div></div>
   <div class="spot-grid">
     <div class="vid"><div class="art">${ICON[s.cat]?art(s.cat,"#161616"):""}</div><div class="cap">My ${esc(s.name)} review</div><a class="btn" href="${esc(vlink(s))}" target="_blank" rel="noopener">▶ Watch the review</a></div>
     <div>
       ${s.verdict?`<p class="verdict">“${esc(s.verdict)}”</p>`:""}
       ${s.order&&s.order.length?`<h3 class="sub">What to order</h3><ol class="order">${s.order.map((o,i)=>`<li><b>${i+1}</b>${esc(o)}</li>`).join("")}</ol>`:""}
       ${s.tags&&s.tags.length?`<div class="facts"><div><small>Good to know</small><strong>${s.tags.map(esc).join(", ")}</strong></div></div>`:""}
       <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:34px"><a class="btn red" href="${esc(vlink(s))}" target="_blank" rel="noopener">▶ Watch the review</a><a class="btn ghost" href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">Get directions</a></div>
       ${near.length?`<h3 class="sub">Nearby on the map</h3><div class="rows">${near.map(rowHTML).join("")}</div>`:""}
     </div>
   </div>`;
}

/* ===================== BLOG ===================== */
function mdInline(t){
  return esc(t)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g,(m,alt,u)=>`<img src="${u}" alt="${alt}" loading="lazy">`)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(m,txt,u)=>`<a href="${u}"${/^https?:/.test(u)?' target="_blank" rel="noopener"':''}>${txt}</a>`)
    .replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g,"<em>$1</em>");
}
function md(text){
  return String(text).trim().split(/\n\s*\n/).map(block=>{
    const b=block.trim(), lines=b.split("\n");
    if(b.startsWith("## ")) return `<h2>${mdInline(b.slice(3))}</h2>`;
    if(lines.every(l=>/^\s*-\s+/.test(l))) return `<ul>${lines.map(l=>`<li>${mdInline(l.replace(/^\s*-\s+/,""))}</li>`).join("")}</ul>`;
    if(/^!\[[^\]]*\]\([^)]+\)$/.test(b)) return `<figure>${mdInline(b)}</figure>`;
    return `<p>${mdInline(lines.join(" "))}</p>`;
  }).join("");
}
const fmt=d=>new Date(d+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});
function renderBlog(slug){
  const el=$("#blogBody"); const posts=[...POSTS].sort((a,b)=>b.date.localeCompare(a.date));
  const p=slug&&posts.find(x=>x.slug===slug);
  if(slug&&!p){el.innerHTML=`<a class="back" href="#/blog">‹ All posts</a><p>That post doesn't exist. <a href="#/blog">See all posts</a>.</p>`;return}
  if(p){
    const body=Array.isArray(p.body)?p.body.join("\n\n"):p.body;
    el.innerHTML=`<a class="back" href="#/blog">‹ All posts</a><article class="post"><time>${fmt(p.date)}</time><h1>${esc(p.title)}</h1>${md(body)}<p class="signoff">Love you, XOXO</p></article>`;
    document.title=`${p.title} · Kasey Feasts`; return;
  }
  el.innerHTML=`<h2 class="big">Blog</h2><p class="lede">Longer takes, road trips and news from the road.</p><div class="posts" style="margin-top:26px">${posts.map(p=>`<a class="post-row" href="#/blog/${p.slug}"><time>${fmt(p.date)}</time><div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt||p.ex||"")}</p></div></a>`).join("")}</div>`;
}

/* ===================== ROUTER ===================== */
function route(){
  const h=location.hash||"#/";
  if(!h.startsWith("#/")) return;  // in-page anchors like #directory
  const [,a,b]=h.split("/");
  const view = !a ? "home" : a==="spot" ? "spot" : a;
  const known=["home","hitlist","spot","blog","about","work","next"];
  const v=known.includes(view)?view:"home";
  document.querySelectorAll("[data-view]").forEach(s=>s.hidden=s.dataset.view!==v);
  document.querySelectorAll("nav.main a[data-r]").forEach(l=>l.toggleAttribute("aria-current",false));
  const cur=document.querySelector(`nav.main a[data-r="${v==="home"?"":v}"]`); if(cur&&v!=="spot") cur.setAttribute("aria-current","page");
  if(v==="spot") renderSpot(b);
  document.title="Kasey Feasts — New England food, honestly reviewed";
  if(v==="blog") renderBlog(b);
  if(v==="home") { closePop(); render(); }
  $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded","false");
  window.scrollTo(0,0);
}
addEventListener("hashchange",route);
$("#menuBtn").onclick=()=>{const o=$("#nav").classList.toggle("open");$("#menuBtn").setAttribute("aria-expanded",o)};
document.addEventListener("click",e=>{const a=e.target.closest('a[href="#directory"]');if(!a)return;e.preventDefault();
  if(a.getAttribute("href")==="#directory"&&$('[data-view="home"]').hidden){location.hash="#/";setTimeout(()=>$("#directory").scrollIntoView({behavior:"smooth"}),50);return}
  document.querySelector(a.getAttribute("href")).scrollIntoView({behavior:"smooth"}); $("#nav").classList.remove("open");});
route();

/* ===================== FORMS → EMAIL ===================== */
const MAIL = "kaseyfeasts@delmgmt.com";
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
$("#copyMail").onclick=async()=>{const b=$("#copyMail");try{await navigator.clipboard.writeText("kaseyfeasts@delmgmt.com");b.textContent="Copied!"}catch{b.textContent="kaseyfeasts@delmgmt.com"}setTimeout(()=>b.textContent="Copy address",2200)};
