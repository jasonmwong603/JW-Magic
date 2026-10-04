# JayWMagic — jaywmagic.com

The website for Jason Wong, corporate and comedy magician in Edmonton. It's a plain static site (HTML, CSS and JS) with no build step, so it runs free on Netlify, Cloudflare Pages or GitHub Pages.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home page: hero, shows, about, showreel, booking steps, reviews, merch teaser, Instagram |
| `corporate.html` | Corporate packages, the full **booking form** (`#book`) and the FAQ |
| `shop.html` | Merch shop. Products come from `assets/js/config.js` |
| `contact.html` | Contact cards and a general message form |
| `privacy` / `terms` / `shipping` / `refunds.html` | Policy pages |
| `404.html` | The "page vanished" page |

## Change details in one place: `assets/js/config.js`

Email, phone, Instagram, form delivery and merch products all live in this file.

### 1. Make the forms deliver to your inbox (5 minutes)
1. Sign up free at https://formspree.io and create a form using jaywmagic@gmail.com.
2. Copy the endpoint (for example `https://formspree.io/f/abcdwxyz`) into `formEndpoint`.

Until you do this, the booking, contact and newsletter forms open the visitor's email app with everything filled in, so no enquiry is lost.

### 2. Turn on merch checkout (Stripe)
1. In Stripe, go to **Payment Links → New** and create a link for each product. Turn on shipping address collection, and a custom "Size" field for apparel.
2. Paste each link into that product's `checkout` field.

The button then changes from **Order by email** to **Buy now**. To use a real product photo, add `image: "assets/img/deck.jpg"` to the product.

## Add your content before launch
- [ ] **Your photo:** save it as `assets/img/jason.jpg`. It appears in the About section automatically.
- [ ] **Showreel:** in `index.html`, put a YouTube embed URL in `data-video=""` (for example `https://www.youtube.com/embed/VIDEO_ID`).
- [ ] **Testimonials:** replace the three sample reviews in `index.html` (look for the `TODO` comment) with real client quotes.
- [ ] **Merch:** change the product names, prices and descriptions in `config.js` to match what you actually sell.
- [ ] **Social preview image:** add `assets/img/og.png` (1200×630). It's the picture shown when the link is shared.
- [ ] Review the policy pages and the package wording.

## Run it locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy
**Netlify (easiest):** connect this GitHub repo at app.netlify.com, leave the build command empty and set the publish directory to `/`. Then add `jaywmagic.com` under Domain settings and update your DNS at the registrar.
