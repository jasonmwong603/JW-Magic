(function () {
  "use strict";
  var C = window.JW_CONFIG || {};
  var page = document.body.getAttribute("data-page") || "";
  var telHref = "tel:" + String(C.phone || "").replace(/[^0-9+]/g, "");

  var ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  };
  window.JW_ICONS = ICONS;

  var LOGO = '<svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="#ffd60a" stroke-width="1.9"><path d="M32 2 62 32 32 62 2 32Z"/><path d="M32 10.5 53.5 32 32 53.5 10.5 32Z"/><path d="M2 32h8.5M53.5 32H62"/></g><text x="32" y="38.1" text-anchor="middle" font-family="Inter,Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="300" font-size="17" fill="#ffd60a">JW</text></svg>';
  window.JW_LOGO = LOGO;

  /* ---------- Header ---------- */
  var nav = [
    ["corporate", "corporate.html", "Corporate"],
    ["shows", "index.html#shows", "Shows"],
    ["about", "index.html#about", "About"],
    ["shop", "shop.html", "Shop"],
    ["contact", "contact.html", "Contact"]
  ];
  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="container nav">' +
        '<a class="logo" href="index.html" aria-label="JayWMagic home">' + LOGO +
          '<span class="logo-word">Jay<span>W</span>Magic</span></a>' +
        '<button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button>' +
        '<ul class="nav-links" id="nav-links">' +
          nav.map(function (n) {
            return '<li><a href="' + n[1] + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a></li>";
          }).join("") +
          '<li><a class="btn btn-sm" href="corporate.html#book">Book a show <span class="arrow">→</span></a></li>' +
        "</ul>" +
      "</div>";

    var toggle = header.querySelector(".menu-toggle");
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    header.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 20); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Footer ---------- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container">' +
        '<div class="logo-line" aria-hidden="true"><span></span>' + LOGO + '<span></span></div>' +
        '<div class="footer-big" aria-hidden="true">Pick a <span>card.</span></div>' +
        '<div class="footer-grid">' +
          "<div>" +
            '<a class="logo" href="index.html" aria-label="JayWMagic home">' + LOGO + '<span class="logo-word">Jay<span>W</span>Magic</span></a>' +
            '<p class="muted" style="margin-top:18px;max-width:34ch">Corporate &amp; comedy magic by ' + C.name + '. Based in ' + C.city + ', performing across Canada.</p>' +
            '<form class="newsletter" data-form="newsletter" novalidate>' +
              '<label class="sr-only" for="nl-email" style="position:absolute;left:-9999px">Email</label>' +
              '<input id="nl-email" type="email" name="email" placeholder="Join the mailing list" required autocomplete="email">' +
              '<input class="hp" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">' +
              '<button class="btn btn-sm" type="submit">Join</button>' +
            "</form>" +
            '<div class="form-status" role="status" aria-live="polite"></div>' +
          "</div>" +
          "<div><h4>Explore</h4><ul>" +
            '<li><a href="corporate.html">Corporate events</a></li>' +
            '<li><a href="index.html#shows">Shows</a></li>' +
            '<li><a href="index.html#about">About Jason</a></li>' +
            '<li><a href="shop.html">Merch shop</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          "</ul></div>" +
          "<div><h4>Get in touch</h4><ul>" +
            '<li><a href="mailto:' + C.email + '">' + C.email + "</a></li>" +
            '<li><a href="' + telHref + '">' + C.phone + "</a></li>" +
            "<li class=\"muted\">" + C.city + "</li>" +
          "</ul>" +
            '<div class="socials">' +
              '<a href="' + C.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICONS.ig + "</a>" +
              '<a href="mailto:' + C.email + '" aria-label="Email">' + ICONS.mail + "</a>" +
              '<a href="' + telHref + '" aria-label="Call">' + ICONS.phone + "</a>" +
            "</div>" +
          "</div>" +
          "<div><h4>Policies</h4><ul>" +
            '<li><a href="privacy.html">Privacy policy</a></li>' +
            '<li><a href="terms.html">Terms &amp; conditions</a></li>' +
            '<li><a href="shipping.html">Shipping policy</a></li>' +
            '<li><a href="refunds.html">Refund policy</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " " + C.brand + ". All rights reserved. No cards were harmed.</span>" +
        '<span>Made with sleight of hand in Edmonton.</span></div>' +
      "</div>";
  }

  /* ---------- Fill contact placeholders ---------- */
  document.querySelectorAll("[data-email]").forEach(function (el) { el.textContent = C.email; if (el.tagName === "A") el.href = "mailto:" + C.email; });
  document.querySelectorAll("[data-phone]").forEach(function (el) { el.textContent = C.phone; if (el.tagName === "A") el.href = telHref; });
  document.querySelectorAll("[data-ig]").forEach(function (el) { el.href = C.instagram; });
  document.querySelectorAll("[data-mailto]").forEach(function (el) { el.href = "mailto:" + C.email; });
  document.querySelectorAll("[data-tel]").forEach(function (el) { el.href = telHref; });
  document.querySelectorAll("[data-icon]").forEach(function (el) { el.innerHTML = ICONS[el.getAttribute("data-icon")] || ""; });

  /* ---------- Toast ---------- */
  var toastEl;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast"; toastEl.setAttribute("role", "status");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove("show"); }, 3600);
  }

  /* ---------- Forms ---------- */
  var SUBJECTS = {
    booking: "New show booking request",
    contact: "New message from jaywmagic.com",
    newsletter: "Mailing list sign-up"
  };
  var LABELS = {
    name: "Name", email: "Email", phone: "Phone", company: "Company / organization",
    event_type: "Event type", date: "Event date", time: "Start time", location: "City / venue",
    guests: "Guest count", style: "Style of magic", budget: "Budget", heard: "How they heard",
    message: "Message", subject: "Subject", newsletter: "Join mailing list"
  };

  function collect(form) {
    var data = {};
    new FormData(form).forEach(function (v, k) {
      if (k === "_gotcha") return;
      data[k] = data[k] ? data[k] + ", " + v : v;
    });
    return data;
  }

  function validate(form) {
    var ok = true, first = null;
    form.querySelectorAll("[required]").forEach(function (input) {
      var field = input.closest(".field");
      var valid = input.type === "checkbox" ? input.checked : input.checkValidity() && String(input.value).trim() !== "";
      if (field) field.classList.toggle("invalid", !valid);
      if (!valid) { ok = false; first = first || input; }
    });
    if (first) first.focus();
    return ok;
  }

  function setStatus(form, cls, msg) {
    var st = form.nextElementSibling && form.nextElementSibling.classList.contains("form-status")
      ? form.nextElementSibling : form.querySelector(".form-status");
    if (!st) return toast(msg);
    st.className = "form-status " + cls;
    st.textContent = msg;
  }

  document.addEventListener("submit", function (e) {
    var form = e.target;
    var type = form.getAttribute("data-form");
    if (!type) return;
    e.preventDefault();
    if (form.querySelector('[name="_gotcha"]') && form.querySelector('[name="_gotcha"]').value) return;
    if (!validate(form)) { setStatus(form, "err", "Please fill in the highlighted fields."); return; }

    var data = collect(form);
    var subject = SUBJECTS[type] || "Website enquiry";
    if (type === "booking" && data.name) subject += " — " + data.name + (data.date ? " (" + data.date + ")" : "");
    var btn = form.querySelector('[type="submit"]');
    var success = type === "newsletter"
      ? "You're on the list! Watch your inbox for something magical."
      : type === "booking"
        ? "Request received! Jason will reply within 24 hours with availability and a quote."
        : "Message sent! Jason will get back to you shortly.";

    if (C.formEndpoint) {
      btn.disabled = true;
      var original = btn.innerHTML;
      btn.textContent = "Sending…";
      var payload = Object.assign({ _subject: subject, form: type }, data);
      fetch(C.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      }).then(function (r) {
        if (!r.ok) throw new Error("Bad response");
        form.reset();
        setStatus(form, "ok", success);
        toast(type === "newsletter" ? "Subscribed ✨" : "Sent ✨");
      }).catch(function () {
        setStatus(form, "err", "Something went wrong. Please email " + C.email + " or call " + C.phone + ".");
      }).then(function () { btn.disabled = false; btn.innerHTML = original; });
    } else {
      var body = Object.keys(data).map(function (k) {
        return (LABELS[k] || k) + ": " + data[k];
      }).join("\n");
      window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body + "\n\n— Sent from jaywmagic.com");
      setStatus(form, "ok", "Your email app should open with everything filled in — just hit send. Nothing opened? Email " + C.email + " directly.");
    }
  });

  document.addEventListener("input", function (e) {
    var field = e.target.closest && e.target.closest(".field.invalid");
    if (field) field.classList.remove("invalid");
  });

  /* Prefill booking form from package buttons: <a data-package="..."> */
  document.querySelectorAll("[data-package]").forEach(function (a) {
    a.addEventListener("click", function () {
      var sel = document.querySelector('#booking-form [name="style"]');
      if (sel) sel.value = a.getAttribute("data-package");
    });
  });

  /* Min date on date pickers = today */
  var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  document.querySelectorAll('input[type="date"]').forEach(function (d) { d.min = today.toISOString().slice(0, 10); });

  /* ---------- Shop ---------- */
  var ART = {
    deck: '<svg viewBox="0 0 200 200"><rect x="58" y="34" width="96" height="136" rx="10" fill="#1a1a1a" stroke="#ffd60a" stroke-width="3" transform="rotate(10 106 102)"/><rect x="46" y="30" width="96" height="136" rx="10" fill="#0a0a0a" stroke="#ffd60a" stroke-width="3"/><rect x="56" y="40" width="76" height="116" rx="6" fill="none" stroke="#ffd60a" stroke-opacity=".4"/><g transform="translate(70 72) scale(.75)"><g fill="none" stroke="#ffd60a" stroke-width="1.9"><path d="M32 2 62 32 32 62 2 32Z"/><path d="M32 10.5 53.5 32 32 53.5 10.5 32Z"/><path d="M2 32h8.5M53.5 32H62"/></g><text x="32" y="38.1" text-anchor="middle" font-family="Inter,Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="300" font-size="17" fill="#ffd60a">JW</text></g></svg>',
    tee: '<svg viewBox="0 0 200 200"><path d="M70 30l-40 22 14 30 16-8v96h80V74l16 8 14-30-40-22c-4 12-16 20-30 20S74 42 70 30z" fill="#0a0a0a" stroke="#333" stroke-width="2"/><text x="100" y="98" text-anchor="middle" font-family="Anton,Impact" font-size="17" fill="#ffd60a">PICK A</text><text x="100" y="122" text-anchor="middle" font-family="Anton,Impact" font-size="26" fill="#ffd60a">CARD</text><text x="100" y="146" text-anchor="middle" font-size="16" fill="#ffd60a">♠ ♦</text></svg>',
    hoodie: '<svg viewBox="0 0 200 200"><path d="M74 34c6-10 46-10 52 0l38 20 10 70-20 4-4-40v92H50V88l-4 40-20-4 10-70z" fill="#0a0a0a" stroke="#333" stroke-width="2"/><path d="M78 36c4 18 40 18 44 0" fill="none" stroke="#333" stroke-width="3"/><g transform="translate(82 80) scale(.56)"><g fill="none" stroke="#ffd60a" stroke-width="1.9"><path d="M32 2 62 32 32 62 2 32Z"/><path d="M32 10.5 53.5 32 32 53.5 10.5 32Z"/><path d="M2 32h8.5M53.5 32H62"/></g><text x="32" y="38.1" text-anchor="middle" font-family="Inter,Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="300" font-size="17" fill="#ffd60a">JW</text></g><path d="M70 150h60" stroke="#333" stroke-width="3"/></svg>',
    kit: '<svg viewBox="0 0 200 200"><rect x="34" y="70" width="132" height="90" rx="10" fill="#ffd60a"/><rect x="34" y="56" width="132" height="26" rx="8" fill="#e6bf00"/><text x="100" y="126" text-anchor="middle" font-family="Anton,Impact" font-size="22" fill="#0a0a0a">MAGIC KIT</text><path d="M100 30l6 14 15 1-11 10 4 15-14-8-14 8 4-15-11-10 15-1z" fill="#f7f5ef"/></svg>',
    lesson: '<svg viewBox="0 0 200 200"><rect x="28" y="46" width="144" height="96" rx="10" fill="#0a0a0a" stroke="#ffd60a" stroke-width="3"/><path d="M88 74v40l32-20z" fill="#ffd60a"/><rect x="80" y="150" width="40" height="8" rx="4" fill="#333"/><text x="100" y="180" text-anchor="middle" font-family="Anton,Impact" font-size="14" fill="#a3a09a">1-ON-1 · 60 MIN</text></svg>',
    gift: '<svg viewBox="0 0 200 200"><rect x="26" y="56" width="148" height="92" rx="12" fill="#ffd60a"/><path d="M26 92h148" stroke="#0a0a0a" stroke-width="10"/><path d="M128 56v92" stroke="#0a0a0a" stroke-width="10"/><text x="70" y="128" text-anchor="middle" font-family="Anton,Impact" font-size="26" fill="#0a0a0a">$50</text><circle cx="128" cy="92" r="10" fill="#0a0a0a"/></svg>'
  };

  var shop = document.getElementById("shop-grid");
  if (shop && C.products) {
    shop.innerHTML = C.products.map(function (p, i) {
      var opts = p.options ? '<div class="opts" role="radiogroup" aria-label="Size">' + p.options.map(function (o, j) {
        return '<label class="chip"><input type="radio" name="opt-' + p.id + '" value="' + o + '"' + (j === 2 ? " checked" : "") + "><span>" + o + "</span></label>";
      }).join("") + "</div>" : "";
      var art = p.image ? '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' : (ART[p.art] || ART.deck);
      return '<article class="product reveal d' + (i % 3) + '" data-id="' + p.id + '">' +
        '<div class="product-art">' + art + (p.tag ? '<span class="tag">' + p.tag + "</span>" : "") + "</div>" +
        '<div class="product-body">' +
          '<div class="product-top"><h3>' + p.name + '</h3><span class="price">$' + p.price + "</span></div>" +
          "<p>" + p.blurb + "</p>" + opts +
          '<button class="btn btn-block" type="button" data-buy="' + p.id + '">' +
            (p.checkout ? "Buy now" : "Order by email") + ' <span class="arrow">→</span></button>' +
        "</div></article>";
    }).join("");

    shop.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-buy]");
      if (!btn) return;
      var p = C.products.filter(function (x) { return x.id === btn.getAttribute("data-buy"); })[0];
      var opt = shop.querySelector('input[name="opt-' + p.id + '"]:checked');
      if (p.checkout) {
        window.open(p.checkout, "_blank", "noopener");
      } else {
        var body = "Hi Jason,\n\nI'd like to order:\n\n" + p.name + (opt ? " — size " + opt.value : "") + " ($" + p.price + " CAD)\nQuantity: 1\n\nShipping address:\n\n\nThanks!";
        window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Merch order: " + p.name) + "&body=" + encodeURIComponent(body);
        toast("Opening your email app to place the order…");
      }
    });
  }

  /* ---------- Video lightbox (YouTube/Vimeo URL on data-video) ---------- */
  document.querySelectorAll("[data-video]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var url = btn.getAttribute("data-video");
      var frame = btn.closest(".video-frame");
      if (!url) { toast("Showreel coming soon — follow @jaywmagic for clips!"); return; }
      frame.innerHTML = '<iframe src="' + url + (url.indexOf("?") > -1 ? "&" : "?") + 'autoplay=1" title="JayWMagic showreel" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
  });

  /* ---------- Spotlight follows cursor ---------- */
  var hero = document.querySelector(".hero");
  if (hero && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
      hero.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
    });
  }

  /* ---------- Count-up stats ---------- */
  function countUp(el) {
    var end = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Reveal on scroll ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll("[data-count]").forEach(countUp);
        if (en.target.hasAttribute("data-count")) countUp(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal, [data-count]").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    document.querySelectorAll("[data-count]").forEach(function (el) {
      el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
    });
  }

  /* ---------- Hide mobile FAB near forms ---------- */
  var fab = document.querySelector(".fab");
  var bookSection = document.getElementById("book");
  if (fab && bookSection && "IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { fab.classList.toggle("hide", en[0].isIntersecting); }).observe(bookSection);
  }
})();
