# JW Magic — jaywmagic.com

The website for Jason Wong, corporate and comedy magician in Edmonton. It's a plain static site (HTML, CSS and JS) with no build step, so it runs free on Netlify, Cloudflare Pages or GitHub Pages.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home page: hero, shows, about, showreel, booking steps, reviews, merch teaser, Instagram |
| `corporate.html` | Why book Jason, the **Email me for a quote** button (`#book`) and the FAQ |
| `shop.html` | Merch shop. Products come from `assets/js/config.js` |
| `contact.html` | Contact cards and a **Write me an email** button |
| `privacy` / `terms` / `shipping` / `refunds.html` | Policy pages |
| `404.html` | The "page vanished" page |

## Change details in one place: `assets/js/config.js`

Email, phone, Instagram, form delivery and merch products all live in this file.

### 1. Booking and contact go straight to email
There are no booking or contact forms. The **Email me for a quote** and **Write me an email** buttons open the visitor's own email app with your address and a short template (date, city, guests…) filled in. To change the template wording, edit `MAIL_TEMPLATES` in `assets/js/main.js`.

The mailing list sign-up in the footer also opens the visitor's email app. If you'd rather it land in your inbox directly, sign up free at https://formspree.io and paste the endpoint into `formEndpoint`.

### 2. Turn on merch checkout (Stripe)
1. In Stripe, go to **Payment Links → New** and create a link for each product. Turn on shipping address collection, and a custom "Size" field for apparel.
2. Paste each link into that product's `checkout` field.

The button then changes from **Order by email** to **Buy now**. To use a real product photo, add `image: "assets/img/deck.jpg"` to the product.

## Photos
Original, full-resolution photos live in `assets/img/photos/`. They are used in the home page hero (`card-throw-festival.jpg`), the About section (`jason-portrait.jpg`), the "In action" gallery (tap to view full size), and the Corporate and Contact page headers. To add one to the gallery, copy any `<figure class="g-item">` block in `index.html` and change the file name, size and caption.

## Brand
Logo: the JW double diamond with a horizontal line, in punchy yellow `#ffd60a` on black `#0a0a0a`. It is drawn as inline SVG (`LOGO` in `assets/js/main.js`), with `assets/img/favicon.svg` for the browser tab and `assets/img/og.png` as the image shown when the link is shared.

## Add your content before launch
- [x] **Showreel:** plays full-screen from `assets/video/showreel.mp4` (the Comic Strip reel, Instagram post DdrBQpQhWaQ). To swap it, upload a new portrait `.mp4` to `assets/video/` and update `showreelVideo` (and the `showreel` Instagram link) in `assets/js/config.js`. Keep it under about 25 MB so it loads quickly on phones.
- [x] **Recent Instagram posts:** the home page grid shows your 6 latest public posts. It refreshes itself every morning (`.github/workflows/instagram.yml`), so there's nothing to update. To refresh right away: GitHub → **Actions** → **Refresh Instagram posts** → **Run workflow**.
- [ ] **Testimonials:** the reviews section in `index.html` is hidden for launch. Put real client quotes in place of the samples, then remove `hidden` from that `<section>`.
- [ ] **Merch:** change the product names, prices and descriptions in `config.js` to match what you actually sell.
- [ ] Review the policy pages.
- [ ] **Business address (optional):** if you get a PO box or virtual mailbox, add it to `address` in `config.js` so it shows in the footer. Until then, the footer shows Edmonton, AB.
- [ ] **Mailing list:** send newsletters through a mailing tool (Mailchimp, Buttondown, Kit…) so every email has an unsubscribe link, and import sign-ups with the consent date they arrive with.
- [x] **Photos:** photographers have given permission for website use. Event guests are told photos and video will be taken, and children are never named.

## How to edit the website

**Easiest:** tell Claude what to change, then review and merge the pull request it opens.

**Do it yourself on GitHub** (computer, or a phone browser in desktop mode):
1. Go to github.com/jasonmwong603/JW-Magic and tap the file you want to change (see the table below).
2. Tap the **pencil icon** (Edit this file).
3. Change the words. Only touch text between tags, like `<p>this text</p>`, and leave the `<…>` parts alone.
4. Tap **Commit changes…** → keep "Commit directly to the main branch" → **Commit changes**.
5. The live site updates in about 1–2 minutes. If it still looks old, open it in a private/incognito tab.

Tip: in the editor, use your browser's Find (Ctrl/Cmd+F) to jump to the sentence you want to change.

| To change… | Edit this file |
|---|---|
| Email, phone, Instagram, showreel link, form delivery | `assets/js/config.js` |
| Merch products, prices, descriptions, Stripe links | `assets/js/config.js` (the `products` list) |
| Home page text: headline, shows, about, gallery captions, FAQ-style blurbs | `index.html` |
| Corporate page text, quote button, FAQ | `corporate.html` |
| Contact page text | `contact.html` |
| Shop page headings and the bulk-order blurb | `shop.html` |
| Menu links, footer text | `assets/js/main.js` (search for `nav` or `footer`) |
| Policies | `privacy.html`, `terms.html`, `shipping.html`, `refunds.html` |
| Colours and fonts | `assets/css/styles.css` (top of the file, under `:root`) |
| Photos | upload to `assets/img/photos/` (Add file → Upload files), then reference the file name |

If an edit breaks something, open the file's **History**, pick the previous version, and copy it back. Or ask Claude to undo it.

## Run it locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)
Every push to `main` publishes the site automatically through `.github/workflows/pages.yml`, the same hosting the steadybudgeting project uses.

**One-time setup**
1. **Repo → Settings → Pages → Build and deployment → Source: GitHub Actions.** On a free GitHub plan, Pages only works on public repos. Either make this repo public (Settings → General → Danger Zone; nothing in it is secret) or upgrade to GitHub Pro.
2. **Settings → Pages → Custom domain:** enter `www.jaywmagic.com` (the `CNAME` file sets this too).
3. In **Wix → Domains → jaywmagic.com → Manage DNS Records**, replace the old Wix records with:

   | Type | Host | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | jasonmwong603.github.io |

4. Once the domain shows a green check in Settings → Pages, tick **Enforce HTTPS**.

Keep the domain registration active at Wix (it renews in July 2027). Only cancel the Wix site plan, and only once the new site is live.
