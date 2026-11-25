# Krishna Kumar — Data Analyst Portfolio

A premium React + Vite portfolio for data analyst internships and job applications.

## Prerequisites

- Node.js 18 or newer
- npm

## Setup

```bash
cd D:\kk_portfolio
npm install
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot reload. |
| `npm run build` | Creates the production build in `dist/`. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs ESLint across the project. |

## Production preview

```bash
npm run build
npm run preview
```

The preview server usually runs at `http://localhost:4173`.

## Project structure

```text
src/
  components/     Reusable section components
  data/siteData.js  Editable profile, skills, projects and education content
  styles.css      Global styles and responsive design
public/
  assets/         Profile photo and other static assets
  Krishna_Kumar_Resume.pdf  Downloadable resume
```

## Updating content

- Profile details, skills, projects and education: `src/data/siteData.js`
- Profile photo: `public/assets/krishna-profile.png`
- Resume file: `public/Krishna_Kumar_Resume.pdf`
- Colors, spacing and responsive styles: `src/styles.css`
