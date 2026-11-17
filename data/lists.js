// ============================================================
//  DROPDOWN LISTS used by the admin panel and the website filters.
//  Edit these to match your own lists. Order here = order in menus.
//  Anything missing can also be typed in the admin with "Other…".
//  NOTE: the cities and food sub-categories below are STARTER
//  examples. Replace them with your real lists.
// ============================================================

// Countries (United States and Hong Kong first, then A to Z)
const COUNTRIES = [
    "United States", "Hong Kong", "Afghanistan", "Albania", "Algeria", "American Samoa",
    "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
    "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Brazil",
    "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile",
    "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo",
    "Congo, The Democratic Republic of the", "Cook Islands", "Costa Rica", "Croatia", "Cuba",
    "Cura\u00e7ao", "Cyprus", "Czechia", "C\u00f4te d'Ivoire", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (Malvinas)",
    "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada",
    "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Holy See (Vatican City State)", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica",
    "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico",
    "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue",
    "Norfolk Island", "North Korea", "North Macedonia", "Northern Mariana Islands", "Norway",
    "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico",
    "Qatar", "Romania", "Russian Federation", "Rwanda", "R\u00e9union",
    "Saint Barth\u00e9lemy", "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)",
    "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
    "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu",
    "T\u00fcrkiye", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay",
    "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands, British",
    "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia",
    "Zimbabwe", "\u00c5land Islands"
];

// States / regions for each country
const STATES = {
  "United States": [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
    "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
    "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming"
  ],
  "Hong Kong": ["Hong Kong Island", "Kowloon", "New Territories", "Outlying Islands"],
};

// The states that count as New England (used to pre-tick the
// hidden "New England" box in the admin; you can still change it)
const NEW_ENGLAND_STATES = ["Connecticut", "Maine", "Massachusetts", "New Hampshire", "Rhode Island", "Vermont"];

// Cities / districts for each state or region (STARTER LIST)
const CITIES = {
  "Massachusetts": ["Boston", "Brookline", "Cambridge", "Gloucester", "Lowell", "Newton", "Plymouth", "Quincy", "Salem", "Somerville", "Springfield", "Worcester"],
  "New Hampshire": ["Concord", "Dover", "Hampton", "Manchester", "Nashua", "North Conway", "Portsmouth", "Salem"],
  "Maine": ["Bar Harbor", "Bangor", "Kennebunkport", "Ogunquit", "Portland"],
  "Vermont": ["Brattleboro", "Burlington", "Montpelier", "Stowe"],
  "Rhode Island": ["Newport", "Providence", "Warwick"],
  "Connecticut": ["Hartford", "Mystic", "New Haven", "Stamford"],
  "Hong Kong Island": ["Central and Western", "Eastern", "Southern", "Wan Chai"],
  "Kowloon": ["Kowloon City", "Kwun Tong", "Sham Shui Po", "Wong Tai Sin", "Yau Tsim Mong"],
  "New Territories": ["Kwai Tsing", "North", "Sai Kung", "Sha Tin", "Tai Po", "Tsuen Wan", "Tuen Mun", "Yuen Long"],
  "Outlying Islands": ["Islands"],
};

// Food categories for restaurants (each gets its own rating)
const FOOD_CATEGORIES = ["Donuts", "Pizza", "Sandwiches", "Bakery", "Seafood"];

// Food item categories and their sub-categories (STARTER LIST)
const ITEM_CATEGORIES = {
  "Donuts": ["Glazed", "Boston Cream", "Jelly", "Apple Cider", "Old Fashioned", "Chocolate Frosted", "Cruller", "Coffee Roll", "Maple"],
  "Pizza": ["Cheese", "Pepperoni", "Bar Pizza", "Greek-Style", "Sicilian / Square", "White Pie", "Specialty"],
  "Sandwiches": ["Italian", "Roast Beef", "Chicken Cutlet", "Steak & Cheese", "Lobster Roll", "Breakfast Sandwich", "Turkey"],
  "Bakery": ["Croissant", "Cookie", "Muffin", "Egg Tart", "Pineapple Bun"],
  "Seafood": ["Clam Chowder", "Fried Clams", "Lobster Roll", "Fish & Chips"],
};

// Ratings and the stamp each one shows on the site
// (the number itself is never shown on the site)
const RATING_STAMPS = [
  [100, "All-Star"],
  [90,  "Fantastic"],   // 90 to 97.5
  [80,  "Great"],       // 80 to 87.5
  [70,  "Very Good"],   // 70 to 77.5
  [60,  "Good"],        // 60 to 67.5
];
