// ============================================================
//  SERIES: the named video series.
//  region: "newengland" or "hongkong" shows the series in that section
//          (and in Global). "global" shows it in Global only.
//  Episodes are added in the admin: on a restaurant's food category,
//  pick the series and its episode number.
//  The id is used in the web address (/newengland/series/<id>), so
//  don't change it once episodes are attached.
// ============================================================
const SERIES = [
  { id: "gweilo-grub",            name: "Gweilo Grub: Eating around HK in 100 Meals", region: "hongkong" },
  { id: "best-donuts",            name: "Hunt for New England’s Best Donuts",         region: "newengland" },
  { id: "best-pizza",             name: "Hunt for New England’s Best Pizza",          region: "newengland" },
  { id: "best-sandwiches",        name: "Hunt for New England’s Best Sandwiches",     region: "newengland" },
  { id: "london-burger-tour",     name: "London Burger Tour",                         region: "global" },
];
