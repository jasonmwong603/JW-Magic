# Phoenix Practice Hub — project brief

Read this first in every new thread. It holds the context from the conversation that started the project.

## What this is

A demo web app for **Phoenix Medical Billing** (Glendale, AZ — phxmedicalbilling.com). Every practice that signs up for Phoenix's billing gets an account on the hub, where doctors can:

1. See and act on their **billing** (collections, claims that need input, payments, patient balances).
2. **Send referrals** to other Phoenix doctors and track them (Sent → Accepted → Booked → Seen, or declined with a reason).
3. **Message** colleagues and their Phoenix billing specialist.
4. Browse the **network** directory (profiles, insurance taken, good-fit conditions).

**Business idea behind it:** Phoenix offers an internal referral network as a client benefit. Doctors who bill with Phoenix get patients from other Phoenix doctors. The first target client is a cash-pay chiropractor in Scottsdale (laser therapy and spinal decompression) who wants more patients and is considering taking insurance. The hub shows both the referral benefit and how Phoenix could help with credentialing or superbills.

## Rules the user has set

- **USA-specific:** US insurers (Aetna, AHCCCS, BCBS of AZ, Cigna, Humana, Medicare, TRICARE West, UHC), CPT, ICD-10, CARC denial codes, NPIs, 837P and 835/EFT, Arizona cities and ZIPs, MST, HIPAA. No Canadian terms (an early version used Alberta, and that's gone).
- **Names and values are placeholders:** every person, clinic, NPI, address ("N Example Rd"), phone (555 numbers), patient (initials only) and dollar amount. The chiropractor is the placeholder "Dr. Alex Carter, Valley Laser & Spine Center". Don't reintroduce real doctors' names unless the user asks.
- **Human design, Phoenix branding:** warm, first-name copy; a named billing specialist ("Maria Delgado", placeholder); thank-you notes after referrals. Colours come from phxmedicalbilling.com:
  - indigo `#1D165B` (primary, rail, buttons)
  - lime `#84C21E` (accents, active states, current-month bar)
  - green `#19711A` (green text on light backgrounds)
  - pale green `#E5F4E0` (soft fills)

  The font is Figtree. The wordmark is "Phoenix" with spaced "MEDICAL BILLING" capitals beneath. Light and dark themes are both defined as CSS tokens on `:root`.
- **Keep the "Demo" banner** saying all data is placeholder and contains no PHI.

## Files

- `index.html` — the entire app: one static file with vanilla JS and no build step. State lives in `localStorage` under key `phoenix-practice-hub-v3`. Bump the version in `KEY`, `load()` and `seed()` whenever the seed data shape changes.
- `tools/make_artifact.py` — writes an Artifact-ready copy (strips the html/head/body wrapper).
- `README.md` — demo instructions, hosting steps for demo.keydate.ca, and notes on what a production version needs.

## Code map (inside index.html)

- `seed()` — sample network: `doctors` (`phx` is the Phoenix team/Maria; `d1` is Dr. Elena Ruiz, the default viewer; `d2` is the cash-pay chiropractor), `threads`, `referrals`, `activity`.
- `billing(d)` — deterministic sample billing per doctor, using a PRNG seeded by doctor id. It has a cash-pay branch (balances, superbills, GFEs) and an insurance branch (claims with CPT/ICD-10/CARC, ERA payments).
- Views: `viewHome`, `viewBilling`, `viewReferrals`, `viewMessages`, `viewNetwork`. Hash routes are `#home`, `#billing`, `#referrals`, `#messages` and `#network`.
- Interactions go through one delegated click handler (`data-action="…"`) and one submit handler (`form[data-form="…"]`).
- `S.sim` simulates colleagues: auto-replies after about 3 s and referral acceptance after about 7 s.
- The persona switcher (top right) lets the presenter view the hub as any doctor, add a doctor, toggle the simulation or reset the demo.

## Publishing and git

- **Live demo (private Claude artifact):** https://claude.ai/artifact/3Ha2Yt6LKt5bfvbrLFm9ug. To update it, run `python3 phoenix-billing/tools/make_artifact.py <scratch>/phoenix-hub.html`, then publish that file with the Artifact tool, passing `url` set to the link above so the link doesn't change.
- **Code** lives in `jasonmwong603/JW-Magic` under `phoenix-billing/` (the rest of that repo is an unrelated magician website; don't touch it). Branch: `claude/vibrant-mayer-cbkeek`. Don't merge to `main`, because GitHub Pages would publish the demo on jaywmagic.com.
- The user wanted a dedicated "Phoenix Billing" repo. Claude can't create repos here, so if the user creates an empty one, attach it with `add_repo` and move this folder there.
- **Before publishing:** test with the pre-installed Playwright at 1366px and 390px widths, in light and dark mode. Check for horizontal overflow and console errors.

## Roadmap ideas (one thread each)

- Shared live data (for example Supabase) so two people on different devices can message and refer in real time.
- Host at demo.keydate.ca (Netlify plus a DNS CNAME).
- Move to its own repository.
- Sign-in screen and a Phoenix admin view (all practices, onboarding pipeline).
- Referral analytics ("patients you sent and received this quarter") and printable superbills.
