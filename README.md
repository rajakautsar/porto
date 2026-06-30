# Portfolio Muhammad Raja Kautsar

Portfolio profesional dengan **React JS** (Frontend) dan **Laravel** (Backend).

## 📁 Struktur Folder

```
Porto/
├── frontend/                    ← React JS aplikasi
│   ├── public/images/          ← Asset gambar
│   ├── src/
│   │   ├── components/         ← Komponen React
│   │   ├── pages/              ← Halaman
│   │   ├── services/           ← API calls
│   │   └── styles/             ← CSS/Tailwind
│   ├── package.json
│   └── vite.config.js
│
├── backend/                     ← Laravel API
│   ├── app/
│   │   ├── Http/Controllers/   ← API controllers
│   │   └── Models/             ← Database models
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── routes/api.php          ← API routes
│   ├── composer.json
│   └── .env
│
├── git-mcp/                     ← Git MCP Server (optional)
├── PORTFOLIO_DOCS.md           ← Detail portfolio dokumentasi
└── README.md                   ← Ini adalah file ini
```

---

## 🚀 Quick Start

### 1. Setup Frontend (React)

```bash
cd frontend
npm install
npm run dev
# Akses: http://localhost:5173
```

### 2. Setup Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve
# Akses: http://localhost:8000/api
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS, Framer Motion |
| Backend | Laravel 11, MySQL, RESTful API |
| API Client | Axios |
| Animation | Framer Motion |

---

## 📝 Fitur Utama

### Frontend
- ✅ Responsive design dengan Tailwind CSS
- ✅ Smooth animations dengan Framer Motion
- ✅ Contact form yang terhubung ke backend
- ✅ Blog section (ready to implement)
- ✅ Project showcase
- ✅ Skills & Experience timeline

### Backend
- ✅ RESTful API endpoints
- ✅ CORS support
- ✅ Contact form handler
- ✅ Database migrations
- ✅ Sample data seeding

---

## 🔗 API Endpoints

```
GET  /api/portfolio      - Portfolio info
GET  /api/skills         - List skills
GET  /api/experience     - List experiences
GET  /api/projects       - List projects
GET  /api/blog           - List blog posts
GET  /api/blog/{slug}    - Single blog post
POST /api/contact        - Submit contact form
```

---

## 📖 Dokumentasi Lengkap

Lihat [PORTFOLIO_DOCS.md](./PORTFOLIO_DOCS.md) untuk dokumentasi detail tentang:
- Design system
- Komponen structure
- Data management
- Environment variables
- Deployment guide

---

## 🔧 Environment Setup

### Frontend (`.env.local`)
```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Raja Portfolio
```

### Backend (`.env`)
```env
DB_CONNECTION=mysql
DB_DATABASE=portfolio_db
DB_USERNAME=root
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

---

## 📚 Development

### Menambah Skills Baru

Edit `frontend/src/components/sections/Skills.tsx` dan update data skills array.

### Menambah Projects

Edit `backend/app/Http/Controllers/ProjectController.php` atau buat database model untuk projects.

### Menambah Blog Posts

1. Create migration: `php artisan make:model BlogPost -m`
2. Implement di `backend/app/Http/Controllers/BlogController.php`
3. Display di `frontend/src/components/sections/Blog.tsx`

---

## 🎨 Customization

### Warna & Font

Update `frontend/tailwind.config.js`:
```js
colors: {
  'bg-primary': '#FFFFFF',
  'text-primary': '#0A0A0A',
  'accent': '#111111',
  // ... customize lebih lanjut
}
```

### Foto Profile

Replace `frontend/public/images/` dengan foto Anda yang sesungguhnya.

---

## 📱 Testing

### Frontend
```bash
cd frontend
npm run build    # Build untuk production
npm run preview  # Preview production build
```

### Backend
```bash
cd backend
php artisan test  # Run tests
```

---

## 🚢 Deployment

### Frontend → Vercel/Netlify
```bash
cd frontend
npm run build
# Upload dist/ folder
```

### Backend → Heroku/Render
```bash
cd backend
git push heroku main
heroku run "php artisan migrate"
```

---

## 📞 Support

Untuk pertanyaan atau saran, silakan buka issue atau hubungi langsung.

---

**Last Updated**: 2026-06-29 | Created with React + Laravel ❤️
