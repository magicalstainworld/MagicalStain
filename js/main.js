/* ===== EDIT YOUR DETAILS HERE ===== */
const SITE = {
  name: "Magical Stain",
  logo: "images/logo-gold.png",
  phone: "+91 73392 88552",
  wa: "917339288552",
  ig: "https://www.instagram.com/_magical_stain_?stkn=MXM5ejFmeDJ5dHcyaw==",
  email: "magicalstainworld@gmail.com",
  hours: "Monday – Sunday",
  emailjs: {
    serviceId: "service_magicstain", // EmailJS Service ID (e.g. Gmail)
    templateId: "template_booking",  // EmailJS Template ID
    publicKey: "wGqBf5e_exampleKey"   // EmailJS Public Key
  }
};
const BRANCHES = [{ city: "Salem", addr: "Salem, Tamil Nadu", phone: "+91 73392 88552", wa: "917339288552", map: "https://maps.google.com/?q=Salem,+Tamil+Nadu" }];
const SERVICES = [
  ["Guest Henna", "Elegant, quick and attractive henna patterns tailored for guests, friends, and family."],
  ["Engagement Henna", "Refined statement henna designs tailored for engagement ceremonies."],
  ["Bridal Henna", "Full bridal hand & feet henna crafted with precision and deep rich natural stain."],
  ["Customized Henna", "Personalized stories, portraits, love motifs, and bespoke themes."],
  ["Press-On Nails", "Custom-fitted reusable luxury press-on nail sets crafted to order."],
  ["Gel Extension", "High-shine, long-lasting salon-quality gel nail extensions."],
  ["Toe Extension", "Flawless matching toe extensions for complete bridal beauty."],
  ["Customized Nail Art", "Hand-painted nail art, embellishments, and customized designs."],
  ["Home Service Appointments", "Professional luxury Henna and nail artistry delivered right to your doorstep."]
];
const CATS = ["All", "Bridal", "Arabic", "Guest", "Minimal", "Modern", "Full Hand", "Feet Designs"];
const HERO_IMAGES = [
  { src: "images/hero-1.png", fallback: "images/hero-1.jpg", alt: "Bridal henna intricate hand artistry" },
  { src: "images/hero-2.png", fallback: "images/hero-2.jpg", alt: "Traditional Indian bridal henna with bangles" },
  { src: "images/hero-3.png", fallback: "images/hero-3.jpg", alt: "Customized personalized bridal henna portrait" }
];
const GALLERY = [
  { src: "images/gallery-1.png", fallback: "images/gallery-1.jpg", alt: "Bridal full hand henna design", title: "Bridal Full Hand Henna" },
  { src: "images/gallery-8.jpg", fallback: "images/gallery-8.jpg", alt: "Bridal hands with temple, peacock, and customized wedding motifs", title: "Customized Bridal Story Henna" },
  { src: "images/gallery-2.png", fallback: "images/gallery-2.jpg", alt: "Traditional bride portrait in silk saree", title: "Traditional Bride Portrait" },
  { src: "images/gallery-3.png", fallback: "images/gallery-3.jpg", alt: "Intricate bridal henna with green bangles", title: "Intricate Bridal Henna" },
  { src: "images/gallery-4.png", fallback: "images/gallery-4.jpg", alt: "Full bridal henna with traditional jewelry", title: "Royal Bridal Artistry" },
  { src: "images/gallery-5.png", fallback: "images/gallery-5.jpg", alt: "Rich crimson natural henna stain", title: "Rich Crimson Stain" },
  { src: "images/gallery-6.png", fallback: "images/gallery-6.jpg", alt: "Classic Indian bridal henna", title: "Classic Indian Henna" },
  { src: "images/gallery-7.png", fallback: "images/gallery-7.jpg", alt: "Customized mandala bridal henna", title: "Customized Mandala Art" }
];
const PACKAGES = [{ n: "Basic", pts: ["Single hand design", "Simple motifs", "Natural henna"] }, { n: "Premium", hl: 1, pts: ["Both hands and feet", "Detailed bridal motifs", "Premium henna cones", "Priority booking"] }, { n: "Customized", pts: ["Tailored to your event", "Group bookings", "On-site service"] }];
const WHY = [["✦", "Natural Henna", "Skin-safe, rich dark stain."], ["✎", "Customized Designs", "Made for you, never copied."], ["☆", "Experienced Artists", "Steady hands, fine detail."], ["⌂", "Home Service", "We come to you."], ["◷", "On-Time", "Calm, punctual, prepared."], ["♥", "Loved By Brides", "Trusted for big moments."]];
const REVIEWS = [["Priya", "Beautiful work, my bridal henna was perfect."], ["Ananya", "Neat, quick and so detailed. Highly recommend."], ["Meera", "Everyone asked who did my design!"], ["Divya", "Lovely experience from start to finish."]];
const STATS = [["10+", "Years Experience"], ["500+", "Brides"], ["1000+", "Designs"], ["100%", "Passion"]];
const NAV = [["Home", "home"], ["About", "about"], ["Services", "services"], ["Designs", "designs"], ["Locations", "locations"], ["Contact", "contact"]];
/* ================================== */
const $ = s => document.querySelector(s), H = (el, h) => el.innerHTML = h;
function art(seed) { let c = ["#1A1713", "#221C14", "#2A2118"][seed % 3], s = ""; for (let i = 0; i < 9; i++) { const a = (seed * 37 + i * 53) % 360, x = 40 + (i * 47 + seed * 13) % 120, y = 40 + (i * 71 + seed * 29) % 240, r = 14 + (i * 9 + seed * 5) % 26; s += `<g transform="translate(${x} ${y}) rotate(${a})" fill="none" stroke="#C9A45C" stroke-opacity=".${5 + i % 4}" stroke-width="1.2"><circle r="${r}"/><path d="M0 ${-r}C${r} ${-r / 2} ${r} ${r / 2} 0 ${r}C${-r} ${r / 2} ${-r} ${-r / 2} 0 ${-r}"/><circle r="${r / 4}" fill="#E8D3A2" fill-opacity=".5"/></g>` } return `<svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice"><rect width="200" height="300" fill="${c}"/><path d="M100 0V300" stroke="#C9A45C" stroke-opacity=".25"/>${s}</svg>` }
const pic = (img, seed, alt) => img ? `<img src="${img}" alt="${alt}" loading="lazy">` : art(seed);
if (SITE.logo) {
  document.querySelectorAll(".logoImg").forEach(el => { el.src = SITE.logo; el.style.display = "block" });
  const headerLogo = $("#logoImg"); if (headerLogo) { headerLogo.src = SITE.logo; headerLogo.style.display = "block"; }
}
H($("#links"), NAV.map(n => `<li><a href="#${n[1]}">${n[0]}</a></li>`).join(""));
H($("#mlinks"), NAV.map(n => `<a class="l" data-m href="#${n[1]}">${n[0]}</a>`).join(""));
const openBtn = $("#open"), menuEl = $("#menu");
if (openBtn && menuEl) {
  openBtn.onclick = e => {
    e.stopPropagation();
    const isOpen = menuEl.classList.toggle("on");
    openBtn.innerHTML = isOpen ? "✕" : "☰";
    openBtn.setAttribute("aria-expanded", isOpen);
  };
  document.addEventListener("click", e => {
    if (!menuEl.contains(e.target) && e.target !== openBtn) {
      menuEl.classList.remove("on");
      openBtn.innerHTML = "☰";
      openBtn.setAttribute("aria-expanded", "false");
    }
  });
}
document.querySelectorAll("[data-m]").forEach(a => a.onclick = () => {
  if (menuEl) menuEl.classList.remove("on");
  if (openBtn) { openBtn.innerHTML = "☰"; openBtn.setAttribute("aria-expanded", "false"); }
});

let heroIndex = 0, heroTimer = null;
function setHeroSlide(idx) {
  heroIndex = (idx + HERO_IMAGES.length) % HERO_IMAGES.length;
  document.querySelectorAll(".hero-slide").forEach((s, i) => s.classList.toggle("active", i === heroIndex));
  document.querySelectorAll(".hero-thumb").forEach((t, i) => t.classList.toggle("active", i === heroIndex));
}
function startHeroTimer() {
  if (heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(() => setHeroSlide(heroIndex + 1), 5000);
}
function initHeroSlider() {
  const hImg = $("#heroImg"), hThumbs = $("#heroThumbs");
  if (hImg) {
    hImg.innerHTML = HERO_IMAGES.map((img, i) => `
      <div class="hero-slide${i === 0 ? ' active' : ''}" data-i="${i}">
        <img src="${img.src}" alt="${img.alt}" loading="${i === 0 ? 'eager' : 'lazy'}" onerror="if(!this.dataset.t){this.dataset.t=1;this.src='${img.fallback}'}">
      </div>
    `).join("");
  }
  if (hThumbs) {
    hThumbs.innerHTML = HERO_IMAGES.map((img, i) => `
      <button class="hero-thumb${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="View henna photo ${i + 1}">
        <img src="${img.src}" alt="Thumbnail ${i + 1}" onerror="if(!this.dataset.t){this.dataset.t=1;this.src='${img.fallback}'}">
        <span class="thumb-progress"></span>
      </button>
    `).join("");
    hThumbs.querySelectorAll(".hero-thumb").forEach(b => {
      b.onclick = () => {
        setHeroSlide(+b.dataset.i);
        startHeroTimer();
      };
    });
  }
  startHeroTimer();
}
initHeroSlider();
H($("#aboutImg"), pic("images/about.png", 8, "Bridal feet henna and nail extensions"));
const svcEl = $("#svc"); if (svcEl) H(svcEl, SERVICES.map((s, i) => `<article class="card sv"><div class="img">${art(i + 1)}</div><div class="b"><h3>${s[0]}</h3><p>${s[1]}</p><a class="btn p" href="#booking">Get Quote</a><a class="btn" href="#designs">View Details</a></div></article>`).join(""));

function gal() {
  const gEl = $("#gal");
  if (!gEl) return;
  H(gEl, GALLERY.map((g, i) => `
    <button class="gal-item" data-i="${i}" aria-label="View photo ${i + 1}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy" onerror="if(!this.dataset.t){this.dataset.t=1;this.src='${g.fallback}'}">
    </button>
  `).join(""));
  document.querySelectorAll("#gal button").forEach(b => {
    b.onclick = () => {
      const g = GALLERY[+b.dataset.i];
      const lbi = $("#lbi");
      if (lbi) H(lbi, `<img src="${g.src}" alt="${g.alt}" style="width:100%;height:100%;object-fit:contain" onerror="if(!this.dataset.t){this.dataset.t=1;this.src='${g.fallback}'}">`);
      $("#lb").classList.add("on");
    };
  });
}
const chipsEl = $("#chips"); if (chipsEl) { H(chipsEl, CATS.map(c => `<button class="chip${c == "All" ? " on" : ""}">${c}</button>`).join("")); }
$("#lbc").onclick = () => $("#lb").classList.remove("on"); $("#lb").onclick = e => { if (e.target.id == "lb") $("#lb").classList.remove("on") };
document.onkeydown = e => { if (e.key == "Escape") { $("#lb").classList.remove("on"); if (menuEl) menuEl.classList.remove("on"); if (openBtn) { openBtn.innerHTML = "☰"; openBtn.setAttribute("aria-expanded", "false"); } } }; gal();
H($("#br"), BRANCHES.map(b => `<div class="card br"><h3>${b.city}</h3><p>${b.addr}</p><p>Phone: <a href="tel:${b.phone.replace(/\s+/g, '')}">${b.phone}</a></p><p>WhatsApp: <a target="_blank" rel="noopener" href="https://wa.me/${b.wa}">${b.phone}</a></p><p>Available: <b>${SITE.hours}</b></p><div class="row"><a class="btn p" target="_blank" rel="noopener" href="${b.map}">Get Directions</a></div></div>`).join(""));
H($("#wy"), WHY.map(w => `<div class="card wy"><i>${w[0]}</i><h3>${w[1]}</h3><p>${w[2]}</p></div>`).join(""));
const psEl = $("#ps");
if (psEl) {
  psEl.innerHTML = `<option value="" disabled selected>Select Services</option>` + SERVICES.map(s => `<option value="${s[0]}">${s[0]}</option>`).join("");
}
const fig = $("#fig"), fwa = $("#fwa");
if (fig) fig.href = SITE.ig;
if (fwa) fwa.href = "https://wa.me/" + SITE.wa;

const formEl = $("#form");
const successBoxEl = $("#bookingSuccessBox");
const bookAnotherBtn = $("#bookAnotherBtn");
const dateInput = $("#bDate");

// Set minimum date to today (cannot book in the past)
if (dateInput) {
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;
}

// Protocol notice for local file browsing (FormSubmit requires http:// or https://)
if (window.location.protocol === "file:") {
  const statusEl = $("#formStatus");
  if (statusEl) {
    statusEl.style.display = "block";
    statusEl.style.background = "rgba(230, 126, 34, 0.15)";
    statusEl.style.borderColor = "#e67e22";
    statusEl.style.color = "#f39c12";
    statusEl.innerHTML = `⚠️ <b>Local Testing Notice:</b> You opened this as a local file (<code>file://</code>). FormSubmit blocks <code>file://</code> files. To receive emails in Gmail during testing, please open <a href="http://localhost:8080" style="color:#FFFDF8;text-decoration:underline;font-weight:700">http://localhost:8080</a> in your browser!`;
  }
}

// Clear validation errors on user input/change
document.querySelectorAll("#form input, #form select, #form textarea").forEach(input => {
  const clearErr = () => {
    const group = input.closest(".form-group");
    if (group) {
      group.classList.remove("has-error");
      const errSpan = group.querySelector(".field-error");
      if (errSpan) errSpan.classList.remove("show");
    }
    const statusEl = $("#formStatus");
    if (statusEl) statusEl.style.display = "none";
  };
  input.addEventListener("input", clearErr);
  input.addEventListener("change", clearErr);
});

function setFieldError(fieldId, message) {
  const field = $("#" + fieldId);
  if (!field) return;
  const group = field.closest(".form-group");
  if (group) {
    group.classList.add("has-error");
    const errSpan = group.querySelector(".field-error");
    if (errSpan) {
      if (message) errSpan.textContent = message;
      errSpan.classList.add("show");
    }
  }
}

function clearAllFieldErrors() {
  document.querySelectorAll(".form-group.has-error").forEach(g => g.classList.remove("has-error"));
  document.querySelectorAll(".field-error.show").forEach(e => e.classList.remove("show"));
}

if (bookAnotherBtn) {
  bookAnotherBtn.onclick = () => {
    if (successBoxEl) successBoxEl.classList.remove("show");
    if (formEl) {
      formEl.reset();
      clearAllFieldErrors();
      formEl.style.display = "block";
    }
    const statusEl = $("#formStatus");
    if (statusEl) statusEl.style.display = "none";
  };
}

if (formEl) {
  formEl.onsubmit = async e => {
    e.preventDefault();
    clearAllFieldErrors();

    const nameInput = $("#bName");
    const phoneInput = $("#bPhone");
    const emailInput = $("#bEmail");
    const serviceInput = $("#bService");
    const dateInput = $("#bDate");
    const timeInput = $("#bTime");
    const locationInput = $("#bLocation");
    const peopleInput = $("#bPeople");
    const msgInput = $("#bMsg");

    const name = (nameInput ? nameInput.value : "").trim();
    const phone = (phoneInput ? phoneInput.value : "").trim();
    const email = (emailInput ? emailInput.value : "").trim();
    const service = serviceInput ? serviceInput.value : "";
    const date = dateInput ? dateInput.value : "";
    const time = (timeInput ? timeInput.value : "").trim();
    const location = (locationInput ? locationInput.value : "").trim();
    const people = (peopleInput ? peopleInput.value : "").trim();
    const msg = (msgInput ? msgInput.value : "").trim();

    let hasError = false;
    let firstErrorField = null;

    // 1. Full Name Validation
    if (!name) {
      setFieldError("bName", "Please enter your full name.");
      hasError = true;
      if (!firstErrorField) firstErrorField = nameInput;
    }

    // 2. Phone Number Validation
    const cleanDigits = phone.replace(/\D/g, "");
    if (!phone) {
      setFieldError("bPhone", "Please enter your phone number.");
      hasError = true;
      if (!firstErrorField) firstErrorField = phoneInput;
    } else if (cleanDigits.length < 10) {
      setFieldError("bPhone", "Please enter a valid phone number (at least 10 digits).");
      hasError = true;
      if (!firstErrorField) firstErrorField = phoneInput;
    }

    // 3. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setFieldError("bEmail", "Please enter your email address.");
      hasError = true;
      if (!firstErrorField) firstErrorField = emailInput;
    } else if (!emailRegex.test(email)) {
      setFieldError("bEmail", "Please enter a valid email address (e.g. name@example.com).");
      hasError = true;
      if (!firstErrorField) firstErrorField = emailInput;
    }

    // 4. Service Dropdown Validation
    if (!service) {
      setFieldError("bService", "Please select a service.");
      hasError = true;
      if (!firstErrorField) firstErrorField = serviceInput;
    }

    // 5. Preferred Date Validation
    if (!date) {
      setFieldError("bDate", "Please choose your preferred appointment date.");
      hasError = true;
      if (!firstErrorField) firstErrorField = dateInput;
    } else {
      const selectedDate = new Date(date + "T00:00:00");
      const todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);
      if (selectedDate < todayDate) {
        setFieldError("bDate", "Please select today or a future date.");
        hasError = true;
        if (!firstErrorField) firstErrorField = dateInput;
      }
    }

    // 6. Location / Address Validation
    if (!location) {
      setFieldError("bLocation", "Please enter your location or address.");
      hasError = true;
      if (!firstErrorField) firstErrorField = locationInput;
    }

    if (hasError) {
      if (firstErrorField) {
        firstErrorField.focus();
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Prepare UI for submission
    const submitBtn = $("#bookSubmitBtn") || formEl.querySelector('button[type="submit"]');
    const origText = submitBtn ? submitBtn.innerText : "BOOK APPOINTMENT";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Sending...";
    }

    const statusEl = $("#formStatus");
    if (statusEl) {
      statusEl.style.display = "block";
      statusEl.innerHTML = "⏳ Sending appointment request to business email...";
      statusEl.style.color = "var(--gl)";
    }

    const emailSubject = `New Booking Appointment Request - ${name}`;

    // Update hidden fields for FormSubmit
    const hiddenSubject = $("#fSubmitSubject");
    if (hiddenSubject) hiddenSubject.value = emailSubject;
    const hiddenReplyTo = $("#fSubmitReplyTo");
    if (hiddenReplyTo) hiddenReplyTo.value = email;

    // Prepare WhatsApp Message Link
    const cleanWaNum = SITE.wa.replace(/[^0-9]/g, "");
    const waText = `✨ *New Booking Appointment Request - Magical Stain* ✨\n\n*Customer Details*\n👤 Name: ${name}\n📞 Phone: ${phone}\n✉ Email: ${email}\n\n*Booking Details*\n💅 Service: ${service}\n📅 Preferred Date: ${date}\n⏰ Preferred Time: ${time || "Flexible"}\n👥 Number of People: ${people || "1"}\n\n*Location*\n📍 Address: ${location}\n\n*Special Request*\n📝 Message: ${msg || "None"}\n\n_Sent via Magical Stain Website Booking_`;
    const waUrl = `https://api.whatsapp.com/send?phone=${cleanWaNum}&text=${encodeURIComponent(waText)}`;

    // Prepare Gmail Compose Link
    const gmBody = `Customer Details:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nBooking Details:\nService: ${service}\nPreferred Date: ${date}\nPreferred Time: ${time || "Flexible"}\nNumber of People: ${people || "1"}\n\nLocation:\nAddress: ${location}\n\nSpecial Request:\n${msg || "None"}\n\n--\nMagical Stain Bridal & Henna Art`;
    const gmUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(gmBody)}`;

    // 1. Submit natively to hidden iframe (Guarantees delivery on file://, localhost, & production)
    try {
      formEl.action = `https://formsubmit.co/${SITE.email}`;
      formEl.submit();
    } catch (err) {
      console.warn("Native form submit dispatch:", err);
    }

    // 2. Fetch FormData Dispatch in parallel
    try {
      const fd = new FormData(formEl);
      fd.set("_subject", emailSubject);
      fd.set("_replyto", email);
      fd.set("_template", "table");
      fd.set("_captcha", "false");
      fetch(`https://formsubmit.co/${SITE.email}`, {
        method: "POST",
        body: fd,
        mode: "no-cors"
      }).catch(e => console.warn(e));
    } catch (err) {
      console.warn("FormData fetch dispatch:", err);
    }

    // 3. EmailJS fallback if configured
    if (window.emailjs && SITE.emailjs && SITE.emailjs.publicKey && SITE.emailjs.publicKey !== "wGqBf5e_exampleKey") {
      try {
        emailjs.init(SITE.emailjs.publicKey);
        await emailjs.send(SITE.emailjs.serviceId, SITE.emailjs.templateId, {
          name: name,
          phone: phone,
          email: email,
          service: service,
          date: date,
          time: time || "Flexible",
          location: location,
          people: people || "1",
          message: msg || "None",
          to_email: SITE.email
        });
      } catch (err) {
        console.warn("EmailJS dispatch:", err);
      }
    }

    // Reset button state
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerText = origText;
    }

    // Render Luxury Confirmation Card
    const summaryEl = $("#bookingSummaryDetails");
    if (summaryEl) {
      summaryEl.innerHTML = `
        <div style="font-weight:700;color:var(--gold);font-size:13px;letter-spacing:.05em;text-transform:uppercase;margin-bottom:6px;border-bottom:1px solid rgba(201,164,92,.2);padding-bottom:4px;">Customer Details</div>
        <div class="booking-summary-row"><span class="lbl">👤 Name</span><span class="val">${name}</span></div>
        <div class="booking-summary-row"><span class="lbl">📞 Phone</span><span class="val">${phone}</span></div>
        <div class="booking-summary-row"><span class="lbl">✉ Email</span><span class="val">${email}</span></div>
        <div style="font-weight:700;color:var(--gold);font-size:13px;letter-spacing:.05em;text-transform:uppercase;margin:12px 0 6px;border-bottom:1px solid rgba(201,164,92,.2);padding-bottom:4px;">Booking Details</div>
        <div class="booking-summary-row"><span class="lbl">💅 Service</span><span class="val">${service}</span></div>
        <div class="booking-summary-row"><span class="lbl">📅 Preferred Date</span><span class="val">${date}</span></div>
        <div class="booking-summary-row"><span class="lbl">⏰ Preferred Time</span><span class="val">${time || "Flexible"}</span></div>
        <div class="booking-summary-row"><span class="lbl">👥 Number of People</span><span class="val">${people || "1"}</span></div>
        <div class="booking-summary-row"><span class="lbl">📍 Location / Address</span><span class="val">${location}</span></div>
        <div class="booking-summary-row"><span class="lbl">📝 Special Request</span><span class="val">${msg || "None"}</span></div>
      `;
    }

    const succWaBtn = $("#succWaBtn");
    if (succWaBtn) succWaBtn.href = waUrl;

    formEl.style.display = "none";
    if (statusEl) statusEl.style.display = "none";
    if (successBoxEl) successBoxEl.classList.add("show");
    successBoxEl.scrollIntoView({ behavior: "smooth", block: "center" });
  };
}
H($("#ct"), [["Address", BRANCHES.map(b => b.city + ": " + b.addr).join("<br>")], ["Phone & WhatsApp", `<a href="tel:${SITE.phone.replace(/\s+/g, '')}">${SITE.phone}</a>`], ["Available Days", SITE.hours]].map(c => `<div class="card ct"><h3>${c[0]}</h3><p>${c[1]}</p></div>`).join(""));
const FOOTER_SERVICES = [
  "Guest Henna",
  "Engagement Henna",
  "Bridal Henna",
  "Customized Henna",
  "Press-On Nails",
  "Gel Extension",
  "Toe Extension",
  "Customized Nail Art"
];
H($("#fq"), NAV.map(n => `<a href="#${n[1]}">${n[0]}</a>`).join(""));
H($("#fs"), FOOTER_SERVICES.map(s => `<a href="#services">${s}</a>`).join(""));
H($("#fb"), BRANCHES.map(b => `<a href="#locations">${b.city}</a>`).join("")); H($("#fc"), `<a href="tel:${SITE.phone.replace(/\s+/g, '')}">${SITE.phone}</a><a href="mailto:${SITE.email}">${SITE.email}</a><a href="${SITE.ig}" target="_blank" rel="noopener">Instagram: @_magical_stain_</a>`);
function initTextMotion() {
  const h1 = $(".hero h1");
  if (h1) {
    const words = h1.textContent.trim().split(/\s+/);
    let charIdx = 0;
    h1.innerHTML = words.map(w => {
      const chs = w.split("").map(c => {
        const delay = (0.2 + charIdx * 0.035).toFixed(3);
        charIdx++;
        return `<span class="char" style="--cd:${delay}s">${c}</span>`;
      }).join("");
      return `<span class="word">${chs}</span>`;
    }).join(" ");
  }
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("section h2, section .eb, .card, .gal button, .svc-item, .svc-cta-banner").forEach(el => {
      el.classList.add("scroll-reveal");
      obs.observe(el);
    });
  }
}
initTextMotion();
