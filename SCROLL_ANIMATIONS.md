# Scroll Animations Guide — Per Section

> Lanjutan dari `PORTFOLIO_DOCS.md`. Fokus: tiap section (Hero, Skills, Experience, Certifications, Projects, Contact) punya animasi scroll yang **beda karakter**, bukan cuma fade-up yang diulang-ulang. Semua pakai Framer Motion (sudah dipasang di project) + Lenis untuk smooth scroll dasar.

Prinsip pembagian: tiap section dikasih animasi yang **cocok sama bentuk kontennya** — timeline dapet animasi garis yang "tumbuh", grid skill dapet progress bar yang "keisi", project cards dapet image reveal. Jangan semua section pakai `fade + slide-up` yang sama, itu yang bikin kesan template.

---

## 0. Setup Dasar

```bash
npm install framer-motion lenis
```

Helper variant yang dipakai ulang (taruh di `src/utils/motionVariants.ts`):

```tsx
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});
```

Semua contoh section pakai `whileInView` + `viewport={{ once: true, margin: '-80px' }}` supaya animasi cuma trigger sekali saat elemen mulai masuk viewport, tidak berulang tiap scroll naik-turun (lebih tenang, tidak norak).

---

## 1. Hero — "Typewriter Reveal + Underline Draw"

Karakter: ini section pertama yang dilihat, jadi animasinya paling "berbicara" tapi tetap cepat (jangan bikin user nunggu lama sebelum bisa baca).

- Eyebrow text (`PORTFOLIO / 2026`) fade in duluan, cepat.
- Judul nama muncul per baris (bukan per huruf — per huruf kesannya gimmicky untuk nama orang).
- Underline di bawah "RAJA KAUTSAR" di-draw dari kiri ke kanan (scaleX 0 → 1) setelah teks muncul.
- Foto profil masuk dengan slight scale + fade, sedikit delay dari teks supaya ada urutan baca yang jelas: eyebrow → nama → foto.

```tsx
<motion.div initial="hidden" animate="show" variants={staggerContainer(0.15)}>
  <motion.p variants={fadeUp} className="font-mono text-xs tracking-widest">
    PORTFOLIO / 2026
  </motion.p>

  <motion.h1 variants={fadeUp} className="font-display">
    MUHAMMAD
  </motion.h1>

  <motion.h1 variants={fadeUp} className="font-display text-accent relative inline-block">
    RAJA KAUTSAR
    <motion.span
      className="absolute left-0 -bottom-2 h-[3px] bg-accent origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    />
  </motion.h1>
</motion.div>

<motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
>
  {/* foto profil */}
</motion.div>
```

Ini pakai `animate` bukan `whileInView` karena Hero selalu terlihat pertama kali page load, bukan hasil scroll.

---

## 2. Skills — "Card Stagger + Bar Fill"

Karakter: skill bars butuh terasa "diisi", bukan cuma muncul.

- 3 card (Frontend, Backend, Workflow) muncul stagger dari kiri ke kanan.
- Tiap progress bar di dalam card baru mulai animasi width 0% → target% **setelah** card-nya sendiri sudah kelihatan, bukan bareng semua card sekaligus.

```tsx
<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: '-80px' }}
  variants={staggerContainer(0.15)}
  className="grid grid-cols-3 gap-6"
>
  {skillGroups.map((group) => (
    <motion.div key={group.title} variants={fadeUp} className="bg-surface p-6 rounded-lg">
      <h3>{group.title}</h3>
      {group.skills.map((skill, i) => (
        <div key={skill.name} className="mt-3">
          <div className="flex justify-between font-mono text-xs">
            <span>{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>
          <div className="h-1.5 bg-line rounded-full mt-1 overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  ))}
</motion.div>
```

---

## 3. Experience — "Timeline Grows as You Scroll"

Karakter: ini satu-satunya section yang animasinya **terikat langsung ke posisi scroll** (scroll-linked, bukan cuma scroll-triggered), karena kontennya memang timeline kronologis — garis vertikal yang tumbuh terasa natural di sini.

```tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ExperienceTimeline({ items }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.5'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={ref} className="relative pl-8">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-line" />
      <motion.div
        className="absolute left-0 top-0 w-px bg-accent"
        style={{ height: lineHeight }}
      />
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="mb-10"
        >
          {/* card experience */}
        </motion.div>
      ))}
    </div>
  );
}
```

Garis hijau (`--accent`) tumbuh mengikuti scroll persis di sepanjang section ini, lalu tiap card fade-slide dari kiri saat masuk viewport.

---

## 4. Licenses & Certifications — "Grid Pop, Alternating Delay"

Karakter: 5 card sertifikat, kesan "checklist tervalidasi" — pop kecil (scale) bukan slide, karena ini bukan data naratif seperti timeline, ini kumpulan bukti/badge.

```tsx
<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: '-60px' }}
  variants={staggerContainer(0.08)}
  className="grid grid-cols-3 gap-5"
>
  {certifications.map((cert) => (
    <motion.div
      key={cert.title}
      variants={{
        hidden: { opacity: 0, scale: 0.92 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={{ y: -3 }}
      className="bg-surface p-5 rounded-lg border border-line"
    >
      {/* isi card */}
    </motion.div>
  ))}
</motion.div>
```

`whileHover` kecil ditambahkan supaya card ini terasa "tappable" — beda dari card skill yang statis.

---

## 5. Projects — "Image Clip Reveal, Alternating Direction"

Karakter: ini section paling visual (screenshot project), jadi animasinya di gambar, bukan di teks. Tiap card project muncul dengan clip-path reveal dari arah bergantian (card ganjil dari kiri, genap dari kanan) supaya ritme grid 2 kolom terasa hidup.

```tsx
function ProjectCard({ project, index }) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="overflow-hidden rounded-lg"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
      >
        <img src={project.thumbnail} alt={project.title} />
      </motion.div>
      {/* judul, deskripsi, tags — fade biasa, delay dikit setelah gambar */}
    </motion.div>
  );
}
```

---

## 6. Contact — "Split Reveal: Info Left, Form Right"

Karakter: dua kolom (info kontak vs form) — animasinya juga dibagi dua arah biar terasa seperti "membuka pintu", bukan satu blok fade-up generik.

```tsx
<div className="grid grid-cols-2 gap-8">
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6 }}
  >
    {/* info kontak, email, lokasi, social */}
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    {/* form: stagger tiap field */}
    <motion.div variants={staggerContainer(0.08, 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {formFields.map((field) => (
        <motion.div key={field.name} variants={fadeUp}>
          {/* input */}
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</div>
```

---

## 7. Ringkasan Karakter per Section

| Section | Jenis animasi | Kenapa |
|---|---|---|
| Hero | Load-in stagger + underline draw | First impression, harus cepat & jelas urutannya |
| Skills | Stagger card + bar fill | Data kuantitatif, perlu terasa "keisi" |
| Experience | Scroll-linked timeline growth | Konten kronologis, garis waktu literal |
| Certifications | Pop/scale stagger + hover lift | Kumpulan badge, bukan narasi |
| Projects | Clip-path image reveal, alternating | Section paling visual, showcase karya |
| Contact | Split left/right reveal | Dua kolom fungsi berbeda (baca vs isi form) |

---

## 8. Guard Rails

- Semua `whileInView` pakai `once: true` — animasi tidak boleh replay tiap kali user scroll naik-turun, itu yang bikin terasa murah.
- Hormati `prefers-reduced-motion`: bungkus semua variant dengan cek berikut, dan kalau `true`, matikan transform/opacity animation (langsung render final state):

```tsx
import { useReducedMotion } from 'framer-motion';

const shouldReduceMotion = useReducedMotion();
const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
```

- Durasi animasi antar-section dijaga di kisaran 0.4–0.8s — di atas itu mulai terasa lambat saat scroll cepat.
- Timeline scroll-linked (§3) satu-satunya yang boleh scroll-linked; section lain tetap scroll-triggered biasa supaya tidak terlalu "sibuk" secara keseluruhan.

---

**Last Updated**: 2026-07-06
