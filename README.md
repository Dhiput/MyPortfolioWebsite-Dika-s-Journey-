# Website Portfolio Andhika Putradhitya — v13

## Isi paket

```
index.html                          — seluruh situs (CSS, JS, gambar ter-embed)
assets/video/showcase.mp4           — showreel, 5,0 MB, 720×854, 48 detik
assets/img/showcase-poster.jpg      — frame poster (juga sudah ter-embed di HTML)
```

**Ketiganya harus tetap satu folder.** `index.html` memanggil videonya lewat path
relatif `assets/video/showcase.mp4`.

## Cara publikasi

Seret **seluruh folder** ini ke [app.netlify.com/drop](https://app.netlify.com/drop).
Jangan seret `index.html` saja — videonya tidak akan ikut dan showreel-nya kosong
(poster-nya tetap tampil, tapi tidak akan pernah berjalan).



## Perubahan v13

1. **Segitiga berpusat tepat di mata kiri.** Titik matanya diukur langsung dari
   foto (57,8% x / 34,0% y dari lingkaran biru) dengan cara memasang grid di
   atas crop wajah, bukan dikira-kira. Nilai `translate` lalu dicari numerik
   lewat sapuan di browser: `-132% 170%`, meleset **1,4 px**.
2. **Baris peran hero** dipangkas jadi "Campaign execution, KOL management &
   creative production" — bagian "— open to full-time roles" dihapus.
3. **Showreel jadi section penuh berlatar biru** dengan lima bentuk yang
   bergerak terus-menerus (bukan hanya saat hover). Ritmenya sengaja tidak sama
   — 13s / 17s / 23s / 29s / 31s — supaya polanya tidak pernah berulang serempak
   dan tidak terbaca sebagai loop. Dimatikan otomatis pada
   `prefers-reduced-motion`.
4. **Video: rantai sumber + retry.**

### Kenapa videonya tadi tidak mau jalan

Hampir pasti karena file MP4-nya tidak berada di tempat yang dicari HTML.
Gejalanya cocok persis: tombol suara tetap berganti-ganti (itu murni CSS),
tapi tidak ada gambar bergerak dan tidak ada suara — karena video-nya memang
tidak pernah termuat.

Sekarang HTML mencoba empat lokasi berurutan:

```
assets/video/showcase.mp4   →   showcase.mp4
    →   assets/showcase.mp4   →   Portfolio_Reborn_-_Trimmed.mp4
```

Jadi menaruh MP4 bersebelahan dengan `index.html` pun tetap jalan. Kalau
keempatnya tidak ketemu, kartunya menampilkan keterangan yang menyebut file
mana yang dicari — bukan diam seperti kartu rusak.

Ditambah: `play()` dicoba ulang pada interaksi pertama pengguna
(`pointerdown` / `keydown` / `touchstart` / `scroll`) dan saat tab kembali
aktif, karena sebagian browser menahan autoplay meski video-nya bisu.

Diuji di tiga skenario penempatan file — semuanya berperilaku benar.

## Perubahan v12

1. **Titik kuning polos** — pip gelap di dalamnya dihapus.
2. **Cincin menggelinding, bukan teleport** — kotak orbitnya kini berputar
   180deg (1,5 detik), jadi cincinnya menempuh busur dari kiri bawah ke kanan
   atas. Sengaja lebih lambat dari titik kuning (1,05 detik) supaya keduanya
   tidak terbaca sebagai satu benda yang sama.
3. **Segitiga dikalibrasi ulang** ke mata kiri sesuai sketsa:
   `translate: -164% 222%`. Titik sasaran diturunkan dari sketsa sebagai
   fraksi lingkaran biru (55,2% x / 45,5% y), lalu dicari numerik lewat sapuan
   di browser. Hasil akhir meleset **2,2 px**.
4. **Panggung video diperbesar** dari 300px jadi **400px** (400×474 desktop,
   320×379 mobile).

### Catatan penting soal "menggelinding"

Lingkaran sempurna punya simetri putar — **putarannya sendiri secara harfiah
tidak terlihat** tanpa penanda di dalamnya. Itulah fungsi pip yang sekarang
dihapus. Setelah pip hilang, kesan menggelinding hanya bisa datang dari
**lintasan melengkungnya**, bukan dari putaran benda itu sendiri. Karena itu
cincin diubah dari teleport-fade jadi ikut menempuh busur: itu satu-satunya
gerakan yang benar-benar kelihatan pada bentuk bulat polos.

## Perubahan v11

### 1. Koreografi tiga bentuk di hero

| Bentuk | Diam | Saat hover |
|---|---|---|
| Segitiga kuning | kanan atas foto | turun ke garis mata, lancip menghadap bawah, opacity 0,7 |
| Titik kuning | kiri bawah, di tepi lingkaran | menggelinding setengah keliling ke kanan atas |
| Cincin outline | kiri, meleset dari lingkaran | teleport fade ke sisi kanan |

**Titik kuning punya pip gelap di dalamnya** (`.shot__dot::after`). Tanpa itu,
bola polos yang berputar tidak terlihat berputar sama sekali — geraknya cuma
terbaca sebagai melayang mengikuti busur, bukan menggelinding. Pip inilah yang
membuat 1080deg putarannya terlihat.

**Cincinnya ada DUA salinan**, `.shot__ring--a` (asal) dan `.shot__ring--b`
(tujuan). Yang beralih hanya opacity-nya, bukan posisinya — itu yang membuat
efeknya terbaca sebagai teleport, bukan meluncur.

Kenapa dua salinan dan bukan satu yang dipindah: transisi CSS **tidak bisa**
membawa opacity 1 → 0 → 1 dalam satu jalur. Dengan dua elemen, transisi di
keadaan dasar mengatur animasi KELUAR dan transisi di keadaan hover mengatur
animasi MASUK. Dua-duanya mulus, tanpa JS, dan tidak ada animasi yang berjalan
saat diam — poin terakhir ini penting, itu sumber bug getar yang lama.

Durasi diseragamkan: masuk ±1,05–1,15 detik, keluar ±0,8 detik. Sebelumnya
2,8–3,6 detik dan terasa menggantung.

### 2. Bug kedap-kedip thumbnail — sudah diperbaiki

**Akar masalahnya** ada di `upgradeThumbs()`. Kode lama:

```js
img.style.opacity = ".4";   // ← diredupkan DULU
img.src = url;              // ← baru src diganti
img.onload = () => (img.style.opacity = "1");
```

Urutan yang terlihat pengguna: poster lokal (halaman PDF portofolio) tampil →
**meredup ke 40%** → **jeda kosong** sementara gambar Drive di-decode → gambar
baru muncul. Tiga tahap itulah yang terbaca sebagai kedipan.

Sekarang gambarnya dimuat **dan di-decode penuh di memori** lewat `probe.decode()`
sebelum `src` ditukar. Karena sudah ada di cache dan sudah ter-decode,
penukarannya selesai dalam satu frame. Tidak ada tahap redup, tidak ada jeda,
tidak ada kedipan.

Hasil uji: 35 kartu, 0 yang punya `style.opacity` tersisa, 0 gambar rusak.

### 3. Showreel

Video vertikal di bawah hero, sebelum stat strip.

- Berjalan terus, loop, **tanpa suara**
- Klik → suara menyala · klik lagi → bisu
- Otomatis pause **dan kembali bisu** saat tergulir keluar layar
- Petunjuk "Tap for sound" hilang permanen setelah interaksi pertama
- Bisa difokus keyboard; Enter/Spasi mengaktifkan suara

**Kenapa harus muted di awal:** browser hanya mengizinkan autoplay untuk video
yang muted. Klik pertama pengguna adalah izin yang dibutuhkan browser untuk
membunyikannya. Ini perilaku yang benar, bukan keterbatasan.

**Kenapa embed Drive tidak dipakai:** iframe `/preview` Google Drive tidak
mengizinkan autoplay-loop-muted, dan suaranya tidak bisa dikontrol dari luar
karena cross-origin. Untuk "loop tanpa suara, klik baru bersuara" wajib file
MP4 asli.

Kompresi dari sumber: 1080×1280 / 27 MB → 720×854 / 5,0 MB (h264 CRF 30,
AAC 96k, `+faststart`). Poster-nya ter-embed sebagai data URI di HTML, jadi
kalau videonya gagal dimuat frame pertamanya tetap tampil — tidak pernah kotak
hitam kosong.

**Konsekuensi:** versi satu-file murni tidak lagi mungkin untuk video. Menanam
5 MB sebagai data URI membuat HTML membengkak jadi ±8,8 MB dan lambat dibuka.

Untuk mengganti videonya nanti: timpa `assets/video/showcase.mp4`. Kalau
rasionya berubah dari 27:32, sesuaikan `aspect-ratio` di `.reel__stage`.

### 4. Teks hero dan meta

Baris peran diganti dari "Brand Marketing Intern at MAP Active" — situs ini
untuk melamar kerja baru, bukan memajang posisi yang akan berakhir 30 September.

Sekarang: chip **Brand Marketing** + "Campaign execution, KOL management &
creative production — open to full-time roles".

`<title>`, `meta description`, dan `og:description` ikut diperbarui; ketiganya
masih menyebut MAP Active.

## Status verifikasi v11

Diuji di Chrome headless, desktop 1440px dan mobile 390px.

- **Nol error JavaScript** di kedua ukuran
- Bentuk: cincin 2 salinan terdeteksi, opacity beralih 1→0 dan 0→1 saat hover,
  ketiganya kembali ke koordinat semula persis setelah kursor pergi
- Segitiga mendarat di y=425 (garis mata pada foto y=290–680), opacity 0,7
- Titik berpindah x=842 → x=1202, rotate 1080deg
- Thumbnail: 35 kartu, 0 manipulasi opacity, 0 gambar rusak
- Showreel: autoplay muted loop jalan, klik → unmute, klik tombol → mute,
  scroll keluar → pause + mute
- Mobile 390px: panggung 300×356, **tidak ada overflow horizontal**
  (scrollWidth 390 = clientWidth 390)

## Yang belum selesai (dari v10)

1. **Turunkan permission folder Drive** dari Editor (`role: writer, type: anyone`)
   ke Viewer — sekarang siapa pun yang punya link bisa menghapus isinya.
2. **Deploy Vercel gagal** — akun `adhityaster-5826's projects` menolak dengan
   `403 forbidden — You don't have permission to create a project`.
   Pakai Netlify drop.

## Cara update konten

Edit blok data di dalam `index.html` (cari `const WORKS`). Untuk memberi karya
lain panel studi kasus: tambahkan `poster`, `points: []`,
`metrics: [{icon, v, label}]`, dan `headline: {v, label}`.
Ikon metrik yang tersedia: `like`, `comment`, `repost`, `save`.
