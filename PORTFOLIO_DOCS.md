# Muhammad Raja Kautsar — Portfolio Documentation

> File ini adalah dokumentasi lengkap proyek portofolio. Gunakan sebagai referensi konteks AI agar tidak lupa struktur, konten, dan keputusan desain.

---

## 🧑‍💻 Data Pribadi (Isi sesuai data asli)

```
Nama          : Muhammad Raja Kautsar
Lokasi        : Depok, West Java, Indonesia
Email         : [your-email@gmail.com]
LinkedIn      : https://www.linkedin.com/in/muhammad-raja-kautsar-69a06534a/
GitHub        : https://github.com/[your-username]
Instagram     : https://instagram.com/[your-handle]
Tagline       : [Contoh: "Full-Stack Developer & UI Enthusiast"]
Bio (pendek)  : [2–3 kalimat tentang dirimu, passion, dan value kamu]
Foto          : /public/images/raja-profile.jpg  ← ganti dengan foto asli
```

---

## 🛠 Tech Stack Proyek

| Layer       | Teknologi                          |
|-------------|-----------------------------------|
| Framework   | Next.js 14 (App Router)            |
| Styling     | Tailwind CSS + CSS Modules         |
| Animation   | Framer Motion                      |
| Font        | DM Serif Display + Inter (Google)  |
| Deploy      | Vercel                             |
| CMS (Blog)  | MDX (file-based) atau Notion API   |
| Form        | React Hook Form + EmailJS / Resend |

---

## 📁 Struktur Folder Next.js

```
portfolio/
├── app/
│   ├── layout.tsx             ← Font, metadata global
│   ├── page.tsx               ← Landing (semua section)
│   ├── blog/
│   │   ├── page.tsx           ← List artikel
│   │   └── [slug]/page.tsx    ← Detail artikel
│   └── api/
│       └── contact/route.ts   ← Handler form kontak
│
├── components/
│   ├── Navbar.tsx             ← Sticky nav, smooth scroll
│   ├── Hero.tsx               ← Intro + foto + CTA
│   ├── About.tsx              ← Bio singkat
│   ├── Skills.tsx             ← Tech stack grid
│   ├── Experience.tsx         ← Timeline pengalaman
│   ├── Projects.tsx           ← Grid kartu proyek
│   ├── Blog.tsx               ← Preview 3 artikel terbaru
│   ├── Contact.tsx            ← Form kontak
│   └── Footer.tsx             ← Link sosial + copyright
│
├── content/
│   └── blog/                  ← File .mdx artikel
│       └── [artikel.mdx]
│
├── public/
│   └── images/
│       └── raja-profile.jpg   ← ← GANTI FOTO DI SINI
│
├── lib/
│   └── data.ts                ← Semua data konten (skills, projects, experience)
│
├── styles/
│   └── globals.css
│
└── PORTFOLIO_DOCS.md          ← File dokumentasi ini
```

---

## 🎨 Design System

### Warna
```css
--color-bg:        #FFFFFF;   /* Background utama */
--color-text:      #0A0A0A;   /* Teks primer */
--color-secondary: #6B6B6B;   /* Teks sekunder */
--color-border:    #E8E8E8;   /* Border & divider */
--color-accent:    #111111;   /* Accent / highlight */
--color-hover:     #F5F5F5;   /* Hover state */
```

### Tipografi
```
Display / Hero  : DM Serif Display — italic, large, editorial
Body            : Inter — 400/500, clean dan mudah dibaca
Mono / Label    : JetBrains Mono — untuk kode & label kecil
```

### Spacing Scale (Tailwind)
- Section gap   : `py-24` atau `py-32`
- Container     : `max-w-4xl mx-auto px-6`
- Card gap      : `gap-6`

---

## 📦 Komponen & Spesifikasi

### 1. `Navbar.tsx`
- Sticky top, `backdrop-blur-md` saat scroll
- Logo: nama "Raja" dalam DM Serif
- Link: About, Skills, Experience, Projects, Blog, Contact
- Mobile: hamburger menu dengan slide-down

### 2. `Hero.tsx`
- **Kiri**: Heading besar — "Hi, I'm **Raja**." (animasi huruf per huruf)
- **Kanan**: Foto profil bulat/square dengan subtle border
- Underline pada nama: animasi tumbuh dari kiri (CSS `scaleX`)
- Tagline fade-in setelah nama muncul
- CTA: "View Projects" + "Download CV"

### 3. `Skills.tsx`
- Grid icon + nama teknologi
- Kategori: Frontend, Backend, Tools, Design
- Hover: scale-up ringan + shadow

### 4. `Experience.tsx`
- Layout timeline vertikal
- Setiap item: Periode | Jabatan | Perusahaan | Deskripsi singkat
- Line connector di sebelah kiri
- Scroll-triggered fade-in per item

### 5. `Projects.tsx`
- Grid 2-3 kolom kartu
- Setiap kartu: Thumbnail | Judul | Stack | Deskripsi | Link GitHub + Demo
- Hover: lift shadow + subtle border
- Filter by category (opsional)

### 6. `Blog.tsx`
- Preview 3 artikel terbaru
- Setiap item: Tanggal | Judul | Excerpt | "Read more →"
- Data dari file `.mdx` di `/content/blog/`

### 7. `Contact.tsx`
- Form: Nama, Email, Pesan
- Kirim via EmailJS atau Resend API
- State: idle → loading → success/error

### 8. `Footer.tsx`
- Link sosial (GitHub, LinkedIn, Instagram)
- Copyright: © 2025 Muhammad Raja Kautsar

---

## 📝 Data Konten — `lib/data.ts`

### Skills (isi sesuai kemampuanmu)
```ts
export const skills = [
  { name: "Next.js",     category: "Frontend", icon: "nextjs" },
  { name: "React",       category: "Frontend", icon: "react"  },
  { name: "TypeScript",  category: "Frontend", icon: "ts"     },
  { name: "Tailwind CSS",category: "Frontend", icon: "tailwind"},
  { name: "Laravel",     category: "Backend",  icon: "laravel"},
  { name: "PHP",         category: "Backend",  icon: "php"    },
  { name: "MySQL",       category: "Backend",  icon: "mysql"  },
  { name: "Git",         category: "Tools",    icon: "git"    },
  // tambahkan sesuai keahlianmu
];
```

### Experience (isi sesuai pengalamanmu)
```ts
export const experiences = [
  {
    period:   "2024 – Sekarang",
    title:    "[Jabatan kamu]",
    company:  "[Nama Perusahaan / Institusi]",
    desc:     "[Deskripsi singkat pekerjaan & pencapaian]",
  },
  // tambahkan pengalaman lainnya
];
```

### Projects (isi dengan proyek nyatamu)
```ts
export const projects = [
  {
    title:   "[Nama Proyek]",
    desc:    "[Deskripsi singkat]",
    stack:   ["Next.js", "Tailwind", "Laravel"],
    github:  "https://github.com/[username]/[repo]",
    demo:    "https://[demo-url].vercel.app",
    image:   "/images/project-[nama].jpg",
  },
  // tambahkan proyek lainnya
];
```

---

## ⚙️ Setup & Instalasi

```bash
# 1. Buat project Next.js
npx create-next-app@latest portfolio --typescript --tailwind --app

# 2. Install dependencies
cd portfolio
npm install framer-motion @emailjs/browser react-hook-form

# 3. Install font (via next/font)
# Sudah built-in di Next.js, lihat app/layout.tsx

# 4. Jalankan dev server
npm run dev

# 5. Deploy ke Vercel
# Push ke GitHub → Connect di vercel.com → Auto-deploy!
```

---

## 🔧 Environment Variables (`.env.local`)

```env
# EmailJS (untuk form kontak)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Jika pakai Resend sebagai alternatif
RESEND_API_KEY=your_resend_api_key
```

---

## 📱 Responsif

| Breakpoint | Perilaku                              |
|------------|---------------------------------------|
| Mobile     | Single column, hamburger nav          |
| Tablet     | 2-column grid untuk projects & skills |
| Desktop    | Full layout, sticky nav               |

---

## 🎞 Animasi (Framer Motion)

```ts
// Reusable fade-up variant
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Stagger untuk list
export const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};
```

- Semua section: `whileInView` dengan `viewport={{ once: true }}`
- Hero nama: `animate` letter-by-letter dengan delay
- Card hover: `whileHover={{ y: -4, boxShadow: "..." }}`
- Navbar: `animate` opacity dari 0 ke 1 saat mount

---

## 📋 Checklist Progress

- [ ] Setup Next.js + Tailwind
- [ ] Install Framer Motion
- [ ] Buat komponen Navbar
- [ ] Buat komponen Hero (dengan animasi nama)
- [ ] Buat komponen Skills
- [ ] Buat komponen Experience
- [ ] Buat komponen Projects
- [ ] Buat komponen Blog (MDX)
- [ ] Buat komponen Contact (Form + EmailJS)
- [ ] Buat Footer
- [ ] Isi data di `lib/data.ts`
- [ ] Ganti foto profil
- [ ] Test responsif (mobile/tablet/desktop)
- [ ] Setup domain custom (opsional)
- [ ] Deploy ke Vercel

---

## 📌 Catatan Penting

1. **Foto profil** → letakkan di `/public/images/raja-profile.jpg`
2. **Blog** → tulis artikel dalam format `.mdx` di `/content/blog/`
3. **CV** → letakkan di `/public/Raja-Kautsar-CV.pdf` untuk tombol download
4. **SEO** → isi `metadata` di `app/layout.tsx` dengan nama & deskripsi asli
5. **Favicon** → letakkan di `/public/favicon.ico`

---

*Dokumentasi ini dibuat sebagai referensi AI context. Update setiap kali ada perubahan struktur atau konten.*
