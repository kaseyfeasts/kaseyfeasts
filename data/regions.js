// ============================================================
//  REGIONS: the three choices on the "I'M HERE FOR" page.
//  Each one has its own pages: /newengland/  /hongkong/  /global/
//
//  Which restaurants each region shows (set in the admin):
//    New England -> restaurants with the hidden "New England" box ticked
//    Hong Kong   -> restaurants whose Country is "Hong Kong"
//    Global      -> every restaurant
//  Food item rankings follow the restaurant they belong to.
//
//  view / jumps: [label, longitude, latitude, zoom] for the map.
// ============================================================
const IG = "https://www.instagram.com/kaseyfeasts/";

const REGIONS = {
  newengland: {
    name: "New England",
    coords: "42.36° N · 71.06° W",
    tagline: "Donuts, sandwiches and pizza across MA, NH and beyond.",
    hero: "Independent reviews of New England's best donuts, sandwiches and pizza. Nobody pays for my opinion. If it's on the map, I ate there and the review is one tap away.",
    color: "#D93A2B", text: "#FFFFFF",
    view: [-70.9, 43.1, 19],
    jumps: [["All New England",-70.9,43.1,19],["Boston area",-71.15,42.38,65],["North Shore & Seacoast",-70.85,42.85,45],["Cape Cod",-70.3,41.75,45],["Maine coast",-69.8,43.9,25],["Vermont",-72.7,44,28],["RI & CT",-72.2,41.6,35]]
  },
  hongkong: {
    name: "Hong Kong",
    coords: "22.32° N · 114.17° E",
    tagline: "Eating my way around Hong Kong, one neighborhood at a time.",
    hero: "Independent reviews from Hong Kong. Nobody pays for my opinion. If it's on the map, I ate there and the review is one tap away.",
    color: "#E8679A", text: "#161616",
    view: [114.1, 22.37, 100],
    jumps: [["All Hong Kong",114.1,22.37,100],["Hong Kong Island",114.18,22.27,420],["Kowloon",114.18,22.32,420],["New Territories",114.12,22.42,230],["Lantau",113.95,22.26,260]]
  },
  global: {
    name: "Global",
    coords: "Everywhere",
    tagline: "Every place I've eaten, all over the world.",
    hero: "Independent reviews from everywhere I eat. Nobody pays for my opinion. If it's on the map, I ate there and the review is one tap away.",
    color: "#E9A923", text: "#161616",
    spin: true,   // the globe slowly turns until someone touches it
    view: [-40, 24, 1],
    jumps: [["World",-40,24,1],["North America",-98,40,2.4],["Europe",15,48,3],["Asia",105,30,2.2],["South America",-60,-15,2.6],["Africa",20,5,2.6],["Oceania",145,-23,2.8]]
  }
};
const REGION_ORDER = ["newengland", "hongkong", "global"];
