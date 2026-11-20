// Food item rankings managed by Kasey Feasts Admin.
const ITEMS = [
  {
    "id": "marinated-steak-tip-sub-la-cascia-s-bakery",
    "name": "Marinated Steak Tip Sub",
    "rating": 95,
    "cat": "Sandwich (Sub)",
    "sub": "Steak Tip",
    "spot": "la-cascia-s-bakery"
  },
  {
    "id": "italian-sub-la-cascia-s-bakery",
    "name": "Italian Sub",
    "rating": 95,
    "cat": "Sandwich (Sub)",
    "sub": "Italian Cold Cut",
    "spot": "la-cascia-s-bakery"
  },
  {
    "id": "italian-martone-s-market-cafe",
    "name": "Italian",
    "rating": 62.5,
    "cat": "Sandwich",
    "sub": "Italian Cold Cut",
    "spot": "martone-s-market-cafe"
  },
  {
    "id": "vermonter-martone-s-market-cafe",
    "name": "Vermonter",
    "rating": 72.5,
    "cat": "Sandwich",
    "sub": "Other",
    "spot": "martone-s-market-cafe"
  },
  {
    "id": "italian-hoagie-ida",
    "name": "Italian Hoagie",
    "rating": 95,
    "cat": "Sandwich (Sub)",
    "sub": "Italian Cold Cut",
    "spot": "ida"
  },
  {
    "id": "aunty-ann-poppy-cafe-market",
    "name": "Aunty Ann",
    "rating": 75,
    "cat": "Sandwich",
    "sub": "Other",
    "spot": "poppy-cafe-market"
  },
  {
    "id": "the-po-poppy-cafe-market",
    "name": "The Po",
    "rating": 87.5,
    "cat": "Sandwich",
    "sub": "Other",
    "spot": "poppy-cafe-market"
  },
  {
    "id": "hot-italian-gill-s-delicatessen",
    "name": "Hot Italian",
    "rating": 72.5,
    "cat": "Sandwich (Sub)",
    "sub": "Italian Cold Cut",
    "spot": "gill-s-delicatessen"
  },
  {
    "id": "the-roman-gold-calisto-s",
    "name": "The Roman Gold",
    "rating": 77.5,
    "cat": "Sandwich (Sub)",
    "sub": "Chicken Cutlet",
    "spot": "calisto-s"
  },
  {
    "id": "the-south-end-calisto-s",
    "name": "The South End",
    "rating": 80,
    "cat": "Sandwich (Sub)",
    "sub": "Other",
    "spot": "calisto-s"
  },
  {
    "id": "inferno-gusto-italian-cafe",
    "name": "Inferno",
    "rating": 92.5,
    "cat": "Sandwich (Breakfast)",
    "sub": "Meat Egg Cheese",
    "spot": "gusto-italian-cafe"
  },
  {
    "id": "milano-gusto-italian-cafe",
    "name": "Milano",
    "rating": 100,
    "cat": "Sandwich",
    "sub": "Chicken Cutlet",
    "spot": "gusto-italian-cafe"
  },
  {
    "id": "steak-cheese-benny-s-fresh-eats-market",
    "name": "Steak & Cheese",
    "rating": 62.5,
    "cat": "Sandwich (Sub)",
    "sub": "Steak & Cheese",
    "spot": "benny-s-fresh-eats-market"
  },
  {
    "id": "the-barnyard-sammy-benny-s-fresh-eats-market",
    "name": "The Barnyard Sammy",
    "rating": 87.5,
    "cat": "Sandwich (Breakfast)",
    "sub": "Meat Egg Cheese",
    "spot": "benny-s-fresh-eats-market"
  },
  {
    "id": "fiery-chipotle-gilford-village-store",
    "name": "Fiery Chipotle",
    "rating": 75,
    "cat": "Sandwich",
    "sub": "Other",
    "spot": "gilford-village-store"
  },
  {
    "id": "outing-club-gilford-village-store",
    "name": "Outing Club",
    "rating": 77.5,
    "cat": "Sandwich",
    "sub": "Turkey Club",
    "spot": "gilford-village-store"
  },
  {
    "id": "the-fancy-mike-patty-s",
    "name": "The Fancy",
    "rating": 87.5,
    "cat": "Sandwich (Breakfast)",
    "sub": "Meat Egg Cheese",
    "spot": "mike-patty-s"
  },
  {
    "id": "carolina-caviar-mike-patty-s",
    "name": "Carolina Caviar",
    "rating": 90,
    "cat": "Sandwich (Breakfast)",
    "sub": "Meat Egg Cheese",
    "spot": "mike-patty-s"
  },
  {
    "id": "buffalo-chicken-wrap-honey-s-country-store-deli",
    "name": "Buffalo Chicken Wrap",
    "rating": 67.5,
    "cat": "Sandwich (Wrap)",
    "sub": "Buffalo Chicken",
    "spot": "honey-s-country-store-deli"
  },
  {
    "id": "roast-beef-sub-honey-s-country-store-deli",
    "name": "Roast Beef Sub",
    "rating": 70,
    "cat": "Sandwich (Sub)",
    "sub": "Other",
    "spot": "honey-s-country-store-deli"
  },
  {
    "id": "curry-chicken-salad-wrap-honey-s-country-store-deli",
    "name": "Curry Chicken Salad Wrap",
    "rating": 75,
    "cat": "Sandwich (Wrap)",
    "sub": "Other",
    "spot": "honey-s-country-store-deli"
  },
  {
    "id": "buzz-kill-the-boro-baking-co",
    "name": "Buzz Kill",
    "rating": 72.5,
    "cat": "Sandwich (Breakfast)",
    "sub": "Other Breakfast Sandwich",
    "spot": "the-boro-baking-co"
  },
  {
    "id": "underdog-the-boro-baking-co",
    "name": "Underdog",
    "rating": 75,
    "cat": "Sandwich (Breakfast)",
    "sub": "Other Breakfast Sandwich",
    "spot": "the-boro-baking-co"
  },
  {
    "id": "birch-lane-the-boro-baking-co",
    "name": "Birch Lane",
    "rating": 77.5,
    "cat": "Sandwich",
    "sub": "Other",
    "spot": "the-boro-baking-co"
  },
  {
    "id": "black-cat-the-boro-baking-co",
    "name": "Black Cat",
    "rating": 87.5,
    "cat": "Sandwich",
    "sub": "BLT",
    "spot": "the-boro-baking-co"
  },
  {
    "id": "good-ol-boy-the-boro-baking-co",
    "name": "Good Ol Boy",
    "rating": 90,
    "cat": "Sandwich (Breakfast)",
    "sub": "Meat Egg Cheese",
    "spot": "the-boro-baking-co"
  },
  {
    "id": "sausage-egg-cheese-on-english-muffin-chichester-country-store",
    "name": "Sausage Egg & Cheese on English Muffin",
    "rating": 85,
    "cat": "Sandwich (Breakfast)",
    "sub": "Grab & Go",
    "spot": "chichester-country-store"
  },
  {
    "id": "cheesesteak-on-seeded-roll-mickey-s-ny-pizza",
    "name": "Cheesesteak on Seeded Roll",
    "rating": 80,
    "cat": "Sandwich (Sub)",
    "sub": "Steak & Cheese",
    "spot": "mickey-s-ny-pizza"
  },
  {
    "id": "full-belli-sandwich-on-bulky-roll-full-belli-deli",
    "name": "Full Belli Sandwich on Bulky Roll",
    "rating": 67.5,
    "cat": "Sandwich",
    "sub": "Other",
    "spot": "full-belli-deli"
  },
  {
    "id": "everything-but-the-kitchen-sink-julie-s-kitchen",
    "name": "Everything But \"The Kitchen\" Sink",
    "rating": 80,
    "cat": "Sandwich",
    "sub": "Other",
    "spot": "julie-s-kitchen"
  },
  {
    "id": "turkey-blt-julie-s-kitchen",
    "name": "Turkey BLT",
    "rating": 80,
    "cat": "Sandwich",
    "sub": "BLT",
    "spot": "julie-s-kitchen"
  },
  {
    "id": "pastrami-reuben-julie-s-kitchen",
    "name": "Pastrami Reuben",
    "rating": 82.5,
    "cat": "Sandwich",
    "sub": "Reuben",
    "spot": "julie-s-kitchen"
  },
  {
    "id": "steak-cheese-melt-julie-s-kitchen",
    "name": "Steak & Cheese Melt",
    "rating": 90,
    "cat": "Sandwich",
    "sub": "Steak & Cheese",
    "spot": "julie-s-kitchen"
  },
  {
    "id": "jimmy-s-chicken-cutlet-borrelli-s-italian-deli",
    "name": "Jimmy's Chicken Cutlet",
    "rating": 80,
    "cat": "Sandwich (Sub)",
    "sub": "Chicken Cutlet",
    "spot": "borrelli-s-italian-deli"
  },
  {
    "id": "chicken-caesar-salad-wrap-the-shop-at-dovetail",
    "name": "Chicken Caesar Salad Wrap",
    "rating": 67.5,
    "cat": "Sandwich (Wrap)",
    "sub": "Chicken Caesar",
    "spot": "the-shop-at-dovetail"
  },
  {
    "id": "spicy-italian-the-shop-at-dovetail",
    "name": "Spicy Italian",
    "rating": 72.5,
    "cat": "Sandwich",
    "sub": "Italian Cold Cut",
    "spot": "the-shop-at-dovetail"
  },
  {
    "id": "ribeye-steak-and-cheese-square-deli-pizzeria",
    "name": "Ribeye Steak and Cheese",
    "rating": 95,
    "cat": "Sandwich (Sub)",
    "sub": "Steak & Cheese",
    "spot": "square-deli-pizzeria"
  },
  {
    "id": "steak-cheese-w-onion-mayo-sub-crazy",
    "name": "Steak & Cheese (w/ Onion & Mayo)",
    "rating": 77.5,
    "cat": "Sandwich (Sub)",
    "sub": "Steak & Cheese",
    "spot": "sub-crazy"
  },
  {
    "id": "chef-pete-s-famous-meatball-sub-crazy",
    "name": "Chef Pete’s Famous Meatball",
    "rating": 72.5,
    "cat": "Sandwich (Sub)",
    "sub": "Meatball",
    "spot": "sub-crazy"
  },
  {
    "id": "italian-sub-sub-crazy",
    "name": "Italian Sub",
    "rating": 75,
    "cat": "Sandwich (Sub)",
    "sub": "Italian Cold Cut",
    "spot": "sub-crazy"
  },
  {
    "id": "bada-bing-sub-crazy",
    "name": "BADA BING",
    "rating": 82.5,
    "cat": "Sandwich (Sub)",
    "sub": "Chicken Cutlet",
    "spot": "sub-crazy"
  },
  {
    "id": "la-paradiso-all-antico-vinaio",
    "name": "La Paradiso",
    "rating": 75,
    "cat": "Sandwich",
    "sub": "Italian Cold Cut",
    "spot": "all-antico-vinaio"
  },
  {
    "id": "panino-bricco-salumeria-pasta-shop",
    "name": "Panino",
    "rating": 92.5,
    "cat": "Sandwich",
    "sub": "Italian Cold Cut",
    "spot": "bricco-salumeria-pasta-shop"
  },
  {
    "id": "mortadella-focaccia-sandwich-bricco-salumeria-pasta-shop",
    "name": "Mortadella Focaccia Sandwich",
    "rating": 85,
    "cat": "Sandwich",
    "sub": "Italian Cold Cut",
    "spot": "bricco-salumeria-pasta-shop"
  },
  {
    "id": "sonny-corleone-figaro-s",
    "name": "Sonny Corleone",
    "rating": 85,
    "cat": "Sandwich (Wrap)",
    "sub": "Other",
    "spot": "figaro-s"
  },
  {
    "id": "the-two-timer-figaro-s",
    "name": "The Two-Timer",
    "rating": 97.5,
    "cat": "Sandwich",
    "sub": "Steak & Cheese",
    "spot": "figaro-s"
  },
  {
    "id": "goodfella-figaro-s",
    "name": "Goodfella",
    "rating": 92.5,
    "cat": "Sandwich",
    "sub": "Italian Cold Cut",
    "spot": "figaro-s"
  },
  {
    "id": "vodka-parmesan-table-mercato",
    "name": "Vodka Parmesan",
    "rating": 90,
    "cat": "Sandwich (Sub)",
    "sub": "Chicken Cutlet",
    "spot": "table-mercato"
  },
  {
    "id": "the-table-table-mercato",
    "name": "The TABLE",
    "rating": 92.5,
    "cat": "Sandwich",
    "sub": "Chicken Cutlet",
    "spot": "table-mercato"
  },
  {
    "id": "pepperoni-pizza-monte-s-fine-foods",
    "name": "Pepperoni Pizza",
    "rating": 95,
    "cat": "Pizza",
    "sub": "Roman Style Pizza",
    "spot": "monte-s-fine-foods"
  },
  {
    "id": "pepperoni-pizza-peng-s-pizza-pies",
    "name": "Pepperoni Pizza",
    "rating": 87.5,
    "cat": "Pizza",
    "sub": "New Haven Style apizza",
    "spot": "peng-s-pizza-pies"
  },
  {
    "id": "spicy-honey-pickled-jalapeno-pizza-peng-s-pizza-pies",
    "name": "Spicy Honey & Pickled Jalapeño Pizza",
    "rating": 90,
    "cat": "Pizza",
    "sub": "New Haven Style apizza",
    "spot": "peng-s-pizza-pies"
  },
  {
    "id": "pepperoni-margherita-pizza-the-parker-pie-company",
    "name": "Pepperoni Margherita Pizza",
    "rating": 77.5,
    "cat": "Pizza",
    "sub": "Other Pizza Style",
    "spot": "the-parker-pie-company"
  },
  {
    "id": "pepperoni-pizza-american-flatbread",
    "name": "Pepperoni Pizza",
    "rating": 67.5,
    "cat": "Pizza",
    "sub": "Flatbread Pizza",
    "spot": "american-flatbread"
  },
  {
    "id": "plain-pie-ida",
    "name": "Plain Pie",
    "rating": 92.5,
    "cat": "Pizza",
    "sub": "NY Style Pizza",
    "spot": "ida"
  },
  {
    "id": "pepperoni-pizza-tartaglia-s-pizza",
    "name": "Pepperoni Pizza",
    "rating": 72.5,
    "cat": "Pizza",
    "sub": "Other Pizza Style",
    "spot": "tartaglia-s-pizza"
  },
  {
    "id": "sausage-pizza-brewer-s-fork",
    "name": "Sausage Pizza",
    "rating": 70,
    "cat": "Pizza",
    "sub": "Other Pizza Style",
    "spot": "brewer-s-fork"
  },
  {
    "id": "killa-b-brewer-s-fork",
    "name": "Killa B",
    "rating": 80,
    "cat": "Pizza",
    "sub": "Other Pizza Style",
    "spot": "brewer-s-fork"
  },
  {
    "id": "pepperoni-pizza-garlic-breath-pizza",
    "name": "Pepperoni Pizza",
    "rating": 90,
    "cat": "Pizza",
    "sub": "NY Style Pizza",
    "spot": "garlic-breath-pizza"
  },
  {
    "id": "pepperoni-vodka-sauce-pesto-pizza-mickey-s-ny-pizza",
    "name": "Pepperoni Vodka Sauce & Pesto Pizza",
    "rating": 65,
    "cat": "Pizza",
    "sub": "Sicilian Style Pizza",
    "spot": "mickey-s-ny-pizza"
  },
  {
    "id": "buffalo-chicken-pizza-mickey-s-ny-pizza",
    "name": "Buffalo Chicken Pizza",
    "rating": 70,
    "cat": "Pizza",
    "sub": "NY Style Pizza",
    "spot": "mickey-s-ny-pizza"
  },
  {
    "id": "pepperoni-pizza-vintage-pizza",
    "name": "Pepperoni Pizza",
    "rating": 77.5,
    "cat": "Pizza",
    "sub": "New England Italian-American Style Pizza",
    "spot": "vintage-pizza"
  },
  {
    "id": "pepperoni-pizza-square-deli-pizzeria",
    "name": "Pepperoni Pizza",
    "rating": 95,
    "cat": "Pizza",
    "sub": "NY Style Pizza",
    "spot": "square-deli-pizzeria"
  },
  {
    "id": "pepperoni-pizza-la-festa-brick-brew",
    "name": "Pepperoni Pizza",
    "rating": 82.5,
    "cat": "Pizza",
    "sub": "Other Pizza Style",
    "spot": "la-festa-brick-brew"
  },
  {
    "id": "pepperoni-pizza-pizza-lisa",
    "name": "Pepperoni Pizza",
    "rating": 82.5,
    "cat": "Pizza",
    "sub": "New England Italian-American Style Pizza",
    "spot": "pizza-lisa"
  },
  {
    "id": "pepperoni-pizza-pie-guys-pizzeria",
    "name": "Pepperoni Pizza",
    "rating": 62.5,
    "cat": "Pizza",
    "sub": "New England Italian-American Style Pizza",
    "spot": "pie-guys-pizzeria"
  },
  {
    "id": "pepperoni-pizza-tilton-house-of-pizza",
    "name": "Pepperoni Pizza",
    "rating": 67.5,
    "cat": "Pizza",
    "sub": "New England Greek Style Pizza",
    "spot": "tilton-house-of-pizza"
  },
  {
    "id": "pepperoni-pizza-joanie-s-pizza",
    "name": "Pepperoni Pizza",
    "rating": 87.5,
    "cat": "Pizza",
    "sub": "NY Style Pizza",
    "spot": "joanie-s-pizza"
  },
  {
    "id": "pepperoni-pizza-elvio-s-pizzeria",
    "name": "Pepperoni Pizza",
    "rating": 70,
    "cat": "Pizza",
    "sub": "New England Italian-American Style Pizza",
    "spot": "elvio-s-pizzeria"
  }
];
