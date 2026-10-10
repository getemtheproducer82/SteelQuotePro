# Steel Quote Pro PWA

## Run locally
Open `index.html` to use the calculator. For install/offline PWA behavior, run `python3 -m http.server 8080` in this folder and open http://localhost:8080. To install on other computers, host the whole folder on an HTTPS static host and open the site in a supported browser.

## Formula
Weight/piece = lb/ft × length in feet. Base mill cost/piece = (weight/piece ÷ 100) × mill price/CWT. Upcharge is applied to the base mill cost; material total is adjusted piece cost × quantity. Delivery is total order pounds × delivery rate. Final quote = material total + delivery. Internal precision is retained and displayed money is rounded to cents. Customer copy and PDF omit formulas.

## Included
Multiple materials per quote; editable catalog; custom sizes/weights; I-beam logo; customer-copy clipboard export; print/save PDF; saved quotes and settings in browser localStorage; PWA manifest and offline cache.

## Important catalog limitation
Catalog weights are representative starter values and are not live internet-fed data. Verify shape, gauge, schedule, dimensions, and weights against your current mill/supplier specifications. Custom profiles can be added or existing profiles edited. Data is local to each browser/computer and is not automatically synchronized.
