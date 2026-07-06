# Portfolio Design System v2 — Modern Clean + Smooth Scroll

> Reference doc untuk dilempar ke Google Antigravity / AI coding tool lain.
> Project: React (Vite) frontend + Laravel API backend.
> Update ini menggantikan direction lama (white bg + editorial serif) dengan arah baru: **modern, clean, sedikit "tech-editorial"**, plus smooth scroll ala Phantom.app.

---

## 1. Design Direction

**Nama arah**: *Quiet Terminal* — clean seperti produk SaaS modern (Linear/Phantom-level polish), tapi ada sentuhan developer/gamer melalui monospace labels dan micro-interactions, cocok untuk background Raja (web dev + gaming).

Prinsip:
- Bersih, banyak whitespace, tidak ramai.
- Satu warna aksen yang berani dipakai konsisten, bukan gradient pelangi.
- Motion halus dan bertujuan — bukan animasi "karena bisa", tapi untuk membantu scannability (reveal saat scroll, hover states presisi).
- Signature element: garis bawah nama (underline effect) yang sudah ada dipertahankan, tapi diberi micro-interaction baru (lihat §5).

---

## 2. Color Tokens

| Token | Hex | Pemakaian |
|---|---|---|
| `--bg` | `#FAFAF9` | Background utama (paper white, bukan cream/terracotta) |
| `--surface` | `#F0EFEB` | Card, section alternate background |
| `--ink` | `#14151A` | Teks utama, hampir hitam |
| `--ink-muted` | `#5B5D66` | Teks sekunder / caption |
| `--accent` | `#2F5D50` | Deep pine green — warna aksen utama (link, highlight, CTA) |
| `--accent-soft` | `#DCE8E3` | Background tag/badge, hover state halus |
| `--line` | `#E1DFD7` | Hairline divider, border tipis |

Catatan: hindari kombinasi default AI (cream + terracotta, atau near-black + neon). Deep pine green dipilih supaya terasa "grounded" dan tidak generik, cocok untuk vibe developer yang tenang tapi percaya diri.

---

## 3. Typography

| Role | Font | Pemakaian |
|---|---|---|
| Display | `DM Serif Display` | Judul besar hero, nama section (dipakai hemat, hanya di headline utama) |
| Body | `Inter` | Semua body text, nav, deskripsi |
| Mono | `JetBrains Mono` | Label kecil, tag skill, angka/versi, timestamp, eyebrow text |

Type scale (rem, base 16px):
- Hero title: `clamp(2.5rem, 6vw, 5rem)`, DM Serif Display, line-height 1.05
- Section title: `2rem–2.5rem`, DM Serif Display
- Body: `1rem–1.125rem`, Inter, line-height 1.6
- Mono label: `0.75rem`, uppercase, letter-spacing 0.08em

---

## 4. Layout Concept

```
┌────────────────────────────┐
│ Navbar (sticky, blur bg)   │
├────────────────────────────┤
│ Hero — full viewport       │
│  headline + underline name │
│  mono eyebrow di atas judul│
├────────────────────────────┤
│ Skills — grid, hover lift  │
├────────────────────────────┤
│ Experience — timeline kiri │
│  garis vertikal + dot      │
├────────────────────────────┤
│ Projects — card grid 2col  │
├────────────────────────────┤
│ Contact — simple, centered │
├────────────────────────────┤
│ Footer                     │
└────────────────────────────┘
```

Section berganti antara `--bg` dan `--surface` supaya ada ritme visual tanpa perlu garis tebal.

---

## 5. Smooth Scroll (ala Phantom.app)

Phantom.app dan situs sejenis pakai momentum scroll yang halus (bukan scroll native browser yang "kaku"). Cara replikasi di React/Vite:

**Library utama**: [`lenis`](https://github.com/darkroomengineering/lenis) (dulu bernama `@studio-freight/lenis`) — ringan, framework-agnostic, gampang dipasang di React.

```bash
npm install lenis
```

```tsx
// src/hooks/useLenis.ts
import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
```

Panggil `useLenis()` sekali di `App.tsx`.

**Untuk scroll-triggered reveal** (section muncul saat di-scroll), kombinasikan dengan Framer Motion:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
  {children}
</motion.div>
```

Kalau butuh parallax halus (misal gambar hero bergerak sedikit lebih lambat dari scroll), pakai `useScroll` + `useTransform` dari Framer Motion, bukan library terpisah — lebih ringan dan konsisten dengan animasi lain.

Penting: hormati `prefers-reduced-motion` — matikan Lenis smooth scroll dan animasi reveal kalau user set reduced motion di OS mereka.

---

## 6. Signature Element

Underline effect di nama (yang sudah ada) di-upgrade:
- Underline berupa garis tipis `--accent` yang "digambar" (scale-x dari 0 ke 1) saat hero pertama kali load, memakai Framer Motion.
- Saat hover di nama/logo, underline bergeser warna ke `--accent-soft` lalu balik — micro-interaction kecil, bukan animasi besar.

---

## 7. Component Notes (existing files)

| File | Update yang disarankan |
|---|---|
| `Hero.tsx` | Tambah mono eyebrow text di atas judul (contoh: `PORTFOLIO / 2026`), pasang signature underline animation |
| `Skills.tsx` | Grid card dengan hover lift halus (`translateY(-4px)` + shadow tipis), pakai `--surface` sebagai bg card |
| `Experience.tsx` | Timeline vertikal, dot pakai `--accent`, garis pakai `--line` |
| `Projects.tsx` | Card 2 kolom, reveal on scroll pakai `whileInView` |
| `Contact.tsx` | Layout simpel, form minimal, fokus ring pakai `--accent` |
| `Navbar.tsx` | Sticky, background blur tipis (`backdrop-blur-sm` + bg semi-transparan) saat sudah scroll |

---

## 8. Tailwind Config Snippet

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF9',
        surface: '#F0EFEB',
        ink: '#14151A',
        'ink-muted': '#5B5D66',
        accent: '#2F5D50',
        'accent-soft': '#DCE8E3',
        line: '#E1DFD7',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
};
```

---

## 9. Next Steps

1. Install `lenis` dan `framer-motion` (kalau belum ada) di `frontend/`.
2. Update `tailwind.config.js` dengan token warna & font di atas.
3. Implement `useLenis` hook, panggil di `App.tsx`.
4. Refactor tiap section component sesuai catatan §7, mulai dari `Hero.tsx`.
5. Test dengan `prefers-reduced-motion` aktif untuk pastikan fallback jalan.

---

**Last Updated**: 2026-07-06
