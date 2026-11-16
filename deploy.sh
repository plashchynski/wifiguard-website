#!/bin/bash
# Build the site and publish it to the gh-pages branch, which GitHub Pages
# serves at https://www.wifiguardapp.com
set -euo pipefail

npm run build
cp build/index.html build/404.html   # serve the app for unknown paths too
touch build/.nojekyll

tmp=$(mktemp -d)
trap 'git worktree remove --force "$tmp" 2>/dev/null || true' EXIT
git fetch -q origin gh-pages
git worktree add -q -B gh-pages "$tmp" origin/gh-pages
git -C "$tmp" rm -rfq .
cp -R build/. "$tmp"
git -C "$tmp" add -A
if git -C "$tmp" diff --cached --quiet; then
  echo "Nothing to publish."
else
  git -C "$tmp" commit -q -m "Publish $(git rev-parse --short HEAD)"
  git -C "$tmp" push -q origin gh-pages
  echo "Published."
fi
