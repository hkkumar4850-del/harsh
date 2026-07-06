(() => {
  "use strict";

  const WHATSAPP_NUMBER = "918920685961";

  /* ---------- preloader ---------- */
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) setTimeout(() => preloader.classList.add("is-done"), 350);
  });

  /* ---------- floating petals ---------- */
  const petalHost = document.getElementById("heroPetals");
  if (petalHost) {
    const PETAL_COUNT = 16;
    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      petal.setAttribute("viewBox", "0 0 100 100");
      petal.classList.add("petal");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#icon-flower");
      use.setAttribute("href", "#icon-flower");
      petal.appendChild(use);

      const size = 10 + Math.random() * 16;
      const left = Math.random() * 100;
      const duration = 10 + Math.random() * 12;
      const delay = Math.random() * 14;
      const drift = (Math.random() * 120 - 60).toFixed(0) + "px";

      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.left = `${left}%`;
      petal.style.animationDuration = `${duration}s`;
      petal.style.animationDelay = `-${delay}s`;
      petal.style.setProperty("--drift", drift);
      petal.style.opacity = (0.35 + Math.random() * 0.5).toFixed(2);

      petalHost.appendChild(petal);
    }
  }

  /* ---------- nav: scroll state, mobile menu, scrollspy ---------- */
  const nav = document.getElementById("nav");
  const navLinks = document.getElementById("navLinks");
  const navBurger = document.getElementById("navBurger");

  const onScrollNav = () => {
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });

  navBurger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navBurger.classList.toggle("is-open", isOpen);
    navBurger.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navBurger.classList.remove("is-open");
      navBurger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const spyLinks = [...navLinks.querySelectorAll("a")];
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        spyLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spyObserver.observe(s));

  /* ---------- generic scroll-reveal ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- animated stat counters ---------- */
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-IN");
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString("en-IN");
    };
    requestAnimationFrame(step);
  };

  const statNums = document.querySelectorAll(".stat__num");
  const statObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  statNums.forEach((el) => statObserver.observe(el));

  /* ---------- process line draw-in ---------- */
  const processLine = document.querySelector(".process__line line");
  if (processLine) {
    const length = 1000;
    processLine.style.strokeDasharray = String(length);
    processLine.style.strokeDashoffset = String(length);
    processLine.style.transition = "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)";
    const lineObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.strokeDashoffset = "0";
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    lineObserver.observe(processLine);
  }

  /* ---------- hero parallax mandalas ---------- */
  const mandala1 = document.querySelector(".hero__mandala--1");
  const mandala2 = document.querySelector(".hero__mandala--2");
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (mandala1) mandala1.style.marginTop = `${y * 0.15}px`;
        if (mandala2) mandala2.style.marginBottom = `${y * 0.1}px`;
        ticking = false;
      });
    },
    { passive: true }
  );

  /* ---------- back to top ---------- */
  const backToTop = document.getElementById("backToTop");
  window.addEventListener(
    "scroll",
    () => backToTop.classList.toggle("is-visible", window.scrollY > 600),
    { passive: true }
  );
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- contact form -> WhatsApp ---------- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const phone = document.getElementById("cf-phone").value.trim();
      const occasion = document.getElementById("cf-occasion").value;
      const message = document.getElementById("cf-message").value.trim();

      const text =
        `Jai Shree Shyam! I'm ${name} (${phone}).\n` +
        `Occasion: ${occasion}\n` +
        (message ? `Message: ${message}` : "I'd like to enquire about flower decor.");

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---------- footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
