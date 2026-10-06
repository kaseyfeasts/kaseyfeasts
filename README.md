# Kasey Feasts

Independent food reviews across New England. Love you, XOXO.

A static site (plain HTML, CSS and JavaScript, no build step), so it runs on GitHub Pages as is.

## Put it online with GitHub Pages

1. Create a new repository on GitHub (for example `kaseyfeasts`).
2. Upload everything in this folder to the repository, keeping the folders as they are.
3. In the repository, go to **Settings → Pages**, set **Source** to "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute your site is live at `https://<your-username>.github.io/kaseyfeasts/`.

To use your own domain (like kaseyfeasts.com), add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## Files

| File | What it's for |
|---|---|
| `index.html` | Page structure: header, sections and forms |
| `data/content.js` | **Edit this.** Places on the map and hit list, Instagram link |
| `data/posts.js` | **Edit this.** Blog posts |
| `images/` | Photos for blog posts |
| `assets/styles.css` | Colors, fonts and layout |
| `assets/app.js` | Map, filters, page routing, forms, cartoon animation |
| `data/map-data.js` | New England map outlines (no need to edit) |
| `assets/kasey-avatar.svg` | Your cartoon as a standalone image for social or merch |

## Adding a place

Add a line to `SPOTS` in `data/content.js` (there's a commented example to copy). Until the first place is added, the map, list and hit list show "coming soon". To get coordinates, right-click the place in Google Maps and click the numbers to copy them (the first is `lat`, the second is `lng`). Add `video:"https://www.instagram.com/reel/..."` to link that spot's review video. Set `hit:true` to put it on the Hit List. There are no scores on the site.


## Writing a blog post

You can do this right on github.com, no software needed.

1. Open `data/posts.js` and click the pencil icon to edit.
2. Copy the `{ ... },` block of an existing post and paste it at the top of the list.
3. Change `slug` (the web address, like `best-cider-donuts-2026`), `date`, `title`, `excerpt` and `body`.
4. Write the article between the backticks in `body`. Leave a blank line between paragraphs. You can use `## Subheadings`, `**bold**`, `*italic*`, `[links](https://...)`, `- bullet points` and photos.
5. Click **Commit changes**. The post is live in about a minute.

**Adding photos:** upload the image to the `images/` folder (Add file → Upload files), then put `![what's in the photo](images/your-photo.jpg)` on its own line in the post. Keep photos under about 1 MB so pages load quickly.

**Linking to a post:** each post lives at `yoursite.com/#/blog/<slug>`.

## Forms

The Work With Me and Where Next forms open the visitor's email app with a message to kaseyfeasts@delmgmt.com, already filled in. No service or setup is needed. To change the address, edit `const MAIL` in `assets/app.js` and the email links in `index.html`.

Later, if you'd rather have submissions send in the background (no email app needed), sign up for a form service like Formspree or Tally and replace the `openEmail(...)` calls in `assets/app.js` with a `fetch()` POST to the address they give you.

There's no newsletter yet. The site says "Newsletter coming soon," and the "Email me" link asks people to email you to get on the list.

## Notes

- The map is custom-drawn SVG, not Google Maps. To switch to Google Maps or Mapbox later, keep the same `SPOTS` data and swap out the map section in `app.js`.
- Pages use hash links (`#/hitlist`, `#/spot/brick-and-basil`), so they work on GitHub Pages without any server setup.
