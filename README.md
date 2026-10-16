# AnonLens — Instagram Story Viewer

> Standalone brand clone (clone-03). Same UI/UX and features as the source project; only branding and
> independent configuration differ.

## Branding configuration

| What | Where |
| --- | --- |
| Name, domain, e-mail, social links, tagline | `src/lib/brand.ts` (consumed by `src/lib/site.ts`) |
| Colours (`--brand-start/mid/end`, `--accent`, dark surfaces) | `src/app/globals.css` (`:root`) — primary `#d92876`, secondary `#d33026`, accent `#76f916` |
| Logo (light/dark, 500×250), favicon (500×500), mascot art | `public/` |
| Translated copy (5 languages: en, es, pt, ar, hi) | `messages/*.json` — brand name is written literally into the copy |
| Languages | `src/i18n/locales.ts` |

Social links and the domain are **placeholders** — register/adjust them before launch.

## Install & deploy

```bash
npm install
cp .env.example .env.local   # fill in this clone's own credentials
npm run dev                  # http://localhost:3000
npm run build && npm start
```

Deploy to any Node-capable host (Vercel, Netlify via `netlify.toml`, Railway, Render, Docker/`npm start`): set the variables from `.env.example` in the host's dashboard. Nothing depends on a specific platform — storage is Upstash Redis over REST. Give each clone its own
HikerAPI key, Upstash Redis database, Turnstile keys, admin credentials and analytics/ad IDs.

## Hosting compatibility

The app is a server-rendered Next.js site (API routes for lookups/downloads, locale middleware in `src/proxy.ts`, dynamic OG images), so it needs a runtime, not just static files.

| Host | Status |
| --- | --- |
| **Vercel** | Supported. Import the repo, add env vars from `.env.example`. |
| **Netlify** | Supported. `netlify.toml` is included; Netlify's Next.js runtime is auto-detected. Add env vars in Site settings. |
| **Cloudflare** | Not verified. Next.js on Cloudflare goes through the OpenNext adapter (`@opennextjs/cloudflare` + `wrangler`); it has not been added or tested here, and OG-image generation reads `public/logo-dark.png` with `fs`, which may need adjusting for Workers. |
| **GitHub Pages** | **Not possible** for the full site: Pages serves static files only, so the lookup/download API routes and middleware cannot run. A static front-end would need the API hosted elsewhere, which is a structural change this clone intentionally does not make. |

Persistent data (admin-managed keys, featured profiles) uses Upstash Redis over REST, so it works the same on every host that can run the app.

---

## Original project notes

An SEO-first, AdSense-ready Instagram public-profile & Story lookup tool
built with Next.js (App Router), TypeScript, and Tailwind CSS. Enter a
public Instagram username to view their public profile info — and, when
`HIKERAPI_KEY` is configured, their current public Stories.

**Read [`docs/story-retrieval-limitations.md`](docs/story-retrieval-limitations.md)
before deploying this.** It documents what the fallback, no-vendor mode
can and can't retrieve, and a real, observed reliability problem:
Instagram's own robots.txt explicitly disallows automated collection, and
in testing the response degraded (missing the fields this app needs)
within a handful of requests from one IP. That's why Story retrieval
depends on a licensed vendor rather than direct scraping — see below.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Any Node.js 20+ host (Vercel, Netlify, Railway, Render, Docker)
- No scraping libraries, no headless browser, no bot-account automation —
  Story retrieval goes through a licensed data vendor (HikerAPI), never a
  logged-in scraper this project runs itself.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are required to run the app — without
`HIKERAPI_KEY` it still works, just without Story media (see below). Copy
`.env.example` to `.env.local` and fill in the keys you want to use.

## How data retrieval works

There is no mock data. Every search is a real, live lookup, and which
provider handles it is controlled entirely by `HIKERAPI_KEY`:

- **With `HIKERAPI_KEY` set** — `HikerApiStoryProvider` calls
  [HikerAPI](https://hikerapi.com), a licensed vendor that maintains its
  own authenticated Instagram session server-side. This is the only path
  that can return actual Story media (image/video URLs, timestamps):
  Instagram never exposes Stories to a logged-out request, on any surface,
  so retrieving them at all requires an authenticated session — and this
  project never logs into Instagram itself to get one.
- **Without it** — falls back to `PublicWebStoryProvider`, which fetches
  `https://www.instagram.com/<username>/` exactly as an anonymous,
  logged-out browser would (no login, no session cookies, no bypass of any
  access control) and parses whatever public profile metadata Instagram
  serves in that response — photo, name, bio, follower/following/post
  counts, verified status. `Profile.stories` is always `[]` in this mode,
  and the UI honestly reports "No publicly available stories found for
  this username" rather than pretending otherwise. Optionally, set
  `SCRAPFLY_API_KEY` alongside this fallback to route the same public,
  logged-out fetch through Scrapfly's managed anti-bot layer instead of a
  raw request, since Instagram's bot detection reliably blocks direct
  requests in production — this doesn't add Story access, it just makes
  the profile-metadata fallback more reliable.

## Provider architecture

Every route depends only on the `StoryProvider` interface in
[`src/lib/story/provider.ts`](src/lib/story/provider.ts):

```text
StoryProvider (interface)
  ├─ HikerApiStoryProvider   — active when HIKERAPI_KEY is set; real Stories
  └─ PublicWebStoryProvider  — fallback; profile metadata only, no Stories
```

`getProvider()` in [`src/lib/story/index.ts`](src/lib/story/index.ts) is
the single point of control for which implementation is active — a future
replacement only needs to change that one function.

## API

`POST /api/story-viewer` — body `{ "username": string }`.

Returns one of:

```ts
{ status: "ok", profile }          // profile.stories populated when HIKERAPI_KEY is set and the account has active stories
{ status: "no_stories", profile }
{ status: "private", profile }
{ status: "not_found", username }
{ status: "error", message }
```

`src/lib/story/lookup.ts` is the shared entry point used by both this
route and `/profile/[username]`, so a lookup from either surface shares
one cache entry.

Protections in place:

- Per-IP client rate limit and a separate, shared outbound rate limit
  capping total requests regardless of who triggered them
  (`src/lib/story/rate-limit.ts`) — both in-memory/per-instance; swap for
  a shared store (e.g. Upstash Redis) once
  traffic outgrows a single warm instance.
- 10-minute in-memory response cache (`src/lib/story/cache.ts`) to avoid
  re-fetching for repeat lookups.
- Strict username validation is also this project's SSRF boundary — the
  fallback provider's fetch target is always
  `https://www.instagram.com/<validated-username>/`, never a
  client-supplied URL (`src/lib/story/validation.ts`).
- Request timeout, response-size cap, and login/checkpoint-wall detection
  in `src/lib/story/public-web-provider.ts` — a block from Instagram
  surfaces as a normal "couldn't retrieve" error, never a bypass attempt.

## `/profile/[username]`

Server-rendered profile pages exist (`src/app/profile/[username]/page.tsx`)
but are `noindex` by default — a deliberate, conservative choice beyond
what was strictly required, since an indexable, permanent per-username URL
mirroring scraped data is far more visible than an ephemeral API call.
See the `NOINDEX_PROFILE_PAGES` constant and
`docs/story-retrieval-limitations.md` before changing that.

## Project structure

Deliberately minimal: Home (the tool), a handful of trust/legal pages, and
the profile lookup result page — no separate SEO landing pages or blog,
by design.

```text
src/
  app/                      Routes (App Router), one directory per URL
    api/story-viewer/       Backend API route
    profile/[username]/     Server-rendered public profile lookup page
    about/ contact/         Trust & legal pages
    privacy-policy/ terms/ disclaimer/
    sitemap.ts robots.ts    Technical SEO
  components/                Shared UI (Header, Footer, Faq, story-tool/*)
  lib/
    story/                    Provider interface, retrieval, parsing, cache, rate limiting
    seo/                      Metadata + schema.org builders
  types/                      Profile, Story, and lookup-result types
```

> `docs/seo-strategy.md` predates this simplification and still describes
> a multi-landing-page/blog content strategy that no longer matches the
> site — treat it as historical, not current.

## Deploying

See the install & deploy section above; set the variables from `.env.example` on your host.
