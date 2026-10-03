You are editing the static site at `C:/Users/osasi/Desktop/sparda/sparda-web` (Windows bash shell; forward-slash native paths). 13 pages, plain HTML/CSS/JS, no build step, no framework, no CDN. You may only change files inside `sparda-web/`.

This is a **deletion task**, not a redesign. Do not restyle, rewrite, or improve anything else.

# Required changes

## 1. Delete `docs/faq.html` entirely

It is 310 lines of troubleshooting content. Remove the file. Then fix **every** reference across the site — currently 20 references in 13 pages:

- `docs/` : commands.html, editor.html, faq.html (itself), files.html (×2), index.html, install.html, quests.html, rewards.html, theming.html
- team pages : index.html (×3), mods.html (×2), support.html (×3, one with `#troubleshooting`), team.html

Every one of these is a `<a class="nav" href="faq.html">FAQ</a>` in the subnav, plus prose links like "the full Scripta FAQ" and `docs/faq.html#troubleshooting`. **Remove all of them.**

For prose sentences that link to the FAQ, do not leave dangling text like "see the FAQ". Rewrite the sentence so it reads naturally without the reference — keep the remaining useful information. Do not invent replacement content.

`support.html` carries real troubleshooting content of its own — keep it, just drop the links *into* the deleted FAQ page.

## 2. `docs/index.html` — hero cleanup

In the `.hero` `.btn-row`, currently three buttons:
```html
<a class="btn primary" href="https://www.curseforge.com/minecraft/mc-mods/scripta">Download on CurseForge</a>
<a class="btn" href="install.html">Installation</a>
<a class="btn" href="quests.html">Start authoring</a>
```
**Remove the "Installation" and "Start authoring" buttons.** Keep only the CurseForge download button — that is the canonical mod link and must stay.

## 3. `docs/index.html` — version strip

Remove the "Mod id" cell:
```html
<div>Mod id <b>scripta</b></div>
```
Keep the other cells (Latest release, File, Client & server).

# Do NOT touch

- `install.html` and `quests.html` themselves — they still exist, only the two hero buttons pointing at them go away.
- The `<title>`, meta description, og tags, badges, feature cards, setup steps, "Who is it for?", pager, footer.
- Any styling in `assets/style.css`.
- Year 2026.

# Hard constraints

1. **Zero broken links and zero broken `#anchor` targets** across all remaining pages — script-check every `href`/`src` and every `#fragment` against the filesystem and real `id=` attributes.
2. No inline `style="..."` attributes.
3. One `<h1>` per page, no skipped heading levels, unique `<title>` and `<meta name="description">` per page.
4. Still fully offline: no external requests.
5. `docs/editor.html` keeps its `?token=<token>` placeholder — never restore a real-looking token.

# Verify before reporting

Script-check: no file contains `faq.html`; no file references `faq.html`; every remaining href/src resolves; every fragment resolves to a real id. Report counts. Then state which sentences you rewrote and what they now say.

# Report

1. Files deleted, files changed.
2. Each prose sentence that linked to the FAQ: before → after.
3. Confirmation of zero broken links/anchors and zero `faq.html` references.
4. Anything you left alone and why.