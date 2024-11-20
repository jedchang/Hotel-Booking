#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/jedchang/Hotel-Booking.git master:gh-pages
cd -