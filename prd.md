# PRD - Website Pembelajaran Matematika

**Product Name:** MathBelajar ID  
**Version:** 1.0 (MVP)  
**Date:** 25 Desember 2025  
**Owner:** Full-stack Developer (User)  
**Target Launch:** 2 minggu development  

Website pembelajaran matematika online untuk siswa SD-SMP-SMA di Indonesia, fokus materi statis, soal latihan, dan landing page menarik. Konten mengikuti Kurikulum Merdeka dengan struktur sederhana untuk akses mudah via mobile/desktop.[1][2]

## Overview
Produk ini menyediakan akses gratis ke materi matematika terstruktur per kelas, soal latihan dengan jawaban, dan landing page promosi. Target utama siswa kelas 1-12 serta guru/orang tua di Indonesia yang butuh belajar mandiri. MVP prioritaskan konten manual tanpa login atau interaktif kompleks.[3]

**Goals:**
- Tingkatkan pemahaman matematika dasar hingga lanjutan.
- User experience mobile-first, loading cepat.
- SEO-friendly untuk pencarian "materi matematika kelas X".

**Success Metrics:**
- 1.000 unique visitors/bulan pertama.
- Bounce rate <50%.
- Time on page >3 menit per materi.

## Target Audience
- **Siswa SD-SMP-SMA:** Utama, usia 7-18 tahun, belajar mandiri atau bantu orang tua.[2]
- **Guru/Orang Tua:** Akses cepat materi dan soal untuk pengajaran rumah.
- **Lokasi:** Indonesia (Bahasa Indonesia, konten Kurikulum Merdeka).

**Pain Points:**
- Materi sekolah kurang lengkap/akses sulit.
- Soal latihan terbatas, tanpa penjelasan.
- Website edtech lain terlalu kompleks atau berbayar.[3][4]

## Key Features
### Landing Page
- Hero section dengan call-to-action "Mulai Belajar".
- Preview materi populer (e.g., pecahan kelas 5 SD).
- Testimoni dan statistik (e.g., "10.000+ soal gratis").
- Footer: Kontak, social media, privasi.

### Materi Pembelajaran
- Struktur per jenjang: SD (Kelas 1-6), SMP (7-9), SMA (10-12).
- Contoh topik: Bilangan bulat, geometri, aljabar dasar, trigonometri.[1][2]
- Format: Teks + gambar + rumus LaTeX, PDF download.

### Soal Latihan
- 10-20 soal per subtopik dengan pilihan ganda/essay.
- Jawaban lengkap + penjelasan.
- Filter: Mudah/Sedang/Sulit.

| Fitur | Deskripsi | Prioritas |
|-------|-----------|-----------|
| Search Bar | Cari topik/kelas | High [5] |
| Dark Mode | Toggle UI | Medium |
| Progress Tracker | Local storage (no DB) | Low |

## Tech Stack
Berdasarkan preferensi user (Next.js, Vercel, mobile-first):
- **Frontend:** Next.js 15 (App Router) + Tailwind CSS + shadcn/ui.
- **Backend:** Static export atau API Routes (untuk search nanti).
- **Deployment:** Vercel (free tier).
- **Konten:** MDX untuk materi, JSON untuk soal.
- **Analytics:** Vercel Analytics + Google Analytics.

**No Database** untuk MVP (konten hardcoded), upgrade ke Supabase jika tambah user-generated.

## Content Structure
**SD (Kurikulum Merdeka):**
- Kelas 1-3: Bilangan, penjumlahan, pengukuran.[2]
- Kelas 4-6: Pecahan, geometri, peluang.

**SMP:**
- Kelas 7-9: Persamaan linear, Pythagoras, statistik dasar.[1]

**SMA:**
- Kelas 10-12: Limit, turunan, matriks, trigonometri.

Total MVP: 20 topik utama, 200+ soal. Sumber: Adaptasi buku Kemendikbud + situs edukasi gratis.[6]

## User Flow
1. Masuk via landing page → Pilih jenjang/kelas.
2. Buka materi → Baca + download PDF.
3. Latihan soal → Cek jawaban langsung.
4. Search global → Jump ke halaman spesifik.

**Wireframe Sederhana:**
```
Landing → /sd/kelas1/bilangan → Materi | Soal
         ↓
     Search Bar
```

## Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Konten tidak akurat | High | Review manual + sumber resmi Kemendikbud [2] |
| Loading lambat mobile | Medium | Next.js Image optimization, lazy load |
| SEO rendah | Medium | Meta tags, sitemap, structured data |

## Development Roadmap
**Week 1 (MVP Core):**
- Setup Next.js + landing page.
- 5 topik SD + soal sample.

**Week 2:**
- Lengkapi SMP/SMA.
- Search + polish UI.
- Deploy Vercel + domain custom.

**Total Effort:** ~25 jam solo, sesuai skill full-stack user.

**Next Phase:** Tambah quiz interaktif, user auth (Clerk), admin CMS.

*Document dibuat: 25 Des 2025*  
*References: Kurikulum Merdeka, edtech Indonesia*[2][1]

[1](https://www.m4th-lab.net/2017/07/susunanurutan-materi-matematika-sma.html)
[2](https://www.kompasiana.com/sujayaary/65f55258c57afb705b16b0b7/materi-matematika-sd-smp-sma-kurikulum-merdeka)
[3](https://alef.co.id/aplikasi-belajar-matematika-online-gratis-dengan-fitur-premium/)
[4](https://stmikkomputama.ac.id/5-aplikasi-pembelajaran-matematika-berbasis-web-terbaik-untuk-guru/)
[5](https://fulcrum.rocks/blog/how-to-create-srs-for-edtech-app)
[6](https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Matematika_BS_KLS_IX.pdf)
[7](https://id.scribd.com/document/408706590/Draft-Contoh-Penerapan-Model-Pembelajaran-Project-Based-Learning-Dalam-Pembelajaran-Matematika-Smp)
[8](https://eprints.ums.ac.id/80954/1/NASKAH%20PUBLIKASI.pdf)
[9](https://repository.uir.ac.id/10472/1/176410639.pdf)
[10](https://repositori.kemendikdasmen.go.id/14545/1/6.%20Penggunaan%20Internet%20dalam%20Pembelajaran%20Matematika%20di%20SMP.pdf)
[11](https://id.scribd.com/document/742821650/CONTOH-RENCANA-PEMBELAJARAN-MATEMATIKA)
[12](https://id.scribd.com/document/394673774/Format-Laporan-Akhir-PRD-Sem-1-2018)
[13](https://www.figma.com/resource-library/product-requirements-document/)
[14](https://repository.uinpalopo.ac.id/11151/2/2102040037_RAODA.pdf)
[15](https://www.notion.com/templates/category/product-requirements-doc)
[16](https://www.slideshare.net/slideshow/daftar-materi-matematika-sma-revisi/115164273)
[17](https://www.matific.com/id/id/home/)
[18](https://fts.uika-bogor.ac.id/download/MkVBcXV0WWQxYjZBQmNqVi9Da3hldz09?type=silabus)
[19](https://productschool.com/blog/product-strategy/product-template-requirements-document-prd)
[20](https://www.mathgptpro.com/id)