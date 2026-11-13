# Phoenix Practice Hub (demo)

One place for every practice that bills with Phoenix Medical Billing. Doctors can check their billing, send each other patients and message colleagues or their billing specialist.

## What's in it

- **Home**: a plain-language summary ("one colleague sent you a patient, 2 claims need a quick look"), everything waiting on the doctor, this month's collections and new doctors on the hub.
- **Billing**: collections over 6 months, first-pass rate, days to get paid, money waiting on insurance, claims that need the doctor's input (with a "Fix it" form that goes to the billing specialist) and payments posted. Cash-pay practices see patient balances, text-to-pay links, superbills and a prompt about credentialing instead.
- **Referrals**: send a patient with their coverage and a personal note. Track it from Sent to Accepted, Booked and Seen. Specialists accept, decline with a reason, book a date and mark the patient seen, and the referring doctor can send a thank-you. If an insured patient goes to a cash-pay clinic, the hub explains that Phoenix will issue a superbill.
- **Messages**: doctor-to-doctor chat, plus a thread with the practice's billing specialist (Maria Delgado, a sample person).
- **Network**: every doctor on the hub, with a profile, the conditions they're a good fit for, languages, payment type and the plans they take. Search with words like "sciatica" or "Spanish".

## Running the demo

It's one static file with no build step. Open `index.html` in a browser, or put the folder on any static host.

Everything is controlled from the menu at the top right:
- **See the hub as**: switch doctors. Start as Dr. Elena Ruiz (family medicine), then switch to Dr. Craig Zimmerman to see the patients sent to his cash-pay clinic and his billing view.
- **Add a new doctor**: show a new Phoenix client joining the hub.
- **Colleagues reply on their own**: other doctors and Maria answer messages, and accept referrals after about 7 seconds. Turn it off to play both sides yourself.
- **Start the demo over**: restore the sample data.

All patients, claims, dollar amounts and doctors other than Dr. Zimmerman are made up. Data is saved in the viewer's own browser (localStorage).

## Hosting at demo.keydate.ca

1. Deploy this folder to a static host (Netlify, Vercel, Cloudflare Pages or GitHub Pages).
2. Add the custom domain `demo.keydate.ca` in that host's settings.
3. At keydate.ca's DNS provider, add a `CNAME` record: name `demo`, value = the host's target (for example `your-site.netlify.app`).

## Before real patients

This is a front-end demo. A real version needs sign-in, a shared backend database, a connection to Phoenix's billing system, audit logs and HIPAA compliance (including a BAA with every vendor) before any patient information goes in.
