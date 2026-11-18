// ============================================================
//  REGIONS: the three choices on the "I'M HERE FOR" page.
//  Each one has its own pages: /newengland/  /hongkong/  /global/
//
//  Which restaurants each region shows (set in the admin):
//    New England -> restaurants with the hidden "New England" box ticked
//    Hong Kong   -> restaurants whose Country is "Hong Kong"
//    Global      -> every restaurant
//  Food item rankings and series follow the restaurant they belong to.
//
//  view / jumps: [label, longitude, latitude, backupMapZoom, streetMapZoom]
//  The street map zooms from the whole world (about 1) down to street level (about 18).
// ============================================================
const IG = "https://www.instagram.com/kaseyfeasts";

// Detailed street map style (free, no account needed: openfreemap.org).
// Other light styles: ".../styles/positron" (grey) or ".../styles/bright".
// Set to "" to use the simple built-in map instead.
const MAP_STYLE = "https://tiles.openfreemap.org/styles/liberty";

const ABOUT_POLICY = "Restaurants can’t buy a review. I don’t take free food and I pay for all my own meals.";

const REGIONS = {
  newengland: {
    name: "New England",
    rankExample: "glazed donuts in NH, MA and ME",   // used on the Food Item Rankings page
    hero: "Independent reviews of New England's best donuts, sandwiches and pizza. Nobody pays for my opinion. If it's on the map, I ate there and the review is one tap away.",
    about: [
      "I drive around New England eating donuts, sandwiches, pizza, and more. Then I tell you which ones are worth the trip. Massachusetts and New Hampshire are home base. I take road trips to Maine, Vermont, Rhode Island and Connecticut as often as possible.",
      "Every review is my own money and my own opinion. If a place isn’t good, it doesn’t make the map."
    ],
    color: "#D93A2B", text: "#FFFFFF",
    view: [-71.3, 43.4, 19, 5.6],
    jumps: [["All New England",-71.3,43.4,19,5.6],["Boston area",-71.1,42.36,65,9.6],["North Shore & Seacoast",-70.85,42.85,45,8.6],["Cape Cod",-70.3,41.75,45,8.4],["Maine coast",-69.8,43.9,25,7],["Vermont",-72.7,44,28,7.3],["RI & CT",-72.2,41.6,35,8]]
  },
  hongkong: {
    name: "Hong Kong",
    rankExample: "dim sum in Central, Wan Chai and Jordan",   // used on the Food Item Rankings page
    hero: "Independent reviews from Hong Kong. Nobody pays for my opinion. If it's on the map, I ate there and the review is one tap away.",
    about: [
      "I live part-time in Hong Kong and when I am here I spend as much time eating and learning about the local food culture as possible. I also visit many of the western-style food spots so I can stress test how good they actually are. I record all experiences and then I tell you which ones are worth the trip, the hype, and your money.",
      "Every review is my own money and my own opinion. If a place isn’t good, it doesn’t make the map."
    ],
    color: "#E8679A", text: "#161616",
    view: [114.12, 22.36, 100, 9.8],
    jumps: [["All Hong Kong",114.12,22.36,100,9.8],["Hong Kong Island",114.18,22.27,420,11.8],["Kowloon",114.18,22.32,420,12.2],["New Territories",114.12,22.42,230,10.6],["Lantau",113.95,22.26,260,11]]
  },
  global: {
    name: "Global",
    rankExample: "ramen, taiyaki and tsukemen in Tokyo and Kyoto",   // used on the Food Item Rankings page
    hero: "Independent reviews from everywhere I eat. Nobody pays for my opinion. If it's on the map, I ate there and the review is one tap away.",
    about: [
      "When I travel globally I spend as much time eating and learning about the local food culture as possible regardless of where I am. I also visit many of the American-style food spots so I can stress test how good they actually are in other countries. I record all experiences and then I tell you which ones are worth the trip, the hype, and your money.",
      "Every review is my own money and my own opinion. If a place isn’t good, it doesn’t make the map."
    ],
    color: "#E9A923", text: "#161616",
    view: [-30, 30, 0.55, 1.6],
    jumps: [["World",-30,30,0.55,1.6],["North America",-98,40,1.6,3],["Europe",15,50,2.4,3.6],["Asia",105,30,1.4,2.8],["South America",-60,-15,1.6,2.8],["Africa",20,5,1.6,2.8],["Oceania",145,-25,1.8,3.2]]
  }
};
const REGION_ORDER = ["newengland", "hongkong", "global"];
