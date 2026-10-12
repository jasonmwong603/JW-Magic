/*
 * ============================================================
 *  SITE SETTINGS — edit this file to change contact details,
 *  form delivery, and merch checkout links. No coding needed.
 * ============================================================
 */
window.JW_CONFIG = {
  name: "Jason Wong",
  brand: "JW Magic",
  email: "jaywmagic@gmail.com",
  phone: "780-729-8383",
  city: "Edmonton, Alberta",
  /*
   * BUSINESS ADDRESS (optional, shown in the footer of every page)
   * Left empty, the footer shows the city only. If you get a PO box,
   * virtual mailbox or office, put it here, e.g. "PO Box 123, Edmonton, AB T5J 0A1".
   */
  address: "",
  instagram: "https://www.instagram.com/jwmagic_",

  /*
   * SHOWREEL (home page)
   * showreelVideo: the video file that plays full-screen on the home page.
   *   It lives in assets/video/. To swap it, upload a new .mp4 there and
   *   change the file name below (portrait phone videos look best).
   * showreel: the same video's Instagram (or YouTube) link, used for the
   *   "Watch on Instagram" button. If showreelVideo is left empty, this
   *   link is embedded instead. Left empty too, the section says "coming soon".
   */
  showreelVideo: "assets/video/showreel.mp4",
  showreelPoster: "assets/img/showreel-poster.jpg",
  showreel: "https://www.instagram.com/p/DdrBQpQhWaQ/",

  /*
   * "STARTING FROM" PRICES (CAD, numbers only, e.g. "250")
   * Each one shows on the Corporate or Weddings & parties page as
   * "From $250". Left empty, that price (and the whole pricing
   * section, if all are empty) stays hidden.
   */
  startingPrices: {
    roving: "",       // Roving magic, per 30-minute block
    stageShow: "",    // Corporate comedy stage show
    privateShow: ""   // Private party show
  },

  /*
   * "TRUSTED BY" (home page, under the scrolling banner)
   * Companies, venues or events you've performed for, with their OK.
   * e.g. ["The Comic Strip", "Acme Corp holiday party"]
   * Left empty, the row stays hidden.
   */
  trustedBy: [],

  /*
   * MAILING LIST SIGN-UP (footer). Booking and contact use email buttons, not forms.
   * Paste a Formspree endpoint here (free at https://formspree.io), e.g.
   *   "https://formspree.io/f/abcdwxyz"
   * Submissions then land straight in your inbox.
   * Left empty, the sign-up opens the visitor's email app
   * with everything pre-filled, so nothing is ever lost.
   */
  formEndpoint: "",

  /*
   * MERCH
   * For each product, create a Stripe Payment Link
   * (Stripe Dashboard → Payment Links → New) and paste it in `checkout`.
   * Stripe handles card payment, shipping address, tax and receipts.
   * Turn on "Collect custom field" in Stripe to ask for shirt size.
   * Left empty, the button becomes "Order by email".
   */
  products: [
    {
      id: "deck",
      name: "JW Signature Playing Cards",
      price: 18,
      tag: "Bestseller",
      blurb: "Black & gold custom deck. The exact cards I use on stage. Shuffle at your own risk.",
      art: "deck",
      checkout: ""
    },
    {
      id: "tee",
      name: "“Pick A Card” Tee",
      price: 35,
      tag: "New",
      blurb: "Heavyweight black cotton, yellow print. Comes with zero card tricks (sorry).",
      art: "tee",
      options: ["S", "M", "L", "XL", "XXL"],
      checkout: ""
    },
    {
      id: "hoodie",
      name: "JW Diamond Hoodie",
      price: 65,
      tag: "",
      blurb: "Midweight fleece with the JW diamond logo. Disappears from laundry piles mysteriously.",
      art: "hoodie",
      options: ["S", "M", "L", "XL", "XXL"],
      checkout: ""
    },
    {
      id: "kit",
      name: "Pocket Magic Starter Kit",
      price: 29,
      tag: "Gift idea",
      blurb: "A deck, three gimmicks and private video lessons. Fool your coworkers by Monday.",
      art: "kit",
      checkout: ""
    },
    {
      id: "lesson",
      name: "1-on-1 Virtual Magic Lesson",
      price: 75,
      tag: "Experience",
      blurb: "60 minutes over Zoom. Learn a routine you can actually perform at your next party.",
      art: "lesson",
      checkout: ""
    },
    {
      id: "gift",
      name: "Gift Card",
      price: 50,
      tag: "",
      blurb: "Good for merch or lessons. The one gift that's guaranteed not to vanish.",
      art: "gift",
      checkout: ""
    }
  ]
};
