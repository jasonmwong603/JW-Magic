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
  facebook: "https://www.facebook.com/jaywmagic",

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
   * META PIXEL (Facebook & Instagram ads)
   * Your Pixel/dataset ID from Meta Events Manager. It only loads for
   * visitors who click "Accept" on the cookie notice. Leave it empty
   * to switch the Pixel and the cookie notice off entirely.
   */
  metaPixelId: "1130096129979489",

  /*
   * MERCH
   * For each product, create a Square payment link
   * (Square app → Online → Payment links → Create) and paste it in `checkout`.
   * Square handles card payment, shipping address, shipping fee and receipts.
   * Products with `bundles` get one link per bundle (paste each in that bundle's `checkout`).
   * Left empty, the button becomes "Order by email".
   */
  products: [
    {
      id: "fractured",
      name: "Fractured Playing Cards",
      price: 20,
      tag: "Limited edition",
      blurb: "My own deck, printed once by the United States Playing Card Company and never reprinted. Bold red and black backs, line-art courts. When they're gone, they're gone.",
      image: "assets/img/shop/fractured-deck.jpg",
      alt: "A Fractured deck in its red, grey and black tuck box, surrounded by the line-art cards",
      bundles: [
        { label: "1 deck", price: 20, checkout: "https://square.link/u/5lG8MhJO" },
        { label: "3 decks", price: 50, checkout: "https://square.link/u/QjzupLI2" },
        { label: "Half brick (6)", price: 90, checkout: "https://square.link/u/XGX6BuRZ" },
        { label: "Brick (12)", price: 160, checkout: "https://square.link/u/pusUzHMw" }
      ]
    }
  ]
};
