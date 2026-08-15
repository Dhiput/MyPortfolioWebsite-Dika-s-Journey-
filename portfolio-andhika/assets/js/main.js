/* =========================================================
   ANDHIKA PUTRADHITYA — PORTFOLIO 2023–2026
   main.js — vanilla JS, no framework, no dependencies
   ========================================================= */
(function () {
  "use strict";

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const raw = (s) => String(s);                     /* data may carry <b>/<i> on purpose */
  const strip = (s) => String(s).replace(/<[^>]*>/g, "").replace(/&amp;/g, "&");

  /* ---------------------------------------------------------
     1. HOW A WORK PLAYS
     --------------------------------------------------------- */
  const U = {
    drivePlay:  (id) => `https://drive.google.com/file/d/${id}/preview`,
    driveOpen:  (id) => `https://drive.google.com/file/d/${id}/view`,
    driveThumb: (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
    /* CDN gambar Drive — sering lolos ketika endpoint /thumbnail kena rate-limit */
    driveCdn:   (id) => `https://lh3.googleusercontent.com/d/${id}=w1000`,
    ytPlay:  (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`,
    ytOpen:  (id) => `https://www.youtube.com/watch?v=${id}`,
    ytThumb: (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  };
  const DOCLIKE = ["design", "document", "photography"];
  const isDoc = (w) => w.cat.some((c) => DOCLIKE.includes(c));

  const playUrl = (w) => w.type === "youtube" ? U.ytPlay(w.id) : w.type === "drive" ? U.drivePlay(w.id) : w.url;
  const openUrl = (w) => w.type === "youtube" ? U.ytOpen(w.id) : w.type === "drive" ? U.driveOpen(w.id) : (w.url || location.href);
  /* `thumb` = ID gambar thumbnail asli dari folder Drive Andhika.
     Kalau ada, itu yang dipakai; kalau tidak, jatuh ke frame otomatis
     dari video Drive/YouTube-nya. */
  /* Daftar kandidat, dicoba berurutan sampai ada yang berhasil. */
  const thumbCandidates = (w) => {
    const out = [];
    if (w.thumb) out.push(U.driveCdn(w.thumb), U.driveThumb(w.thumb));
    if (w.type === "youtube") out.push(U.ytThumb(w.id));
    else if (w.type === "drive") out.push(U.driveCdn(w.id), U.driveThumb(w.id));
    return out;
  };
  const remoteThumb = (w) => thumbCandidates(w)[0] || null;
  const srcLabel = (w) =>
    w.points ? "Case study"
    : ({ youtube: "YouTube", drive: "Google Drive", gallery: "Portfolio slide" }[w.type] || "External link");

  /* ---------------------------------------------------------
     2. ICONS
     --------------------------------------------------------- */
  /* Ikon asli dari folder Drive milik Andhika — sudah dalam palet biru
     #5872E4 dengan glyph putih, jadi TIDAK perlu di-tint lagi lewat CSS. */
  /* path ditulis utuh (bukan dirangkai) supaya bisa ikut di-inline
     jadi data URI pada build satu-file. */
  const ICON_SRC = {
    pr:     "assets/img/tools/pr.png",
    ai:     "assets/img/tools/ai.png",
    ae:     "assets/img/tools/ae.png",
    canva:  "assets/img/tools/canva.png",
    capcut: "assets/img/tools/capcut.png",
  };
  const ICON_LABEL = {
    pr: "Adobe Premiere Pro", ai: "Adobe Illustrator", ae: "Adobe After Effects",
    canva: "Canva", capcut: "CapCut",
  };
  const appIcon = (key) =>
    `<img src="${ICON_SRC[key]}" alt="${ICON_LABEL[key]}" width="48" height="48" loading="lazy" decoding="async">`;

  const ICON_APP = {
    pr: appIcon("pr"), ai: appIcon("ai"), ae: appIcon("ae"),
    canva: appIcon("canva"), capcut: appIcon("capcut"),
  };

  const ICON = {
    mail:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 7 9 6 9-6"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>`,
    link:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M10 21V9m0 5a4 4 0 0 1 8 0v7"/></svg>`,
    ig:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>`,
    tt:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3v10.5a4.5 4.5 0 1 1-3.6-4.4"/><path d="M15 6.2A5.4 5.4 0 0 0 20 9"/></svg>`,
    pin:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  };

  /* ikon empat kotak statistik */
  const ICON_STAT = {
    years: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5.4l3.4 2"/></svg>`,
    works: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="13" rx="2.5"/><path d="M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6"/><path d="M10 12.2v3l3.4-1.5z" fill="currentColor"/></svg>`,
    teams: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M2.8 20a6.2 6.2 0 0 1 12.4 0"/><path d="M16.5 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.2 6.2 0 0 1 3.2 5.6"/></svg>`,
    gpa:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.4 22 8l-10 4.6L2 8z"/><path d="M6 10.4V15c0 1.9 2.7 3.4 6 3.4s6-1.5 6-3.4v-4.6"/></svg>`,
  };

  /* Lencana periode tiap peran. Sebelumnya periode hanya teks kuning polos dan
     menghilang di atas thumbnail yang kebetulan kuning (kasus TVUI). Sekarang
     dibungkus lencana bertinta pekat dengan ikon yang mewakili pekerjaannya. */
  const ICON_ROLE = {
    retail:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16l-1.2 12H5.2z"/><path d="M8.5 8V6a3.5 3.5 0 0 1 7 0v2"/></svg>`,
    golf:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21V3l11 4-11 4"/><circle cx="7" cy="19.5" r="1.6"/></svg>`,
    tv:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="8" width="19" height="12.5" rx="2.5"/><path d="m7.5 3.5 4.5 4.5 4.5-4.5"/></svg>`,
    mic:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v4"/></svg>`,
    art:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.6a9.4 9.4 0 1 0 0 18.8c1.4 0 2-.9 2-1.8 0-1.6-1.3-1.8-1.3-3 0-.9.8-1.6 1.8-1.6h1.9a4.2 4.2 0 0 0 4.2-4.2C20.6 6 16.8 2.6 12 2.6z"/><circle cx="7.6" cy="11" r="1.1" fill="currentColor"/><circle cx="11" cy="7.2" r="1.1" fill="currentColor"/><circle cx="15.6" cy="8.6" r="1.1" fill="currentColor"/></svg>`,
    camera:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6.5" width="13" height="11" rx="2.5"/><path d="m15.5 11 6-3.2v8.4l-6-3.2z"/></svg>`,
  };

  /* ikon interaksi sosial — dipakai TANPA label teks di panel studi kasus */
  const ICON_METRIC = {
    like:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1l8.8 8.8 8.8-8.8a5 5 0 0 0 0-7.1z"/></svg>`,
    comment: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.8 8.8 0 0 1-3.9-.9L3 20.5l1.5-4.6A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4z"/></svg>`,
    repost:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2.5 21 6.5l-4 4"/><path d="M3 12.5v-2a4 4 0 0 1 4-4h14"/><path d="M7 21.5 3 17.5l4-4"/><path d="M21 11.5v2a4 4 0 0 1-4 4H3"/></svg>`,
    save:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21.5 12 16.8 5 21.5V4.6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  };

  /* ---------------------------------------------------------
     3. HERO + ABOUT
     --------------------------------------------------------- */
  function renderProfile() {
    /* CV dibundel di dalam situs. Pada build satu-file isinya berupa data URI,
       dan Chrome MENOLAK navigasi langsung ke data: untuk PDF — jadi datanya
       diubah dulu jadi Blob, baru dibuka. Pada versi folder, path biasa
       dipakai apa adanya. */
    $$("#cvA, #cvB, #cvC").forEach((a) => {
      a.href = PROFILE.cv;
      a.setAttribute("download", PROFILE.cvName || "CV.pdf");
      if (!PROFILE.cv.startsWith("data:")) return;
      a.removeAttribute("download");
      a.addEventListener("click", (e) => {
        e.preventDefault();
        try {
          const [head, b64] = PROFILE.cv.split(",");
          const mime = (head.match(/data:([^;]+)/) || [, "application/pdf"])[1];
          const bin = atob(b64);
          const buf = new Uint8Array(bin.length);
          for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
          const url = URL.createObjectURL(new Blob([buf], { type: mime }));
          window.open(url, "_blank", "noopener");
          setTimeout(() => URL.revokeObjectURL(url), 60000);
        } catch (_) { toast("Could not open the CV"); }
      });
    });
    $("#yr").textContent = new Date().getFullYear();
    $("#hook").textContent = PROFILE.hook;
    $("#sumMain").textContent = PROFILE.summary;
    $("#sumSub").textContent = PROFILE.hookSub;

    $("#caps").innerHTML = DISCIPLINES.map((d) =>
      `<span class="cap ${d.hue === "yellow" ? "y" : d.hue === "blue" ? "b" : ""}">${esc(d.label)}</span>`).join("");

    $("#strip").innerHTML = STATS.map((s) => `
      <div class="stat">
        <span class="stat__ic" aria-hidden="true">${ICON_STAT[s.icon] || ""}</span>
        <b data-count="${s.n}" data-suffix="${esc(s.suffix)}">0</b>
        <span>${esc(s.label)}</span>
        <small>${esc(s.sub)}</small>
      </div>`).join("");

    $("#eduBox").innerHTML = EDUCATION.map((e) => `
      <div class="edu">
        <span class="yr">${esc(e.period)}</span>
        <b>${esc(e.school)}</b>
        <p>${esc(e.detail)}</p>
        ${e.note ? `<div class="medal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M8.2 13.8 7 22l5-3 5 3-1.2-8.2"/></svg>
          <span>${esc(e.note)}</span></div>` : ""}
      </div>`).join("");

    $("#langBox").innerHTML = LANGUAGES.map((l) =>
      `<span class="lang"><b>${esc(l.level)}</b>${esc(l.name)}</span>`).join("");

    $("#toolBox").innerHTML = TOOLS.map((t) => `
      <div class="tool">
        <span class="tool__ico">${ICON_APP[t.icon] || ""}</span>
        <div>
          <div class="tool__top">
            <span class="tool__name">${esc(t.name)}</span>
            <span class="tool__val" data-count="${t.level}" data-suffix="/10">0</span>
          </div>
          <div class="tool__track" role="img" aria-label="${esc(t.name)}: ${t.level} out of 10">
            <div class="tool__fill" data-w="${t.level * 10}"></div>
          </div>
        </div>
      </div>`).join("");

    $("#skTech").innerHTML   = SKILL_TECH.map((s) => `<span class="chip-s">${esc(s)}</span>`).join("");
    $("#skSocial").innerHTML = SKILL_SOCIAL.map((s) => `<span class="chip-s y">${esc(s)}</span>`).join("");

    $("#cgrid").innerHTML = [
      { l: "Email",            v: PROFILE.email,          h: "mailto:" + PROFILE.email, i: "mail" },
      { l: "WhatsApp",         v: PROFILE.phone,          h: "tel:" + PROFILE.phoneRaw, i: "phone" },
      { l: "LinkedIn",         v: PROFILE.linkedinLabel,  h: PROFILE.linkedin,  i: "link" },
      { l: "Instagram",        v: PROFILE.instagramLabel, h: PROFILE.instagram, i: "ig" },
      { l: "TikTok — MedEdu",  v: PROFILE.tiktokLabel,    h: PROFILE.tiktok,    i: "tt" },
      { l: "Based in",         v: PROFILE.location,       h: null, i: "pin" },
    ].map((c) => {
      const inner = `<span class="ic">${ICON[c.i]}</span><small>${esc(c.l)}</small><b>${esc(c.v)}</b>`;
      return c.h
        ? `<a class="citem" href="${c.h}"${c.h.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${inner}</a>`
        : `<div class="citem">${inner}</div>`;
    }).join("");
  }

  /* ---------------------------------------------------------
     4. EXPERIENCE + SPOTLIGHT
     --------------------------------------------------------- */
  /* --- carousel 16:9 --- */
  function renderXP() {
    const initials = (s) => s.split(/\s+/).map((w) => w[0]).join("").slice(0, 3).toUpperCase();

    $("#xpcRail").innerHTML = EXPERIENCE.map((x, i) => {
      /* thumbnail asli dari Drive kalau ada; poster lokal jadi tampilan
         pertama supaya kartu tidak pernah kosong sambil menunggu Drive. */
      const cands = x.thumb ? [U.driveCdn(x.thumb), U.driveThumb(x.thumb)] : [];
      const base = x.poster || cands[0];
      const up = cands.filter((c) => c !== base).join("|");
      return `
      <button class="xpcard${x.poster ? "" : " gen"}" data-x="${i}"
              aria-label="Open details for ${esc(x.org)}">
        <span class="xpcard__gen"><span>${esc(initials(x.org))}</span></span>
        ${base
          ? `<img class="xpcard__img" src="${esc(base)}" alt="" loading="lazy" referrerpolicy="no-referrer"${up ? ` data-up="${esc(up)}"` : ""}>`
          : ""}
        <span class="xpcard__veil"></span>
        <span class="xpcard__no">${String(i + 1).padStart(2, "0")}</span>
        <span class="xpcard__tag">${esc(x.tag)}</span>
        <span class="xpcard__meta">
          <span class="per">
            <i class="per__ic">${ICON_ROLE[x.shape] || ICON_ROLE.camera}</i>${esc(x.period)}
          </span>
          <h3>${esc(x.org)}</h3>
          <span class="rl">${esc(x.role)}</span>
          <span class="xpcard__cta">Read the detail
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </span>
      </button>`;
    }).join("");

    $("#xpcDots").innerHTML = EXPERIENCE.map((x, i) =>
      `<button data-d="${i}" role="tab" aria-label="Go to ${esc(x.org)}"${i === 0 ? ' class="on" aria-selected="true"' : ' aria-selected="false"'}></button>`).join("");

    const m = PERSONAL_BRAND;
    $("#spot").innerHTML = `
      <div>
        <span class="eyebrow"><i></i> Personal brand project</span>
        <h3>${esc(m.org)} <em>${esc(m.handle)}</em></h3>
        <div style="color:var(--ink-45);font-size:.84rem;font-weight:700;margin-top:.25rem">${esc(m.role)} · ${esc(m.period)}</div>
        <p class="ed" style="margin-top:.5rem">“${esc(m.tagline)}”</p>
        ${m.taglineEn ? `<p style="font-size:.8rem;color:var(--ink-45);font-weight:600;margin-top:.2rem">${esc(m.taglineEn)}</p>` : ""}
        <ul style="margin-top:1rem;display:grid;gap:.55rem">
          ${m.points.map((p) => `<li style="position:relative;padding-left:1.4rem;font-size:.91rem;color:var(--ink-70)">
            <span style="position:absolute;left:0;top:.58em;width:8px;height:8px;background:var(--blue)"></span>${raw(p)}</li>`).join("")}
        </ul>
        <div class="spot__metrics">
          ${m.metrics.map((x) => `<div class="metric"><b>${esc(x.k)}</b><span>${esc(x.v)}</span></div>`).join("")}
        </div>
        <a href="${esc(m.url)}" target="_blank" rel="noopener" class="btn btn--b" style="margin-top:1.3rem">
          Open TikTok @mededu.id
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
        </a>
      </div>
      <div class="spot__media">
        <img src="${esc(m.poster)}"  alt="MedEdu short content edit" loading="lazy" referrerpolicy="no-referrer"
             data-poster="${esc(m.poster)}"  data-title="MedEdu — Short Content Edit"
             ${m.thumb ? `data-up="${esc(U.driveCdn(m.thumb))}|${esc(U.driveThumb(m.thumb))}"` : ""}>
        <img src="${esc(m.poster2)}" alt="MedEdu most viral clip"    loading="lazy" referrerpolicy="no-referrer"
             data-poster="${esc(m.poster2)}" data-title="MedEdu — Most FYP"
             ${m.thumb2 ? `data-up="${esc(U.driveCdn(m.thumb2))}|${esc(U.driveThumb(m.thumb2))}"` : ""}>
      </div>`;
  }

  /* sebuah poin boleh berupa string, atau { t, sub[] } untuk daftar bersarang */
  const renderPoint = (p) =>
    typeof p === "string"
      ? `<li>${raw(p)}</li>`
      : `<li>${raw(p.t)}<ul class="xpp__sub">${p.sub.map((s) => `<li>${raw(s)}</li>`).join("")}</ul></li>`;

  /* --- carousel controls + detail panel --- */
  const XP = { cur: 0, last: null };

  function railCards() { return $$(".xpcard", $("#xpcRail")); }

  function nearestCard() {
    const rail = $("#xpcRail");
    const cards = railCards();
    let best = 0, min = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - rail.scrollLeft);
      if (d < min) { min = d; best = i; }
    });
    return best;
  }

  function syncRail() {
    const rail = $("#xpcRail");
    const i = nearestCard();
    $$("#xpcDots button").forEach((d, k) => {
      d.classList.toggle("on", k === i);
      d.setAttribute("aria-selected", k === i);
    });
    /* scroll-snap menahan posisi awal di offsetLeft kartu pertama (bukan 0),
       jadi bandingkan terhadap kartu pertama, bukan terhadap nol. */
    const first = railCards()[0];
    $("#xpcP").disabled = rail.scrollLeft <= (first ? first.offsetLeft : 0) + 4;
    $("#xpcN").disabled = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 4;
  }

  function scrollToCard(i) {
    const cards = railCards();
    const n = Math.max(0, Math.min(cards.length - 1, i));
    if (cards[n]) $("#xpcRail").scrollTo({ left: cards[n].offsetLeft, behavior: "smooth" });
  }

  function initCarousel() {
    const rail = $("#xpcRail");
    $("#xpcP").addEventListener("click", () => scrollToCard(nearestCard() - 1));
    $("#xpcN").addEventListener("click", () => scrollToCard(nearestCard() + 1));
    $("#xpcDots").addEventListener("click", (e) => {
      const d = e.target.closest("[data-d]");
      if (d) scrollToCard(+d.dataset.d);
    });
    rail.addEventListener("scroll", () => {
      clearTimeout(rail._t);
      rail._t = setTimeout(syncRail, 90);
    }, { passive: true });
    rail.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); scrollToCard(nearestCard() + 1); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); scrollToCard(nearestCard() - 1); }
    });
    window.addEventListener("resize", syncRail);
    syncRail();
    requestAnimationFrame(syncRail);        /* pastikan status panah benar setelah layout */
    window.addEventListener("load", syncRail);

    rail.addEventListener("click", (e) => {
      if (rail._moved) return;                 /* habis di-drag, jangan buka panel */
      const c = e.target.closest(".xpcard");
      if (c) openXP(+c.dataset.x);
    });

    initDrag(rail);
  }

  /* --- tahan tombol kiri mouse lalu geser untuk menggulir --- */
  function initDrag(rail) {
    let down = false, startX = 0, startScroll = 0, moved = 0;

    rail.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 || e.pointerType === "touch") return;   /* sentuh pakai scroll native */
      down = true; moved = 0;
      startX = e.clientX;
      startScroll = rail.scrollLeft;
      rail._moved = false;
      /* JANGAN capture di sini — kalau di-capture sejak pointerdown, event click
         nanti menyasar ke rail, bukan ke kartu, dan panel tidak pernah terbuka. */
    });

    rail.addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!rail._moved && Math.abs(dx) > 5) {
        rail._moved = true;
        rail.classList.add("dragging");        /* matikan snap supaya tarikan terasa langsung */
        try { rail.setPointerCapture(e.pointerId); } catch (_) {}
      }
      if (!rail._moved) return;
      e.preventDefault();
      moved = dx;
      rail.scrollLeft = startScroll - dx;
    });

    const end = (e) => {
      if (!down) return;
      down = false;
      try { rail.releasePointerCapture(e.pointerId); } catch (_) {}
      if (rail._moved) {
        rail.classList.remove("dragging");
        /* lempar ke kartu terdekat, condong ke arah tarikan */
        const bias = Math.abs(moved) > 60 ? (moved < 0 ? 1 : -1) : 0;
        scrollToCard(nearestCard() + bias);
      }
      setTimeout(() => (rail._moved = false), 0);   /* biarkan handler click membaca dulu */
    };
    rail.addEventListener("pointerup", end);
    rail.addEventListener("pointercancel", end);
    rail.addEventListener("dragstart", (e) => e.preventDefault());
  }

  function openXP(i) {
    const x = EXPERIENCE[i];
    if (!x) return;
    XP.cur = i;
    XP.last = document.activeElement;

    $("#xppPeriod").textContent = x.period;
    $("#xppTag").textContent = x.tag;
    $("#xppOrg").textContent = x.org;
    $("#xppRole").textContent = x.role;
    $("#xppSub").innerHTML = raw(x.sub);
    $("#xppPoints").innerHTML = x.points.map(renderPoint).join("");
    $("#xppCount").textContent = `${i + 1} / ${EXPERIENCE.length}`;
    $("#xppBox").classList.toggle("y", x.hue === "yellow");
    $("#xppPrev").disabled = i === 0;
    $("#xppNext").disabled = i === EXPERIENCE.length - 1;

    clearTimeout($("#xpp")._closeT);
    $("#xppBox").classList.remove("closing");
    $("#xpp").classList.remove("closing");
    $("#xpp").classList.add("open");
    document.body.classList.add("lock");
    $("#xppBox").scrollTop = 0;
    $("#xppX").focus();
  }

  function closeXP() {
    const wrap = $("#xpp"), box = $("#xppBox");
    document.body.classList.remove("lock");
    if (XP.last) XP.last.focus();

    /* Animasi keluar adalah kebalikan dari masuk: mengempis jadi pipih dulu,
       baru menyempit. Panel baru benar-benar ditutup setelah animasinya
       selesai — kalau `open` langsung dicabut, kotaknya hilang seketika. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wrap.classList.remove("open", "closing");
      box.classList.remove("closing");
      return;
    }
    box.classList.remove("closing");
    void box.offsetWidth;
    box.classList.add("closing");
    wrap.classList.add("closing");
    clearTimeout(wrap._closeT);
    wrap._closeT = setTimeout(() => {
      wrap.classList.remove("open", "closing");
      box.classList.remove("closing");
    }, 340);
  }

  function stepXP(d) {
    const n = XP.cur + d;
    if (n < 0 || n >= EXPERIENCE.length) return;
    openXP(n);
    scrollToCard(n);
  }

  function initXPPanel() {
    $("#xppX").addEventListener("click", closeXP);
    $("#xpp").addEventListener("click", (e) => { if (e.target === $("#xpp")) closeXP(); });
    $("#xppPrev").addEventListener("click", () => stepXP(-1));
    $("#xppNext").addEventListener("click", () => stepXP(1));
    document.addEventListener("keydown", (e) => {
      if (!$("#xpp").classList.contains("open")) return;
      if (e.key === "Escape") closeXP();
      if (e.key === "ArrowRight") stepXP(1);
      if (e.key === "ArrowLeft") stepXP(-1);
    });
  }

  /* ---------------------------------------------------------
     5. WORKS
     --------------------------------------------------------- */
  /* inisial organisasi, dipakai sebagai lapisan cadangan di kartu tanpa poster lokal */
  const monogram = (s) =>
    (s || "").split(/\s+/)
      .map((w) => w[0])
      .filter((c) => c && /[A-Za-z]/.test(c))   /* buang pemisah seperti "·" */
      .join("").slice(0, 3).toUpperCase();

  function cardHTML(w, idx) {
    /* local poster first (instant, always there); Drive/YouTube thumb upgrades later */
    const cands = thumbCandidates(w);
    const base = w.poster || cands[0];
    const up = cands.filter((c) => c !== base).join("|");
    const playable = w.type === "youtube" || w.type === "drive";
    const icon = w.points
      /* karya dengan studi kasus: ikon grafik, bukan panah keluar —
         mengkliknya membuka panel angka, bukan langsung meninggalkan situs */
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>`
      : playable
      ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`
      : w.type === "gallery"
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 15 5-5 4 4 3-3 6 6"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>`;

    return `
      <button class="w rv" data-i="${idx}" data-cat="${esc(w.cat.join(" "))}"
              aria-label="${playable ? "Play" : "Open"} ${esc(w.title)}">
        <div class="w__ph">
          ${w.poster ? "" : `<span class="w__gen"><span>${esc(monogram(w.org))}</span></span>`}
          <span class="w__no">${esc(w.no)}</span>
          ${w.badge ? `<span class="w__badge">${esc(w.badge)}</span>` : ""}
          ${base ? `<img src="${esc(base)}" alt="Thumbnail for ${esc(w.title)}" loading="lazy" referrerpolicy="no-referrer"${up ? ` data-up="${esc(up)}"` : ""}>` : ""}
          <span class="w__play">${icon}</span>
        </div>
        <div class="w__body">
          <h4>${esc(w.title)}</h4>
          <p>${esc(strip(w.desc))}</p>
          <div class="w__foot">
            <span class="tagx">${esc(w.cat[0])}</span>
            <span>${esc(w.org)}</span>
            <span class="src">${esc(srcLabel(w))}</span>
          </div>
        </div>
      </button>`;
  }

  function renderWorks() {
    const counts = { all: WORKS.length };
    WORKS.forEach((w) => w.cat.forEach((c) => (counts[c] = (counts[c] || 0) + 1)));

    $("#filters").innerHTML = FILTERS
      .filter((f) => f.key === "all" || counts[f.key])
      .map((f, i) => `<button class="f${i === 0 ? " on" : ""}" data-f="${f.key}" role="tab"
              aria-selected="${i === 0}">${esc(f.label)}<i>${counts[f.key] || 0}</i></button>`)
      .join("");

    $("#cols").innerHTML = COLLECTIONS.map((c) => {
      const items = WORKS.map((w, i) => ({ w, i })).filter((o) => o.w.collection === c.key);
      if (!items.length) return "";
      return `
        <section class="col" data-col="${c.key}">
          <div class="col__head rv">
            <h3>${raw(c.name)}</h3>
            <span class="cnt">${items.length}</span>
            <span class="sub">${raw(c.sub)}</span>
          </div>
          <div class="grid">${items.map((o) => cardHTML(o.w, o.i)).join("")}</div>
        </section>`;
    }).join("");
  }

  function initFilters() {
    $("#filters").addEventListener("click", (e) => {
      const b = e.target.closest(".f");
      if (!b) return;
      const key = b.dataset.f;
      $$("#filters .f").forEach((x) => {
        const on = x === b;
        x.classList.toggle("on", on);
        x.setAttribute("aria-selected", on);
      });
      $$(".w").forEach((c) =>
        c.classList.toggle("gone", !(key === "all" || c.dataset.cat.split(" ").includes(key))));
      let vis = 0;
      $$(".col").forEach((s) => {
        const n = $$(".w:not(.gone)", s).length;
        s.style.display = n ? "" : "none";
        vis += n;
      });
      $("#empty").style.display = vis ? "none" : "block";
    });
  }

  /* ---------------------------------------------------------
     6. LIGHTBOX
     --------------------------------------------------------- */
  const LB = { cur: -1, last: null };
  const stage = (html) => ($("#lbStage").innerHTML = html);
  const loading = `<div class="ld"><span class="spinner"></span>Loading</div>`;

  /* Panel studi kasus — untuk karya yang punya poin gaya CV dan angka hasil.
     Angka interaksi ditampilkan sebagai IKON + jumlah, tanpa kata "Likes"
     dan seterusnya; namanya tetap ada di title/aria demi pembaca layar. */
  function caseHTML(w) {
    /* Dua panel bertumpuk vertikal dengan scroll-snap:
       panel 1 = gambar thumbnail utuh, panel 2 = angka & poin.
       Rel di kanan memberi tahu pengguna bahwa masih ada isi di bawah. */
    return `
      <div class="csw" id="csw">
        <section class="csp csp--shot" data-pane="0">
          ${w.cover || w.poster ? `<img src="${esc(w.cover || w.poster)}" alt="${esc(w.title)} — overview">` : ""}
          <button class="csp__down" id="cswDown" aria-label="Scroll down to the numbers">
            <span>Scroll for the numbers</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>
          </button>
        </section>
        <section class="csp csp--data" data-pane="1">${caseBodyHTML(w)}</section>
      </div>
      <div class="csr" id="cswRail" role="tablist" aria-label="Panels">
        <button data-p="0" class="on" role="tab" aria-label="Overview image" aria-selected="true"></button>
        <button data-p="1" role="tab" aria-label="Results and numbers" aria-selected="false"></button>
      </div>`;
  }

  function caseBodyHTML(w) {
    return `
      <div class="cs">
        <div class="cs__top">
          <div>
            ${w.role ? `<span class="cs__role">${esc(w.role)}</span>` : ""}
            ${w.period ? `<span class="cs__per">${esc(w.period)}</span>` : ""}
          </div>
          ${w.headline ? `<div class="cs__big"><b>${esc(w.headline.v)}</b><span>${esc(w.headline.label)}</span></div>` : ""}
        </div>
        <ul class="cs__pts">${w.points.map((p) => `<li>${raw(p)}</li>`).join("")}</ul>
        ${w.metrics ? `<div class="cs__ms">${w.metrics.map((m) => `
          <div class="cs__m" title="${esc(m.label)}">
            <span class="cs__mi" aria-hidden="true">${ICON_METRIC[m.icon] || ""}</span>
            <b>${esc(m.v)}</b>
            <span class="sr">${esc(m.label)}</span>
          </div>`).join("")}</div>` : ""}
      </div>`;
  }

  function openWork(i) {
    const w = WORKS[i];
    if (!w) return;
    /* karya external tanpa studi kasus langsung dibuka di tab baru */
    if (w.type === "external" && !w.points) { window.open(w.url, "_blank", "noopener"); return; }

    LB.cur = i;
    LB.last = document.activeElement;
    $("#lbN").textContent = w.no;
    $("#lbT").textContent = w.title;
    $("#lbD").textContent = strip(w.desc);
    $("#lbOpen").onclick = () => window.open(openUrl(w), "_blank", "noopener");
    $("#lbCopy").style.display = "";
    $("#lbNextBtn").style.display = "";

    const doc = w.type === "drive" && isDoc(w);   /* slides are 16:9, documents are taller */
    $("#lbBox").classList.toggle("doc", doc);
    $("#lbStage").classList.toggle("doc", doc);
    $("#lbBox").classList.toggle("case", !!w.points);
    $("#lbStage").classList.toggle("case", !!w.points);

    if (w.points) {
      $("#lbOpen").onclick = () => window.open(w.url || openUrl(w), "_blank", "noopener");
      stage(caseHTML(w));
      initCaseScroll();
    } else if (w.type === "gallery") {
      stage(`<img src="${esc(w.poster)}" alt="${esc(w.title)}">`);
    } else {
      stage(loading);
      const f = document.createElement("iframe");
      f.src = playUrl(w);
      f.title = w.title;
      f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      f.allowFullscreen = true;
      f.referrerPolicy = "no-referrer";
      $("#lbStage").appendChild(f);
    }
    show();
  }

  /* Rel titik di kanan + tombol panah bawah menyinkron dengan posisi scroll. */
  function initCaseScroll() {
    const wrap = $("#csw"), rail = $("#cswRail"), down = $("#cswDown");
    if (!wrap || !rail) return;

    const panes = $$(".csp", wrap);
    const go = (i) => panes[i] && panes[i].scrollIntoView({ behavior: "smooth", block: "start" });

    rail.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-p]");
      if (btn) go(+btn.dataset.p);
    });
    if (down) down.addEventListener("click", () => go(1));

    const sync = () => {
      const i = Math.round(wrap.scrollTop / wrap.clientHeight);
      $$("button", rail).forEach((b, k) => {
        b.classList.toggle("on", k === i);
        b.setAttribute("aria-selected", k === i);
      });
      /* petunjuk scroll disembunyikan begitu pengguna sudah turun */
      wrap.classList.toggle("scrolled", i > 0);
    };
    wrap.addEventListener("scroll", sync, { passive: true });
    sync();
  }

  function openImage(src, title) {
    LB.cur = -1;
    LB.last = document.activeElement;
    $("#lbN").textContent = "◆";
    $("#lbT").textContent = title;
    $("#lbD").textContent = "Original slide from the portfolio document.";
    $("#lbOpen").onclick = () => window.open(src, "_blank", "noopener");
    $("#lbCopy").style.display = "none";
    $("#lbNextBtn").style.display = "none";
    $("#lbBox").classList.remove("doc", "case");
    $("#lbStage").classList.remove("doc", "case");
    stage(`<img src="${esc(src)}" alt="${esc(title)}">`);
    show();
  }

  function show() {
    $("#lb").classList.add("open");
    document.body.classList.add("lock");
    $("#lbX").focus();
  }
  function close() {
    $("#lb").classList.remove("open");
    document.body.classList.remove("lock");
    setTimeout(() => stage(loading), 340);
    if (LB.last) LB.last.focus();
    LB.cur = -1;
  }
  function step(d) {
    if (LB.cur < 0) return;
    const list = $$(".w:not(.gone)").map((c) => +c.dataset.i);
    if (!list.length) return;
    let p = list.indexOf(LB.cur);
    for (let k = 0; k < list.length; k++) {
      p = (p + d + list.length) % list.length;
      if (WORKS[list[p]].type !== "external") { openWork(list[p]); return; }
    }
  }

  function initLB() {
    document.addEventListener("click", (e) => {
      const card = e.target.closest(".w");
      if (card) {
        /* "Tuing" dulu, pemutarnya menyusul. Kartunya memantul mengecil lalu
           melenting balik; lightbox baru dibuka di puncak lentingan, jadi
           terasa kartu itu yang membuka dirinya, bukan panel yang tiba-tiba
           nongol. Memakai properti `scale` — sama seperti bounce klik lain,
           supaya tidak menimpa transform hover. */
        const i = +card.dataset.i;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { openWork(i); return; }
        card.classList.remove("w--pop");
        void card.offsetWidth;
        card.classList.add("w--pop");
        setTimeout(() => card.classList.remove("w--pop"), 460);
        setTimeout(() => openWork(i), 250);
        return;
      }
      const shot = e.target.closest("[data-poster]");
      if (shot) openImage(shot.dataset.poster, shot.dataset.title || "Portfolio slide");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const t = e.target.closest && e.target.closest(".xp__thumb");
      if (t) { e.preventDefault(); openImage(t.dataset.poster, t.dataset.title); }
    });

    $("#lbX").addEventListener("click", close);
    $("#lb").addEventListener("click", (e) => { if (e.target === $("#lb")) close(); });
    $("#lbP").addEventListener("click", () => step(-1));
    $("#lbN2").addEventListener("click", () => step(1));
    $("#lbNextBtn").addEventListener("click", () => step(1));
    $("#lbCopy").addEventListener("click", () => {
      const w = WORKS[LB.cur];
      if (w) copy(openUrl(w), "Work link copied");
    });
    document.addEventListener("keydown", (e) => {
      if (!$("#lb").classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
  }

  /* ---------------------------------------------------------
     7. NAV · ACTIVE PILL · ARRIVAL
     --------------------------------------------------------- */
  const IDS = SECTION_META.map((s) => s.id);
  let announced = null, annT;

  /* Tempel "biome" tiap bab: emoji besar di sisi halaman + label kecil.
     Disuntik lewat JS supaya isinya tetap tinggal di data.js saja. */
  function mountBiomes() {
    SECTION_META.forEach((m) => {
      const sec = document.getElementById(m.id);
      if (!sec || !m.emoji) return;
      const el = document.createElement("div");
      el.className = `biome__mark ${m.side === "left" ? "l" : "r"} ${m.hue === "yellow" ? "y" : "b"}`;
      el.id = "bm-" + m.id;
      el.setAttribute("aria-hidden", "true");
      /* tanpa label — emoji besar saja, menyembul dari tepi layar */
      el.innerHTML = `<span class="biome__emo">${m.emoji}</span>`;
      sec.appendChild(el);
    });

    /* Emoji tambahan di dalam Press Play — menempel pada koleksinya sendiri,
       jadi posisinya ikut turun bersama daftar karya. Dinyalakan lewat
       IntersectionObserver, bukan lewat announce(), karena pemicunya adalah
       koleksi yang masuk layar, bukan babnya. */
    if (typeof WORK_EMOJI === "undefined") return;
    const io = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("go");
        io.unobserve(en.target);
      });
      /* threshold 0, bukan 0.35: emoji sisi kanan sengaja melewati tepi layar,
         jadi bagian yang terlihat tidak akan pernah mencapai 35% dan
         pemicunya tidak akan pernah menyala. rootMargin negatif dipakai
         supaya tetap menunggu emojinya benar-benar masuk, bukan menyerempet. */
    }, { threshold: 0, rootMargin: "-5% 0px -5% 0px" });

    WORK_EMOJI.forEach((m, i) => {
      const col = $(`.col[data-col="${m.col}"]`);
      if (!col) return;
      /* tidak ada class pita lagi — emojinya berdiri di talang, bukan di
         ruang kosong yang ditambahkan di atas koleksi */
      const el = document.createElement("div");
      el.className = `biome__mark ${m.side === "left" ? "l" : "r"} bm--work`;
      el.id = "bmw-" + m.col;
      el.setAttribute("aria-hidden", "true");
      el.innerHTML = `<span class="biome__emo">${m.emoji}</span>`;
      col.appendChild(el);
      io.observe(el);
    });
  }

  function announce(id) {
    const meta = SECTION_META.find((s) => s.id === id);
    if (!meta) return;
    $("#annNo").textContent = meta.no;
    $("#annName").textContent = meta.name;
    const a = $("#ann");
    a.classList.remove("show");
    void a.offsetWidth;                     /* restart the animation */
    a.classList.add("show");
    clearTimeout(annT);
    annT = setTimeout(() => a.classList.remove("show"), 1900);

    const sw = $(".sweep", document.getElementById(id));
    if (sw) { sw.classList.remove("go"); void sw.offsetWidth; sw.classList.add("go"); }

    /* kilatan ganti biome — satu sapuan warna bab yang muncul lalu hilang */
    const bio = $("#biome");
    if (bio && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bio.dataset.hue = meta.hue || "blue";
      bio.classList.remove("go");
      void bio.offsetWidth;                 /* tanpa reflow, transisinya dilewati */
      bio.classList.add("go");
    }

    /* emoji biome-nya ikut memantul masuk */
    const mark = document.getElementById("bm-" + id);
    if (mark) { mark.classList.remove("go"); void mark.offsetWidth; mark.classList.add("go"); }

    /* Isi babnya ikut naik masuk berurutan — jadi menggulir masuk ke bab baru
       terasa seperti berpindah biome, bukan sekadar teks yang lewat.
       Hanya dijalankan sekali per bab supaya tidak berkedip saat menggulir
       bolak-balik di perbatasan. */
    /* Tetap dijalankan walau prefers-reduced-motion aktif — CSS-nya yang
       menurunkannya jadi pemudaran tanpa gerak, bukan dimatikan total. */
    const sec = document.getElementById(id);
    /* Diputar SETIAP KALI bab dimasuki, bukan hanya saat pertama mendarat.
       Penjaga sekali-jalan yang lama dibuang, diganti jeda 1,2 detik: cukup
       untuk mencegah kedipan saat menggulir bolak-balik tepat di perbatasan
       bab, tapi tetap memutar ulang setiap kali benar-benar berpindah. */
    if (sec) {
      const now = performance.now();
      if (now - (+sec.dataset.enteredAt || 0) > 1200) {
        sec.dataset.enteredAt = String(now);
        sec.dataset.entered = "1";
        sec.classList.remove("enter");
        void sec.offsetWidth;
        sec.classList.add("enter");
        clearTimeout(sec._enterT);
        sec._enterT = setTimeout(() => sec.classList.remove("enter"), 1600);
      }
    }
  }

  function movePill(link) {
    const pill = $("#navpill");
    if (!link) { pill.classList.remove("show"); return; }
    pill.style.width = link.offsetWidth + "px";
    pill.style.transform = `translateX(${link.offsetLeft}px)`;
    pill.classList.add("show");
  }

  /* Pulsa teleportasi: menekan tautan navigasi tidak lagi langsung melompat.
     Dua cincin melebar dari tengah layar sambil nama babnya berkedip, baru
     halaman berpindah. Yang beranimasi hanya cincin overlay dengan
     pointer-events: none — halaman di belakangnya tidak tersentuh. */
  let teleporting = false;
  function teleportTo(id) {
    const target = document.getElementById(id);
    if (!target) return;
    const meta = SECTION_META.find((s) => s.id === id);
    const tp = $("#tp");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!tp || reduce) { target.scrollIntoView({ behavior: "smooth" }); return; }
    if (teleporting) return;
    teleporting = true;

    $("#tpLabel").textContent = meta ? meta.name : "";
    tp.classList.remove("go");
    void tp.offsetWidth;                    /* tanpa reflow animasinya dilewati */
    tp.classList.add("go");

    /* pindah di puncak pulsa, jadi lompatannya tersembunyi di balik cincin */
    setTimeout(() => {
      target.scrollIntoView({ behavior: "auto", block: "start" });
      announce(id);
    }, 330);
    /* Koreksi kedua saat pulsa masih menutupi layar. Di mobile, menu yang
       sedang menutup dan body.lock yang baru dilepas menggeser tata letak
       tepat setelah lompatan pertama — tanpa ini pendaratannya meleset
       beberapa ratus piksel. */
    setTimeout(() => target.scrollIntoView({ behavior: "auto", block: "start" }), 560);
    setTimeout(() => { tp.classList.remove("go"); teleporting = false; }, 900);
  }

  function initNav() {
    const nav = $("#nav"), burger = $("#burger"), mm = $("#mm");
    const links = $$("#navlinks a");
    let last = 0;

    /* semua tautan dalam-halaman lewat pulsa teleportasi */
    $$('a[href^="#"]').forEach((a) => {
      const id = a.getAttribute("href").slice(1);
      if (!id || !document.getElementById(id)) return;
      a.addEventListener("click", (e) => { e.preventDefault(); teleportTo(id); });
    });

    burger.addEventListener("click", () => {
      const on = mm.classList.toggle("open");
      burger.setAttribute("aria-expanded", on);
      document.body.classList.toggle("lock", on);
    });
    $$("#mm a").forEach((a) => a.addEventListener("click", () => {
      mm.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("lock");
    }));

    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      $("#progress").style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      nav.classList.toggle("hide", y > last && y > 500 && !mm.classList.contains("open"));
      last = y;
      $("#toTop").classList.toggle("show", y > 800);

      let active = "";
      IDS.forEach((id) => {
        const s = document.getElementById(id);
        if (s && s.getBoundingClientRect().top <= window.innerHeight * 0.38) active = id;
      });
      links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + active));
      movePill(links.find((a) => a.classList.contains("on")));

      if (active && active !== announced) { announced = active; announce(active); }
      if (!active) announced = null;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => movePill(links.find((a) => a.classList.contains("on"))));
    onScroll();
    $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function initTheme() {
    const html = document.documentElement;
    const saved = localStorage.getItem("apd26-theme");
    if (saved) html.dataset.theme = saved;
    paint();
    /* Pergantian tema tidak lagi mengedip seketika.
       Urutannya: tirai gelap muncul → tema ditukar di balik tirai →
       tirai memudar. Warna latar, teks, dan bingkai punya transisinya
       sendiri, jadi keduanya bergerak bersamaan, bukan patah. */
    let swapping = false;
    $("#themeBtn").addEventListener("click", () => {
      if (swapping) return;
      const veil = $("#fade");
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const swap = () => {
        html.dataset.theme = html.dataset.theme === "ink" ? "light" : "ink";
        localStorage.setItem("apd26-theme", html.dataset.theme);
        paint();
      };
      if (!veil) { swap(); return; }

      swapping = true;
      html.classList.add("theming");         /* memperhalus transisi warna */
      veil.classList.add("on");
      /* Tirai menutup → tema ditukar → tirai membuka.
         Pada prefers-reduced-motion durasinya dipendekkan, TIDAK dimatikan:
         ini pemudaran opacity murni, tidak ada yang bergerak, jadi tetap
         nyaman — dan jauh lebih baik daripada berkedip mendadak. */
      const inMs  = reduce ? 200 : 480;
      const outMs = reduce ? 260 : 900;
      setTimeout(() => {
        swap();
        veil.classList.remove("on");
        setTimeout(() => { html.classList.remove("theming"); swapping = false; }, outMs);
      }, inMs);
    });
    function paint() {
      const ink = html.dataset.theme === "ink";
      $("#themeIcon").innerHTML = ink
        ? `<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>`
        : `<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" stroke-linejoin="round"/>`;
    }
  }

  /* ---------------------------------------------------------
     8. REVEAL · COUNTERS · SKILL BARS
     --------------------------------------------------------- */
  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const to = parseFloat(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || "";
    const dec = to % 1 !== 0 ? (String(to).split(".")[1] || "").length : 0;
    const dur = 1000, t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const v = to * (1 - Math.pow(1 - p, 3));
      el.textContent = (dec ? v.toFixed(dec) : Math.round(v)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function fireBars(root) {
    $$("[data-count]", root).forEach(countUp);
    $$(".tool__fill", root).forEach((b, i) => setTimeout(() => {
      b.style.width = b.dataset.w + "%";
      b.classList.add("lit");
    }, 120 + i * 110));
  }

  function initReveal() {
    const io = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        io.unobserve(en.target);
        fireBars(en.target);
      });
    }, { threshold: .1, rootMargin: "0px 0px -60px 0px" });
    $$(".rv").forEach((el) => io.observe(el));

    const box = $("#toolBox");
    if (box) {
      const io2 = new IntersectionObserver((es) => {
        es.forEach((en) => { if (en.isIntersecting) { io2.unobserve(en.target); fireBars(en.target); } });
      }, { threshold: .25 });
      io2.observe(box);
    }
  }

  /* Thumbnail asli dari Google Drive / YouTube dimuat di latar belakang dan
     baru menggantikan poster lokal kalau benar-benar berhasil.

     data-up berisi beberapa kandidat URL dipisah "|" — dicoba satu per satu
     (CDN googleusercontent dulu, lalu endpoint /thumbnail Drive). Kalau semua
     gagal, poster lokal tetap tampil, jadi kartu tidak pernah kosong. */
  function upgradeThumbs() {
    const tryChain = (img, list) => {
      const url = list.shift();
      if (!url) return;
      const probe = new Image();
      probe.referrerPolicy = "no-referrer";
      probe.onload = () => {
        /* Drive mengembalikan gambar "no preview" mungil ketika file tidak
           publik — ukuran kecil dianggap gagal, lanjut ke kandidat berikutnya. */
        if (probe.naturalWidth > 80) {
          img.style.transition = "opacity .35s";
          img.style.opacity = ".4";
          img.src = url;
          img.onload = () => (img.style.opacity = "1");
        } else tryChain(img, list);
      };
      probe.onerror = () => tryChain(img, list);
      probe.src = url;
    };

    const io = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        const img = en.target;
        io.unobserve(img);
        const raw = img.dataset.up;
        if (!raw) return;
        delete img.dataset.up;
        tryChain(img, raw.split("|").filter(Boolean));
      });
    }, { rootMargin: "300px" });
    /* kartu Works DAN kartu carousel Track Record sama-sama diupgrade */
    $$("img[data-up]").forEach((t) => io.observe(t));
  }

  /* ---------------------------------------------------------
     9. UTIL
     --------------------------------------------------------- */
  let tT;
  function toast(m) {
    const t = $("#toast");
    t.textContent = m; t.classList.add("show");
    clearTimeout(tT); tT = setTimeout(() => t.classList.remove("show"), 2300);
  }
  function copy(text, msg) {
    const ok = () => toast(msg || "Copied");
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok).catch(fb);
    else fb();
    function fb() {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); ok(); } catch (_) { toast("Copy failed"); }
      document.body.removeChild(ta);
    }
  }
  /* jejak bulat-bulat mengikuti kursor — hanya untuk mouse, tidak menghalangi klik */
  /* Rantai bulatan yang MENGIKUTI kursor.

     Versi sebelumnya menjatuhkan titik yang langsung memudar — hanya terlihat
     saat mouse digerakkan cepat, dan mudah terlewat. Versi ini memakai satu
     loop requestAnimationFrame: bulatan pertama mengejar kursor, bulatan
     berikutnya mengejar bulatan di depannya. Hasilnya ekor yang selalu ada,
     ikut ke mana pun kursor pergi, dan menyusul dengan lembut saat berhenti. */
  function initTrail() {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const COLORS = ["#5872E4", "#E4CA58", "#FFFFFF"];
    const N = 14;
    const nodes = [];

    for (let i = 0; i < N; i++) {
      const el = document.createElement("span");
      el.className = "trail";
      /* makin ke belakang makin kecil → bentuk ekor yang mengerucut */
      const size = Math.round(17 - i * 0.85);
      el.style.width = el.style.height = size + "px";
      el.style.background = COLORS[i % COLORS.length];
      el.style.border = "1.5px solid #16181F";
      el.style.opacity = "0";
      document.body.appendChild(el);
      nodes.push({ el, size, x: -100, y: -100 });
    }

    /* Lingkaran biru besar yang mengikuti kursor ke segala arah. Berjalan di
       loop yang sama dengan ekor titik, jadi tidak ada rAF kedua. */
    const ring = document.createElement("span");
    ring.className = "cring";
    document.body.appendChild(ring);
    let rx = -100, ry = -100;

    let mx = -100, my = -100, active = false, raf = 0;
    let px = -100, py = -100, speed = 0;

    const loop = () => {
      /* kecepatan kursor dipakai untuk sedikit memipihkan bulatan saat ngebut */
      const dx = mx - px, dy = my - py;
      speed += (Math.min(Math.hypot(dx, dy), 44) - speed) * 0.2;
      px = mx; py = my;

      /* cincin biru: mengejar lebih santai daripada kepala ekor, jadi terasa
         mengikuti kursor, bukan menempel di atasnya */
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${(rx - 21).toFixed(2)}px, ${(ry - 21).toFixed(2)}px, 0)`;

      let tx = mx, ty = my;
      for (let i = 0; i < N; i++) {
        const nd = nodes[i];
        /* bulatan depan mengejar lebih cepat, yang belakang tertinggal manja */
        const ease = 0.34 - i * 0.012;
        nd.x += (tx - nd.x) * ease;
        nd.y += (ty - nd.y) * ease;

        /* Goyangan kecil dengan fase berbeda tiap bulatan. Fungsinya bukan
           sekadar hiasan: saat kursor berhenti semua bulatan berkumpul di satu
           titik, dan tanpa ini mereka menumpuk jadi gumpalan gelap. Dengan
           goyangan ini mereka menyebar jadi kerumunan kecil yang bergerak. */
        const t = performance.now() / 320;
        const amp = 2 + i * 0.45;
        const bobY = Math.sin(t + i * 0.9) * amp;
        const bobX = Math.cos(t * 0.8 + i * 1.3) * amp * 0.8;
        const squash = 1 + Math.min(speed / 60, 0.3) * (1 - i / N);
        const half = nd.size / 2;

        nd.el.style.transform =
          `translate3d(${nd.x - half + bobX}px, ${nd.y - half + bobY}px, 0) scale(${squash.toFixed(3)})`;

        tx = nd.x; ty = nd.y;
      }
      raf = requestAnimationFrame(loop);
    };

    const show = () => {
      if (active) return;
      active = true;
      nodes.forEach((nd, i) => {
        /* muncul berurutan dari kepala ke ekor, dengan pantulan kecil */
        nd.el.style.transition = `opacity .3s ease ${i * 22}ms`;
        nd.el.style.opacity = String(1 - i / (N * 1.5));
      });
      ring.classList.add("on");
      raf = requestAnimationFrame(loop);
    };

    const hide = () => {
      if (!active) return;
      active = false;
      cancelAnimationFrame(raf);
      nodes.forEach((nd) => (nd.el.style.opacity = "0"));
      ring.classList.remove("on");
    };

    window.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX; my = e.clientY;
      if (!active) {
        /* tempatkan seluruh rantai di posisi kursor supaya tidak melesat
           dari pojok kiri atas saat pertama kali muncul */
        px = mx; py = my; rx = mx; ry = my;
        nodes.forEach((nd) => { nd.x = mx; nd.y = my; });
        show();
      }
    }, { passive: true });

    document.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
  }

  /* Bounce di SETIAP elemen yang bisa diklik.

     Dipasang sekali sebagai delegated listener di document, jadi otomatis ikut
     berlaku untuk kartu, tombol filter, dan panah yang dirender belakangan —
     tidak perlu didaftarkan ulang setiap kali innerHTML diganti. */
  const TAPPABLE = [
    "button", "a[href]", "[role='tab']", ".w", ".xpcard", ".f",
    ".citem", ".ico", ".btn", ".tool", ".metric", ".spot__media img",
  ].join(",");

  /* elemen berukuran besar memakai pantulan yang lebih halus */
  const SOFT = [".w", ".xpcard", ".citem", ".tool", ".spot__media img", ".lb__box"];

  function initTapBounce() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      const el = e.target.closest(TAPPABLE);
      if (!el || el.disabled) return;
      /* Kartu karya punya pantulan "tuing" sendiri saat diklik — kalau
         bounce umum ini ikut jalan, keduanya berebut properti `scale` dan
         yang menang justru versi halusnya. */
      if (el.classList.contains("w")) return;

      /* jangan memantul saat carousel sedang ditarik — itu gerakan seret,
         bukan klik, dan pantulannya akan terasa seperti gangguan. */
      const rail = $("#xpcRail");
      if (rail && rail.classList.contains("dragging")) return;

      el.classList.remove("tap-bounce", "tap-soft");
      void el.offsetWidth;                       /* mulai ulang animasi dari awal */
      el.classList.add("tap-bounce");
      if (SOFT.some((s) => el.matches(s))) el.classList.add("tap-soft");
    }, { passive: true, capture: true });

    document.addEventListener("animationend", (e) => {
      if (e.animationName === "tapBounce" || e.animationName === "tapBounceSoft") {
        e.target.classList.remove("tap-bounce", "tap-soft");
      }
    }, true);
  }

  /* Parallaks foto profil.

     Tiap lapisan (lingkaran biru, cincin, segitiga, titik, foto) bergerak
     dengan kedalaman berbeda mengikuti kursor — beberapa searah, beberapa
     berlawanan, supaya terlihat terpisah. Amplitudonya sengaja kecil.

     Digerakkan oleh pointermove, BUKAN animasi berulang: begitu kursor diam
     lapisannya ikut diam. Ini penting — bug getar lama dulu justru datang
     dari animasi transform yang looping di area ini. */
  function initShotParallax() {
    const stage = $(".shot__stage");
    if (!stage) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* Hanya lingkaran biru dan fotonya. Cincin, segitiga, dan titik kuning
       sekarang punya koreografi orbit sendiri lewat CSS hover — kalau
       parallaks ikut menggerakkannya, dua gerakan itu akan saling berebut. */
    const LAYERS = [
      [".shot__circle", 5, 4],
      [".shot__img",    9, 6],
    ];
    const nodes = LAYERS
      .map(([sel, dx, dy]) => [$(sel, stage), dx, dy])
      .filter(([el]) => el);
    if (!nodes.length) return;

    nodes.forEach(([el]) => (el.style.transition = "transform .45s cubic-bezier(.22,1,.36,1)"));

    let raf = 0;
    const move = (e) => {
      const r = stage.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width  - .5;   /* -0.5 … 0.5 */
      const ny = (e.clientY - r.top)  / r.height - .5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        nodes.forEach(([el, dx, dy]) => {
          el.style.transform = `translate3d(${(nx * dx * 2).toFixed(2)}px, ${(ny * dy * 2).toFixed(2)}px, 0)`;
        });
      });
    };
    const reset = () => {
      cancelAnimationFrame(raf);
      nodes.forEach(([el]) => (el.style.transform = "translate3d(0,0,0)"));
    };

    stage.addEventListener("pointermove", move, { passive: true });
    stage.addEventListener("pointerleave", reset);
    stage.addEventListener("blur", reset, true);
  }

  function initMisc() {
    $("#copyEmail").addEventListener("click", () => copy(PROFILE.email, "Email copied"));
    $("#shareBtn").addEventListener("click", async () => {
      const d = { title: "Andhika Putradhitya — Portfolio 2023/2026",
                  text: "Content Marketing · Media Production", url: location.href };
      if (navigator.share) { try { await navigator.share(d); } catch (_) {} }
      else copy(location.href, "Link copied");
    });
  }

  /* ---------------------------------------------------------
     10. BOOT
     --------------------------------------------------------- */
  function boot() {
    renderProfile();
    renderXP();
    initCarousel();
    initXPPanel();
    renderWorks();
    initFilters();
    initLB();
    initNav();
    initTheme();
    initMisc();
    initReveal();
    upgradeThumbs();
    initTrail();
    initTapBounce();
    mountBiomes();
    initShotParallax();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
