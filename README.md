# Yuvraj Jha — Portfolio

Base site scaffold. Single-page, scroll-driven layout: Hero → Selected Work →
Services → Testimonial → About → Questions → Contact/Footer.

## Run locally

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Design tokens

Defined in `tailwind.config.js`:

- `ink` (#0A0A0B) — page background
- `panel` / `panel2` — card backgrounds
- `bone` (#F5F3EF) — primary text
- `mute` (#9A9A9F) — secondary text
- `signal` (#E4372B) / `signal2` (#FF5A46) — accent red, hover state
- `line` — hairline borders

Fonts: **Fraunces** (display/serif, headlines) + **Inter** (body/UI), loaded
via Google Fonts in `index.html`.

## What's placeholder right now

Every section has `TODO(Yuvraj)` comments marking content that needs your
real copy: bio, project details, work history, testimonial, FAQ answers,
contact links. Search the codebase for `TODO(Yuvraj)` to find them all.

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Projects.jsx
    Services.jsx
    Testimonial.jsx
    About.jsx
    FAQ.jsx
    Contact.jsx
  App.jsx
  main.jsx
  index.css
```

## Not yet built

- AI chatbot widget (next feature, per your request)
- Any 3D/motion accents
- Real content (see TODOs above)
