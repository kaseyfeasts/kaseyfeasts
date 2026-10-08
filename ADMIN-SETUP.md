# Kasey Feasts Admin: setup guide

The admin interface is included at `/admin/` and works with the existing `data/content.js` and `data/posts.js`. The public website remains on GitHub Pages. **Sign-in will not work until the steps below are completed.**

## 1. Upload the updated site

Unzip the package and upload its contents into the root of the existing `kaseyfeasts` repository (not an extra nested folder). Keep `CNAME`, `index.html`, `assets/`, `data/`, and add `admin/`, `oauth-worker/` and this guide. Do not delete existing content. Wait for GitHub Pages deployment. The dashboard will be at `https://kaseyfeasts.com/admin/` if that is your domain.

## 2. Create a GitHub OAuth App

Sign in as the `kaseyfeasts` account. Go to GitHub Settings > Developer settings > OAuth Apps > New OAuth App.

- Application name: Kasey Feasts Admin
- Homepage URL: `https://kaseyfeasts.com/admin/` (replace if needed)
- Authorization callback URL: `https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev/callback` (you can edit this after deploying the Worker)

Save the **Client ID** and generate a **Client secret**. Never put the secret in the public GitHub repository.

## 3. Deploy the authentication Worker

Create a free Cloudflare account. Go to Workers & Pages > Create > Worker, deploy, and replace the default Worker source with `oauth-worker/worker.js`. Under Worker Settings > Variables and Secrets add:

- `CLIENT_ID`: your GitHub OAuth Client ID (secret or text)
- `CLIENT_SECRET`: your GitHub OAuth Client secret (**secret**)
- `ADMIN_ORIGIN`: `https://kaseyfeasts.com/admin/` (text; exact URL)

Redeploy if needed. Note the Worker URL and set it as the GitHub OAuth App callback URL, adding `/callback`.

## 4. Connect the admin page

Edit `admin/config.js` in GitHub and set `oauthWorker` to your deployed Worker URL (without `/callback`). Check `repoOwner`, `repoName`, `branch`, and `allowedLogin` match the real repository/account. Commit changes.

Visit `https://kaseyfeasts.com/admin/` and click Sign in with GitHub. Approve the requested repository access. You should see your existing posts and restaurants.

## 5. Test safely

Add a test restaurant with real latitude and longitude, save, wait for GitHub Pages to deploy, verify the map and Hit List, then delete the test entry. Also test editing the welcome blog post.

## Important security and maintenance notes

- This is a **first version**, designed for a single trusted owner. It uses GitHub OAuth and temporarily stores the GitHub token in the browser tab's `sessionStorage`. The token is removed when signing out and typically when the tab session ends. Use a trusted computer and avoid untrusted scripts or browser extensions. GitHub OAuth Apps can request broad `repo` permissions, not repository-scoped access.
- The Worker holds the OAuth client secret, never the public site. The login page checks the GitHub username after authentication. **The OAuth app itself is not restricted to a particular GitHub account; the dashboard's username check prevents other accounts from using its editor, but GitHub permissions remain authoritative.**
- Because the admin uses the GitHub API directly, GitHub authorization tokens are visible to the signed-in browser session. For a more secure production implementation, use a server-side session and API proxy with repository-scoped GitHub App permissions.
- The admin uses a content-file rewrite when publishing. It preserves the data, but reformats the edited file. It supports the existing restaurant fields and blog-post fields. It does not upload images yet. Blog Markdown can reference images already uploaded to GitHub.
- The admin currently expects the existing JavaScript data files to remain simple data declarations. Avoid inserting arbitrary executable code in them.
- GitHub Pages is public: `/admin/` is a public page, but content publishing requires GitHub authorization. Do not put passwords or secrets in the repository.
