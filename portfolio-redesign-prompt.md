# Portfolio Redesign Prompt — Muhammad Raja Kautsar
> Stack: **React JS** (frontend) + **Laravel** (backend API)  
> Tujuan: Bangun ulang portfolio dari nol dengan tampilan **premium, elegan, dan modern** — bukan sekadar gelap dengan card biasa.

---

## 🎯 Konteks & Masalah Desain Saat Ini

Desain lama memiliki masalah berikut yang harus **sepenuhnya dihindari**:
- Layout terlalu flat dan tidak memiliki hirarki visual yang jelas
- Semua section terasa sama — tidak ada ritme atau variasi
- Card skills, experience, projects terlihat identik dan membosankan
- Hero section kosong, tidak "menjual" sang developer
- Tidak ada animasi yang bermakna
- Typography monoton, semua pakai satu weight
- Navbar tidak sticky dan tidak ada visual identity
- Contact form terlalu sederhana tanpa feedback visual

---

## 🎨 Design System

### Palet Warna
```
--bg-deep:        #050816   /* latar belakang utama, hampir hitam biru */
--bg-card:        #0d1224   /* surface card */
--bg-card-hover:  #131a35   /* card saat hover */
--accent-primary: #6366f1   /* indigo cerah — aksen utama */
--accent-glow:    #818cf8   /* versi lebih terang untuk glow effect */
--accent-subtle:  rgba(99, 102, 241, 0.12) /* background aksen transparan */
--text-primary:   #f1f5f9   /* teks utama putih susu */
--text-secondary: #94a3b8   /* teks sekunder abu-abu */
--text-muted:     #475569   /* label, caption */
--border:         rgba(255,255,255,0.06) /* border halus */
--border-hover:   rgba(99, 102, 241, 0.4) /* border saat hover */
```

### Typography
- **Display / Hero**: `Clash Display` atau `Cal Sans` — bold, characterful, untuk nama dan heading besar
- **Body**: `Inter` — bersih, readable, untuk paragraf dan deskripsi
- **Code / Label**: `JetBrains Mono` — untuk skill tags, tahun, label teknis

```css
/* Type Scale */
--text-xs:    0.75rem   /* label, caption */
--text-sm:    0.875rem  /* secondary info */
--text-base:  1rem      /* body */
--text-lg:    1.125rem  /* card title */
--text-xl:    1.25rem   
--text-2xl:   1.5rem    /* section subtitle */
--text-4xl:   2.25rem   /* section heading */
--text-6xl:   3.75rem   /* hero name */
--text-8xl:   6rem      /* hero giant text (desktop) */
```

### Spacing & Layout
- Max container width: `1100px`, centered
- Section padding: `py-24` (96px atas bawah)
- Card border-radius: `16px`
- Gap antar card: `20px`

---

## 🧱 Struktur Komponen React

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   ├── useScrollAnimation.js   (IntersectionObserver)
│   └── useTypewriter.js        (efek ketik)
├── App.jsx
└── index.css
```

---

## 📐 Panduan Setiap Section

---

### 1. NAVBAR
**Behavior**: Sticky, transparan saat di atas, frosted glass saat scroll.

```jsx
// Style saat scroll
backdrop-filter: blur(20px);
background: rgba(5, 8, 22, 0.8);
border-bottom: 1px solid rgba(255,255,255,0.06);
transition: all 0.3s ease;
```

- Logo: Inisial "MRK" dengan font monospace, warna `accent-primary`
- Nav links: Uppercase, letter-spacing lebar, ukuran kecil (`text-xs`)
- Active link: underline animasi dari kiri ke kanan
- CTA button kecil "Download CV" di ujung kanan dengan border aksen

---

### 2. HERO SECTION
**Konsep**: Full viewport height. Teks besar di kiri, visual ambient di kanan.

**Layout Desktop**:
```
┌─────────────────────────────────────────────┐
│  "Hai, saya"          [ambient glow orb]    │
│  MUHAMMAD             [floating code card]  │
│  RAJA KAUTSAR                               │
│                                             │
│  Passionate developer...                   │
│                                             │
│  [Hubungi Saya]  [Lihat Projects]          │
│                                             │
│  React  ·  Laravel  ·  REST API            │
└─────────────────────────────────────────────┘
```

**Elemen Wajib**:
1. **Nama besar** — `text-7xl font-bold`, split per kata, masing-masing animate masuk dengan stagger (dari bawah, fade in)
2. **Typewriter effect** pada subtitle: ketik secara bergantian `"Full-Stack Developer"`, `"React Enthusiast"`, `"Laravel Engineer"`
3. **Ambient glow orb** di background kanan: elemen `div` dengan `border-radius: 50%`, `background: radial-gradient(...)`, `filter: blur(80px)`, bergerak lambat dengan animasi float
4. **Floating tech card** kecil: card yang melayang dengan efek parallax ringan saat mouse move, menampilkan snippet kode kecil atau stats

**Animasi**:
```css
/* Stagger masuk dari bawah */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-name span:nth-child(1) { animation: slideUp 0.6s ease 0.1s both; }
.hero-name span:nth-child(2) { animation: slideUp 0.6s ease 0.25s both; }
.hero-name span:nth-child(3) { animation: slideUp 0.6s ease 0.4s both; }
```

---

### 3. SKILLS SECTION
**Konsep**: Bukan 3 card biasa. Tampilkan sebagai grid "skill cluster" dengan visual yang berbeda tiap kategori.

**Layout**:
```
┌──────────────────────────────────────────────────┐
│  SKILLS                                          │
│  ──────                                          │
│                                                  │
│  ┌─ Frontend ──────────────────┐                 │
│  │  ████ React          90%   │  ┌─ Backend ──┐  │
│  │  ████ Vite           85%   │  │  Laravel   │  │
│  │  ████ JavaScript     88%   │  │  PHP       │  │
│  └─────────────────────────────┘  │  REST API  │  │
│                                   └────────────┘  │
│  ┌─ Tools ────────────────────────────────────┐   │
│  │  Git  •  Composer  •  NPM  •  Docker      │   │
│  └─────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

**Komponen per skill**:
- Progress bar animasi (mengisi dari kiri saat masuk viewport)
- Icon kecil (pakai simple SVG atau react-icons)
- Percentage label di ujung kanan

**Animasi**:
```js
// useScrollAnimation hook dengan IntersectionObserver
// Saat masuk viewport: progress bar animate dari 0% ke nilai aslinya
// Durasi: 1s ease-out dengan stagger 100ms antar skill
```

---

### 4. EXPERIENCE SECTION
**Konsep**: Timeline vertikal, bukan dua card sejajar.

**Layout**:
```
  2024 — Present
  ●────────────────────────────────────────────
  │  Full-Stack Developer
  │  Membangun aplikasi web modern dengan React dan Laravel.
  │  [React] [Laravel] [REST API]
  │
  2022 — 2024
  ●────────────────────────────────────────────
  │  Web Developer
  │  Mengembangkan fitur frontend dan API backend.
  │  [JavaScript] [PHP]
```

**Detail**:
- Garis vertikal tipis (`1px solid var(--border)`) di tengah kiri
- Titik bulat (`●`) berwarna `accent-primary` dengan pulse animation pada item aktif/terbaru
- Setiap item slide masuk dari kiri dengan delay berdasarkan urutan
- Tag teknologi di bawah deskripsi: pill kecil dengan `bg: accent-subtle`, `color: accent-glow`

---

### 5. PROJECTS SECTION
**Konsep**: Grid 2 kolom dengan card yang "hidup" saat di-hover.

**Card Design**:
```
┌─────────────────────────────────────┐
│  [mockup image / gradient preview]  │ ← area 60% tinggi card
│─────────────────────────────────────│
│  Portfolio Website          [↗]     │ ← title + link icon
│  Website portfolio modern...        │ ← deskripsi pendek
│                                     │
│  [React] [Laravel] [Vite]          │ ← tech tags
└─────────────────────────────────────┘
```

**Hover effect**:
```css
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.15);
  border-color: var(--border-hover);
}
/* Image/preview area zoom ringan */
.project-card:hover .card-preview {
  transform: scale(1.03);
  transition: transform 0.4s ease;
}
```

**Preview area** (jika tidak ada screenshot): Gunakan gradient placeholder yang unik per project:
```js
const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  // dst
]
```

---

### 6. CONTACT SECTION
**Konsep**: Split layout. Kiri: informasi kontak + sosial media. Kanan: form.

**Layout**:
```
┌────────────────────┬────────────────────────┐
│  Mari Terhubung    │  Nama                  │
│                    │  ┌──────────────────┐  │
│  Punya project?    │  │                  │  │
│  Hubungi saya.     │  └──────────────────┘  │
│                    │  Email                 │
│  📧 email@...      │  ┌──────────────────┐  │
│  💼 LinkedIn       │  │                  │  │
│  🐙 GitHub         │  └──────────────────┘  │
│                    │  Pesan                 │
│                    │  ┌──────────────────┐  │
│                    │  │                  │  │
│                    │  │                  │  │
│                    │  └──────────────────┘  │
│                    │  [Kirim Pesan →]       │
└────────────────────┴────────────────────────┘
```

**Form styling**:
```css
input, textarea {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-primary);
  transition: border-color 0.2s, box-shadow 0.2s;
}
input:focus, textarea:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  outline: none;
}
```

**Submit button**:
```css
/* Gradient dengan shimmer animation */
.btn-submit {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  position: relative;
  overflow: hidden;
}
.btn-submit::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}
.btn-submit:hover::after {
  transform: translateX(100%);
}
```

**API Integration dengan Laravel**:
```js
// Contact.jsx — submit handler
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await axios.post('/api/contact', formData);
    setSuccess(true); // tampilkan pesan sukses dengan animasi
  } catch (err) {
    setError(err.response?.data?.message || 'Gagal mengirim pesan');
  } finally {
    setLoading(false);
  }
};
```

---

## ✨ Animasi Global — Panduan Implementasi

### Scroll-triggered Reveal
```js
// hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};
```

```css
/* CSS untuk reveal */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger untuk children */
.reveal-stagger > *:nth-child(1) { transition-delay: 0s; }
.reveal-stagger > *:nth-child(2) { transition-delay: 0.1s; }
.reveal-stagger > *:nth-child(3) { transition-delay: 0.2s; }
.reveal-stagger > *:nth-child(4) { transition-delay: 0.3s; }
```

### Ambient Background
```css
/* Tambahkan di body/root — dua orb yang bergerak lambat */
body::before, body::after {
  content: '';
  position: fixed;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
}
body::before {
  width: 600px; height: 600px;
  background: rgba(99, 102, 241, 0.06);
  top: -200px; left: -200px;
  animation: floatOrb 20s ease-in-out infinite;
}
body::after {
  width: 400px; height: 400px;
  background: rgba(139, 92, 246, 0.05);
  bottom: -100px; right: -100px;
  animation: floatOrb 25s ease-in-out infinite reverse;
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0); }
  33%       { transform: translate(30px, -30px); }
  66%       { transform: translate(-20px, 20px); }
}
```

### Cursor glow (opsional, hanya desktop)
```js
// Ikuti posisi mouse dengan dot glow kecil
useEffect(() => {
  const handleMouseMove = (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);
```

### Reduced Motion — wajib dihormati
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔌 Integrasi Laravel API

### Routes (`routes/api.php`)
```php
Route::post('/contact', [ContactController::class, 'send']);
Route::get('/profile', [ProfileController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/experiences', [ExperienceController::class, 'index']);
```

### CORS (`config/cors.php`)
```php
'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:5173')],
```

### Axios Base Config (`src/lib/axios.js`)
```js
import axios from 'axios';
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});
export default api;
```

---

## 📦 Dependencies yang Dibutuhkan

```bash
# React
npm install framer-motion          # animasi lanjut (opsional tapi direkomendasikan)
npm install react-icons            # ikon
npm install axios                  # HTTP client
npm install @fontsource/inter      # font Inter lokal

# Tailwind (jika pakai)
npm install -D tailwindcss postcss autoprefixer
```

---

## ✅ Checklist Kualitas

Sebelum selesai, pastikan semua ini terpenuhi:

- [ ] Navbar sticky dengan frosted glass effect
- [ ] Hero: nama animate masuk dengan stagger, typewriter berjalan
- [ ] Ambient orb background bergerak halus di hero
- [ ] Skills: progress bar animate saat scroll ke section ini
- [ ] Experience: timeline vertikal dengan pulse dot
- [ ] Projects: hover lift + border glow + shimmer
- [ ] Contact: split layout, form dengan focus ring, button shimmer
- [ ] Scroll reveal pada semua section
- [ ] Semua animasi menghormati `prefers-reduced-motion`
- [ ] Responsive: mobile ≥ 375px, tablet ≥ 768px, desktop ≥ 1024px
- [ ] Loading state pada form submission
- [ ] Error handling pada API calls
- [ ] Konsistensi spacing dan color token

---

## 🚫 Hal yang Harus DIHINDARI

1. **Jangan** buat semua card terlihat sama persis
2. **Jangan** pakai warna putih murni (`#ffffff`) — gunakan `#f1f5f9`
3. **Jangan** animasi yang terlalu agresif/cepat (min duration 0.3s)
4. **Jangan** lupa `z-index` management agar orb tidak menutup konten
5. **Jangan** buat section heading tanpa visual separator atau accent
6. **Jangan** pakai border-radius bulat penuh pada semua elemen — variasikan
7. **Jangan** lupa `overflow: hidden` pada card jika ada elemen yang keluar batas
