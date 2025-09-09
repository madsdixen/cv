# Single-Page CV — React + Tailwind + Vite

## Local dev
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
1) Commit and push to `main`.
2) Ensure `vite.config.ts` `base` matches your repo (e.g. `/mads-cv/`), or `'/'` for `<user>.github.io`.
3) GitHub Actions builds and deploys automatically.

## Customize
- Edit content in `src/CVPage.tsx` (profile, skills, experience, education).
- Replace `public/MadsDixen_CV.pdf` with your real PDF (or change the path in code).
