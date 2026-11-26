# Lam James Akol — Portfolio

A multi-page personal portfolio for the University of Dundee **CS21001 Employability for Computing Professionals** assessment.

**Live site:** `https://itsnotlambo.github.io/portfolio-by-lam-/`

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home: introduction, stats and featured projects |
| `about.html` | Profile, education, certifications, reflection (`#reflection`) and AI use acknowledgement (`#ai-acknowledgement`) |
| `work-experience.html` | Work experience timeline |
| `projects.html` | All projects, with a category filter, and architecture diagrams (`#evidence`) |
| `nylo.html` | Case study: Nylo |
| `zatride.html` | Case study: Zatride |
| `zatzi.html` | Case study: Zatzi |
| `wordle-ai-solver.html` | Case study: Wordle AI Solver (CS21002 group project) |
| `skills.html` | Technical skills (three-level ratings) and transferable skills with evidence |
| `cv.html` | Full CV as a web page |
| `contact.html` | Contact details and a validated contact form |
| `404.html` | Not-found page used by GitHub Pages |

## Project structure

```
├── index.html, about.html, ...   pages
├── css/style.css                 design system and all custom styles
├── js/main.js                    all custom behaviour
├── images/                       portrait and favicon
├── vendor/bootstrap/             Bootstrap 5.3.3 (CSS and JS bundle)
├── vendor/fontawesome/           Font Awesome Free 6.5.2 (icons)
└── assets/                       downloadable files (add the CV PDF here)
```

Bootstrap and Font Awesome are stored locally in `vendor/` rather than loaded from a CDN, so the site works offline and does not depend on third-party servers.

## Technologies

- **HTML5** with semantic elements (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`) and one `h1` per page
- **CSS3** with custom properties as design tokens, dark and light themes, and four breakpoints (1199px, 991px, 767px, 575px)
- **Bootstrap 5.3.3**: navbar with dropdowns and collapse, grid, cards, forms with validation, alerts, breadcrumbs
- **Font Awesome 6.5.2** for icons
- **Google Fonts**: Archivo (headings), Inter (body), JetBrains Mono (labels)
- **Vanilla JavaScript**: theme toggle saved per browser, scroll progress, scroll reveal, animated counters, typing effect, project filter, copy-to-clipboard, contact form validation

## Features

- Dark and light themes using Bootstrap's `data-bs-theme`, applied before first paint so there is no flash
- Projects page filter (All, AI and data, Mobile, Web, Backend, Academic) with screen-reader announcements
- Accessible by design: skip link, visible keyboard focus, ARIA labels on icon buttons, alt text on images, `prefers-reduced-motion` respected, content visible with JavaScript off
- Contact form validates in the browser, then opens the visitor's email app with the message filled in (GitHub Pages has no server to send email)

## Adding a project

Copy one `<div class="... project-col">` block in `projects.html`, change the text, and set `data-category` to any of `ai mobile web backend academic`. No other changes are needed.

## Adding the CV PDF

The CV PDF is `assets/Lam_James_Akol_CV.pdf` and is linked from the CV page.

## Run locally

Open `index.html` in a browser. Internet access is only needed for Google Fonts; everything else is included.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. The site appears at `https://itsnotlambo.github.io/portfolio-by-lam-/` within a few minutes.

## AI use

See [`AI-USE-ACKNOWLEDGEMENT.md`](AI-USE-ACKNOWLEDGEMENT.md).
