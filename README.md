# Website Portfolio Andhika Putradhitya — v16

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






## Perubahan v16

1. **Doodle tidak lagi bertabrakan.** Sapuan biru dipindah dari bawah ANDHIKA
   ke kanan atas, dan lingkaran kuning dipendekkan supaya tidak menyentuh chip
   "Brand Marketing". Diuji dengan membandingkan kotak batas tiap doodle —
   keempat pasangan **tidak bersinggungan**.
2. **Paragraf showreel jadi serif tegak**, bukan miring.
3. **Lama praktik dihitung otomatis** dari Januari 2023 ke tanggal hari ini.
4. **Roadmap jadi 4 simpul menurun**, tanggal ujungnya ikut hitungan yang sama.
5. **Isi bubble diganti kutipan perjalanan**, 5–6 kata per simpul.

### Kenapa sapuan biru harus pindah, bukan sekadar digeser

Lingkaran kuning itu elips melebar. Elips mencapai titik TERTINGGI-nya di
tengah, tapi di daerah kiri-atas kurvanya sedang naik tajam — dan persis di
situlah garis bawah ANDHIKA berada. Digeser sedikit ke mana pun, keduanya
tetap berpotongan karena keduanya memperebutkan pita ruang yang sama. Kanan
atas adalah satu-satunya area di dekat nama yang tidak pernah dilewati
lingkaran sama sekali.

### Kenapa lama praktik tidak ditulis tangan

"3 tahun" yang diketik hari ini akan tetap berbunyi 3 tahun di 2028. Sekarang
yang disimpan hanya titik mulainya (`PRACTICE_START`), sisanya dihitung dari
tanggal hari ini setiap kali halaman dibuka.

Bulannya dihitung dengan **selisih kalender**, bukan jumlah hari dibagi 30,4.
Kalau memakai pembagian, Januari→Agustus kadang jatuh ke 6 bulan karena
panjang bulan berbeda-beda. Diuji di enam tanggal:

| Tanggal | Hasil |
|---|---|
| 16 Aug 2026 | 3 yr 7 mo · Jan 2023 — Aug 2026 |
| 1 Sep 2026 | 3 yr 8 mo · Jan 2023 — Sep 2026 |
| 1 Jan 2027 | 4 yr · Jan 2023 — Jan 2027 |
| 15 Feb 2027 | 4 yr 1 mo · Jan 2023 — Feb 2027 |

Pas genap tahun, bagian bulannya hilang sendiri — tidak pernah tertulis
"4 yr 0 mo".

Satuan "yr" dan "mo" ditulis sebagai elemen terpisah (`.sfx`, 0,42em) supaya
tidak seukuran angkanya; kalau seukuran penuh, "3 yr 7 mo" meluber keluar
kotak statistik di layar sempit.

### Kenapa roadmap jadi menurun

Versi mendatar gagal begitu simpulnya jadi empat: barisnya terpotong, dan
panah terakhir di baris atas menunjuk ke kanan padahal simpul berikutnya ada
di kiri baris bawah — urutannya jadi tidak terbaca. Menurun tidak pernah punya
masalah itu di lebar berapa pun. Tiap simpul digeser 26px ke kanan dari yang
sebelumnya supaya terbaca seperti anak tangga yang bergerak maju; di bawah
560px tangganya dihilangkan karena geserannya memakan lebar yang sudah tidak
ada.

## Perubahan v15

1. **Doodle pada nama** — tiga coretan stroke tebal (3,4px): lingkaran kuning
   mengelilingi nama belakang, dua sapuan biru di bawah nama depan, dan
   percikan kecil di ujung. Semuanya di belakang huruf dan tidak bisa diklik.
2. **Animasi masuk bounce** — nama dan foto muncul dari `scale: 0`, membesar
   melewati ukuran akhir (1,08 dan 1,09), lalu mengendap balik. Rotasinya
   dipasang **berlawanan arah** antara keduanya (−8deg vs +9deg) supaya tidak
   bergerak seperti satu papan yang sama. Doodle menyusul satu per satu setelah
   namanya mendarat.
3. **Judul showreel** jadi tiga kata tanpa titik: *Camera to campaign*.
4. **Paragraf showreel** dipangkas jadi dua kalimat, tidak lagi per tahun.
5. **Tiga bubble jadi roadmap** — pin bernomor, jejak titik-titik berpanah di
   antara simpul, tiap kartu dimiringkan ke arah berbeda supaya terasa
   ditempel tangan. Simpul terakhir diberi warna kuning sebagai posisi
   sekarang. Di bawah 1080px jejaknya berputar jadi vertikal.

### Kenapa kelas animasi dipasang lewat JS, bukan langsung di CSS

Kalau animasinya menempel begitu CSS terbaca, ia sudah berjalan sebagian
sebelum browser sempat melukis apa pun — pengguna mendarat di tengah gerakan
dan efek "muncul dari nol" itu hilang. Kelas `boot-in` karena itu baru
dipasang setelah frame pertama benar-benar digambar
(`requestAnimationFrame` bersarang), dan menunggu foto potret selesai termuat
supaya nama dan foto memantul bersamaan, bukan susul-menyusul. Ada jaring
pengaman 1,2 detik kalau gambarnya menggantung.

### Kenapa lingkaran doodle-nya harus lebih tinggi dari barisnya

Percobaan pertama memakai kotak setinggi baris teks, dan hasilnya garisnya
menembus huruf — terbaca sebagai **pencoretan nama**, bukan penandaan.
Kotaknya sekarang 78% tinggi wrapper dan digeser naik, jadi garisnya lewat di
atas dan di bawah huruf.

## Perubahan v14

1. **Hiasan talang hero** — 10 bentuk samar mengisi margin kiri & kanan
   pembuka: cincin, busur kuning, bidang titik-titik, garis tipis, kotak
   miring. Dua di antaranya bernafas pelan (19s dan 26s). Semuanya di belakang
   konten, tidak bisa diklik, dan hilang di bawah 1180px karena di layar sempit
   memang tidak ada margin untuk diisi.
2. **Gelinding jadi ease-in** — `cubic-bezier(.55,0,.85,.35)`: berangkat pelan
   lalu makin cepat, hampir tanpa perlambatan di ujung. Cincin 1,6s, titik
   1,1s — beda kecepatan supaya keduanya tidak terbaca sebagai satu benda.
3. **Naskah showreel** diganti jadi cerita perjalanan tiga tahun, dan tiga
   keyword di bawahnya mengikuti cerita itu (`Campus → broadcast`,
   `Self-taught`, `Still building`) — bukan lagi menjelaskan isi videonya.
4. **Poster PDF hilang dari Track Record.** Ini akar masalah tumpang tindih.
5. **Tombol Share dihapus**, termasuk pendengar JS-nya.
6. **Alamat email muat satu baris.**
7. **Jarak stat strip → About dirapatkan.**
8. **Motif menyambung dari Track Record ke Works** — 7 bentuk dengan kosakata
   yang sama persis dengan bab Works, kepekatan diturunkan (`.wd--soft`)
   karena latarnya sudah biru muda.

### Kenapa poster PDF harus dibuang, bukan sekadar ditunda

Dulu halaman PDF portofolio dipakai sebagai tampilan pertama kartu carousel
sambil menunggu thumbnail Drive. Masalahnya: kalau Drive lambat atau gagal,
halaman PDF itulah yang tertinggal — dan karena isinya padat teks dan gambar
kecil, ia bertabrakan dengan label nomor, tag periode, dan judul yang
ditumpuk di atasnya. Hasilnya kartu yang tidak terbaca.

Sekarang kartunya **hanya** memakai thumbnail Drive. Selagi menunggu, yang
tampil adalah monogram organisasi — bersih, satu gaya dengan situs, tidak
pernah tumpang tindih.

Sekalian diperbaiki: gambar carousel tidak lagi `loading="lazy"`. Kartu di
luar layar tidak ikut dimuat oleh lazy-loading, jadi saat carousel digeser
kartunya sempat kosong. Dengan hanya 6 gambar, memuat semuanya sekaligus jauh
lebih murah daripada risiko kartu kosong. Diuji: **6/6 termuat**.

### Kenapa email tadi terpotong

`word-break: break-word` memenggal di tengah kata begitu barisnya penuh —
makanya tersisa satu huruf `m` sendirian. Sekarang nilai yang lebih panjang
dari 22 karakter dapat kelas `.citem--long` dengan ukuran huruf sendiri
(.78rem), jadi alamatnya muat utuh dalam satu baris. Mengecilkan SEMUA nilai
demi satu kartu hanya akan membuat lima kartu lain terlihat kekecilan tanpa
alasan.

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
