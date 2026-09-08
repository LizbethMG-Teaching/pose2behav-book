# Instructor solutions workflow

## Status and rollback point

The initial commit is `1a8ab9a9b04367f58c1a5c0e471872fa79ba71f8`.
Safety branch: `safety/pre-private-solutions-2026-09-08`.
Working branch: `private-solutions-setup-2026-09-08`.

This setup was prepared locally. GitHub rejected branch creation with
`403 Resource not accessible by integration`. No remote branch, PR, private
repository, merge, or deployment has been completed. Do not merge this setup
until the private notebook repository exists and all three links have been tested.

## Notebook inventory

The following files were preserved byte for byte in a separate local repository
prepared for **private** hosting as `LizbethMG-Teaching/pose2behav-solutions-private`:

| Original path | Purpose |
| --- | --- |
| `notebooks/EDA-teaching.ipynb` | Lab 2 solution counterpart |
| `notebooks/analysis_single-animal.ipynb` | Lab 3 solution counterpart |
| `notebooks/analysis_multi_animal.ipynb` | Lab 4 solution counterpart |
| `notebooks/prepare-multi-animal-data.ipynb` | Instructor data preparation utility; no student counterpart |

The three `*-students.ipynb` notebooks are unchanged. Only the commented-out
solution badges were removed from labs 2–4. The existing TOC is unchanged.
No notebook code or stored output was modified or executed.

## Finish private hosting

1. Create an empty **private** repository named
   `LizbethMG-Teaching/pose2behav-solutions-private`. Verify its visibility before
   uploading anything. Do not use a public fork or a branch of the course repo.
2. Push the separate instructor repository's `main` branch there. Keep its
   `preservation-manifest.json`, which records SHA-256 hashes of the originals.
3. Grant instructors access only during the course. There is no private checkout,
   token, or instructor content in the public site's deployment workflow.
4. Test all three Colab links while signed in as an authorized instructor, and
   confirm an unauthorized account cannot download the private notebooks.
5. Push the safety and working branches to the public course repository, open a
   draft PR against `main`, and let the PR site checks run. Merge only after review.

The notebooks retain their original internal badges for exact preservation.
Those badges still target their former public locations; use the solutions page
or the private repository to open them. Update those badges in the private repo
as a separate change after confirming its final name.

## Unlisted page

The post-build script `scripts/add-solutions-page.mjs` adds:

`_build/html/course-review-7d31c8b4a6e24f90b25d0197/index.html`

Expected URL with the existing default Pages configuration (not deployed yet):

https://lizbethmg-teaching.github.io/pose2behav-book/course-review-7d31c8b4a6e24f90b25d0197/

There is no entry in `myst.yml`, no public course link to it, and no inclusion in
MyST's generated search index or sitemap. The page includes a robots meta tag
with `noindex, nofollow, noarchive`. Do not add a `robots.txt` disallow rule: that
can prevent compliant crawlers from reading the noindex tag. The standalone
page contains three Colab buttons and GitHub download fallback links.

For a local production preview:

```sh
jupyter-book build --html
node scripts/check-solutions-boundary.mjs
node scripts/add-solutions-page.mjs
node scripts/check-solutions-boundary.mjs --built
```

Set `BASE_URL=/pose2behav-book` for a Pages-style build. A normal MyST development
server does not run this post-build step; preview `_build/html` with a static server.

## End-of-course release

Grant students read access to the private repository, then share the single page
URL. They may need to authorize GitHub access in Colab (organization policy may
also require approval). A fallback is to download the notebook from GitHub and
upload it into Colab. Alternatively, share reviewed copies through Google Drive
and replace the three links in the page generator with those Colab/Drive URLs.
Grant access to those copies before sharing the page. Do not make the entire
instructor repository public merely to enable the links: it also holds the
data-preparation utility and may later contain unreleased work.

## Privacy limits

The course repository and its branch/PR source are public. A random URL and
noindex are obscurity and crawler requests, not authentication. Anyone can
discover this page's path from source; private repository permissions protect
the linked files. GitHub Pages does not make this page private.

The original solutions remain on `main` until a reviewed merge, and remain in
public history and any public safety branch afterward. Existing clones, forks,
and caches may also retain them. This workflow protects future private edits;
it cannot revoke previously published answers. History rewriting was not done.

References:
- https://mystmd.org/guide/deployment
- https://github.com/googlecolab/colabtools/blob/main/notebooks/colab-github-demo.ipynb
- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository

## Revert

Before merging, close the PR and keep using `main`; the live site is unchanged.
The safety branch and supplied original Git bundle preserve the initial state.
After a merge, use GitHub's Revert action on the merged PR (or revert its merge /
squash commit) through a new PR. This restores the removed notebook paths and
original workflow. Do not force-push or reset the public history. Retain the
private repository and backups even if reverting the public change.
