# Sparda Team Website

Central hub for the Sparda Minecraft development team: mod catalogue, team
info, support/FAQ, and per-mod documentation for all three projects.

This directory was previously called `scripta-docs/`. It was renamed to
`sparda-web/` when the site grew from Scripta-only docs into the full team
site. Each mod now has its own docs section; team pages sit at the root.

## Project structure

- `/index.html` — team landing page: what Sparda is, all three projects with
  their real stage, and a start-here path per mod.
- `/mods.html` — catalogue: Scripta (Available, CurseForge download) plus
  Florarium and Divinity Music (In Development, no download).
- `/team.html` — team members and credits. Only the two contributors credited
  in the source docs are listed (@pqlle, @Doggegn); team membership beyond
  those verified credits is unknown.
- `/support.html` — general support hub: Scripta FAQ/troubleshooting plus
  honest "unreleased" guidance for Florarium and Divinity Music.
- `/docs/` — Scripta documentation (9 pages: `index`, `install`,
  `commands`, `quests`, `rewards`, `editor`, `theming`, `files`, `faq`).
  Scripta is the only released mod, marked with an "Available" badge —
  a deliberate badge, not an implication the other mods lack docs.
- `/florarium/` — Florarium guide (5 pages: `index`, `mana`, `blooms`,
  `stations`, `magic`). Covers the mana economy, the 28-bloom chain,
  stations and Bonsai Miners, and the in-progress Bloom Magic 2.0 engine.
- `/divinity/` — Divinity Music guide (4 pages: `index`, `discs`,
  `listening`, `artifacts`). Covers the 7-disc track system, the listening
  experience, and the artifact system as roadmap (not status).
- `/assets/` — shared `style.css`, `script.js`, and `icon.png`.
  Note: `icon.png` is the **Scripta mod logo**. It is used as favicon/brand
  inside `docs/` only. Team, Florarium, and Divinity pages use text-based
  letter marks instead (see `.brand-mark` in `style.css` plus inline-SVG
  favicons), so the Scripta logo is never presented as the team's identity.
  The shared palette is neutral team-wide; per-mod accents are limited to
  hero glows (`.hero--flora`, `.hero--div`) and the `.badge.dev` /
  `.nav-badge` status pills.
- `/.nojekyll` — keeps GitHub Pages from running Jekyll.
- `/.gitattributes` — LF line endings; PNG/ICO treated as binary.

## Local preview

Any static file server works, and the site also works straight from
`file://` with no network access (no CDNs, no web fonts, no dependencies).

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

```bash
npx serve .
```

## Deployment

Strictly static HTML/CSS/JS — no build step, no dependencies. Served by
GitHub Pages directly from the `main` branch.

## Conventions for editors

- Florarium and Divinity Music are unreleased: never add a download button,
  download URL, download count, or release date for them. Their status is
  always phrased as "in development" unless their own repos say otherwise.
- Factual claims (versions, flower counts, feature names, licences, MC
  targets) must match the source repos: `florarium/` (`MOD_SUMMARY.md`,
  `progression.md`, `gradle.properties`), `divinity_music/`
  (`divinity_music.md`, `gradle.properties`, `src/` registries, recipes,
  jukebox songs, lang files), `scripta/`
  (`scripta-description.md`, `README.md`, `gradle.properties`, `LICENSE`).
  When in doubt, soften to "in development".
- Hard corrections to preserve: "Bloom Magic 2.0" (never "Mana Magic 2.0"),
  "28 blooms" (never "over 28"), no invented download counts, release dates,
  or CurseForge/Modrinth URLs for unreleased mods.
- `divinity_music/divinity_music.md` is a roadmap, NOT a status report —
  nothing in it may be written as though finished. Roadmap items
  (artifacts/amulet, behaviours, release packaging) stay marked as roadmap.
- Team membership: only @pqlle and @Doggegn are verified via
  `scripta/scripta-description.md`. Do not invent members.
- Keep pages dependency-free and offline-capable. `assets/script.js` is
  progressive enhancement only — every page must stay fully usable with JS
  disabled (a `<noscript>` fallback keeps the mobile nav reachable).
- Accessibility baseline per page: exactly one `<h1>`, no skipped heading
  levels (card titles use `.card-title` with the level the hierarchy needs),
  `alt` on all images, burger button with `aria-expanded`/`aria-controls`,
  visible `:focus-visible` states, unique `<title>` plus
  `<meta name="description">`.

## Projects

### Available

- **Scripta** — data-driven questing mod for Fabric 1.21.1 (v1.0.0, MIT).

### In Development

- **Florarium** — magic-tech mana-economy mod (28-bloom progression chain,
  Bloom Apothecary, Bonsai Miners, Bloom Magic 2.0 engine in progress).
- **Divinity Music** — custom music discs (7 discs) and divine artifacts
  (roadmap).
