# Website Biodata & Portofolio

Website pribadi bergaya futuristik menggunakan HTML, CSS, dan JavaScript murni. Bisa dijalankan langsung di VS Code dan dipublikasikan ke GitHub Pages.

## Struktur folder

```text
biodata-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       └── foto-profil.jpg  (tambahkan foto sendiri)
└── README.md
```

## Cara menjalankan di VS Code

1. Ekstrak file ZIP.
2. Buka folder `biodata-website` di VS Code.
3. Tambahkan foto pribadi ke `assets/images/` dan beri nama `foto-profil.jpg`.
4. Buka `index.html` di browser. Disarankan memakai ekstensi **Live Server** di VS Code, lalu klik kanan `index.html` → **Open with Live Server**.

Tanpa foto, halaman tetap tampil dengan avatar inisial `AR`.

## Bagian yang bisa diubah

- **Nama dan biodata:** edit teks di `index.html`.
- **Foto profil:** ganti `assets/images/foto-profil.jpg`.
- **Warna dan tampilan:** edit variabel di bagian `:root` pada `css/style.css`.
- **Daftar proyek:** ubah kartu proyek di bagian `#proyek` pada `index.html`.
- **Email kontak:** cari `emailkamu@example.com` di `index.html` dan `js/script.js`, lalu ganti dengan email aktif.
- **Link proyek:** sesuaikan URL pada setiap tautan proyek.

## Fitur

- Tampilan futuristik dengan tema gelap dan pilihan tema terang.
- Responsif untuk laptop, tablet, dan HP.
- Navigasi mobile.
- Filter proyek berdasarkan kategori.
- Form kontak yang membuka aplikasi email.
- Tahun footer otomatis.

## Catatan

Website ini front-end statis. Form kontak menggunakan `mailto:` sehingga aplikasi email akan terbuka; pesan tidak dikirim melalui server website. Beberapa proyek ditampilkan sebagai contoh berdasarkan proyek latihan, jadi sesuaikan deskripsi dan tautannya dengan hasil final milikmu. Font Google Fonts memerlukan koneksi internet; bila offline, website menggunakan font sistem sebagai pengganti.
