# PUSH-GUIDE: how this site gets pushed and deployed

This repo is the Next.js source of the Braeveld Boerdery Group Namibia website.
GitHub Pages builds it with the workflow in `.github/workflows/deploy.yml`
(base path `/braeveld`), and Vercel builds it at the project root (no base
path). You never commit build output; both hosts build on their side.

## 1. One-time git identity (do this once per machine)

Commits should come from a human, not a bot. Use the Tangison identity:

```bash
git config --global user.name  "Tangison Studio"
git config --global user.email "tangison@users.noreply.github.com"
```

The `users.noreply.github.com` address is GitHub's privacy email for the
account: commits are attributed to the account without exposing a real inbox.

## 2. Credentials for pushing

Pushing over HTTPS needs a GitHub Personal Access Token with `repo` /
`Contents: write` (and `Administration: write` only when creating or renaming
the repo). Use it as the password, never inside files:

```bash
git push origin main
# Username: tangison
# Password: <paste the PAT>
```

Let the terminal prompt for it, or cache it once:

```bash
git config --global credential.helper store   # stores it in ~/.git-credentials
```

Do not put the token in the remote URL, in scripts, or in any tracked file.
If a token ever lands in a file, revoke it at github.com/settings/tokens.

## 3. Everyday publish

```bash
# make your edits in app/ and components/, then:
git add -A
git commit -m "what changed, in plain words"
git push origin main          # GitHub Pages rebuilds automatically (~2 min)
```

Vercel: if the project is connected to this repo it rebuilds on the same push.
If you deploy from the CLI instead:

```bash
npx vercel deploy --prod      # or: npx vercel --prod --token <PAT-token>
```

## 4. Local preview before pushing

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # full static export into out/ + 500.html postbuild
# deploy-shape build (what Pages builds):
NEXT_PUBLIC_BASE_PATH=/braeveld NEXT_PUBLIC_SITE_URL=https://tangison.github.io/braeveld npm run build
```

## 5. URLs

| Host | URL | Notes |
|---|---|---|
| GitHub Pages | https://tangison.github.io/braeveld/ | built by the Actions workflow |
| Vercel | https://braeveld.vercel.app | production deployment |
| Source | https://github.com/tangison/braeveld | repo |

## 6. Where things live

- Pages: `app/<route>/page.jsx`; shared chrome in `components/`
- Design tokens and component styles: `app/globals.css`
- Brand tokens are also documented on the site itself at `/brand/`
- Photos: `public/img/` (originals; keep the width/height attributes in sync)
- Legal pages carry a plain-language note that they need counsel review
