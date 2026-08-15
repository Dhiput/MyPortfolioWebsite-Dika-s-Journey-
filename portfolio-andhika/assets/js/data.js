/* =========================================================
   ANDHIKA PUTRADHITYA — PORTFOLIO 2023–2026
   SINGLE SOURCE OF CONTENT. Edit this file only.
   Sources: Portfolio 2023–2026 (31 pages) + CV Andhika Putradhitya.
   ========================================================= */

const PROFILE = {
  first: "ANDHIKA",
  last: "PUTRADHITYA",
  nick: "DHIKA",
  role: "Content Marketing",
  span: "2023 — 2026",
  photo: "assets/img/dhika.webp",
  location: "Pancoran Mas, Depok, West Java 16433",
  email: "andhikaputradhitya@gmail.com",
  phone: "+62 811-9223-634",
  phoneRaw: "+628119223634",
  linkedin: "https://www.linkedin.com/in/dhikadtya/",
  linkedinLabel: "linkedin.com/in/dhikadtya",
  instagram: "https://www.instagram.com/dhikadtya",
  instagramLabel: "@dhikadtya",
  tiktok: "https://www.tiktok.com/@mededu.id?is_from_webapp=1&sender_device=pc",
  tiktokLabel: "@mededu.id",
  /* CV ikut dibundel di dalam situs — tidak lagi menumpang tautan Drive yang
     bisa berubah atau dicabut aksesnya. Pada build satu-file, PDF ini ditanam
     sebagai data URI dan dibuka lewat Blob (Chrome memblokir navigasi
     langsung ke data: untuk PDF). */
  cv: "assets/cv/andhika-putradhitya-cv.pdf",
  cvName: "Andhika Putradhitya — CV.pdf",

  hook: "It wasn’t a speedrun — backtracking through revisions and upgrading my gear to reach this level.",
  hookSub:
    "From the tutorial grounds of 2023 to the endgame challenges of 2026, every project was a new ability unlocked in my creative skill tree.",

  /* diselaraskan dengan CV ATS terbaru (Agustus 2026) */
  summary:
    "Media Production graduate from Universitas Indonesia with brand marketing experience at MAP Active, owning the social media workstream for Sports Station and Planet Sports Asia across Instagram and TikTok. Combines campaign execution, KOL management, and agency coordination with hands-on creative production briefs, EDM design, and motion assets, bridging strategy and output without handing off between the two. Seeking a full-time brand marketing role where campaign ownership and creative execution come together.",
};

/* tiga label di sekitar foto — pengganti badge IPK / 7M views */
const DISCIPLINES = [
  { label: "Content Marketing", hue: "yellow" },
  { label: "Media Production",  hue: "blue" },
  { label: "Art Direction",     hue: "plain" },
];

const STATS = [
  /* 2023 ke 2026 = 3 tahun berjalan, bukan 4 tahun kalender */
  { icon: "years", n: 3,  suffix: "",   label: "Years of practice",   sub: "2023 — 2026" },
  { icon: "works", n: 35, suffix: "",   label: "Documented works",    sub: "Across 7 collections" },
  { icon: "teams", n: 6,  suffix: "",   label: "Teams & companies",   sub: "Campus to broadcast" },
  { icon: "gpa", n: 3.85, suffix: "", label: "GPA out of 4.00",     sub: "Universitas Indonesia" },
];

const EDUCATION = [
  {
    school: "Universitas Indonesia",
    period: "2022 — 2026",
    detail: "Media Production Major · Graduate",
    note: "Highest Grade Point Average Semester 1–3 (2022–2023) · GPA 3.85 / 4.00",
  },
];

const LANGUAGES = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Intermediate" },
];

/* level = out of 10 — drives the animated bars. icon = key in ICON_APP (main.js) */
const TOOLS = [
  { name: "Adobe Premiere Pro",  icon: "pr", level: 8 },
  { name: "Canva",               icon: "canva", level: 8 },
  { name: "Adobe Illustrator",   icon: "ai", level: 7 },
  { name: "Adobe After Effects", icon: "ae", level: 7 },
  { name: "CapCut",              icon: "capcut", level: 8 },
];

const SKILL_TECH = [
  "Production Assistant",
  "Art Directing",
  "Content Management / Strategy",
  "Video Editing",
  "Graphic Design",
  "Research Capability",
  "Content Planning",
  "Scriptwriting",
];

const SKILL_SOCIAL = [
  "Time Management",
  "Effective Communication",
  "Collaboration",
  "Critical & Creative Thinking",
  "Adaptive",
  "Detail-Oriented",
  "Team Leadership",
  "Project Management",
];

/* ---------------------------------------------------------
   EXPERIENCE — newest first
   --------------------------------------------------------- */
const EXPERIENCE = [
  {
    org: "MAP Active",
    shape: "retail",
    thumb: "1plTIyNdH4PpPlUfJ4x_js3Y7gt0yuq8L",
    role: "Brand Marketing Intern",
    period: "Mar 2026 — Present",
    tag: "Current",
    hue: "blue",
    sub: "Sports Station · Planet Sports Asia",
    poster: null,
    /* diperbarui dari CV ATS terbaru — kini menyebut kampanye dan angkanya */
    points: [
      { t: "<b>Campaign execution</b> — owned the social media workstream for <b>3 major campaigns</b>, covering content planning and asset design:",
        sub: [
          "Serbu Bulan Cuan Back to School (Sports Station)",
          "Mid-Year Sports (Planet Sports Asia), anchored around 5 sporting moments: World Cup, Wimbledon, HYROX, Pocari Sweat Run 2026, and Maybank Marathon",
          "Buy 1 Get 1 across both brands",
        ] },
      "<b>KOL management</b> — managed <b>4+ KOLs</b> end-to-end for the June regular discount campaign, covering briefing, product listing, and deliverable tracking. Mapped a tiered macro-and-micro KOL pool for the Back to School campaign.",
      "<b>Campaign strategy</b> — authored <b>10+ campaign briefs and decks</b> used as the working reference by creative and creator teams: the Buy 1 Get 1 brief deck, the UGC TikTok deck, the Salomon and ANTA creative brief, and the KOL brief for the August Sports Station monthly regular campaign.",
      "<b>Design output</b> — designed <b>20+ EDM blasts</b> across 8 promotional programmes, alongside Instagram Story banners and motion assets.",
    ],
  },
  {
    org: "OB Golf",
    shape: "golf",
    thumb: "1RUR2qX6kG-7o9pqaD5jEg6fb85EYFbn_",
    role: "Production Assistant",
    period: "Jan 2026 — Feb 2026",
    tag: "Broadcast",
    hue: "yellow",
    sub: "Indonesia Women’s Open (IWO) 2026 · presented by BTN · Damai Indah Golf–BSD",
    poster: "assets/img/p03.webp",
    points: [
      "Ensured every <b>VT</b> was meticulously checked against the rundown — zero technical glitches across a 3-day live international tournament.",
      "Coordinated <b>real-time production cues</b> for the crew to maintain a seamless broadcast flow.",
      "Synchronised technical execution between editors and <b>vMix operators</b>, streamlining the delivery of real-time graphics and highlights during the live production.",
    ],
  },
  {
    org: "Transvision",
    shape: "tv",
    thumb: "1uk5KTzzGdBHYfZ8_sTZBSAi3bpQW9CaC",
    role: "Inhouse Production Intern",
    period: "Jul 2025 — Nov 2025",
    tag: "OTT · CubMu",
    hue: "blue",
    sub: "Scriptwriter · Design &amp; Video Editor · Runner · Loader · Photographer",
    poster: "assets/img/p04.webp",
    points: [
      "Developed and drafted production scripts for <b>3+ original programs</b> on the CubMu OTT platform: <i>YOLO</i>, <i>Coolinary</i>, and <i>Seram</i>.",
      { t: "Produced high-engagement <b>promotional cinematic reels</b>, managing end-to-end production logistics and creative asset distribution for major international golf tournaments:",
        sub: [
          "Medco-Pondok Indah International Amateur Golf Championship 2024",
          "Mandiri Indonesia Open 2024",
          "BNI Indonesian Masters 2024",
        ] },
      "Coordinated with on-field production teams as runner and photographer, streamlining communication for high-profile sports events.",
    ],
  },
  {
    org: "UI Digitalk",
    shape: "mic",
    thumb: "1nIO_zkS_Q6kK5igT5pd9e9JPHtsg_0r8",
    role: "Design Lead",
    period: "Mar 2023 — Nov 2023",
    tag: "BEM UI",
    hue: "yellow",
    sub: "Finance Bureau work programme, BEM UI 2023",
    poster: "assets/img/p07.webp",
    points: [
      "Developed a <b>15+ page sponsorship proposal</b>, translating organisational work programmes into professional visual layouts to facilitate partnership and funding acquisition.",
      "Initiated a <b>recruitment booklet</b> that communicated the organisation’s vision and divisional structure for the 2023 staff selection process.",
      "Implemented cohesive Instagram branding with <b>20+ posts</b>, including informative carousels and team introduction assets.",
      "Collaborated directly with the Finance Bureau so every design deliverable communicated the organisation’s strategic goals to external stakeholders.",
    ],
  },
  {
    org: "VARCO",
    shape: "art",
    thumb: "1v0VL-_EJnE5C8JJmhDDBCgDTuXcL-sqn",
    role: "Person in Charge of Production",
    period: "Mar 2023 — Dec 2023",
    tag: "BEM Vokasi UI",
    hue: "blue",
    sub: "Vocational Art Competition · Video Production, Video Editor, Videographer, Team Leadership",
    poster: "assets/img/p05.webp",
    points: [
      "Work programme of the Arts &amp; Culture Department, UI Vocational Student Executive Board.",
      "Produced the teaser, Instagram &amp; TikTok promotional videos, the grand closing opening video, a behind-the-scenes documentary, and the aftermovie.",
      "Led the production team from pre-production through content distribution.",
    ],
  },
  {
    org: "TVUI",
    shape: "camera",
    thumb: "1uj0M825m-SgvebIUHxqaBcMTS2vD-cIV",
    role: "Camera Operator & Video Editor",
    period: "Jan 2023 — Sep 2023",
    tag: "Televisi UI",
    hue: "yellow",
    sub: "UI community television, managed by the Department of Communication Sciences, FISIP UI",
    poster: "assets/img/p06.webp",
    points: [
      "Covered <b>STANDUP: Melawan Kekerasan Seksual di Kampus</b> — a collaboration between FISIP UI and NARASI TV.",
      "Edited coverage of major UI events, from Parade UI 2022 to the student year-end concert.",
      "Edited music cover videos for the <b>Musik Kampus</b> segment.",
      "Created Instagram reels for TVUI’s 7th anniversary (horror and cheerful cuts).",
    ],
  },
];

const PERSONAL_BRAND = {
  org: "MedEdu",
  role: "Clipper — TikTok Project",
  period: "Jan 2024 — Feb 2024",
  handle: "@mededu.id",
  url: "https://www.tiktok.com/@mededu.id?is_from_webapp=1&sender_device=pc",
  /* slogan asli akun dipertahankan sebagai kutipan, terjemahannya di bawahnya */
  tagline: "Sehat itu mahal, tapi tips kesehatan itu Gratis",
  taglineEn: "Good health is expensive — health tips are free.",
  poster: "assets/img/p08.webp",
  poster2: "assets/img/p09.webp",
  /* thumbnail asli dari folder Drive (file "tirta 1" & "tirta 2") */
  thumb: "1mJLyUJ3adRdUeqAz_KbLXf3D6tqXfruJ",
  thumb2: "1WsYK53tPrsooYmj1kQ7kjs-_uTKWk0Cj",
  points: [
    "Achieved a viral reach of <b>7M+ views</b> on a single educational video by implementing data-driven hook strategies and visual storytelling.",
    "Grew the community to <b>10.3K followers</b> and <b>1.3M likes</b> in one month through consistent content pillars and audience engagement analysis.",
    "Optimised educational content delivery for short-form video platforms.",
    "Format: repost editing in a motivational-content style. Personal branding for Dr. Tirta, with a 30-video target in a single month.",
  ],
  metrics: [
    { k: "7M", v: "Plays" },
    { k: "593K", v: "Likes" },
    { k: "49K", v: "Shares" },
    { k: "51K", v: "Saves" },
    { k: "1,638", v: "Comments" },
    { k: "5.9K", v: "New followers" },
    { k: "17.66s", v: "Avg watch time" },
    { k: "18.3%", v: "Watched full" },
  ],
};

/* ---------------------------------------------------------
   WORKS
   type: "youtube" | "drive" | "external" | "gallery"
   --------------------------------------------------------- */
const COLLECTIONS = [
  { key: "varco",     name: "VARCO",              sub: "Vocational Art Competition · 2023",  hue: "blue" },
  { key: "tvui",      name: "TVUI",               sub: "Televisi Universitas Indonesia · 2023", hue: "yellow" },
  { key: "digitalk",  name: "UI Digitalk",        sub: "BEM UI Finance Bureau · 2023",       hue: "blue" },
  { key: "freelance", name: "Freelance Projects", sub: "Clients &amp; self-initiated · 2023–2026", hue: "yellow" },
  { key: "gamedev",   name: "GameDev Projects",   sub: "UI/UX design &amp; programming · 2025", hue: "blue" },
  { key: "college",   name: "College Projects",   sub: "Universitas Indonesia · 2022–2024",  hue: "yellow" },
  { key: "other",     name: "Other Projects",     sub: "Graphic design for fun · 2023–2025", hue: "blue" },
];

const WORKS = [
  /* ---------- MOST RECENT ---------- */
    
  /* ---------- VARCO ---------- */
  {
    no: "01", collection: "varco", title: "Teaser VARCO", org: "VARCO UI",
    thumb: "1AHlbe4LOV9LJfOLXr6L_VYnF3YTOfKOT",
    cat: ["video"], year: "2023", type: "drive", id: "1B6WbotO9FeNDM5ori31tU5uXjDria25_",
    poster: "assets/img/varco1.webp",
    desc: "Opening teaser for the Vocational Art Competition series.",
  },
  {
    no: "02", collection: "varco", title: "Varco Promotional Video", org: "VARCO UI",
    thumb: "1IDs8cO0iE2XrKFdGQMFpFUZsYaGvpnkp",
    cat: ["video"], year: "2023", type: "drive", id: "1cjs3xiwCib9OQJKrLgojVEoPF94bUuL0",
    poster: "assets/img/varco2.webp",
    desc: "Promotional video distributed through Instagram and TikTok.",
  },
  {
    no: "03", collection: "varco", title: "Opening Grand Closing Video", org: "VARCO UI",
    thumb: "17raGkdoXZLlkyP_MdqFATPDoSMMKEcaz",
    cat: ["video"], year: "2023", type: "drive", id: "1OIBBVnKox2e8SL9quo0jNJOc_3XQ2w7m",
    poster: "assets/img/varco3.webp",
    desc: "Opening film played on stage at the grand closing event.",
  },
  {
    no: "04", collection: "varco", title: "Grand Closing Documentary", org: "VARCO UI",
    thumb: "1vgPN7GNqB1-lStaeTg9YiXH7eweQazun",
    cat: ["video", "documentary"], year: "2023", type: "drive", id: "1Ek8iCBUjibop4KifgzDKZ_5puagFe_Zb",
    poster: "assets/img/varco4.webp",
    desc: "Behind-the-production documentary of the grand closing event.",
  },
  {
    no: "05", collection: "varco", title: "Varco Aftermovie", org: "VARCO UI",
    thumb: "1AWASnrKhnKqDi90q497Kp-nf4_QjhXyV",
    cat: ["video"], year: "2023", type: "drive", id: "1yuifbfk2rESAWBbGNtghWvyAU7EE9RQD",
    poster: "assets/img/varco5.webp",
    desc: "Closing aftermovie for the full VARCO programme.",
  },

  /* ---------- TVUI ---------- */
  {
    no: "01", collection: "tvui", title: "STANDUP: Fighting Campus Sexual Violence",
    org: "TVUI × NARASI TV", cat: ["video", "documentary"], year: "2023",
    type: "youtube", id: "GOc8-N2KTXY", poster: "assets/img/tvui1.webp",
    desc: "Coverage of a campaign against sexual violence on campus. A collaboration between FISIP UI and NARASI TV.",
  },
  {
    no: "02", collection: "tvui", title: "Macan Mascot & UI Student Year-End Concert",
    org: "TVUI", cat: ["video"], year: "2023",
    type: "youtube", id: "2qXtXqddb-4", poster: "assets/img/tvui2.webp",
    desc: "Edited coverage of Parade UI 2022 and the UI student year-end concert.",
  },
  {
    no: "03", collection: "tvui", title: "Alhafiz & Fajar — Berdamailah",
    org: "TVUI", cat: ["video"], year: "2023",
    type: "youtube", id: "bWW0as979DY", poster: "assets/img/tvui3.webp",
    desc: "Music cover video edit for the Musik Kampus segment.",
  },
  {
    no: "04", collection: "tvui", title: "TVUI 7th Anniversary Reels",
    thumb: "1yJPBpyzHYXnhnAwNfhXUbd4ohpskUTm4",
    org: "TVUI", cat: ["short-content"], year: "2023",
    type: "drive", id: "1o8KT56VnCxWkzgl79hHhSSvp0YhxnqDE", poster: "assets/img/tvui4.webp",
    desc: "Instagram reels for TVUI’s 7th anniversary — two cuts, horror and cheerful.",
  },

  /* ---------- UI DIGITALK ---------- */
  {
    no: "01", collection: "digitalk", title: "DIGITALK Sponsorship Proposal",
    org: "UI Digitalk", cat: ["design"], year: "2023",
    type: "drive", id: "123veMolpBOsmAHxNDeE43wMqxK7a-moN", poster: "assets/img/digi1.webp",
    desc: "A 15+ page sponsorship proposal built for partnership and funding acquisition.",
  },
  {
    no: "02", collection: "digitalk", title: "Booklet UI DIGITALK 2023",
    org: "UI Digitalk", cat: ["design"], year: "2023",
    type: "drive", id: "1eC67jMvn6i_kVyFp-IVe3nNEQwTht-w9", poster: "assets/img/digi2.webp",
    desc: "Open-recruitment booklet used as the 2023 staff recruitment medium.",
  },
  {
    no: "03", collection: "digitalk", title: "Instagram Posts & Carousels",
    thumb: "142OhJXo7g3mWhYA1ur4oUcfvs93VfbaK",
    org: "UI Digitalk", cat: ["design"], year: "2023",
    type: "external", url: "https://www.instagram.com/ui.digitalk", poster: "assets/img/digi3.webp",
    desc: "20+ Instagram posts: informative carousels, team introductions, and divisional assets.",
  },

  /* ---------- FREELANCE ---------- */
  {
    no: "01", collection: "freelance", title: "The Soul of Founder Podcast",
    /* SENGAJA tanpa `thumb`. Kedua gambarnya sudah ada secara lokal, dan kalau
       field ini diisi, upgradeThumbs() akan menimpa sampul lokal dengan gambar
       Drive begitu jaringan tersedia — sampulnya jadi tidak pernah terlihat. */
    org: "Samuel Djohan · Content Creator", cat: ["video", "short-content"], year: "2026",
    type: "external", url: "https://www.instagram.com/thesouloffounderpodcast",
    role: "Remote Video Editor",
    period: "Jun 2026 — Present",
    badge: "Ongoing",
    desc: "Remote Video Editor for content creator Samuel Djohan — cutting long-form podcast episodes into short-form clips for Instagram.",
    /* `poster` = wajah kartu di grid; `cover` = gambar panel pertama saat dibuka.
       Sengaja dibedakan: sampul podcast jadi muka kartu, infografis jadi isi. */
    poster: "assets/img/soul-cover.webp",
    cover: "assets/img/soul.webp",
    /* poin gaya CV — kalimat berbasis hasil, kata kerja di depan */
    points: [
      "Edited and delivered <b>150+ short-form videos</b> to date, running the full cut-down pipeline from raw long-form episodes to publish-ready vertical clips.",
      "Cut both of the account’s highest-performing shorts, each featuring <b>Herryanti Herman</b> — <b>3.7M views</b> on the top clip of all and <b>1M views</b> on the next.",
      "Grew the account from <b>8K to 12.6K followers</b> through consistent hook-first editing and a repeatable clip format.",
      "Held a delivery cadence of <b>2–3 shorts per day</b> and <b>50 per month</b> across <b>7 distinct formats</b>.",
    ],
    /* ikon saja, tanpa label teks — sesuai permintaan */
    metrics: [
      { icon: "like",    v: "37.5K", label: "Likes" },
      { icon: "comment", v: "1,046", label: "Comments" },
      { icon: "repost",  v: "943",   label: "Reposts" },
      { icon: "save",    v: "9,449", label: "Saves" },
    ],
    headline: { v: "3.7M", label: "Top short" },
  },
  {
    no: "02", collection: "freelance", title: "“New Smart City” IKN Concept",
    org: "Freelance", cat: ["video"], year: "2024",
    type: "drive", id: "1iS5UHC3IHdVkVBTVYr0A3PHwJpb8m-8D", poster: "assets/img/p10.webp",
    desc: "A place where innovation meets sustainability — a city built for the future, where the economy, social welfare, and governance stand in balance.",
  },
  {
    no: "03", collection: "freelance", title: "Himprodia UI — Association Jacket 2024",
    thumb: "1zYM7NLfR-FGATeMpZbH_q_j0RRLfhdGE",
    org: "Himprodia UI", cat: ["design"], year: "2024",
    type: "external", url: "https://drive.google.com/drive/folders/1Mb2dMl2gLa2ChQsLsvVBLtTyjAUfXT7F?usp=sharing",
    poster: "assets/img/p11.webp",
    desc: "Design assets for the Media Production student association jacket, through four revisions. Retro work-jacket styling with the department’s own character — including the colour system, typography (Blenda Script &amp; Legend M54), and patch elements.",
  },
  {
    no: "04", collection: "freelance", title: "Class of 12 Memory Video",
    org: "SMA Negeri 38", cat: ["video"], year: "2023",
    type: "drive", id: "1TfBkj0miH4X1w85YqTcE3yJCH2eLPgdI", poster: "assets/img/free3.webp",
    desc: "Graduation / year-end video for the twelfth-grade class of SMA Negeri 38.",
  },
  {
    no: "05", collection: "freelance", title: "Credential Penakita",
    thumb: "1t0FDsf6NnoN42SIUvW-mJR3GcsxteTZg",
    org: "PT Kreasi Pena Indonesia", cat: ["video", "design"], year: "2023",
    type: "drive", id: "1GtmjFZEYzA2dEJ-R1byubYgQwWoXB9U3", poster: "assets/img/free4.webp",
    desc: "Company profile for Penakita — a strategic communication partner and creative community helping businesses reach their full potential.",
  },
  
  /* ---------- GAMEDEV ---------- */
  {
    no: "01", collection: "gamedev", title: "Spellscript",
    org: "UI Design & Programmer", cat: ["ui-ux"], year: "2025",
    type: "gallery", poster: "assets/img/p13.webp", badge: "Final research project",
    desc: "A game that fuses two genres — turn-based combat and typing. Built the Main Menu, Level Selector, Main Battle (health &amp; shield bars, action selector, CONJURE transition, typing area &amp; timer, win/lose scenes), and additional UI.",
  },
  {
    no: "02", collection: "gamedev", title: "Only Fans — Visual Novel",
    org: "Gameplay Programmer", cat: ["ui-ux"], year: "2025",
    type: "gallery", poster: "assets/img/p14.webp",
    desc: "A visual novel about a streaming girl stalked by a weeaboo boy. Built the entire gameplay loop and dialogue flow.",
  },
  {
    no: "03", collection: "gamedev", title: "Reach the Peak",
    org: "UI Designer & UX Programmer", cat: ["ui-ux"], year: "2025",
    type: "gallery", poster: "assets/img/p15.webp",
    desc: "A parkour simulation with platforms above the clouds. Handled menus, HUDs, in-game displays, plus the implementation of UI, controls, and gameplay experience.",
  },
  {
    no: "04", collection: "gamedev", title: "Urang Play",
    org: "UI Designer & UX Programmer", cat: ["ui-ux"], year: "2025",
    type: "gallery", poster: "assets/img/p16.webp",
    desc: "Traditional West Javanese games — Congklak and jump rope. Fully Indonesian-language UI in a traditional wooden style.",
  },

  /* ---------- COLLEGE ---------- */
  {
    no: "01", collection: "college", title: "#CariMukaLo",
    thumb: "1n64sooVufJkSJTCRFoHPc-9OkMtwtBym",
    org: "Body Positivity & Insecurity", cat: ["video", "short-content"], year: "2024",
    type: "gallery", poster: "assets/img/p17.webp",
    desc: "A short video on body positivity and insecurity. “I’m not sure about my dull appearance, I’m insecure.” Short video · video editing · videography.",
  },
  {
    no: "02", collection: "college", title: "KANVOKPEDULI — Public Service Announcement",
    thumb: "1TLxu0MwGOZracxwXnalyPGji1dx5rL4E",
    org: "UI Vocational Canteen", cat: ["video"], year: "2023",
    type: "drive", id: "1oRb29zdvtDmnWcgPQab8jmUVEd1gIgs1", poster: "assets/img/p18.webp",
    desc: "A public service announcement: put your plate in the designated place. Video editing · videography.",
  },
  {
    no: "03", collection: "college", title: "SociaLink — Logo Concept",
    thumb: "1OkwkeCMowYNGcdzJ9S4M8C9bsVFynnjQ",
    org: "Mental Health Organization", cat: ["design"], year: "2023",
    type: "external", url: "https://drive.google.com/drive/folders/1H4ncKGrHvgX_pZVGB7n3_zRXOBbyIhlc?usp=sharing",
    poster: "assets/img/p19.webp",
    desc: "“Link People Fix Their Problem.” A full identity for a mental health organisation with the Yes You Can campaign — brochures, tote bags, tees, and anxiety-disorder content.",
  },
  {
    no: "04", collection: "college", title: "Kiddo — Graphic Standard Manual",
    thumb: "1IJw6hmYMbGnBTRQoCVtg8bVrAimWMTdR",
    org: "Babycare Company", cat: ["design"], year: "2023",
    type: "external", url: "https://drive.google.com/drive/folders/1rvCGl1U-rvYraE_sKi4CrS5LEbBRoMxt?usp=sharing",
    poster: "assets/img/p20.webp",
    desc: "A complete GSM for a babycare brand: logo, paper bags, grand-opening billboard, uniforms, and weaning-food education content.",
  },
  {
    no: "05", collection: "college", title: "Reguler Entertainment Intro",
    thumb: "12NIA2cTgtegEazeQAcDQ7rgdycCEn55g",
    org: "Reguler Disgusting FnB Game Show", cat: ["video"], year: "2023",
    type: "drive", id: "1Fr3mvhdPLobwH-MA6o3i70B_HiGt5LNV", poster: "assets/img/p21.webp",
    desc: "Intro video for an FnB game show. “The most disgusting video intro — beware of vomiting.”",
  },
  {
    no: "06", collection: "college", title: "Bundaran HI’s Serenity",
    org: "Street Photography Project", cat: ["photography"], year: "2023",
    type: "drive", id: "1WRdNyF20mJquRJuODTTwdyZyOAWV6ST9", poster: "assets/img/p22.webp",
    desc: "A street photography series capturing stillness in the middle of Bundaran HI.",
  },
  {
    no: "07", collection: "college", title: "Kadet 1947 — Film Pitch Deck Analysis",
    org: "PowerPoint Design", cat: ["design", "document"], year: "2023",
    type: "drive", id: "1Fpsz2H3sGcbk16YImfgOkSl8_ofVUEFU", poster: "assets/img/p23.webp",
    desc: "Pitch deck analysis for the film Kadet 1947 — genre, logline, target audience, synopsis, character details, and production notes.",
  },
  {
    no: "08", collection: "college", title: "Bukan Hanya Angka",
    thumb: "1I4-0odZ9F0GptsKmO2AgIwgqMF6twhlq",
    org: "Student Math Problem Documentary", cat: ["video", "documentary"], year: "2023",
    type: "external", url: "https://drive.google.com/drive/folders/15o358tZxqsTlm2inKHhf9V_clI404JYF?usp=sharing",
    poster: "assets/img/p24.webp",
    desc: "A short documentary. “Mathematics is difficult not because you are not smart, but because you’re not interested.”",
  },
  {
    no: "09", collection: "college", title: "Coffside — Ice Cream Review",
    thumb: "17qu7-df_e8HzCsXmyykS5tZwQIshH7Vn",
    org: "Reels / TikTok Short Content", cat: ["short-content"], year: "2023",
    type: "drive", id: "196tWOZ7GYmyBdhJKrB9NnCYnK3I_wFG8", poster: "assets/img/p25.webp",
    desc: "Short-form ice cream review shot in a coffee shop. Reels / TikTok format.",
  },
  {
    no: "10", collection: "college", title: "Semua Gara-Gara HP!",
    thumb: "1xOrUFQuPYqqod3wJdQTcWgFp5lSFLwW0",
    org: "Staying Up Late Is Not Good", cat: ["animation"], year: "2024",
    type: "drive", id: "1qqnJUHsszXerbogQLKyNcH40DuHgL9Yh", poster: "assets/img/p26.webp",
    desc: "An animated campaign video about the dangers of staying up late on your phone.",
  },
  {
    no: "11", collection: "college", title: "Campus Chronicles — Sense of Burnout",
    org: "Invisible Thing Photography", cat: ["photography"], year: "2024",
    type: "drive", id: "1uwo46iy93Z_yhBqRemKWm6iAaq9P8EgF", poster: "assets/img/p27.webp",
    desc: "A conceptual photography series on burnout. “In my mind it hasn’t happened yet, but it will happen if I try first.”",
  },
  {
    no: "12", collection: "college", title: "Zine — Anomalies / Eccentric Realities",
    org: "Abstract Photography Gallery", cat: ["photography", "design"], year: "2024",
    type: "drive", id: "1voZ4Pwn7AL_fu5LNyr_n5w8RHgqKn6WX", poster: "assets/img/p28.webp",
    desc: "An abstract photography zine. “Anomalies — perhaps each entity represents something useful.”",
  },

  /* ---------- OTHER ---------- */
  {
    no: "01", collection: "other", title: "Anime Poster Edits",
    org: "Graphic Design", cat: ["design"], year: "2023 — 2025",
    type: "gallery", poster: "assets/img/p29.webp",
    desc: "A set of self-edited anime posters: Attack on Titan, Black Clover, Genos, Vinland Saga, Katana Man, Senju Hashirama × Madara, Mashle, Rengoku, Itadori, Ichigo, Death Note, My Hero Academia, and Son Goku.",
  },
  {
    no: "02", collection: "other", title: "DanDaDan Pitch Deck",
    org: "Graphic Design", cat: ["design"], year: "2025",
    type: "gallery", poster: "assets/img/p30.webp",
    desc: "A pitch deck for a 12-episode Netflix series: storyline, target audience, character cards (Momo, Okarun, Seiko, Jiji &amp; Aira, Nenek Turbo), and production notes.",
  },
];

/* Emoji tambahan di dalam "Press Play", menempel pada koleksi tertentu.
   Sisinya melanjutkan selang-seling dari emoji bab 🤩 yang ada di kanan:
   berikutnya kiri, lalu kanan, lalu kiri. */
const WORK_EMOJI = [
  { col: "tvui",    emoji: "🥳", side: "left"  },   /* konser, parade, acara kampus */
  { col: "gamedev", emoji: "😜", side: "right" },   /* proyek game, paling main-main */
  { col: "college", emoji: "🧐", side: "left"  },   /* tugas kuliah, PSA, analisis */
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "video", label: "Video" },
  { key: "short-content", label: "Short Content" },
  { key: "documentary", label: "Documentary" },
  { key: "design", label: "Design" },
  { key: "ui-ux", label: "Game UI / UX" },
  { key: "photography", label: "Photography" },
  { key: "animation", label: "Animation" },
  { key: "broadcast", label: "Broadcast" },
  { key: "document", label: "Document" },
];

/* label section untuk animasi "arrival" */
/* Tiap bab punya "biome"-nya sendiri: emoji besar di sisi halaman, label
   biome kecil, dan warna kilatan saat pertama kali memasuki bab tersebut.
   Nada RPG-nya sengaja disambungkan dengan hook di hero (speedrun, skill tree). */
const SECTION_META = [
  /* wajah, bukan benda — tiap bab dapat ekspresi yang mewakili nadanya */
  { id: "about",      no: "01", name: "About",      emoji: "🤓", biome: "Tutorial grounds", side: "right", hue: "blue"   },
  { id: "experience", no: "02", name: "Experience", emoji: "😎", biome: "Quest log",        side: "left",  hue: "blue"   },
  { id: "works",      no: "03", name: "Works",      emoji: "🤩", biome: "Highlight reel",   side: "right", hue: "yellow" },
  { id: "contact",    no: "04", name: "Contact",    emoji: "😉", biome: "Open door",        side: "left",  hue: "yellow" },
];
