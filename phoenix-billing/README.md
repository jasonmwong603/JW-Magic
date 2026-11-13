# Phoenix Practice Hub (demo)

One place for every practice that bills with Phoenix Medical Billing. Doctors can check their billing, send each other patients and message colleagues or their billing specialist.

## What's in it

- **Home**: a plain-language summary ("one colleague sent you a patient, 2 claims need a quick look"), everything waiting on the doctor, this month's collections and new doctors on the hub.
- **Billing**: collections over 6 months, first-pass rate, days to get paid, money waiting on insurance, claims that need the doctor's input (with a "Fix it" form that goes to the billing specialist) and payments posted. Cash-pay practices see patient balances, text-to-pay links, superbills and a prompt about credentialing instead.
- **Referrals**: send a patient with their coverage and a personal note. Track it from Sent to Accepted, Booked and Seen. Specialists accept, decline with a reason, book a date and mark the patient seen, and the referring doctor can send a thank-you. If an insured patient goes to a cash-pay clinic, the hub explains that Phoenix will issue a superbill.
- **Messages**: doctor-to-doctor chat, plus a thread with the practice's billing specialist (Maria Delgado, a sample person).
- **Network**: every doctor on the hub, with a profile, the conditions they're a good fit for, languages, payment type and the plans they take. Search with words like "sciatica" or "Spanish".

## Running the demo

It's one static file with no build step. Open `index.html` in a browser, or see *Hosting at demo.keydate.ca* below.

Everything is controlled from the menu at the top right:
- **See the hub as**: switch doctors. Start as Dr. Elena Ruiz (family medicine), then switch to Dr. Alex Carter to see the patients sent to a cash-pay chiropractic clinic and its billing view.
- **Add a new doctor**: show a new Phoenix client joining the hub.
- **Colleagues reply on their own**: other doctors and Maria answer messages, and accept referrals after about 7 seconds. Turn it off to play both sides yourself.
- **Start the demo over**: restore the sample data.

All names (doctors, clinics, staff, patients), NPIs, addresses, phone numbers and dollar amounts are placeholders. The structure is real US billing: CPT and ICD-10 codes, CARC denial codes (CO-197, CO-16, CO-27, CO-11), 837P claims, 835 ERAs and EFT deposits, Arizona payers (AHCCCS, BCBS of AZ, Medicare, TRICARE West), Good Faith Estimates for self-pay patients and Medicare's chiropractic rule (CPT 98940–98942 only). Data is saved in the viewer's own browser (localStorage).

## Hosting at demo.keydate.ca (Netlify)

Netlify deploys **only this `phoenix-billing/` folder** from the branch `claude/vibrant-mayer-cbkeek`. The rest of the repo (jaywmagic.com, the repo-root `CNAME` and `.github/workflows/pages.yml`) is untouched, and nothing gets merged to `main`.

`netlify.toml` (in this folder) copies `index.html` into `dist/` and publishes only that, so `CLAUDE.md`, `README.md` and `tools/` are never public. It also sends an `X-Robots-Tag: noindex, nofollow` header to back up the `<meta name="robots" content="noindex">` tag in `index.html`.

### 1. Connect the repo (you do this in Netlify)

1. Sign in at https://app.netlify.com (signing in with GitHub is easiest).
2. Click **Add new project** (older accounts say **Add new site**), then **Import an existing project**.
3. Choose **GitHub**. If JW-Magic isn't listed, click **Configure the Netlify app on GitHub** and give it access to `jasonmwong603/JW-Magic`.
4. Pick **JW-Magic** and fill in:
   - **Branch to deploy:** `claude/vibrant-mayer-cbkeek`
   - **Base directory:** `phoenix-billing`
   - **Build command** and **Publish directory:** leave blank. Netlify reads them from `netlify.toml` (it may show `phoenix-billing/dist`; that's correct).
   - **Project name:** for example `phoenix-hub-demo`, which gives `phoenix-hub-demo.netlify.app`.
5. Click **Deploy**. After about 30 seconds, open the `*.netlify.app` link and check that the hub loads.
6. Optional but recommended: **Project configuration → Build & deploy → Continuous deployment → Branches and deploy contexts → Configure**. Set **Branch deploys** to *Deploy only the production branch* and **Deploy Previews** to *Don't deploy pull requests*, so other branches of this repo never build.

### 2. Add the domain (you do this in Netlify)

1. Open **Domain management** and click **Add a domain** (or **Add custom domain**).
2. Enter `demo.keydate.ca` and click **Verify**, then **Add domain**. Netlify warns that the domain uses outside DNS; that's expected.
3. Netlify now shows the CNAME target, which is the project's `*.netlify.app` address.

### 3. Add the DNS record (you do this at keydate.ca's DNS provider)

| Type | Name / Host | Value / Target | TTL |
|---|---|---|---|
| `CNAME` | `demo` | `phoenix-hub-demo.netlify.app` (your real project address from step 1) | Auto, or 3600 |

- Enter only `demo` as the name. Most providers add `.keydate.ca` themselves; typing `demo.keydate.ca` can produce `demo.keydate.ca.keydate.ca`.
- Use the value **without** `https://` and without a trailing slash.
- If keydate.ca's DNS is at **Cloudflare**, set the record to **DNS only** (grey cloud), not Proxied, or Netlify can't issue the certificate.
- If keydate.ca has `CAA` records, one must allow `letsencrypt.org`. If there are no CAA records, nothing is needed.
- Don't change the root `keydate.ca` or `www` records.

### 4. HTTPS (automatic)

Once the record works (usually a few minutes, up to a few hours), go back to **Domain management → HTTPS** and click **Verify DNS configuration** if it hasn't started on its own. Netlify issues a free Let's Encrypt certificate. Then open https://demo.keydate.ca.

To check the record from a terminal:

```bash
dig +short CNAME demo.keydate.ca
```

It should print your `*.netlify.app` address.

### Updating the demo

Push to `claude/vibrant-mayer-cbkeek`. Netlify rebuilds only when something in `phoenix-billing/` changes. Visitors' saved demo data lives in their own browser, so bump the `localStorage` key if the seed data shape changes (see `CLAUDE.md`).

## Before real patients

This is a front-end demo. A real version needs sign-in, a shared backend database, a connection to Phoenix's billing system, audit logs and HIPAA compliance (including a BAA with every vendor) before any patient information goes in.
