// Food item rankings managed by Kasey Feasts Admin.
const ITEMS = [
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
