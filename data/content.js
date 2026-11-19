// Restaurant data managed by Kasey Feasts Admin.
const SPOTS = [
  {
    "id": "the-parker-pie-company",
    "name": "The Parker Pie Company",
    "country": "United States",
    "ne": true,
    "state": "Vermont",
    "city": "West Glover",
    "address": "161 County Rd, West Glover, VT 05875",
    "lat": 44.72897413819905,
    "lng": -72.22726801693538,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 77.5,
        "video": "https://www.instagram.com/reels/DemAUMmMSec/",
        "series": "best-pizza",
        "ep": 15
      }
    ]
  },
  {
    "id": "american-flatbread",
    "name": "American Flatbread",
    "country": "United States",
    "ne": true,
    "state": "Vermont",
    "city": "Stowe",
    "address": "1190 Mountain Rd, Stowe, VT 05672",
    "lat": 44.47521433888224,
    "lng": -72.70251640345892,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 67.5,
        "video": "https://www.instagram.com/reels/DebtJymsKJD/",
        "series": "best-pizza",
        "ep": 14
      }
    ]
  },
  {
    "id": "ida",
    "name": "ida",
    "country": "United States",
    "ne": true,
    "state": "Vermont",
    "city": "Burlington",
    "address": "662 Riverside Ave., Burlington, VT 05401",
    "lat": 44.48922198610948,
    "lng": -73.20734916968445,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 92.5,
        "video": "https://www.instagram.com/reels/DeO1JTDMf-x/",
        "series": "best-pizza",
        "ep": 13
      }
    ]
  },
  {
    "id": "tartaglia-s-pizza",
    "name": "Tartaglia's Pizza",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Campton",
    "address": "250 NH-49, Campton, NH 03223",
    "lat": 43.850631627433565,
    "lng": -71.64264473233212,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 72.5,
        "video": "https://www.instagram.com/reels/DdGyWDChJjr/",
        "series": "best-pizza",
        "ep": 12
      }
    ]
  },
  {
    "id": "brewer-s-fork",
    "name": "Brewer's Fork",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Charlestown",
    "address": "7 Moulton St, Charlestown, MA 02129",
    "lat": 42.37689711356876,
    "lng": -71.05662212077911,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 75,
        "video": "https://www.instagram.com/reels/Dc1DSWhR39a/",
        "series": "best-pizza",
        "ep": 11
      }
    ]
  },
  {
    "id": "garlic-breath-pizza",
    "name": "Garlic Breath Pizza",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "North Andover",
    "address": "733 Turnpike St #7, North Andover, MA 01845",
    "lat": 42.66122762425114,
    "lng": -71.11094690356545,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 90,
        "video": "https://www.instagram.com/reels/DcTSejDuekj/",
        "series": "best-pizza",
        "ep": 10
      }
    ]
  },
  {
    "id": "mickey-s-ny-pizza",
    "name": "Mickey's NY Pizza",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Derry",
    "address": "9 Crystal Ave, Derry, NH 03038",
    "lat": 42.883835360616025,
    "lng": -71.32431310355217,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 67.5,
        "video": "https://www.instagram.com/p/Daizd6QqM33/",
        "series": "best-pizza",
        "ep": 9
      }
    ]
  },
  {
    "id": "vintage-pizza",
    "name": "Vintage Pizza",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Manchester",
    "address": "241 Candia Rd, Manchester, NH 03109",
    "lat": 42.981018347369954,
    "lng": -71.4258534612191,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 77.5,
        "video": "https://www.instagram.com/reels/DYQVPntRPIJ/",
        "series": "best-pizza",
        "ep": 8
      }
    ]
  },
  {
    "id": "square-deli-pizzeria",
    "name": "Square Deli Pizzeria",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Everett",
    "address": "421 Broadway, Everett, MA 02149",
    "lat": 42.40658679790189,
    "lng": -71.05572705939949,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 95,
        "video": "https://www.instagram.com/reels/DYDYm1oRKNO/",
        "series": "best-pizza",
        "ep": 7
      }
    ]
  },
  {
    "id": "la-festa-brick-brew",
    "name": "La Festa Brick & Brew",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Dover",
    "address": "300 Central Ave, Dover, NH 03820",
    "lat": 43.194346892440514,
    "lng": -70.87478291702607,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 82.5,
        "video": "https://www.instagram.com/reels/DXeMOEbuZBJ/",
        "series": "best-pizza",
        "ep": 6
      }
    ]
  },
  {
    "id": "pizza-lisa",
    "name": "Pizza Lisa",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Windham",
    "address": "32 Indian Rock Rd, Windham, NH 03087",
    "lat": 42.80504722841264,
    "lng": -71.29641525937643,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 82.5,
        "video": "https://www.instagram.com/reels/DScijTfEUc2/",
        "series": "best-pizza",
        "ep": 5
      }
    ]
  },
  {
    "id": "pie-guys-pizzeria",
    "name": "Pie Guys Pizzeria",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Meredith",
    "address": "71 NH-104, Meredith, NH 03253",
    "lat": 43.641822425399,
    "lng": -71.51079300345314,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 62.5,
        "video": "https://www.instagram.com/reels/DSCyn61keny/",
        "series": "best-pizza",
        "ep": 4
      }
    ]
  },
  {
    "id": "tilton-house-of-pizza",
    "name": "Tilton House of Pizza",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Tilton",
    "address": "298 Main St, Tilton, NH 03276",
    "lat": 43.44286183838886,
    "lng": -71.59122584763739,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 67.5,
        "video": "https://www.instagram.com/reels/DRMt279EQsV/",
        "series": "best-pizza",
        "ep": 3
      }
    ]
  },
  {
    "id": "joanie-s-pizza",
    "name": "Joanie's Pizza",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Chelmsford",
    "address": "83 Parkhurst Rd #5, Chelmsford, MA 01824",
    "lat": 42.62523934524758,
    "lng": -71.3584341188406,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 87.5,
        "video": "https://www.instagram.com/p/DQ_17ylEWz_/",
        "series": "best-pizza",
        "ep": 2
      }
    ]
  },
  {
    "id": "elvio-s-pizzeria",
    "name": "Elvio's Pizzeria",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Moultonborough",
    "address": "60 Whittier Hwy, Moultonborough, NH 03254",
    "lat": 43.7118353603054,
    "lng": -71.45474355924537,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 70,
        "video": "https://www.instagram.com/p/DQeNSeNkTdH/",
        "series": "best-pizza",
        "ep": 1
      }
    ]
  }
];
