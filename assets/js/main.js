(function () {
  "use strict";
  var C = window.JW_CONFIG || {};
  var page = document.body.getAttribute("data-page") || "";
  var reviewHref = C.googleReview || C.google;
  var telHref = "tel:" + String(C.phone || "").replace(/[^0-9+]/g, "");

  var ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.2 2 9.3l6.9-1z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  };
  window.JW_ICONS = ICONS;

  var LOGO = '<svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="#ffd60a" stroke-width="1.9"><path d="M32 2 62 32 32 62 2 32Z"/><path d="M32 10.5 53.5 32 32 53.5 10.5 32Z"/><path d="M2 32h8.5M53.5 32H62"/></g><text x="32" y="38.1" text-anchor="middle" font-family="Inter,Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="300" font-size="17" fill="#ffd60a">JW</text></svg>';
  window.JW_LOGO = LOGO;

  /* ---------- Header ---------- */
  var nav = [
    ["corporate", "corporate.html", "Corporate"],
    ["private", "private.html", "Weddings &amp; parties"],
    ["shows", "shows.html", "Shows"],
    ["about", "about.html", "About"],
    ["gallery", "gallery.html", "Gallery"],
    ["shop", "shop.html", "Shop"],
    ["contact", "contact.html", "Contact"]
  ];
  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="container nav">' +
        '<a class="logo" href="index.html" aria-label="JW Magic home">' + LOGO +
          '<span class="logo-word"><span>JW</span> Magic</span></a>' +
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
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" || !document.body.classList.contains("menu-open")) return;
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      toggle.focus();
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
            '<a class="logo" href="index.html" aria-label="JW Magic home">' + LOGO + '<span class="logo-word"><span>JW</span> Magic</span></a>' +
            '<p class="muted" style="margin-top:18px;max-width:34ch">Edmonton\'s funniest corporate magician, ' + C.name + '. Based in ' + C.city + ', performing across Canada.</p>' +
            '<form class="newsletter" data-form="newsletter" novalidate>' +
              '<label class="sr-only" for="nl-email" style="position:absolute;left:-9999px">Email for the JW Magic mailing list</label>' +
              '<input id="nl-email" type="email" name="email" placeholder="Join the mailing list" required autocomplete="email" aria-describedby="nl-consent">' +
              '<input class="hp" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">' +
              '<button class="btn btn-sm" type="submit">Join</button>' +
            "</form>" +
            '<div class="form-status" role="status" aria-live="polite"></div>' +
            '<p class="consent-note" id="nl-consent">By joining, you agree to get occasional emails from JW Magic about shows and merch. Unsubscribe anytime. See our <a href="privacy.html">Privacy Policy</a>.</p>' +
          "</div>" +
          "<div><h4>Explore</h4><ul>" +
            '<li><a href="corporate.html">Corporate events</a></li>' +
            '<li><a href="private.html">Weddings &amp; parties</a></li>' +
            '<li><a href="planners.html">Event planner kit</a></li>' +
            '<li><a href="shows.html">Shows</a></li>' +
            '<li><a href="about.html">About Jason</a></li>' +
            '<li><a href="gallery.html">Photos &amp; showreel</a></li>' +
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
              (C.facebook ? '<a href="' + C.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">' + ICONS.fb + "</a>" : "") +
              (C.google ? '<a href="' + C.google + '" target="_blank" rel="noopener" aria-label="Google reviews">' + ICONS.star + "</a>" : "") +
              '<a href="mailto:' + C.email + '" aria-label="Email">' + ICONS.mail + "</a>" +
              '<a href="' + telHref + '" aria-label="Call">' + ICONS.phone + "</a>" +
            "</div>" +
          "</div>" +
          "<div><h4>Policies</h4><ul>" +
            '<li><a href="privacy.html">Privacy policy</a></li>' +
            '<li><a href="privacy.html#cookies">Cookies</a></li>' +
            (C.metaPixelId ? '<li><button class="link-btn" type="button" data-cookie-settings>Cookie settings</button></li>' : "") +
            '<li><a href="terms.html">Terms &amp; conditions</a></li>' +
            '<li><a href="shipping.html">Shipping policy</a></li>' +
            '<li><a href="refunds.html">Refund policy</a></li>' +
            '<li><a href="privacy.html#requests">Access or delete my data</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<p class="business-details">' + C.brand + " is operated by " + C.name + " · " +
          (C.address ? C.address : C.city + ", Canada") +
          ' · <a href="mailto:' + C.email + '">' + C.email + '</a> · <a href="' + telHref + '">' + C.phone + "</a>" +
          " · All prices in Canadian dollars (CAD) unless stated otherwise.</p>" +
        '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " " + C.brand + ". All rights reserved. No cards were harmed.</span>" +
        '<span>Made with sleight of hand in Edmonton.</span></div>' +
      "</div>";
  }

  /* ---------- Fill contact placeholders ---------- */
  document.querySelectorAll("[data-email]").forEach(function (el) { el.textContent = C.email; if (el.tagName === "A") el.href = "mailto:" + C.email; });
  document.querySelectorAll("[data-phone]").forEach(function (el) { el.textContent = C.phone; if (el.tagName === "A") el.href = telHref; });
  document.querySelectorAll("[data-ig]").forEach(function (el) { el.href = C.instagram; });
  document.querySelectorAll("[data-fb]").forEach(function (el) { el.href = C.facebook; });
  document.querySelectorAll("[data-google-review]").forEach(function (el) { if (reviewHref) el.href = reviewHref; else el.hidden = true; });
  document.querySelectorAll("[data-mailto]").forEach(function (el) { el.href = "mailto:" + C.email; });
  document.querySelectorAll("[data-tel]").forEach(function (el) { el.href = telHref; });
  document.querySelectorAll("[data-icon]").forEach(function (el) { el.innerHTML = ICONS[el.getAttribute("data-icon")] || ""; });

  /* ---------- "Email me" buttons: open the visitor's email app with a template ---------- */
  var MAIL_TEMPLATES = {
    booking: {
      subject: "Show booking request",
      body: "Hi Jason,\n\nI'd like a quote for an event.\n\nEvent date:\nCity or venue:\nNumber of guests:\nType of event:\nWhat I have in mind:\n\nMy name:\nBest phone number (optional):\n"
    },
    private: {
      subject: "Private party booking request",
      body: "Hi Jason,\n\nI'd like to book magic for a private event.\n\nOccasion (wedding, birthday...):\nDate:\nCity or venue:\nNumber of guests (and ages if kids are coming):\nRoving magic, a show, or both:\n\nMy name:\nBest phone number (optional):\n"
    },
    contact: {
      subject: "Message from jaywmagic.com",
      body: "Hi Jason,\n\n\n\nMy name:\nBest phone number (optional):\n"
    }
  };
  // Links like contact.html?subject=merch start the message for the visitor
  var STARTERS = {
    merch: ["Merch question", "I have a question about merch."],
    privacy: ["Privacy request", "Privacy request: please send me a copy of / correct / delete the personal information you hold about me."]
  };
  var starter = STARTERS[new URLSearchParams(location.search).get("subject")];
  document.querySelectorAll("[data-mailto-template]").forEach(function (el) {
    var t = MAIL_TEMPLATES[el.getAttribute("data-mailto-template")];
    if (!t) return;
    var subject = t.subject, body = t.body;
    if (starter && el.getAttribute("data-mailto-template") === "contact") {
      subject = starter[0];
      body = "Hi Jason,\n\n" + starter[1] + "\n\nMy name:\nBest phone number (optional):\n";
    }
    el.href = "mailto:" + C.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
  document.querySelectorAll("[data-copy-target]").forEach(function (btn) {
    var label = btn.textContent;
    btn.addEventListener("click", function () {
      var src = document.getElementById(btn.getAttribute("data-copy-target"));
      if (!src || !navigator.clipboard) return;
      navigator.clipboard.writeText(src.textContent.trim()).then(function () {
        btn.textContent = "Copied!"; setTimeout(function () { btn.textContent = label; }, 2000);
      }, function () {});
    });
  });

  /* ---------- "Trusted by" row (config.js), hidden until names are added ---------- */
  var trusted = (C.trustedBy || []).filter(Boolean);
  document.querySelectorAll("[data-trusted]").forEach(function (el) {
    if (!trusted.length) return;
    var ul = el.querySelector("ul");
    trusted.forEach(function (n) { var li = document.createElement("li"); li.textContent = n; ul.appendChild(li); });
    el.hidden = false;
  });

  document.querySelectorAll("[data-copy-email]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var done = function () { btn.textContent = "Copied!"; setTimeout(function () { btn.textContent = "Copy address"; }, 2000); };
      if (navigator.clipboard) navigator.clipboard.writeText(C.email).then(done, function () {});
    });
  });

  /* ---------- Meta Pixel: loads only after the visitor accepts cookies ---------- */
  var CONSENT_KEY = "jw-cookie-consent";
  var pixelOn = false;
  function getConsent() { try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; } }
  function setConsent(v) { try { localStorage.setItem(CONSENT_KEY, v); } catch (e) {} }
  function loadPixel() {
    if (pixelOn || !C.metaPixelId) return;
    pixelOn = true;
    /* Meta's standard base code */
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", C.metaPixelId);
    window.fbq("track", "PageView");
  }
  // Ad conversions: does nothing unless the Pixel is on
  function track(name, params) { if (pixelOn && window.fbq) window.fbq("track", name, params || {}); }

  var cookieBar;
  function showCookieBar() {
    if (!cookieBar) {
      cookieBar = document.createElement("div");
      cookieBar.className = "cookie-bar";
      cookieBar.setAttribute("role", "region");
      cookieBar.setAttribute("aria-label", "Cookie choice");
      cookieBar.innerHTML =
        '<p>I use Meta (Facebook) cookies to see which ads bring people here. Okay with that? <a href="privacy.html#cookies">Details</a></p>' +
        '<div class="cookie-actions"><button class="btn btn-sm" type="button" data-consent="yes">Accept</button>' +
        '<button class="btn btn-sm btn-ghost" type="button" data-consent="no">No thanks</button></div>';
      cookieBar.addEventListener("click", function (e) {
        var b = e.target.closest("[data-consent]");
        if (!b) return;
        var yes = b.getAttribute("data-consent") === "yes";
        var wasOn = pixelOn;
        setConsent(yes ? "yes" : "no");
        cookieBar.classList.remove("show");
        if (yes) loadPixel();
        else if (wasOn) location.reload(); // drop the already-loaded Pixel
      });
      document.body.appendChild(cookieBar);
    }
    requestAnimationFrame(function () { cookieBar.classList.add("show"); });
  }
  if (C.metaPixelId) {
    var consent = getConsent();
    if (consent === "yes") loadPixel();
    else if (consent !== "no") showCookieBar();
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-cookie-settings]")) { showCookieBar(); return; }
      var a = e.target.closest('a[href^="mailto:"], a[href^="tel:"]');
      if (!a) return;
      var tpl = a.getAttribute("data-mailto-template");
      if (tpl === "booking" || tpl === "private") track("Lead", { content_name: tpl === "booking" ? "Corporate quote email" : "Private party email" });
      else track("Contact", { content_name: a.href.indexOf("tel:") === 0 ? "Phone" : "Email" });
    });
  }

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
    name: "Name", contact: "Email or phone", email: "Email", phone: "Phone", company: "Company / organization",
    event_type: "Event type", date: "Event date", time: "Start time", location: "City / venue",
    guests: "Guest count", style: "Style of magic", duration: "Length", budget: "Budget", heard: "How they heard",
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
      var val = String(input.value).trim();
      var valid = input.type === "checkbox" ? input.checked : input.checkValidity() && val !== "";
      // "Email or phone" accepts either: something@something.tld, or 7+ digits
      if (valid && input.hasAttribute("data-contact")) valid = /\S+@\S+\.\S+/.test(val) || val.replace(/\D/g, "").length >= 7;
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
      if (type === "newsletter") payload.consent = "Signed up on jaywmagic.com on " + new Date().toISOString() + ". Agreed to occasional emails from JW Magic about shows and merch.";
      if (data.contact && data.contact.indexOf("@") > -1) payload.email = payload._replyto = data.contact.trim();
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
      if (type === "newsletter") body += "\nConsent: I agree to get occasional emails from JW Magic about shows and merch. I can unsubscribe anytime.";
      window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body + "\n\n— Sent from jaywmagic.com");
      setStatus(form, "ok", "Your email app should open with everything filled in — just hit send. Nothing opened? Email " + C.email + " directly.");
    }
  });

  document.addEventListener("input", function (e) {
    var field = e.target.closest && e.target.closest(".field.invalid");
    if (field) field.classList.remove("invalid");
  });

  /* Min date on date pickers = today */
  var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  document.querySelectorAll('input[type="date"]').forEach(function (d) { d.min = today.toISOString().slice(0, 10); });

  /* ---------- Shop ---------- */
  var ART = {
    deck: '<svg viewBox="0 0 200 200"><rect x="58" y="34" width="96" height="136" rx="10" fill="#1a1a1a" stroke="#ffd60a" stroke-width="3" transform="rotate(10 106 102)"/><rect x="46" y="30" width="96" height="136" rx="10" fill="#0a0a0a" stroke="#ffd60a" stroke-width="3"/><rect x="56" y="40" width="76" height="116" rx="6" fill="none" stroke="#ffd60a" stroke-opacity=".4"/><g transform="translate(70 72) scale(.75)"><g fill="none" stroke="#ffd60a" stroke-width="1.9"><path d="M32 2 62 32 32 62 2 32Z"/><path d="M32 10.5 53.5 32 32 53.5 10.5 32Z"/><path d="M2 32h8.5M53.5 32H62"/></g><text x="32" y="38.1" text-anchor="middle" font-family="Inter,Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="300" font-size="17" fill="#ffd60a">JW</text></g></svg>',
    tee: '<svg viewBox="0 0 200 200"><path d="M70 30l-40 22 14 30 16-8v96h80V74l16 8 14-30-40-22c-4 12-16 20-30 20S74 42 70 30z" fill="#0a0a0a" stroke="#333" stroke-width="2"/><text x="100" y="98" text-anchor="middle" font-family="Anton,Impact" font-size="17" fill="#ffd60a">PICK A</text><text x="100" y="122" text-anchor="middle" font-family="Anton,Impact" font-size="26" fill="#ffd60a">CARD</text><text x="100" y="146" text-anchor="middle" font-size="16" fill="#ffd60a">♠ ♦</text></svg>',
    hoodie: '<svg viewBox="0 0 200 200"><path d="M74 34c6-10 46-10 52 0l38 20 10 70-20 4-4-40v92H50V88l-4 40-20-4 10-70z" fill="#0a0a0a" stroke="#333" stroke-width="2"/><path d="M78 36c4 18 40 18 44 0" fill="none" stroke="#333" stroke-width="3"/><g transform="translate(82 80) scale(.56)"><g fill="none" stroke="#ffd60a" stroke-width="1.9"><path d="M32 2 62 32 32 62 2 32Z"/><path d="M32 10.5 53.5 32 32 53.5 10.5 32Z"/><path d="M2 32h8.5M53.5 32H62"/></g><text x="32" y="38.1" text-anchor="middle" font-family="Inter,Helvetica Neue,Helvetica,Arial,sans-serif" font-weight="300" font-size="17" fill="#ffd60a">JW</text></g><path d="M70 150h60" stroke="#333" stroke-width="3"/></svg>',
    kit: '<svg viewBox="0 0 200 200"><rect x="34" y="70" width="132" height="90" rx="10" fill="#ffd60a"/><rect x="34" y="56" width="132" height="26" rx="8" fill="#e6bf00"/><text x="100" y="126" text-anchor="middle" font-family="Anton,Impact" font-size="22" fill="#0a0a0a">MAGIC KIT</text><path d="M100 30l6 14 15 1-11 10 4 15-14-8-14 8 4-15-11-10 15-1z" fill="#f7f5ef"/></svg>'
  };

  var shop = document.getElementById("shop-grid");
  if (shop && C.products) {
    shop.innerHTML = C.products.map(function (p, i) {
      var opts = p.options ? '<div class="opts" role="radiogroup" aria-label="Size">' + p.options.map(function (o, j) {
        return '<label class="chip"><input type="radio" name="opt-' + p.id + '" value="' + o + '"' + (j === 2 ? " checked" : "") + "><span>" + o + "</span></label>";
      }).join("") + "</div>" : "";
      if (p.bundles) opts = '<div class="opts" role="radiogroup" aria-label="Quantity">' + p.bundles.map(function (b, j) {
        return '<label class="chip"><input type="radio" name="bundle-' + p.id + '" value="' + j + '"' + (j === 0 ? " checked" : "") + "><span>" + b.label + "</span></label>";
      }).join("") + "</div>";
      var hasCheckout = p.bundles ? p.bundles.some(function (b) { return b.checkout; }) : !!p.checkout;
      var art = p.image ? '<img src="' + p.image + '" alt="' + (p.alt || p.name) + '" loading="lazy">' : (ART[p.art] || ART.deck).replace("<svg ", '<svg aria-hidden="true" focusable="false" ');
      return '<article class="product reveal d' + (i % 3) + '" data-id="' + p.id + '">' +
        '<div class="product-art">' + art + (p.tag ? '<span class="tag">' + p.tag + "</span>" : "") + "</div>" +
        '<div class="product-body">' +
          '<div class="product-top"><h3>' + p.name + '</h3><span class="price">$<span data-price>' + p.price + '</span> <span class="currency">CAD</span></span></div>' +
          "<p>" + p.blurb + "</p>" + opts +
          '<button class="btn btn-block" type="button" data-buy="' + p.id + '">' +
            (hasCheckout ? "Buy now" : "Order by email") + ' <span class="arrow">→</span></button>' +
        "</div></article>";
    }).join("");

    // Only promise card checkout once Square links are set up
    var checkoutNote = document.querySelector("[data-checkout-note]");
    if (checkoutNote) checkoutNote.textContent = C.products.some(function (p) {
      return p.checkout || (p.bundles && p.bundles.some(function (b) { return b.checkout; }));
    }) ? "Secure card checkout by Square" : "Order by email, we reply with payment options";

    // Bundle picker: show the chosen bundle's price
    shop.addEventListener("change", function (e) {
      if (!e.target.name || e.target.name.indexOf("bundle-") !== 0) return;
      var card = e.target.closest(".product");
      var p = C.products.filter(function (x) { return x.id === card.getAttribute("data-id"); })[0];
      card.querySelector("[data-price]").textContent = p.bundles[e.target.value].price;
    });

    shop.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-buy]");
      if (!btn) return;
      var p = C.products.filter(function (x) { return x.id === btn.getAttribute("data-buy"); })[0];
      var opt = shop.querySelector('input[name="opt-' + p.id + '"]:checked');
      var picked = shop.querySelector('input[name="bundle-' + p.id + '"]:checked');
      var bundle = picked ? p.bundles[picked.value] : null;
      var checkout = bundle ? bundle.checkout : p.checkout;
      if (checkout) {
        track("InitiateCheckout", { value: bundle ? bundle.price : p.price, currency: "CAD", content_name: p.name + (bundle ? " - " + bundle.label : "") });
        window.open(checkout, "_blank", "noopener");
      } else {
        var body = "Hi Jason,\n\nI'd like to order:\n\n" + p.name + (opt ? " — size " + opt.value : "") + (bundle ? " — " + bundle.label : "") + " ($" + (bundle ? bundle.price : p.price) + " CAD)\nQuantity: 1\n\nShipping address:\n\n\nThanks!";
        window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Merch order: " + p.name) + "&body=" + encodeURIComponent(body);
        toast("Opening your email app to place the order…");
      }
    });
  }

  /* ---------- Showreel: full-screen video with ambient glow ---------- */
  var reel = document.querySelector(".reel");
  if (reel) {
    var reelLink = String(C.showreel || "").trim();
    var igLinkBtn = reel.querySelector(".reel-ig");
    if (igLinkBtn) {
      if (/instagram\.com/i.test(reelLink)) igLinkBtn.href = reelLink;
      else if (C.instagram) igLinkBtn.href = C.instagram;
    }
    var stage = reel.querySelector(".reel-stage");
    var vid = reel.querySelector(".reel-video");
    var soundBtn = reel.querySelector("[data-reel-sound]");

    if (C.showreelVideo && vid) {
      vid.src = C.showreelVideo;
      if (C.showreelPoster) vid.poster = C.showreelPoster;
      var toggle = reel.querySelector(".reel-toggle");
      var muteBtn = reel.querySelector(".reel-mute");
      var bar = reel.querySelector(".reel-progress span");
      var canvas = reel.querySelector(".reel-ambient");
      var ctx2d = canvas && canvas.getContext ? canvas.getContext("2d") : null;
      var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        (navigator.connection && navigator.connection.saveData);
      var userPaused = false, heardSound = false, watching = false, lastPaint = 0;

      var paintAmbient = function (src) {
        if (!ctx2d) return;
        try { ctx2d.drawImage(src, 0, 0, canvas.width, canvas.height); } catch (e) { /* frame not ready yet */ }
      };
      if (ctx2d && vid.poster) {
        var posterImg = new Image();
        posterImg.onload = function () { if (vid.paused) paintAmbient(posterImg); };
        posterImg.src = vid.poster;
      }
      var tick = function (t) {
        if (vid.paused) return;
        if (t - lastPaint > 90) { paintAmbient(vid); lastPaint = t; }
        if (bar && vid.duration) bar.style.transform = "scaleX(" + (vid.currentTime / vid.duration) + ")";
        requestAnimationFrame(tick);
      };
      var sync = function () {
        stage.classList.toggle("playing", !vid.paused);
        toggle.setAttribute("aria-label", vid.paused ? "Play showreel" : "Pause showreel");
        muteBtn.setAttribute("aria-pressed", String(!vid.muted));
        muteBtn.setAttribute("aria-label", vid.muted ? "Turn sound on" : "Turn sound off");
        stage.classList.toggle("sound-on", !vid.muted);
        // Once a visitor chooses to watch, move the text out of the way so captions stay visible.
        if (vid.paused) watching = false;
        reel.classList.toggle("watching", watching);
      };
      var play = function () { var pr = vid.play(); if (pr && pr.catch) pr.catch(function () { sync(); }); };
      vid.addEventListener("play", function () { sync(); requestAnimationFrame(tick); });
      vid.addEventListener("pause", sync);
      vid.addEventListener("volumechange", sync);

      var withSound = function () {
        if (!heardSound) { heardSound = true; vid.currentTime = 0; }
        vid.muted = false; userPaused = false; watching = true; play();
      };
      toggle.addEventListener("click", function () {
        // First tap on the quiet preview turns the sound on instead of pausing it.
        if (!vid.paused && vid.muted && !heardSound) withSound();
        else if (vid.paused) { userPaused = false; watching = true; play(); } else { userPaused = true; vid.pause(); }
      });
      muteBtn.addEventListener("click", function () {
        if (vid.muted) withSound(); else vid.muted = true;
      });
      if (soundBtn) soundBtn.addEventListener("click", function () {
        withSound();
        if (window.innerWidth < 761) stage.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "center" });
      });

      // Play quietly while the section is on screen; pause when it isn't.
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) { if (!calm && !userPaused) play(); }
            else if (!vid.paused) vid.pause();
          });
        }, { threshold: 0.35 }).observe(stage);
      }
      sync();
    } else {
      // No video file: fall back to embedding the Instagram/YouTube link.
      var ig = reelLink.match(/instagram\.com\/(?:[\w.]+\/)?(reel|reels|p|tv)\/([\w-]+)/i);
      var yt = reelLink.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/i);
      reel.classList.add("reel-embed");
      if (ig) {
        var kind = ig[1].toLowerCase() === "p" ? "p" : "reel";
        stage.innerHTML = '<div class="video-frame ig"><iframe src="https://www.instagram.com/' + kind + "/" + ig[2] + '/embed/" title="JW Magic showreel on Instagram" loading="lazy" allowtransparency="true" allow="encrypted-media; picture-in-picture; web-share" allowfullscreen scrolling="no"></iframe></div>';
      } else {
        stage.innerHTML = '<div class="video-frame"><div><button class="play" data-video="' + (yt ? "https://www.youtube-nocookie.com/embed/" + yt[1] : "") + '" aria-label="Play showreel"><svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></button></div></div>';
      }
      if (soundBtn) soundBtn.style.display = "none";
    }
  }

  /* ---------- Video lightbox (YouTube/Vimeo URL on data-video) ---------- */
  document.querySelectorAll("[data-video]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var url = btn.getAttribute("data-video");
      var frame = btn.closest(".video-frame");
      if (!url) { toast("Showreel coming soon — follow @jwmagic_ for clips!"); return; }
      frame.innerHTML = '<iframe src="' + url + (url.indexOf("?") > -1 ? "&" : "?") + 'autoplay=1" title="JW Magic showreel" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
  });

  /* ---------- Recent Instagram posts (assets/js/instagram-feed.js) ---------- */
  var feedGrid = document.querySelector("[data-ig-feed]");
  var feed = window.JW_INSTAGRAM;
  if (feedGrid && feed && feed.posts && feed.posts.length) {
    var esc = function (t) { return String(t || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
    var badge = {
      video: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
      carousel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><rect x="3" y="7" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/></svg>'
    };
    var kindLabel = { video: "Reel", carousel: "Photos", photo: "Photo" };
    feedGrid.classList.add("ig-live");
    feedGrid.innerHTML = feed.posts.map(function (p) {
      var label = (kindLabel[p.type] || "Post") + " on Instagram" + (p.caption ? ": " + p.caption : "");
      return '<a class="ig-tile ig-post" href="' + esc(p.url) + '" target="_blank" rel="noopener" aria-label="' + esc(label) + '">' +
        '<img src="' + esc(p.image) + '" alt="" loading="lazy" decoding="async">' +
        (badge[p.type] ? '<span class="ig-kind">' + badge[p.type] + "</span>" : "") +
        (p.caption ? '<span class="ig-cap">' + esc(p.caption) + "</span>" : "") +
        "</a>";
    }).join("");
  }

  /* ---------- Lightbox for [data-lightbox] photos ---------- */
  var shots = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
  if (shots.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Photo viewer");
    lb.innerHTML = '<img alt=""><p></p><button class="lb-close" aria-label="Close">✕</button>' +
      '<button class="lb-prev" aria-label="Previous photo">←</button><button class="lb-next" aria-label="Next photo">→</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img"), lbCap = lb.querySelector("p"), current = 0, lastFocus = null;
    var show = function (i) {
      current = (i + shots.length) % shots.length;
      var a = shots[current], img = a.querySelector("img"), cap = a.parentNode.querySelector("figcaption");
      lbImg.src = a.getAttribute("href"); lbImg.alt = img ? img.alt : "";
      lbCap.textContent = cap ? cap.textContent : "";
    };
    var close = function () { lb.classList.remove("open"); document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); };
    shots.forEach(function (a, i) {
      a.addEventListener("click", function (e) {
        e.preventDefault(); lastFocus = a; show(i);
        lb.classList.add("open"); document.body.style.overflow = "hidden";
        lb.querySelector(".lb-close").focus();
      });
    });
    lb.querySelector(".lb-close").addEventListener("click", close);
    lb.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
    lb.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        var btns = lb.querySelectorAll("button"), firstB = btns[0], lastB = btns[btns.length - 1];
        if (e.shiftKey && document.activeElement === firstB) { e.preventDefault(); lastB.focus(); }
        else if (!e.shiftKey && document.activeElement === lastB) { e.preventDefault(); firstB.focus(); }
        else if (!lb.contains(document.activeElement)) { e.preventDefault(); firstB.focus(); }
      }
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
    var touchX = null;
    lb.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX; touchX = null;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    });
  }

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
  // Keep the floating button off the showreel so it never sits on the video's captions.
  var reelSection = document.getElementById("showreel");
  if (fab && reelSection && "IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { fab.classList.toggle("hide-reel", en[0].isIntersecting); }, { threshold: 0.15 }).observe(reelSection);
  }
})();
