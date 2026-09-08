import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// This standalone page is added AFTER MyST builds its TOC, search index and sitemap.
// Only links are published: never copy instructor notebooks into the site artifact.
export const route = 'course-review-7d31c8b4a6e24f90b25d0197';
const destination = resolve('_build/html', route);
if (!existsSync('_build/html/index.html')) {
  throw new Error('Build the student site first with jupyter-book build --html.');
}
const repository = 'LizbethMG-Teaching/pose2behav-solutions-private';
const notebooks = [
  ['Lab 2 — Exploratory data analysis', 'EDA-teaching.ipynb'],
  ['Lab 3 — Single-animal analysis', 'analysis_single-animal.ipynb'],
  ['Lab 4 — Multi-animal analysis', 'analysis_multi_animal.ipynb'],
];
const cards = notebooks.map(([title, filename]) => {
  const path = `${repository}/blob/main/notebooks/${filename}`;
  return `<section><h2>${title}</h2><p><a class="button" href="https://colab.research.google.com/github/${path}" rel="nofollow noreferrer">Open in Colab</a> <a href="https://github.com/${path}" rel="nofollow noreferrer">View or download notebook</a></p></section>`;
}).join('\n');
mkdirSync(destination, { recursive: true });
writeFileSync(resolve(destination, 'index.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow, noarchive">
  <meta name="referrer" content="no-referrer">
  <title>Course solutions | Pose2Behav</title>
  <style>
    body{font:18px/1.65 system-ui,sans-serif;color:#20343b;background:#f6f8f7;margin:0}
    main{max-width:760px;margin:4rem auto;padding:0 1.25rem}h1{line-height:1.2}
    section{background:white;padding:1rem 1.5rem;margin:1.5rem 0;border:1px solid #d2ded8;border-radius:12px}
    h2{font-size:1.2rem}a{color:#07594e}.button{display:inline-block;background:#07594e;color:white;padding:.5rem 1rem;border-radius:6px;margin:0 .75rem .5rem 0;text-decoration:none}
    a:focus-visible{outline:3px solid #c65313;outline-offset:4px}footer{font-size:.85rem;margin:2rem 0}
  </style>
</head>
<body><main>
  <p>Pose2Behav · Course review</p>
  <h1>Course solutions</h1>
  <p>Use these notebooks to review the exercises after your instructor releases access.</p>
  <p>Access must be granted separately. If a link reports that the notebook cannot be found, contact your instructor. For private GitHub notebooks, sign in with an account that has access and authorize GitHub in Colab. You can also download the notebook from GitHub and upload it through Colab’s File → Upload notebook menu.</p>
  ${cards}
  <footer><a href="../">Return to the course</a></footer>
</main></body></html>\n`);
console.log(`Added unlisted page: ${route}/index.html`);
