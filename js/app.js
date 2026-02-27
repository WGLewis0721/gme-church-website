/**
 * Greater Mt. Olive AME Zion Church
 * Church Website Template — Lightweight JSON-Driven Render Engine
 *
 * Loads site.json, sermons.json, and gallery.json and renders
 * the site dynamically from those data files.
 *
 * To customize: edit /data/site.json, /data/sermons.json, /data/gallery.json
 */

(function () {
  "use strict";

  // ─── Helpers ──────────────────────────────────────────────────────────────

  /**
   * Fetch a JSON file relative to this page.
   * @param {string} path
   * @returns {Promise<any>}
   */
  async function fetchJSON(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Failed to load " + path);
    return res.json();
  }

  /**
   * Escape special HTML characters to prevent XSS.
   * @param {string} str
   * @returns {string}
   */
  function esc(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * Build YouTube thumbnail URL from a video ID.
   * @param {string} youtubeId
   * @returns {string}
   */
  function ytThumb(youtubeId) {
    return "https://img.youtube.com/vi/" + esc(youtubeId) + "/hqdefault.jpg";
  }

  /**
   * Build YouTube embed URL from a video ID.
   * @param {string} youtubeId
   * @returns {string}
   */
  function ytEmbed(youtubeId) {
    return "https://www.youtube.com/embed/" + esc(youtubeId);
  }

  // SVG icons
  const ICONS = {
    home: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/></svg>`,
    online: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  };

  // ─── Navigation ────────────────────────────────────────────────────────────

  function renderNav(site) {
    const navEl = document.getElementById("site-nav");
    if (!navEl) return;

    navEl.innerHTML = `
      <nav aria-label="Site header">
        <div class="container">
          <div class="nav-inner">
            <a href="index.html" class="nav-logo" aria-label="${esc(site.churchName)} — home">
              <div class="nav-logo-icon" aria-hidden="true">✝</div>
              <div class="nav-logo-text">
                <span class="church-name">${esc(site.shortName || site.churchName)}</span>
                <span class="church-sub">AME Zion Church</span>
              </div>
            </a>
            <div class="nav-links" role="navigation" aria-label="Main navigation">
              <a href="index.html">Home</a>
              <a href="about.html">About</a>
              <a href="archives.html">Archives</a>
              <a href="live.html">Live Service</a>
              <a href="give.html" class="btn-give-nav">Give</a>
            </div>
            <button class="hamburger-btn" id="hamburger-btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" id="hamburger-icon" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          <div id="mobile-menu" class="mobile-menu" role="navigation" aria-label="Mobile navigation">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="archives.html">Archives</a>
            <a href="live.html">Live Service</a>
            <a href="give.html" class="btn-give-nav">Give</a>
          </div>
        </div>
      </nav>`;

    // Mobile hamburger toggle
    const btn = document.getElementById("hamburger-btn");
    const menu = document.getElementById("mobile-menu");
    if (btn && menu) {
      btn.addEventListener("click", function () {
        const isOpen = menu.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        btn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        btn.querySelector("svg").innerHTML = isOpen
          ? `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>`
          : `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>`;
      });

      // Close mobile menu when a link is clicked
      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          menu.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
          btn.setAttribute("aria-label", "Open navigation menu");
          btn.querySelector("svg").innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>`;
        });
      });
    }
  }

  // ─── Footer ─────────────────────────────────────────────────────────────

  function renderFooter(site) {
    const footerEl = document.getElementById("site-footer");
    if (!footerEl) return;

    const year = new Date().getFullYear();

    footerEl.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <span class="footer-church-name">${esc(site.churchName)}</span>
              <p>${esc(site.tagline)}</p>
              <p style="margin-top:0.75rem;font-size:0.8rem;">${esc(site.address)}<br>${esc(site.phone)}<br><a href="mailto:${esc(site.email)}" style="color:rgba(212,175,55,0.8)">${esc(site.email)}</a></p>
            </div>
            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="archives.html">Sermon Archives</a></li>
                <li><a href="live.html">Live Service</a></li>
                <li><a href="give.html">Give Online</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="${esc(site.facebook)}" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="${esc(site.youtube)}" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="${esc(site.instagram)}" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="mailto:${esc(site.email)}">Email Us</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; ${year} ${esc(site.churchName)}. All rights reserved.</p>
          </div>
        </div>
      </footer>`;
  }

  // ─── Data Injection ───────────────────────────────────────────────────────

  /**
   * Inject church name and other site values into elements
   * that have a [data-site="key"] attribute.
   */
  function injectSiteData(site) {
    document.querySelectorAll("[data-site]").forEach(function (el) {
      var key = el.dataset.site;
      var value = key.split(".").reduce(function (obj, k) { return obj && obj[k]; }, site);
      if (value != null) el.textContent = value;
    });

    // Inject href values
    document.querySelectorAll("[data-site-href]").forEach(function (el) {
      var key = el.dataset.siteHref;
      var value = key.split(".").reduce(function (obj, k) { return obj && obj[k]; }, site);
      if (value != null) el.href = value;
    });

    // Update <title> if it has {churchName} placeholder
    if (document.title.includes("{churchName}")) {
      document.title = document.title.replace("{churchName}", site.churchName);
    }
  }

  // ─── Service Times ───────────────────────────────────────────────────────

  function renderServiceTimes(site, selector, variant) {
    var containers = document.querySelectorAll(selector);
    if (!containers.length || !site.serviceTimes) return;

    var gridClass = variant === "dark" ? "service-times-grid" : "service-times-grid service-times-grid-light";
    var html = "<div class=\"" + gridClass + "\">";
    site.serviceTimes.forEach(function (s) {
      html += `
        <div class="service-time-card">
          <span class="service-time">${esc(s.time)}</span>
          <span class="service-day">${esc(s.day)}</span>
          <span class="service-label">${esc(s.label)}</span>
        </div>`;
    });
    html += "</div>";

    containers.forEach(function (el) { el.innerHTML = html; });
  }

  // ─── Sermons ──────────────────────────────────────────────────────────────

  function renderSermons(sermons, container, limit) {
    if (!container) return;
    var items = limit ? sermons.slice(0, limit) : sermons;
    var html = "";

    items.forEach(function (sermon) {
      var thumb = ytThumb(sermon.youtubeId);
      var embedUrl = ytEmbed(sermon.youtubeId);
      html += `
        <a href="${embedUrl}" target="_blank" rel="noopener noreferrer" class="sermon-card" aria-label="Watch ${esc(sermon.title)}">
          <div class="sermon-thumbnail">
            <img src="${esc(thumb)}" alt="${esc(sermon.title)} thumbnail" loading="lazy">
            <div class="sermon-play-btn">${ICONS.play}</div>
          </div>
          <div class="sermon-info">
            ${sermon.series ? `<span class="sermon-series">${esc(sermon.series)}</span>` : ""}
            <h3 class="sermon-title">${esc(sermon.title)}</h3>
            <p class="sermon-meta">${esc(sermon.date)} &middot; ${esc(sermon.speaker)}</p>
            ${sermon.description ? `<p class="sermon-description">${esc(sermon.description)}</p>` : ""}
            <span class="sermon-link">Watch on YouTube &rarr;</span>
          </div>
        </a>`;
    });

    container.innerHTML = html;
  }

  // ─── Gallery ─────────────────────────────────────────────────────────────

  function renderGallery(gallery, container, limit) {
    if (!container) return;
    var items = limit ? gallery.slice(0, limit) : gallery;
    var html = "";

    items.forEach(function (img) {
      html += `
        <div class="gallery-item">
          <img src="${esc(img.image)}" alt="${esc(img.alt)}" loading="lazy">
          ${img.caption ? `<div class="gallery-caption">${esc(img.caption)}</div>` : ""}
        </div>`;
    });

    container.innerHTML = html;
  }

  // ─── Ministries ──────────────────────────────────────────────────────────

  function renderMinistries(site, container) {
    if (!container || !site.ministries) return;
    var isLight = container.dataset.variant === "light";
    var html = "";

    site.ministries.forEach(function (m) {
      html += isLight
        ? `<div class="ministry-card ministry-card--light">
            <div class="ministry-icon ministry-icon--light">${ICONS.home}</div>
            <div>
              <h3 style="color:var(--deep-purple)">${esc(m.name)}</h3>
              <p style="color:var(--text-medium)">${esc(m.description)}</p>
            </div>
          </div>`
        : `<div class="ministry-card">
            <div class="ministry-icon">${ICONS.home}</div>
            <div>
              <h3>${esc(m.name)}</h3>
              <p>${esc(m.description)}</p>
            </div>
          </div>`;
    });

    container.innerHTML = html;
  }

  // ─── Live Stream ─────────────────────────────────────────────────────────

  function renderLiveStream(site, container) {
    if (!container || !site.youtubeChannelId) return;
    var embedSrc = "https://www.youtube.com/embed/live_stream?channel=" + esc(site.youtubeChannelId) + "&autoplay=0";

    container.innerHTML = `
      <div class="video-wrapper">
        <iframe
          src="${embedSrc}"
          title="${esc(site.churchName)} Live Service"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>`;
  }

  // ─── Main Init ────────────────────────────────────────────────────────────

  async function init() {
    try {
      // Load site config
      var site = await fetchJSON("data/site.json");

      // Render nav and footer on every page
      renderNav(site);
      renderFooter(site);

      // Inject data-site attributes
      injectSiteData(site);

      // Service times (dark backgrounds use the default, light bg use -light variant)
      renderServiceTimes(site, "[data-render='service-times-dark']", "dark");
      renderServiceTimes(site, "[data-render='service-times']", "light");

      // Ministries (dark bg section)
      var ministriesContainer = document.querySelector("[data-render='ministries']");
      if (ministriesContainer) renderMinistries(site, ministriesContainer);

      // Live stream embed
      var liveContainer = document.querySelector("[data-render='live-stream']");
      if (liveContainer) renderLiveStream(site, liveContainer);

      // Sermons — fetch only if there's a sermon container on this page
      var sermonGrid = document.querySelector(".sermon-grid");
      var featuredSermon = document.querySelector("[data-render='featured-sermon']");
      if (sermonGrid || featuredSermon) {
        var sermons = await fetchJSON("data/sermons.json");

        if (sermonGrid) {
          var limit = sermonGrid.dataset.limit ? parseInt(sermonGrid.dataset.limit, 10) : null;
          renderSermons(sermons, sermonGrid, limit);
        }

        if (featuredSermon) {
          renderFeaturedSermon(sermons[0], featuredSermon, site);
        }
      }

      // Gallery — fetch only if there's a gallery container on this page
      var galleryGrid = document.querySelector(".gallery-grid");
      if (galleryGrid) {
        var gallery = await fetchJSON("data/gallery.json");
        var galleryLimit = galleryGrid.dataset.limit ? parseInt(galleryGrid.dataset.limit, 10) : null;
        renderGallery(gallery, galleryGrid, galleryLimit);
      }

    } catch (err) {
      console.error("Church template init error:", err);
    }
  }

  // ─── Featured Sermon (Home page) ─────────────────────────────────────────

  function renderFeaturedSermon(sermon, container, site) {
    if (!sermon) return;
    var embedUrl = ytEmbed(sermon.youtubeId);

    container.innerHTML = `
      <div class="grid-2">
        <div class="video-wrapper">
          <iframe
            src="${embedUrl}"
            title="${esc(sermon.title)}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
        <div>
          ${sermon.series ? `<p style="color:var(--gold);font-weight:700;font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.5rem;">${esc(sermon.series)}</p>` : ""}
          <h3 style="color:var(--deep-purple);font-size:1.75rem;margin-bottom:0.75rem;">${esc(sermon.title)}</h3>
          <p style="color:var(--text-light);font-size:0.875rem;margin-bottom:0.75rem;">${esc(sermon.date)} &middot; ${esc(sermon.speaker)}</p>
          ${sermon.description ? `<p style="color:var(--text-medium);line-height:1.7;margin-bottom:1.5rem;">${esc(sermon.description)}</p>` : ""}
          <a href="archives.html" class="btn-secondary">View All Sermons</a>
        </div>
      </div>`;
  }

  // Start when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
