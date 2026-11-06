# RT-Groceryhub – Fresh Choices, Happy Living!
Static, vegetarian-only grocery demo store (HTML + CSS + vanilla JS). 136 products, 12 categories, INR pricing.
Owner: RISHABH SHAH · Developer credit: RT1504 · Phone: 7861986128 · Email: stored as **unverified** in `js/config.js` (no mailto link is created).

## Run locally
Open `index.html`, or serve the folder: `python3 -m http.server 8000` → http://localhost:8000
(Internet needed for Google Fonts, jsPDF and Leaflet/OpenStreetMap CDNs.)

## Deploy to GitHub Pages
1. Create repo `RT-Groceryhub` under shahrishabh1513-jsk and push this folder to `main`.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / root.
3. Live at https://shahrishabh1513-jsk.github.io/RT-Groceryhub/ (all paths are relative).

## Structure
`*.html` (17 pages, thin shells) · `css/style.css` · `js/config.js` (all settings) · `js/app.js` (cart, wishlist, shop, checkout, invoice, map, tracking) · `data/product-data.js` (catalogue) · `assets/logo/` (SVG logo + favicon)

## Demo vs real
| Feature | Status |
|---|---|
| Cart, wishlist, orders, profile | localStorage only (this browser) – not secure, not cross-device |
| Checkout / UPI | Simulated. COD + demo UPI; online payment disabled until `paymentGateway` is configured |
| Invoice PDF / print | Real, generated in browser (PDF uses "Rs." because built-in PDF fonts lack ₹) |
| Location | Real browser Geolocation + Leaflet/OSM map; user confirms address |
| Tracking | **Demo only** (simulated timer). Real mode needs backend + delivery-partner GPS |
| Contact form / newsletter | Validated but **not delivered** – needs a backend/form service |
| Accounts | Local profile only; no passwords |

## Backend needed for production
Auth (hashed passwords + sessions), payment gateway with server-side verification, database for orders, email/form delivery, and a delivery-partner app streaming authorised GPS to the tracking page.

## Images & credits
- `assets/logo/logo.png` is the RT-Groceryhub brand logo supplied by the owner (header, footer, loader, hero, invoice/PDF).
- `assets/images/products/<id>.jpg`: 28 real produce/dry-fruit photos from the Fruits-360 dataset (Horea94/Fruit-Images-Dataset, CC BY-SA 4.0, 100×100 px). Please keep this attribution.
- Products without a photo show a clean vegetarian-labelled pack tile. To add a real photo: save it as `assets/images/products/<id>.jpg` and add the id to `window.RT_PHOTOS` at the bottom of `data/product-data.js`.
