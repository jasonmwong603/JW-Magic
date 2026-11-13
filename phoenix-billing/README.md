# Phoenix Billing: Physician Hub (demo)

A hub where every physician who signs up for Phoenix Billing gets an account. Doctors can:

- **Hub dashboard**: unread messages, referrals waiting for a response, referrals in progress and live network activity
- **Directory**: search and filter every physician on the network by specialty, city and whether they're accepting referrals
- **Messages**: one-to-one chat between doctors, plus a thread with the Phoenix Billing team
- **Referrals**: send a referral, then track it as Sent → Accepted → Booked → Seen. Specialists accept or decline (with a reason), book a date and mark the patient seen, which queues the consult claim with Phoenix

## Running the demo

It's one static file with no build step and no server. Open `index.html` in a browser, or host the folder on any static host.

- **Viewing as** (top right) switches which doctor you're logged in as, so you can send a referral as a family doctor and then accept it as the specialist.
- **Add a doctor** shows a new sign-up joining the network.
- **Simulate colleague replies** (in the Viewing as menu) makes other doctors reply to messages and accept referrals automatically. Turn it off if you want to do both sides by hand.
- **Reset demo data** (same menu) restores the sample network.

Data is sample data only and is saved in the browser (localStorage), so each viewer has their own copy.

## Hosting at demo.keydate.ca

1. Deploy this folder to a static host (Netlify, Vercel, Cloudflare Pages or GitHub Pages).
2. Add the custom domain `demo.keydate.ca` in that host's settings.
3. At keydate.ca's DNS provider, add a `CNAME` record: name `demo`, value = the host's target (for example `your-site.netlify.app`).

## Files

- `app.html`: the app source (used for the hosted Claude artifact)
- `index.html`: the same app wrapped as a standalone page for any static host

## Before real patients

This is a front-end demo. A production version needs real sign-in, a shared backend database, encryption, audit logs and Canadian health-privacy compliance (for Alberta, the Health Information Act) before any patient information goes in.
