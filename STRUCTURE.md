# Portfolio Project - File Structure Guide

## 📂 Root Folder (`c:\laragon\www\Porto\`)

```
Porto/
├── frontend/                    ← React JS aplikasi
├── backend/                     ← Laravel API
├── git-mcp/                     ← (Optional) Git MCP Server
├── README.md                    ← Overview project
├── SETUP.md                     ← Setup guide
├── API.md                       ← API documentation
├── PORTFOLIO_DOCS.md            ← Design system & requirements
├── .vscode/mcp.json            ← MCP configuration
└── STRUCTURE.md                 ← File ini
```

---

## 🎨 Frontend Structure

```
frontend/
├── public/
│   ├── images/                  ← Profile & project images
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          ← Navigation bar
│   │   ├── Footer.tsx          ← Footer dengan social links
│   │   └── sections/           ← Section components
│   │       ├── Hero.tsx        ← Intro section
│   │       ├── Skills.tsx      ← Skills grid
│   │       ├── Experience.tsx  ← Timeline
│   │       ├── Projects.tsx    ← Project showcase
│   │       └── Contact.tsx     ← Contact form
│   │
│   ├── pages/
│   │   ├── Home.tsx            ← Landing page (all sections)
│   │   ├── BlogList.tsx        ← Blog list (ready to implement)
│   │   └── BlogDetail.tsx      ← Blog detail (ready to implement)
│   │
│   ├── services/
│   │   └── api.ts              ← Axios API client
│   │
│   ├── hooks/                  ← Custom React hooks (ready)
│   ├── utils/                  ← Helper functions (ready)
│   ├── styles/
│   │   └── globals.css         ← Global CSS & Tailwind
│   │
│   ├── App.tsx                 ← Main app component
│   └── main.tsx                ← Entry point
│
├── .env.example                ← Environment template
├── .env.local                  ← Local environment (actual values)
├── .gitignore
├── .vscode/extensions.json     ← Recommended VS Code extensions
├── index.html                  ← HTML template
├── package.json                ← Dependencies & scripts
├── tsconfig.json               ← TypeScript config
├── tailwind.config.js          ← Tailwind CSS configuration
├── postcss.config.js           ← PostCSS configuration
├── vite.config.js              ← Vite build configuration
└── README.md                   ← Frontend-specific README
```

### Frontend Key Files

| File | Purpose |
|------|---------|
| `App.tsx` | Main application component dengan routing |
| `main.tsx` | Entry point untuk React |
| `services/api.ts` | Axios instance untuk API calls |
| `tailwind.config.js` | Customization colors, fonts, spacing |
| `vite.config.js` | Build configuration & proxy setup |
| `.env.local` | Environment variables (sensitive) |

---

## 🔌 Backend Structure

```
backend/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       ├── PortfolioController.php   ← Portfolio info
│   │       ├── SkillController.php       ← Skills CRUD
│   │       ├── ExperienceController.php  ← Experience CRUD
│   │       ├── ProjectController.php     ← Projects CRUD
│   │       ├── BlogController.php        ← Blog posts
│   │       └── ContactController.php     ← Contact form handler
│   │
│   └── Models/                          ← Database models (ready)
│       ├── Skill.php
│       ├── Experience.php
│       ├── Project.php
│       └── BlogPost.php
│
├── database/
│   ├── migrations/               ← Database schema
│   │   ├── create_skills_table.php
│   │   ├── create_experiences_table.php
│   │   └── create_projects_table.php
│   │
│   └── seeders/                 ← Sample data
│       └── DatabaseSeeder.php
│
├── routes/
│   ├── api.php                  ← API routes definition
│   └── web.php
│
├── config/
│   ├── app.php
│   ├── database.php
│   └── cors.php
│
├── .env.example                 ← Environment template
├── .env                         ← Local environment (actual values)
├── .gitignore
├── .vscode/extensions.json      ← Recommended VS Code extensions
├── composer.json                ← Dependencies
├── artisan                      ← Laravel CLI
└── README.md                    ← Backend-specific README
```

### Backend Key Files

| File | Purpose |
|------|---------|
| `routes/api.php` | Semua API route definitions |
| `app/Http/Controllers/*` | Request handlers |
| `app/Models/*` | Database models (Eloquent) |
| `database/migrations/*` | Database schema |
| `.env` | Environment variables (sensitive) |

---

## 🔗 Connection Flow

```
Frontend (React)
      ↓
axios.post('/api/contact')
      ↓
HTTP Request (localhost:8000/api/contact)
      ↓
Backend (Laravel)
      ↓
routes/api.php (routes definition)
      ↓
ContactController.php (handle request)
      ↓
Validation → Save/Process → Response JSON
      ↓
HTTP Response (200/400/500)
      ↓
Frontend handles response
```

---

## 📝 Key Configuration Files

### Frontend

**`.env.local`** - Environment variables untuk frontend
```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Raja Portfolio
```

**`vite.config.js`** - Build tool configuration
- Port: 5173
- Proxy setup untuk API calls
- CSS/JS optimization

**`tailwind.config.js`** - Design tokens
- Colors palette
- Font families
- Spacing scale

### Backend

**`.env`** - Environment variables untuk backend
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=portfolio_db
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

**`routes/api.php`** - API endpoints definition
```php
Route::get('/portfolio', [PortfolioController::class, 'show']);
Route::get('/skills', [SkillController::class, 'index']);
// ... etc
```

---

## 🚀 Development Workflow

### 1. Setup

```bash
# Frontend
cd frontend
npm install
cp .env.example .env.local

# Backend
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
```

### 2. Running

```bash
# Terminal 1: Frontend
cd frontend && npm run dev

# Terminal 2: Backend
cd backend && php artisan serve
```

### 3. Making Changes

**Adding a new section to hero:**
```typescript
// frontend/src/components/sections/Hero.tsx
// Edit Hero component dan styling
```

**Adding a new API endpoint:**
```php
// backend/routes/api.php
// Tambah route baru

// backend/app/Http/Controllers/NewController.php
// Implementasi controller
```

---

## 📦 Important npm Scripts (Frontend)

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production (dist/) |
| `npm run preview` | Preview production build |
| `npm run lint` | Check for code issues |
| `npm run format` | Format code dengan Prettier |

---

## ⚙️ Important Artisan Commands (Backend)

| Command | Purpose |
|---------|---------|
| `php artisan serve` | Start development server (port 8000) |
| `php artisan make:model Model -m` | Create model with migration |
| `php artisan make:controller ControllerName` | Create controller |
| `php artisan migrate` | Run database migrations |
| `php artisan migrate:fresh --seed` | Reset & seed database |
| `php artisan tinker` | Interactive shell |

---

## 🔒 Security Files

Files yang sensitive dan jangan di-commit ke Git:

- `.env` (di frontend & backend) - Contains API keys, DB passwords
- `node_modules/` - Dependencies (auto-generated)
- `vendor/` - PHP dependencies (auto-generated)
- `storage/logs/` - Application logs
- `dist/` - Production build (buat saat deploy)

Gunakan `.gitignore` untuk exclude files ini. ✅ Sudah dikonfigurasi!

---

## 📚 Documentation Files

| File | Content |
|------|---------|
| `README.md` | Overview & quick start |
| `SETUP.md` | Detailed setup instructions |
| `API.md` | Complete API documentation |
| `PORTFOLIO_DOCS.md` | Design system & requirements |
| `STRUCTURE.md` | File structure guide (ini) |

---

## 🎯 Next Steps

1. ✅ Read `README.md` untuk overview
2. ✅ Follow `SETUP.md` untuk setup project
3. ✅ Check `API.md` untuk API endpoints
4. ✅ Read `PORTFOLIO_DOCS.md` untuk design details
5. ✅ Start coding! 🚀

---

**Last Updated**: 2026-06-29
