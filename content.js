// ============================================================
//  PLACES: add the spots you've reviewed here.
//  (Blog posts live in data/posts.js.)
//
//  While SPOTS is empty, the map, list and hit list show
//  "coming soon". As soon as you add one place, they switch on.
//
//  Place fields:
//    id     unique, url-safe (used in the link: #/spot/<id>)
//    name, town, st (MA, NH, ME, VT, RI, CT)
//    lat/lng  right-click the place in Google Maps to copy them
//    cat    Donuts | Sandwiches | Pizza | Bakery | Seafood
//    video  link to your review (Instagram/TikTok)
//    hit    true = also show on the Hit List
//    verdict, order, tags   optional extras
// ============================================================
const IG = "https://www.instagram.com/kaseyfeasts/";
const CATS = {Donuts:"var(--frosting)",Sandwiches:"var(--mustard)",Pizza:"var(--sauce)",Bakery:"var(--basil)",Seafood:"var(--other)"};
const STATES = {MA:"Massachusetts",NH:"New Hampshire",ME:"Maine",VT:"Vermont",RI:"Rhode Island",CT:"Connecticut"};
const SPOTS = [
 // Add places here as you go. Only name, town, st, lat, lng and cat are required.
 // {id:"pizza-place", name:"Pizza Place", town:"Somerville", st:"MA", lat:42.395, lng:-71.101,
 //  cat:"Pizza", video:"https://www.instagram.com/reel/XXXX/", hit:false,
 //  verdict:"One line about it (optional)", order:["What to get (optional)"], tags:["Cash only (optional)"]},
];
