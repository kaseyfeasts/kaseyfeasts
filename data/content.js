// Restaurant data managed by Kasey Feasts Admin.
const SPOTS = [
  {
    "id": "palace-diner",
    "name": "Palace Diner",
    "country": "United States",
    "ne": true,
    "state": "Maine",
    "city": "Biddeford",
    "address": "18 Franklin St, Biddeford, ME 04005",
    "lat": 43.55956755848854,
    "lng": -70.49015803864323,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 95,
        "video": "https://www.instagram.com/reels/DfpD5XsMGRr/",
        "series": "best-sandwiches",
        "ep": 35
      }
    ]
  },
  {
    "id": "finestkind",
    "name": "Finestkind",
    "country": "United States",
    "ne": true,
    "state": "Maine",
    "city": "Saco",
    "address": "17 Pepperell Square, Saco, ME 04072",
    "lat": 43.500853486327806,
    "lng": -70.44688165847138,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 92.5,
        "video": "https://www.instagram.com/reels/DfZnFkesNEn/",
        "series": "best-sandwiches",
        "ep": 34
      }
    ]
  },
  {
    "id": "lil-s-cafe",
    "name": "Lil's Cafe",
    "country": "United States",
    "ne": true,
    "state": "Maine",
    "city": "Kittery",
    "address": "7 Wallingford Square, Kittery, ME 03904",
    "lat": 43.0859998541908,
    "lng": -70.74359868629446,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 72.5,
        "video": "https://www.instagram.com/reels/DfXCSBNshi5/",
        "series": "best-sandwiches",
        "ep": 33
      }
    ]
  },
  {
    "id": "henry-s-bagel-deli",
    "name": "Henry's Bagel & Deli",
    "country": "United States",
    "ne": true,
    "state": "Maine",
    "city": "Kittery",
    "address": "445 US-1, Kittery, ME 03904",
    "lat": 43.12213429051032,
    "lng": -70.71915746114803,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 77.5,
        "video": "https://www.instagram.com/reels/DfR4qFGMnNC/",
        "series": "best-sandwiches",
        "ep": 32
      }
    ]
  },
  {
    "id": "sam-lagrassa-s",
    "name": "Sam LaGrassa's",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Boston",
    "address": "44 Province St, Boston, MA 02108",
    "lat": 42.35701447880687,
    "lng": -71.05997344768805,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 95,
        "video": "https://www.instagram.com/reels/DfKDebHs3AP/",
        "series": "best-sandwiches",
        "ep": 31
      }
    ]
  },
  {
    "id": "dave-s-fresh-pasta",
    "name": "Dave's Fresh Pasta",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Somerville",
    "address": "81 Holland St, Somerville, MA 02144",
    "lat": 42.398930952338,
    "lng": -71.1241815188514,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 85,
        "video": "https://www.instagram.com/reels/DfHeoxUsYsc/",
        "series": "best-sandwiches",
        "ep": 30
      }
    ]
  },
  {
    "id": "diblasi-s-subs",
    "name": "DiBlasi's Subs",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Everett",
    "address": "616 Broadway, Everett, MA 02149",
    "lat": 42.412283438164366,
    "lng": -71.0511450053562,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 67.5,
        "video": "https://www.instagram.com/reels/DfE53s2sPCq/",
        "series": "best-sandwiches",
        "ep": 29
      }
    ]
  },
  {
    "id": "la-cascia-s-bakery",
    "name": "La Cascia's Bakery",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Medford",
    "address": "418 Main St, Medford, MA 02155",
    "lat": 42.403835487145926,
    "lng": -71.10702533350067,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 92.5,
        "video": "https://www.instagram.com/reels/De6msR4sq3I/",
        "series": "best-sandwiches",
        "ep": 28
      }
    ]
  },
  {
    "id": "martone-s-market-cafe",
    "name": "Martone's Market & Café",
    "country": "United States",
    "ne": true,
    "state": "Vermont",
    "city": "Essex Junction",
    "address": "16 Main St, Essex Junction, VT 05452",
    "lat": 44.49144700812512,
    "lng": -73.11010133229397,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 70,
        "video": "https://www.instagram.com/reels/DejbfCuMM-P/",
        "series": "best-sandwiches",
        "ep": 26
      }
    ]
  },
  {
    "id": "poppy-cafe-market",
    "name": "Poppy Cafe & Market",
    "country": "United States",
    "ne": true,
    "state": "Vermont",
    "city": "Burlington",
    "address": "88 Oak St, Burlington, VT 05401",
    "lat": 44.48984225968533,
    "lng": -73.20996735927709,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 85,
        "video": "https://www.instagram.com/reels/DeMQZaysLPo/",
        "series": "best-sandwiches",
        "ep": 24
      }
    ]
  },
  {
    "id": "gill-s-delicatessen",
    "name": "Gill's Delicatessen",
    "country": "United States",
    "ne": true,
    "state": "Vermont",
    "city": "Rutland",
    "address": "68 Strongs Ave, Rutland, VT 05701",
    "lat": 43.60263204732878,
    "lng": -72.97505364769133,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 70,
        "video": "https://www.instagram.com/reels/Dd83D0isXyJ/",
        "series": "best-sandwiches",
        "ep": 23
      }
    ]
  },
  {
    "id": "calisto-s",
    "name": "Calisto's",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Boston",
    "address": "682 Tremont St, Boston, MA 02118",
    "lat": 42.343558633036615,
    "lng": -71.077698777876,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 80,
        "video": "https://www.instagram.com/reels/Dd6WHjWR4ES/",
        "series": "best-sandwiches",
        "ep": 22
      }
    ]
  },
  {
    "id": "gusto-italian-cafe",
    "name": "Gusto Italian Cafe",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Center Harbor",
    "address": "23 Main St #1b, Center Harbor, NH 03226",
    "lat": 43.70903087984904,
    "lng": -71.46195060350418,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 95,
        "video": "https://www.instagram.com/reels/Ddlr6OMscJr/",
        "series": "best-sandwiches",
        "ep": 21
      }
    ]
  },
  {
    "id": "benny-s-fresh-eats-market",
    "name": "Benny's Fresh Eats & Market",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Laconia",
    "address": "1198 Weirs Boulevard, Laconia, NH, USA",
    "lat": 43.603074422929986,
    "lng": -71.45494611700184,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 77.5,
        "video": "https://www.instagram.com/reels/DdJXL3phk_I/",
        "series": "best-sandwiches",
        "ep": 20
      }
    ]
  },
  {
    "id": "gilford-village-store",
    "name": "Gilford Village Store",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Gilford",
    "address": "7 Belknap Mountain Rd, Gilford, NH 03249",
    "lat": 43.54802218219663,
    "lng": -71.40709183234986,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 80,
        "video": "https://www.instagram.com/reels/DcivLAzhvTz/",
        "series": "best-sandwiches",
        "ep": 18
      }
    ]
  },
  {
    "id": "mike-patty-s",
    "name": "Mike & Patty's",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Boston",
    "address": "12 Church St, Boston, MA 02116",
    "lat": 42.34941793324535,
    "lng": -71.06787766042994,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 92.5,
        "video": "https://www.instagram.com/reels/DcV3QYWOR4B/",
        "series": "best-sandwiches",
        "ep": 17
      }
    ]
  },
  {
    "id": "honey-s-country-store-deli",
    "name": "Honey's Country Store & Deli",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "South Tamworth",
    "address": "1004 Bearcamp Hwy, South Tamworth, NH 03883",
    "lat": 43.82796360440478,
    "lng": -71.30846684814547,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 62.5,
        "video": "https://www.instagram.com/reels/Db3ZLfuhpbV/",
        "series": "best-sandwiches",
        "ep": 15
      }
    ]
  },
  {
    "id": "the-boro-baking-co",
    "name": "The Boro Baking Co",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Moultonborough",
    "address": "377 Whittier Hwy, Moultonborough, NH 03254",
    "lat": 43.72318136793487,
    "lng": -71.43201543048666,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 82.5,
        "video": "https://www.instagram.com/reels/DbVYdMsOtpz/",
        "series": "best-sandwiches",
        "ep": 14,
        "more": [
          {
            "video": "https://www.instagram.com/reels/DdBowlVOW8u/",
            "ep": 19
          }
        ]
      }
    ]
  },
  {
    "id": "chichester-country-store",
    "name": "Chichester Country Store",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Chichester",
    "address": "257 Main St, Chichester, NH 03258",
    "lat": 43.25793315599211,
    "lng": -71.3731876477111,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 85,
        "video": "https://www.instagram.com/reels/DbLIwXtOU8G/",
        "series": "best-sandwiches",
        "ep": 13
      }
    ]
  },
  {
    "id": "full-belli-deli",
    "name": "Full Belli Deli",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Wolfeboro",
    "address": "15 Mill St, Wolfeboro, NH 03894",
    "lat": 43.585382428062935,
    "lng": -71.21508480351143,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 65,
        "video": "https://www.instagram.com/reels/DZ4r6oqh_vD/",
        "series": "best-sandwiches",
        "ep": 11
      }
    ]
  },
  {
    "id": "julie-s-kitchen",
    "name": "Julie's Kitchen",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Gilford",
    "address": "1400 Lake Shore Rd, Gilford, NH 03249",
    "lat": 43.65071573237168,
    "lng": -71.4475813810939,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 82.5,
        "video": "https://www.instagram.com/reels/DZUo0DeuMXA/",
        "series": "best-sandwiches",
        "ep": 10,
        "more": [
          {
            "video": "https://www.instagram.com/reels/DcJGGP6OFUR/",
            "ep": 16
          }
        ]
      }
    ]
  },
  {
    "id": "borrelli-s-italian-deli",
    "name": "Borrelli's Italian Deli",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Methuen",
    "address": "322 Merrimack St, Methuen, MA 01844",
    "lat": 42.74328056046822,
    "lng": -71.13133394218228,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 80,
        "video": "https://www.instagram.com/reels/DZH0Kx7uOKX/",
        "series": "best-sandwiches",
        "ep": 9
      }
    ]
  },
  {
    "id": "the-shop-at-dovetail",
    "name": "The Shop at Dovetail",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Charlestown",
    "address": "1 6th St, Charlestown, MA 02129",
    "lat": 42.37555831779268,
    "lng": -71.0542695747457,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 70,
        "video": "https://www.instagram.com/reels/DYwloFzOlqE/",
        "series": "best-sandwiches",
        "ep": 8
      }
    ]
  },
  {
    "id": "sub-crazy",
    "name": "Sub Crazy",
    "country": "United States",
    "ne": true,
    "state": "New Hampshire",
    "city": "Meredith",
    "address": "5 Mill St, Meredith, NH 03253",
    "lat": 43.65221455005256,
    "lng": -71.49796844583537,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 77.5,
        "video": "https://www.instagram.com/reels/DYNpP6Hxsf-/",
        "series": "best-sandwiches",
        "ep": 6,
        "more": [
          {
            "video": "https://www.instagram.com/reels/Detusj_sAnv/",
            "ep": 27
          }
        ]
      }
    ]
  },
  {
    "id": "all-antico-vinaio",
    "name": "All'Antico Vinaio",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Boston",
    "address": "565 Boylston St, Boston, MA 02116",
    "lat": 42.35111113520844,
    "lng": -71.07637776125539,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 75,
        "video": "https://www.instagram.com/reels/DTFoXGhEWo-/",
        "series": "best-sandwiches",
        "ep": 4
      }
    ]
  },
  {
    "id": "bricco-salumeria-pasta-shop",
    "name": "Bricco Salumeria & Pasta Shop",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Boston",
    "address": "11 Board Alley, Boston, MA 02113",
    "lat": 42.36335852886638,
    "lng": -71.05501701892665,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 90,
        "video": "https://www.instagram.com/reels/DSH8PEckT4z/",
        "series": "best-sandwiches",
        "ep": 3
      }
    ]
  },
  {
    "id": "figaro-s",
    "name": "Figaro's",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Boston",
    "address": "105 Beach St, Boston, MA 02111",
    "lat": 42.35105477176272,
    "lng": -71.05822450358346,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 92.5,
        "video": "https://www.instagram.com/reels/DR9pCZcjTtG/",
        "series": "best-sandwiches",
        "ep": 2
      }
    ]
  },
  {
    "id": "table-mercato",
    "name": "TABLE Mercato",
    "country": "United States",
    "ne": true,
    "state": "Massachusetts",
    "city": "Boston",
    "address": "441 Hanover St, Boston, MA 02109",
    "lat": 42.3662423848894,
    "lng": -71.05261601670776,
    "foods": [
      {
        "cat": "Sandwiches",
        "rating": 92.5,
        "video": "https://www.instagram.com/reels/DRKJKxlkV2A/",
        "series": "best-sandwiches",
        "ep": 1
      }
    ]
  },
  {
    "id": "monte-s-fine-foods",
    "name": "Monte's Fine Foods",
    "country": "United States",
    "ne": true,
    "state": "Maine",
    "city": "Portland",
    "address": "788 Washington Ave, Portland, ME 04103",
    "lat": 43.68566135725613,
    "lng": -70.26851027466977,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 95,
        "video": "https://www.instagram.com/reels/DftQzd3RN-Y/",
        "series": "best-pizza",
        "ep": 17
      },
      {
        "cat": "Sandwiches",
        "rating": 90,
        "video": "https://www.instagram.com/reels/DfvO6k5ijf5/",
        "series": "best-sandwiches",
        "ep": 36
      }
    ]
  },
  {
    "id": "peng-s-pizza-pies",
    "name": "Peng's Pizza Pies",
    "country": "United States",
    "ne": true,
    "state": "Maine",
    "city": "Biddeford",
    "address": "128 Main St Ste 102, Biddeford, ME 04005",
    "lat": 43.49304305435661,
    "lng": -70.4538910170086,
    "foods": [
      {
        "cat": "Pizza",
        "rating": 90,
        "video": "https://www.instagram.com/reels/DfhVfYEsXUD/",
        "series": "best-pizza",
        "ep": 16
      }
    ]
  },
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
      },
      {
        "cat": "Sandwiches",
        "rating": 95,
        "video": "https://www.instagram.com/reels/DeRZ98OsiuC/",
        "series": "best-sandwiches",
        "ep": 25
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
      },
      {
        "cat": "Sandwiches",
        "rating": 80,
        "video": "https://www.instagram.com/reels/DaJZFbZxoY8/",
        "series": "best-sandwiches",
        "ep": 12
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
      },
      {
        "cat": "Sandwiches",
        "rating": 95,
        "video": "https://www.instagram.com/reels/DYaiieXhkIi/",
        "series": "best-sandwiches",
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
      },
      {
        "cat": "Sandwiches",
        "rating": 82.5,
        "video": "https://www.instagram.com/reels/DfyOyALx6yU/",
        "series": "best-sandwiches",
        "ep": 37
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
