# Setup Guide - Portfolio React + Laravel

Panduan lengkap untuk setup dan menjalankan project portfolio.

## 📋 Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **PHP** 8.2+ ([Download](https://www.php.net/))
- **Composer** ([Download](https://getcomposer.org/))
- **MySQL** 8.0+ ([Download](https://www.mysql.com/))
- **Git** ([Download](https://git-scm.com/))

Untuk environment Laragon, semua tools sudah included.

---

## 1️⃣ Frontend Setup (React + Vite)

### Step 1: Install Dependencies

```bash
cd frontend
npm install
```

Dependencies yang akan diinstall:
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Axios (HTTP client)
- React Router (routing)
- Lucide Icons (icons)

### Step 2: Environment Configuration

Buat file `.env.local` di folder `frontend/`:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Raja Portfolio
VITE_APP_URL=http://localhost:5173
```

### Step 3: Run Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di: **http://localhost:5173**

### Build untuk Production

```bash
npm run build
# Output: dist/ folder
```

---

## 2️⃣ Backend Setup (Laravel)

### Step 1: Install Dependencies

```bash
cd backend
composer install
```

### Step 2: Generate Application Key

```bash
php artisan key:generate
```

Output akan otomatis update `.env` file.

### Step 3: Database Setup

#### Option A: Menggunakan Database Existing

Edit `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio_db
DB_USERNAME=root
DB_PASSWORD=
```

Buat database baru:
```bash
# MySQL CLI
mysql -u root -e "CREATE DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

#### Option B: Menggunakan phpMyAdmin (Laragon)

1. Buka phpMyAdmin dari Laragon
2. Create new database: `portfolio_db`
3. Update `.env` dengan credentials Anda

### Step 4: Run Migrations

```bash
php artisan migrate:fresh --seed
```

Ini akan:
- Create all tables (migrations)
- Seed sample data (seeders)

### Step 5: Run Development Server

```bash
php artisan serve
```

API akan berjalan di: **http://localhost:8000**

Base API URL: **http://localhost:8000/api**

---

## 3️⃣ Connect Frontend & Backend

Pastikan kedua server running:

```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend
cd backend
php artisan serve
```

### Test Connection

Di browser, buka: **http://localhost:8000/api/portfolio**

Jika response JSON muncul, berarti API berhasil! ✅

---

## 🛠 Common Issues & Solutions

### Issue: "Cannot GET /api/portfolio"

**Solution:**
- Pastikan backend sudah running (`php artisan serve`)
- Cek CORS configuration di `.env` backend
- Restart server

### Issue: "npm: command not found"

**Solution:**
- Install Node.js dari https://nodejs.org/
- Restart terminal setelah install

### Issue: "php: command not found"

**Solution:**
- Install PHP dari https://www.php.net/
- Atau gunakan Laragon yang include PHP

### Issue: "CORS error di browser"

**Solution:**
Edit `.env` backend:
```env
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

Restart backend server.

### Issue: Database connection error

**Solution:**
```bash
# Test MySQL connection
mysql -u root -p

# Check .env credentials
cat .env | grep DB_

# Recreate database
php artisan migrate:fresh --seed
```

---

## 📦 Project Dependencies

### Frontend (`package.json`)

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "axios": "^1.6.0",
    "framer-motion": "^10.16.0",
    "tailwindcss": "^3.4.0",
    "lucide-react": "^0.294.0"
  }
}
```

### Backend (`composer.json`)

```json
{
  "require": {
    "php": "^8.2",
    "laravel/framework": "^11.0",
    "laravel/sanctum": "^4.0"
  }
}
```

---

## 🔄 Workflow Sehari-hari

### Development

```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend
cd backend
php artisan serve

# Terminal 3 - (Optional) Watch database changes
php artisan tinker
```

### Testing Backend API

Gunakan tools seperti:
- **Postman** (https://www.postman.com/)
- **Insomnia** (https://insomnia.rest/)
- **curl** (command line)

Contoh:
```bash
# Test GET endpoint
curl http://localhost:8000/api/portfolio

# Test POST endpoint
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","message":"Hello"}'
```

---

## 📚 Next Steps

1. **Personalisasi Data:**
   - Update `backend/app/Http/Controllers/PortfolioController.php`
   - Edit skills di `frontend/src/components/sections/Skills.tsx`
   - Add projects di backend

2. **Add Blog Feature:**
   - Create `BlogPost` model: `php artisan make:model BlogPost -m`
   - Implement blog controller
   - Create blog section component

3. **Connect to Database:**
   - Create migrations untuk each feature
   - Seed database dengan sample data
   - Update API endpoints

4. **Styling Customization:**
   - Update `frontend/tailwind.config.js` colors
   - Modify component styles
   - Add custom CSS di `frontend/src/styles/globals.css`

5. **Deployment:**
   - Deploy frontend ke Vercel/Netlify
   - Deploy backend ke Heroku/Render
   - Setup custom domain

---

## 📞 Troubleshooting

Jika ada masalah, cek:

1. ✅ Node.js version: `node --version` (harus 18+)
2. ✅ PHP version: `php --version` (harus 8.2+)
3. ✅ Composer installed: `composer --version`
4. ✅ MySQL running (untuk Laragon, cek status)
5. ✅ Port 5173 & 8000 tidak terpakai program lain
6. ✅ `.env` file di kedua folder sudah dikonfigurasi

---

**Last Updated**: 2026-06-29
