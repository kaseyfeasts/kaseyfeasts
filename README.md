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

Every section page has the same menu (Series, Food Item Rankings, About, Work with me, Where next?, Email me) and a **Switch to** bar at the top left with New England, Hong Kong and Global. The map is the only thing that looks different: New England zoomed on New England, Hong Kong showing all of Hong Kong, and Global a slowly spinning globe (it pauses when someone touches it).

Section pages: `/newengland/series`, `/newengland/rankings`, `/newengland/rankings/donuts`, `/newengland/spot/<id>`, `/newengland/about`, `/newengland/work`, `/newengland/next`, `/newengland/blog` (the blog is linked in the footer).

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

**Restaurants** (`data/content.js`, admin tab "Restaurants"): name, country, New England box (hidden), state, city/district, Google Maps address, map pin, and up to three food categories. Each food category has its own rating, Instagram video link, "part of the series" box and number in the series. A place that does pizza and sandwiches is ranked separately for each.

**Food items** (`data/items.js`, admin tab "Food items"): name, rating, category, sub-category and the restaurant it's from. Its location and address come from the restaurant. These power the **Food Item Rankings** pages, for example the top 5 glazed donuts in New Hampshire.

**Series** pages are built automatically from the restaurants' "part of the series" boxes, in episode order.

## Files

| File | What it's for |
|---|---|
| `index.html` | Page structure: header, sections and forms |
| `404.html` | Makes the clean section links work on GitHub Pages. **Don't delete.** |
| `admin/` | The admin panel at `kaseyfeasts.com/admin/` (see ADMIN-SETUP.md) |
| `data/lists.js` | **Edit this.** Dropdown lists: countries, states, cities/districts, food categories, item categories and sub-categories, stamp names |
| `data/regions.js` | **Edit this.** The three sections: names, card text, intro text, map starting views |
| `data/content.js` | Restaurants. Use the admin to edit. |
| `data/items.js` | Food items. Use the admin to edit. |
| `data/posts.js` | Blog posts. Use the admin to edit. |
| `images/` | Photos for blog posts |
| `assets/styles.css` | Colors, fonts and layout |
| `assets/app.js` | Map, filters, rankings, page routing, forms, cartoon animation |
| `assets/d3.min.js` | Draws the globe (no need to edit) |
| `data/map-data.js`, `data/map-detail.js` | Map outlines (no need to edit) |

## Adding restaurants and food items

Use the admin at `kaseyfeasts.com/admin/`. After signing in, choose New England, Hong Kong or Global. That choice filters everything you see, and you can switch at any time with the bubbles at the top.

- **Map pin:** in Google Maps, right-click the restaurant and click the numbers at the top to copy them, then paste into "Map pin".
- **New England box:** it ticks itself when you pick a New England state, and you can change it.
- **Dropdowns:** if a country, state, city or category isn't in the list, choose "Other (type it)…". To add it to the list for good, edit `data/lists.js`.
- **Food items:** add the restaurant first, then add its items and pick the restaurant from the list.

## Writing a blog post

You can do this right on github.com, no software needed.

1. Open `data/posts.js` and click the pencil icon to edit.
2. Copy the `{ ... },` block of an existing post and paste it at the top of the list.
3. Change `slug` (the web address, like `best-cider-donuts-2026`), `date`, `title`, `excerpt` and `body`.
4. Write the article between the backticks in `body`. Leave a blank line between paragraphs. You can use `## Subheadings`, `**bold**`, `*italic*`, `[links](https://...)`, `- bullet points` and photos.
5. Click **Commit changes**. The post is live in about a minute.

**Adding photos:** upload the image to the `images/` folder (Add file → Upload files), then put `![what's in the photo](/images/your-photo.jpg)` on its own line in the post. Keep photos under about 1 MB so pages load quickly.

**Choosing a section:** add `region: "hongkong"` (or `"newengland"`, `"global"`) to a post to show it only there. `region: "all"` shows it in every section. The admin has a "Show this post in" menu for this.

**Linking to a post:** each post lives at `kaseyfeasts.com/<section>/blog/<slug>`, for example `/newengland/blog/welcome`. Inside a post, a link like `[suggest a spot](/next)` automatically stays in the reader's section.

## Forms

The Work With Me and Where Next forms open the visitor's email app with a message to kaseyfeasts@gmail.com, already filled in. No service or setup is needed. To change the address, edit `const MAIL` in `assets/app.js` and the email links in `index.html`.

Later, if you'd rather have submissions send in the background (no email app needed), sign up for a form service like Formspree or Tally and replace the `openEmail(...)` calls in `assets/app.js` with a `fetch()` POST to the address they give you.

There's no newsletter yet. The site says "Newsletter coming soon," and the "Email me" link asks people to email you to get on the list.

## Notes

- The globe uses bundled D3 and Natural Earth land data, so it needs no map API key.
- Pages use clean links like `/newengland/rankings/donuts`. `404.html` makes these work on GitHub Pages. Old links like `kaseyfeasts.com/#/blog/welcome` still work and open the New England version.
