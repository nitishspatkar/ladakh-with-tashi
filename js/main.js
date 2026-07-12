(function () {
  'use strict';

  const config = window.SITE_CONFIG || {};
  const whatsappUrl = `https://wa.me/${config.whatsappNumber || '918082802158'}`;

  let selectedSeason = 'summer';
  let heroIndex = 0;
  let heroTimer = null;

  function imgFallback(img) {
    img.onerror = null;
    img.src = PLACEHOLDER;
    img.classList.add('is-placeholder');
  }

  function bindImageFallbacks(root) {
    root.querySelectorAll('img[data-fallback]').forEach((img) => {
      img.addEventListener('error', () => imgFallback(img), { once: true });
    });
  }

  function initWhatsAppLinks() {
    document.querySelectorAll('[data-whatsapp]').forEach((el) => {
      el.href = whatsappUrl;
      el.setAttribute('rel', 'noopener noreferrer');
      el.setAttribute('target', '_blank');
    });
    const phoneEl = document.getElementById('contact-phone');
    if (phoneEl && config.whatsappDisplay) {
      phoneEl.textContent = config.whatsappDisplay;
    }
  }

  function initHero() {
    const heroBg = document.getElementById('hero-bg');
    if (!heroBg) return;

    HERO_IMAGES.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Ladakh landscape';
      img.className = 'hero__slide';
      img.loading = i === 0 ? 'eager' : 'lazy';
      img.decoding = 'async';
      if (i === 0) img.classList.add('is-active');
      heroBg.appendChild(img);
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      heroTimer = window.setInterval(() => {
        const slides = heroBg.querySelectorAll('.hero__slide');
        slides[heroIndex].classList.remove('is-active');
        heroIndex = (heroIndex + 1) % slides.length;
        slides[heroIndex].classList.add('is-active');
      }, 5500);
    }
  }

  function renderRoutes() {
    const container = document.getElementById('routes-list');
    if (!container) return;

    container.innerHTML = ROUTES.map((route) => `
      <article class="route">
        <div class="route__header">
          <span class="route__dot" aria-hidden="true"></span>
          <h3 class="route__name">${route.name}</h3>
        </div>
        <p class="route__note">${route.note}</p>
        <div class="route__thumbs" aria-label="Photos of ${route.name}">
          ${route.thumbs.map((src) => `
            <div class="route__thumb">
              <img src="${src}" alt="${route.name}" data-fallback loading="lazy" decoding="async">
            </div>
          `).join('')}
        </div>
      </article>
    `).join('');

    bindImageFallbacks(container);
  }

  function renderSeasons() {
    const picker = document.getElementById('seasons-picker');
    if (!picker) return;

    picker.innerHTML = SEASONS.map((season) => `
      <button type="button" class="season" data-season="${season.key}" aria-pressed="${season.key === selectedSeason}">
        <div class="season__img-wrap">
          <img src="${season.img}" alt="${season.label}" data-fallback loading="lazy" decoding="async">
        </div>
        <span class="season__label">${season.label}</span>
      </button>
    `).join('');

    picker.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-season]');
      if (!btn) return;
      selectedSeason = btn.dataset.season;
      updateSeasonDisplay();
    });

    bindImageFallbacks(picker);
    updateSeasonDisplay();
  }

  function updateSeasonDisplay() {
    const season = SEASONS.find((s) => s.key === selectedSeason) || SEASONS[1];
    const monthsEl = document.getElementById('season-months');
    const noteEl = document.getElementById('season-note');
    if (monthsEl) monthsEl.textContent = season.months;
    if (noteEl) noteEl.textContent = season.note;

    document.querySelectorAll('[data-season]').forEach((btn) => {
      const isActive = btn.dataset.season === selectedSeason;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function renderGallery() {
    const container = document.getElementById('gallery-grid');
    if (!container) return;

    container.innerHTML = GALLERY.map((item) => `
      <figure class="gallery__item" style="--ratio: ${item.ratio}; --rotate: ${item.rotate}deg">
        <img src="${item.src}" alt="${item.label}" data-fallback loading="lazy" decoding="async">
        <figcaption class="gallery__caption">${item.label}</figcaption>
      </figure>
    `).join('');

    bindImageFallbacks(container);
  }

  function renderTestimonials() {
    const container = document.getElementById('reviews-list');
    if (!container) return;

    container.innerHTML = TESTIMONIALS.map((t) => `
      <blockquote class="review" style="--rotate: ${t.rotate}deg">
        <p class="review__quote">"${t.quote}"</p>
        <cite class="review__author">— ${t.name}</cite>
      </blockquote>
    `).join('');
  }

  function renderProduce() {
    const container = document.getElementById('produce-tags');
    if (!container) return;

    container.innerHTML = PRODUCE_ITEMS.map((item) => `
      <span class="produce__tag">${item}</span>
    `).join('');
  }

  function initAnalytics() {
    const domain = config.plausibleDomain;
    if (!domain) return;

    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = domain;
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }

  function initNavHighlight() {
    const sections = document.querySelectorAll('main [id]');
    const navLinks = document.querySelectorAll('.nav__link');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
          });
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function init() {
    initWhatsAppLinks();
    initHero();
    renderRoutes();
    renderSeasons();
    renderGallery();
    renderTestimonials();
    renderProduce();
    initAnalytics();
    initNavHighlight();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('beforeunload', () => {
    if (heroTimer) clearInterval(heroTimer);
  });
})();
