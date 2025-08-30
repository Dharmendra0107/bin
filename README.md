# DK Portfolio

Static portfolio website (HTML, CSS, JS) showcasing projects, skills and certificates.

## Run locally

- Quick (no server): open `index.html` in your browser. This works for most pages but some features (fetches, Service Worker, relative PDF previews) behave better when served over HTTP.
- Recommended (Python 3): from the repo root run:



- VS Code: install the Live Server extension and click "Go Live".

## Deploy

- GitHub Pages: push this repo and enable Pages from branch `main` → folder `/ (root)` in repository settings. The site will be available at `https://<your-username>.github.io/<repo>` (or at the custom domain configured by `CNAME`).
- Alternative: deploy to any static host (Netlify, Vercel, Firebase Hosting) — just point to the repository or upload the built folder.

## Image & certificate conventions

- Folders:
  - General images: `images/`
  - Certificates: `images/certificates/`
- Filenames:
  - Use lowercase, descriptive names, and hyphens or underscores (no spaces):
    `1-coursera-ux-design.jpg` and `1-coursera-ux-design.pdf` (PDF uses same base name).
- Formats & sizes:
  - Use compressed JPG/PNG or WebP for web images. Prefer WebP where supported.
  - Suggested max width for feature images: 1200–1600px; certificates can be 800–1200px on the long edge.
  - Optimize images (lossy compression 70–85%) to reduce page weight.
- Accessibility & HTML:
  - Always add an appropriate `alt` attribute for images.
  - Use `loading="lazy"` for non-critical images (already used in the repo).
  - For certificates, keep an adjacent PDF file and link to it (the modal reads `data-url` → PDF).
- Responsive:
  - Provide `srcset` and `sizes` where possible for important images to serve smaller files to mobile.

## Notes

- The site uses Bootstrap, AOS (Animate On Scroll), Swiper and other frontend libs — ensure `js/` and `css/` files are present when serving.
- If you want, I can:
  - Move inline styles/scripts into `css/style.css` and `js/` files.
  - Add `srcset` examples and a small script to auto-generate responsive image names.

---
Generated to make the repo easier to run and maintain.