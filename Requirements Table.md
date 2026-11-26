# Requirements Table — Self-Assessment

**Student:** Lam James Akol  
**Live website:** `https://itsnotlambo.github.io/portfolio-by-lam-/`  
**GitHub repository:** `https://github.com/itsnotlambo/portfolio-by-lam-`

Items marked **To do** need you to act before submission: they cannot be completed by the code alone.

---

## Band 1 – Pass requirements

| Requirement | Evidence | Status |
|---|---|---|
| **Semantic HTML** | Every page has `<!DOCTYPE html>`, `<html lang="en">`, `<meta charset="utf-8">` and a viewport meta tag. Pages use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` and `<footer>`, with one `<h1>` per page followed by `<h2>` and `<h3>`. Case studies use `<dl>` for project facts and `<table>` with `<th scope="col">` for specifications. | Met |
| **Three-page website** | Twelve pages: Home, About, Work Experience, Projects, four case studies, Skills, CV, Contact and a 404 page, linked by a shared navbar with About and Projects dropdowns. | Met |
| **Responsive design** | Bootstrap grid (`col-md-6`, `col-lg-4`, `col-lg-8`) plus custom breakpoints at 1199px, 991px, 767px and 575px. The navbar collapses to a toggler below 992px; stats go from four columns to two; case-study fact panels stop being sticky; buttons go full width on phones. | Met |
| **CSS / CSS library use** | Bootstrap 5.3.3 (`vendor/bootstrap/`) with a custom stylesheet (`css/style.css`) defining design tokens, both themes and all components. | Met |
| **Extensible portfolio page** | `projects.html` uses one repeated card block per project inside the grid. Adding a project means copying one block; an HTML comment explains how. | Met |
| **Basic GitHub usage** | Site pushed to `itsnotlambo/portfolio-by-lam-` in staged, descriptively named commits (documentation, assets, pages, case studies). | Met |
| **Deployment** | **To do:** enable GitHub Pages (Settings → Pages → branch `main`, root) and confirm the link works. | To do |
| **Code quality** | All twelve pages pass `html-validate` (recommended rule set) with zero errors. CSS is organised into 19 labelled sections; JavaScript into 10 commented features. | Met |

## Band 2 – Development checks

| Requirement | Evidence | Status |
|---|---|---|
| **Bootstrap components** | Navbar with collapse and dropdowns; grid; cards (`card project-card`); floating-label form controls with Bootstrap validation styles; alerts; breadcrumbs; `visually-hidden` utility. | Met |
| **Typography improvements** | Google Fonts: Archivo (headings), Inter (body), JetBrains Mono (labels and data), set as `--font-display`, `--font-body`, `--font-mono`, with `preconnect` and `display=swap`. Headings use `text-wrap: balance`; body text is capped near 68 characters per line. | Met |
| **Refined layout control** | Bootstrap spacing, flex and alignment utilities (`g-4`, `gap-3`, `d-flex`, `align-items-center`, `justify-content-between`, `ms-auto`) with token-based section spacing (`--space-section`). | Met |
| **Consistent component design** | Project cards, skill cards, timeline items, contact methods and transferable-skill rows each follow one repeated structure. | Met |
| **Improved GitHub practice** | Seven commits on `main` so far, each with a descriptive message; more to follow as content is personalised. | Met |
| **HTML validation** | Validated with `html-validate`. **To do:** also run the [W3C Nu validator](https://validator.w3.org/nu/) on the live site and record the result here. | Partly met |

## Band 3 – Industry readiness

| Requirement | Evidence | Status |
|---|---|---|
| **Component customisation** | Bootstrap's own CSS variables (`--bs-body-bg`, `--bs-card-bg`, `--bs-dropdown-*`) are remapped to the site's tokens so every component follows the theme. Custom components: blurred sticky navbar, gold accent system, typographic project plates, three-segment skill meters, timeline, case-study fact panel, scroll progress bar. Dark/light theme uses Bootstrap's `data-bs-theme` and is saved per browser. | Met |
| **Fine-grained responsiveness** | Four breakpoints with specific changes at each (see Band 1). Print styles hide navigation and decoration so the CV page prints cleanly. | Met |
| **Additional front-end library** | Font Awesome Free 6.5.2 for navigation, buttons, project plates, skills, contact and social icons. | Met |
| **Professional Git workflow** | Branch `content-edits` created, pull request #1 opened and merged into `main`. | Met |
| **Performance awareness** | Libraries served locally; fonts preconnected with `display=swap`; portrait compressed to 36 KB with width and height set to prevent layout shift; animations use only `transform` and `opacity`; no page loader or custom cursor. **To do:** run Lighthouse in Chrome DevTools and record the scores here. | Partly met |
| **Clean project structure** | Pages at the root; `css/`, `js/`, `images/`, `vendor/` and `assets/` folders. | Met |

## Accessibility

Skip link on every page; visible focus outline; `aria-label` on icon-only buttons; `aria-current="page"` on the active nav link; alt text on images; live regions for theme changes and filter results; `prefers-reduced-motion` turns off animation; all content is visible with JavaScript disabled.

## Suggested commits

1. `feat: add site structure, design system and shared navigation`
2. `feat: add home, about and work experience pages`
3. `feat: add projects page with filter and four case studies`
4. `feat: add skills, CV and contact pages`
5. `content: rewrite reflection in my own words`
6. `content: check and correct project and experience details`
7. `docs: add README, AI use acknowledgement and requirements table`
8. `chore: enable GitHub Pages and add live link`
