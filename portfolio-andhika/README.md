# Portfolio — Andhika Putradhitya (2023–2026)

An interactive portfolio website. Pure **HTML, CSS, and JavaScript** — no framework, no build step.

Content sourced from `Portfolio Andhika Putradhitya` (31 pages, 2023–2026) and `CV Andhika Putradhitya`.

---

## Running it

Open `index.html` in a browser. That's it.

To match server behaviour exactly (recommended — the video player iframes behave the same way):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Structure

```
portfolio-andhika/
├─ index.html
├─ assets/
│  ├─ css/style.css        # the whole design system
│  ├─ js/data.js           # ← ALL CONTENT LIVES HERE
│  ├─ js/main.js           # player, filters, animation, theme
│  └─ img/                 # portrait + thumbnails cut from the portfolio slides
└─ README.md
```

To change anything on the site, edit **`assets/js/data.js`** only. You never need to touch the HTML.

---

## Design system

| Token | Value | Used for |
|---|---|---|
| Blue | `#5872E4` | primary accent, app icons, hover states |
| Yellow | `#E4CA58` | proficiency bars, highlights, numbers, active nav pill, marker underline |
| Ink | `#16181F` | text, 1.8px frames, hard offset shadows |
| Paper | `#FBFAF6` | page background |
| Display font | Bricolage Grotesque | headings — playful variable sans |
| Body font | Plus Jakarta Sans | body copy — friendly and legible |
| Editorial font | Instrument Serif *italic* | pull quotes and captions, used sparingly |

Every colour is a CSS custom property under `:root` in `style.css` — change one line and the whole site follows. An ink (dark) theme is available through the moon/sun button in the navigation (`html[data-theme="ink"]`).

The layout leans editorial rather than corporate: thin ink frames, hard offset shadows, flat colour blocks, a 16:9 experience carousel, and a yellow marker underline for emphasis. The portrait sits on a blue circle with an offset outline ring, a yellow triangle, and a dot, and is masked so it fades out at the bottom instead of ending on a hard edge. Generous whitespace keeps it from getting busy.

---

## How each work plays

| `type` | How it opens | URL |
|---|---|---|
| `youtube` | YouTube player inside the lightbox | `youtube-nocookie.com/embed/VIDEO_ID?autoplay=1` |
| `drive` | Google Drive's own player | `drive.google.com/file/d/FILE_ID/preview` |
| `gallery` | portfolio slide shown large | local image |
| `external` | new tab (Drive folders, Instagram, TikTok cannot be embedded) | original URL |

**The key is `/preview`, not `/view`.** A `/view` URL is the full Google Drive page and is refused inside an iframe.

### Requirement for Drive videos to play

Every file must be set to **Share → Anyone with the link → Viewer**.
If a file is still *Restricted*, visitors see a "You need access" screen — that's a Drive setting, not a bug in the site.

---

## Thumbnails work in two layers

1. **The local poster shows first.** Every work has its own image, cut from the original portfolio slides (`assets/img/`). Instant, works offline, never blank.
2. **The real thumbnail upgrades in the background.** `main.js` preloads it and swaps with a soft fade only once it actually resolves. If every candidate fails, the local poster simply stays.

So a card is never empty, but still shows the real artwork when the network allows it.

### Where the real thumbnails come from

Every entry can carry a `thumb` field — the Google Drive **file ID of the thumbnail image itself**, taken from the shared thumbnails folder:

```js
{ no: "04", title: "Grand Closing Documentary", ...
  thumb: "1vgPN7GNqB1-lStaeTg9YiXH7eweQazun",
  poster: "assets/img/varco4.webp" }
```

`thumb` takes priority over the auto-generated frame from the video file. 23 entries carry one — all 6 Track Record roles and 17 works.

Each `thumb` expands into an ordered list of candidate URLs, tried one after another until one succeeds:

1. `https://lh3.googleusercontent.com/d/FILE_ID=w1000` — Drive's image CDN, the most reliable inside an `<img>`
2. `https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000` — the classic endpoint, used when the CDN is unavailable
3. the local poster — the last line of defence, already on screen

A response narrower than 80px is treated as a failure, because that is what Drive returns for a file that isn't public. **Every thumbnail file must be set to Share → Anyone with the link → Viewer**, exactly like the videos.

### Baking the thumbnails in instead

The above keeps the repo small but depends on Drive being reachable. To make them fully offline, drop the image files into `assets/img/`, point `poster` at them, and delete the `thumb` field — the local poster then becomes the one and only source.

### Tool icons

`assets/img/tools/` holds the five real app icons (`pr`, `ai`, `ae`, `canva`, `capcut`). Their glyphs are **transparent knockouts**, not white pixels, so `.tool__ico` must keep a white background — switching it to blue makes the letters disappear into the tile.

---

## Animation

- **Section arrival** — entering About / Experience / Works / Contact pops a "You're now in …" pill with a progress ring, sweeps yellow across the heading, and glides the yellow pill in the navigation.
- **Nav hover** — the label rolls up to a duplicate of itself while a blue block slides in from below.
- **Card hover** — the whole card flips to blue, the play button turns yellow, and the card lifts onto a hard ink shadow.
- **Skill bars** — fill in a staggered sequence with a single shine pass, numbers counting up, notches every 10%.
- **Cursor trail** — a pool of 22 blue, yellow, and white dots follows the mouse, popping in with a bounce then drifting down and shrinking away. Mouse only (`pointer: fine`), skipped under `prefers-reduced-motion`, and `pointer-events: none` so it never blocks a click.
  - Implementation note: each dot's start state is committed with a forced reflow (`void d.offsetWidth`) before the end state is written. Without it the browser coalesces both style changes into one frame, the transition is skipped, and the dots vanish instantly without ever being seen.
- Reveal on scroll, stat counters, scroll progress bar, scroll-spy.

## The Experience carousel

Experience is a horizontal rail of 16:9 cards, one per role, rather than a long stack of text.

- **One role fills the rail at a time**, so each dot maps to exactly one experience.
- **Semi-transparent arrows** on either side move one card at a time; they disable themselves at each end.
- **Click and hold the left mouse button, then drag** to throw the rail left or right. Releasing snaps to the nearest card, biased toward the direction you pulled. A drag never opens the panel — only a real click does.
- **Dots** below jump straight to a role. Arrow keys work when the rail has focus. Native swipe works on touch.
- **Clicking a card** opens a detail panel with the period, tag, organisation, role, and responsibilities — text only, no repeated image. `← →` step between roles inside the panel, `Esc` closes it.
- A role with no slide image (MAP Active) renders a generated blue block with its monogram instead.

**No looping transform or border-radius animations anywhere.** That was the cause of the earlier jitter around the portrait — the portrait area is now provably static frame to frame. The only continuous animation left is a two-element opacity pulse on the "open for opportunities" status dot, which cannot shift layout.

---

## Adding a new work

Add an object to the `WORKS` array in `assets/js/data.js`:

```js
{
  no: "06",
  title: "Work title",
  collection: "college",   // mededu | varco | tvui | digitalk | freelance | gamedev | college | other
  org: "Client or organisation",
  cat: ["video"],          // video | short-content | documentary | design | ui-ux | photography | animation | broadcast | document
  year: "2026",
  type: "drive",           // drive | youtube | gallery | external
  id: "GOOGLE_DRIVE_FILE_ID",
  poster: "assets/img/p05.webp",
  badge: "Optional",       // small label in the thumbnail's top-right corner
  desc: "Short description.",
}
```

New categories only need to be added to the `FILTERS` array — counts are computed automatically. Collections render in the order they appear in `COLLECTIONS`.

**Works only holds finished, viewable output.** Roles where the deliverable is the job itself rather than a shareable artefact — OB Golf and Transvision — live in Track Record instead, and are deliberately not repeated here.

An experience bullet can also carry a nested list — pass an object instead of a string:

```js
points: [
  { t: "Produced promotional reels for major tournaments:",
    sub: ["Mandiri Indonesia Open 2024", "BNI Indonesian Masters 2024"] },
]
```

---

## Deploying

The folder is fully static, so it hosts anywhere: Netlify (drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop)), Vercel, GitHub Pages, Cloudflare Pages, or ordinary cPanel hosting (upload the folder contents into `public_html`).

A **single-file** build is also provided (`portfolio-andhika-putradhitya.html`) with all CSS, JS, and images embedded — open it or upload it anywhere, no companion folder required.
