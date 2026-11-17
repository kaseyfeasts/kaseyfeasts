# Kasey Feasts

Independent food reviews from New England, Hong Kong and beyond. Love you, XOXO.

A static site (plain HTML, CSS and JavaScript, no build step), so it runs on GitHub Pages as is.

## Put it online with GitHub Pages

1. Create a new repository on GitHub (for example `kaseyfeasts`).
2. Upload everything in this folder to the repository, keeping the folders as they are.
3. In the repository, go to **Settings → Pages**, set **Source** to "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute your site is live at `https://<your-username>.github.io/kaseyfeasts/`.

To use your own domain (like kaseyfeasts.com), add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. The section links (`/newengland/` and so on) need the site to be at the root of a domain like kaseyfeasts.com.

## How the site is organized

The home page (`kaseyfeasts.com`) asks **"I'M HERE FOR"** with three choices. Each one is its own section with its own address:

| Section | Address | Shows |
|---|---|---|
| New England | `/newengland/` | Restaurants with the hidden **New England** box ticked |
| Hong Kong | `/hongkong/` | Restaurants whose country is **Hong Kong** |
| Global | `/global/` | **Every** restaurant (the whole database) |

Food items follow the restaurant they belong to, so a New England visitor never sees a Hong Kong item in the rankings, the map, the list, or the series.

Every section page has the same menu (Series ▾, Food Item Rankings, About, Work with Me, Where Next?, Email Me) and a **Switch to** bar at the top left with New England, Hong Kong and Global. The map is a detailed street map (states, cities and streets) from OpenFreeMap, which is free and needs no account. New England starts zoomed on New England, Hong Kong on all of Hong Kong, and Global is a slowly spinning globe that pauses when someone touches it. If the detailed map can't load, a simpler built-in map is shown instead. The map style is set by `MAP_STYLE` in `data/regions.js`.

The About page text is different for each section and lives in `data/regions.js`.

Section pages: `/newengland/series`, `/newengland/series/<series id>`, `/newengland/rankings`, `/newengland/rankings/donuts`, `/newengland/spot/<id>`, `/newengland/about`, `/newengland/work`, `/newengland/next`.

**Important:** keep `404.html` in the repo. GitHub Pages only has one real page, so links like `/hongkong/rankings` arrive at `404.html` first, which instantly sends them to the right place.

## Ratings and stamps

Ratings are numbers from 60 to 100 in steps of 2.5. The number is never shown on the site. It's used to rank best to worst, and the site shows a stamp instead:

| Rating | Stamp |
|---|---|
| 100 | All-Star |
| 90 to 97.5 | Fantastic |
| 80 to 87.5 | Great |
| 70 to 77.5 | Very Good |
| 60 to 67.5 | Good |

Note: because the site is a public GitHub Pages site, the numbers live in `data/content.js` and `data/items.js`, which anyone can technically open. Visitors won't see them on the pages, but they aren't secret.

## Two databases

**Restaurants** (`data/content.js`, admin tab "Restaurants"): name, country, New England box (hidden), state, city/district, Google Maps address, map pin, and up to three food categories. Each food category has its own rating, Instagram video link, series (optional) and number in the series. A place that does pizza and sandwiches is ranked separately for each.

**Food items** (`data/items.js`, admin tab "Food items"): name, rating, category, sub-category and the restaurant it's from. Its location and address come from the restaurant. These power the **Food Item Rankings** page. Every filter there is a checkbox list, so visitors can pick several at once, for example glazed donuts in NH, MA and ME, and show the top 5, 10, 25 or all.

## Series

The series are listed in `data/series.js`. Each one belongs to New England, Hong Kong or Global only, and Global shows all of them:

- Hong Kong: Gweilo Grub: Eating around HK in 100 Meals
- New England: Hunt for New England’s Best Donuts, Best Pizza, Best Sandwiches
- Global only: London Burger Tour

To add an episode, edit the restaurant in the admin. On the food category for that video, pick the series and type the episode number. The Series menu and pages fill themselves in, in episode order. To add a new series, add a line to `data/series.js` with a new `id`.

## Files

| File | What it's for |
|---|---|
| `index.html` | Page structure: header, sections and forms |
| `404.html` | Makes the clean section links work on GitHub Pages. **Don't delete.** |
| `admin/` | The admin panel at `kaseyfeasts.com/admin/` (see ADMIN-SETUP.md) |
| `data/lists.js` | **Edit this.** Dropdown lists: countries, states, cities/districts, food categories, item categories and sub-categories, stamp names |
| `data/regions.js` | **Edit this.** The three sections: names, intro text, About text, map style and starting views |
| `data/content.js` | Restaurants. Use the admin to edit. |
| `data/items.js` | Food items. Use the admin to edit. |
| `data/series.js` | **Edit this.** The series names and which section each belongs to |
| `assets/styles.css` | Colors, fonts and layout |
| `assets/app.js` | Map, filters, rankings, series, page routing, forms, cartoon animation |
| `assets/d3.min.js` | Draws the globe (no need to edit) |
| `data/map-data.js`, `data/map-detail.js` | Outlines for the simple backup map (no need to edit) |

## Adding restaurants and food items

Use the admin at `kaseyfeasts.com/admin/`. After signing in, choose New England, Hong Kong or Global. That choice filters everything you see, and you can switch at any time with the bubbles at the top.

- **Map pin:** in Google Maps, right-click the restaurant and click the numbers at the top to copy them, then paste into "Map pin".
- **New England box:** it ticks itself when you pick a New England state, and you can change it.
- **Dropdowns:** if a country, state, city or category isn't in the list, choose "Other (type it)…". To add it to the list for good, edit `data/lists.js`.
- **Food items:** add the restaurant first, then add its items and pick the restaurant from the list.

## Forms

The Work With Me and Where Next forms open the visitor's email app with a message to kaseyfeasts@gmail.com, already filled in. No service or setup is needed. To change the address, edit `const MAIL` in `assets/app.js` and the email links in `index.html`.

Later, if you'd rather have submissions send in the background (no email app needed), sign up for a form service like Formspree or Tally and replace the `openEmail(...)` calls in `assets/app.js` with a `fetch()` POST to the address they give you.


## Notes

- The globe uses bundled D3 and Natural Earth land data, so it needs no map API key.
- Pages use clean links like `/newengland/rankings/donuts`. `404.html` makes these work on GitHub Pages. Old links like `kaseyfeasts.com/#/series` still work and open the New England version.

## Social links

The footer shows clickable Instagram, TikTok, Facebook and YouTube icons (from the free Font Awesome icon set). The links are in `index.html`; search for `class="soc"`.
