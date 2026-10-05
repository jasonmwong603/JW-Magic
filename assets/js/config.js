/*
 * ============================================================
 *  SITE SETTINGS — edit this file to change contact details,
 *  form delivery, and merch checkout links. No coding needed.
 * ============================================================
 */
window.JW_CONFIG = {
  name: "Jason Wong",
  brand: "JayWMagic",
  email: "jaywmagic@gmail.com",
  phone: "780-729-8383",
  city: "Edmonton, Alberta",
  instagram: "https://www.instagram.com/jaywmagic",

  /*
   * FORMS (booking + contact + mailing list)
   * Paste a Formspree endpoint here (free at https://formspree.io), e.g.
   *   "https://formspree.io/f/abcdwxyz"
   * Submissions then land straight in your inbox.
   * Left empty, forms fall back to opening the visitor's email app
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
