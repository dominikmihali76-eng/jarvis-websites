# my-first-website

A clean, modern one-page personal portfolio built with just HTML, CSS, and a tiny bit of JavaScript. It features an About section, a Projects section, and a Contact section — all in a blue and white theme.

## Preview
Open `index.html` in your browser to see the site.

## Features
- Modern blue + white design with accessible color contrast
- Sticky header with smooth in-page navigation
- Responsive layout (looks great on mobile and desktop)
- Projects grid with cards and action buttons
- Contact section with a mailto-powered form (no server needed)
- No external dependencies; everything is local and fast

## File structure
```
my-first-website/
├─ index.html     # The web page
├─ styles.css     # Styles and layout
├─ script.js      # Mobile menu + contact form (mailto)
└─ README.md      # This guide
```

## Getting started
1. Download this folder to your computer.
2. Double-click `index.html` to open it in your web browser.

That’s it — no build tools required.

## Personalize it
- Your name
  - In `index.html`, replace "Your Name" in the header, hero title, and footer.
- About text and skills
  - Edit the About section text and the skill tags in `index.html`.
- Avatar
  - The circular avatar is a placeholder. To use your own image, replace the `<div class="avatar">` with:
    ```html
    <img class="avatar" src="assets/me.jpg" alt="Portrait of Your Name" width="120" height="120" />
    ```
    Make sure the file path points to your image. Keep a square image for best results.
- Projects
  - In `index.html`, find the Projects section and update each card:
    - Change the title, description, and tags.
    - Set the "Live Demo" and "Source" links (they currently use `#`).
- Contact
  - Update your email in two places:
    - The link in the Contact card: `href="mailto:you@example.com"`.
    - Optional: keep them the same value so the form sends to you.

## Colors and theme
You can tweak colors in `styles.css` under the `:root` variables section:
```
--blue-700: #0d47a1;  /* brand/dark blue */
--blue-600: #1565c0;  /* primary button */
--blue-500: #1e88e5;  /* accents */
```
Change these to your preferred palette and the theme will update globally.

## Tips
- Keep project descriptions short and focused on outcomes and technologies used.
- Ensure links open in the same tab during development; you can add `target="_blank" rel="noopener"` later if you prefer.
- The contact form uses `mailto:` which opens the visitor’s email app. For a production contact form without mailto, you’ll need a server or a form service (not included here).

## Accessibility
- Keyboard focus styles are visible.
- Landmarks (`header`, `main`, `section`, `footer`) aid screen readers.
- Text contrast meets or exceeds common guidelines.

Enjoy building your portfolio! 🚀
