# API Documentation - Portfolio Backend

Dokumentasi lengkap semua API endpoints yang tersedia di backend Laravel.

**Base URL**: `http://localhost:8000/api`

---

## 📋 Table of Contents

1. [Portfolio](#portfolio)
2. [Skills](#skills)
3. [Experience](#experience)
4. [Projects](#projects)
5. [Blog](#blog)
6. [Contact](#contact)
7. [Error Handling](#error-handling)

---

## Portfolio

### Get Portfolio Information

Mendapatkan informasi umum portfolio.

```http
GET /api/portfolio
```

**Response (200 OK):**
```json
{
  "name": "Muhammad Raja Kautsar",
  "title": "Full-Stack Developer",
  "bio": "Passionate developer with expertise in React, Laravel, and modern web technologies.",
  "email": "raja@example.com",
  "location": "Depok, West Java, Indonesia",
  "social": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "instagram": "https://instagram.com/username"
  }
}
```

**Status Codes:**
- `200` - Success
- `500` - Server error

---

## Skills

### Get All Skills

Mendapatkan list semua skills yang dimiliki.

```http
GET /api/skills
```

**Query Parameters:**
- `category` (optional): Filter by category (Frontend, Backend, Tools)

**Example:**
```http
GET /api/skills?category=Frontend
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "React",
    "category": "Frontend",
    "level": 90
  },
  {
    "id": 2,
    "name": "TypeScript",
    "category": "Frontend",
    "level": 85
  },
  {
    "id": 3,
    "name": "Tailwind CSS",
    "category": "Frontend",
    "level": 90
  },
  {
    "id": 4,
    "name": "Laravel",
    "category": "Backend",
    "level": 90
  },
  {
    "id": 5,
    "name": "PHP",
    "category": "Backend",
    "level": 88
  },
  {
    "id": 6,
    "name": "MySQL",
    "category": "Backend",
    "level": 85
  }
]
```

**Notes:**
- Level adalah 0-100 (persentase)
- Category adalah Frontend, Backend, atau Tools

---

## Experience

### Get All Experiences

Mendapatkan list semua pengalaman kerja.

```http
GET /api/experience
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "period": "2024 - Present",
    "title": "Senior Full-Stack Developer",
    "company": "Tech Company",
    "description": "Leading development of modern web applications using React and Laravel"
  },
  {
    "id": 2,
    "period": "2022 - 2024",
    "title": "Full-Stack Developer",
    "company": "Web Agency",
    "description": "Built and maintained multiple client projects with focus on performance and UX"
  },
  {
    "id": 3,
    "period": "2021 - 2022",
    "title": "Frontend Developer",
    "company": "Startup",
    "description": "Developed responsive web interfaces and improved user experience"
  }
]
```

**Notes:**
- Data disajikan dalam urutan terbaru ke terlama
- Gunakan period field untuk display timeline

---

## Projects

### Get All Projects

Mendapatkan list semua project yang telah dikerjakan.

```http
GET /api/projects
```

**Query Parameters:**
- `limit` (optional, default: 10): Jumlah projects per page
- `page` (optional, default: 1): Page number untuk pagination

**Example:**
```http
GET /api/projects?limit=5&page=1
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Project 1",
    "description": "A modern web application built with React and Laravel",
    "stack": ["React", "Laravel", "MySQL", "Tailwind"],
    "github": "https://github.com/username/project1",
    "demo": "https://project1-demo.com",
    "image": "/images/project-1.jpg"
  },
  {
    "id": 2,
    "title": "Project 2",
    "description": "E-commerce platform with real-time features",
    "stack": ["React", "Node.js", "MongoDB", "Stripe"],
    "github": "https://github.com/username/project2",
    "demo": "https://project2-demo.com",
    "image": "/images/project-2.jpg"
  },
  {
    "id": 3,
    "title": "Project 3",
    "description": "Analytics dashboard for data visualization",
    "stack": ["React", "Laravel", "Chart.js", "Docker"],
    "github": "https://github.com/username/project3",
    "demo": "https://project3-demo.com",
    "image": "/images/project-3.jpg"
  }
]
```

**Notes:**
- `stack` adalah array dari technologies yang digunakan
- `image` adalah relative path ke image di `frontend/public/images/`

---

## Blog

### Get All Blog Posts

Mendapatkan list semua blog posts.

```http
GET /api/blog
```

**Query Parameters:**
- `limit` (optional, default: 10): Jumlah posts per page
- `page` (optional, default: 1): Page number untuk pagination
- `search` (optional): Search by title atau content

**Example:**
```http
GET /api/blog?limit=5&search=react
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "slug": "getting-started-with-react",
    "title": "Getting Started with React",
    "excerpt": "Learn the basics of React and how to build your first component.",
    "content": "Full blog content here...",
    "date": "2024-01-15",
    "author": "Raja"
  },
  {
    "id": 2,
    "slug": "laravel-best-practices",
    "title": "Laravel Best Practices",
    "excerpt": "Tips and tricks for writing clean and maintainable Laravel code.",
    "content": "Full blog content here...",
    "date": "2024-01-10",
    "author": "Raja"
  }
]
```

### Get Single Blog Post

Mendapatkan detail satu blog post berdasarkan slug.

```http
GET /api/blog/{slug}
```

**Parameters:**
- `slug` (required): URL-friendly identifier untuk blog post

**Example:**
```http
GET /api/blog/getting-started-with-react
```

**Response (200 OK):**
```json
{
  "id": 1,
  "slug": "getting-started-with-react",
  "title": "Getting Started with React",
  "content": "Full blog content here...",
  "date": "2024-01-15",
  "author": "Raja",
  "tags": ["react", "development", "javascript"]
}
```

**Error Response (404 Not Found):**
```json
{
  "error": "Blog post not found"
}
```

---

## Contact

### Submit Contact Form

Mengirimkan pesan melalui contact form.

```http
POST /api/contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like to discuss a project opportunity..."
}
```

**Validation Rules:**
- `name`: Required, string, max 255 characters
- `email`: Required, valid email format
- `message`: Required, string, min 10 characters

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Thank you for your message! I'll get back to you soon."
}
```

**Error Response (422 Unprocessable Entity):**
```json
{
  "success": false,
  "errors": {
    "name": ["The name field is required."],
    "email": ["The email must be a valid email address."],
    "message": ["The message must be at least 10 characters."]
  }
}
```

**Notes:**
- Email notifikasi akan dikirim ke admin (jika dikonfigurasi)
- Response time bisa 1-2 detik jika email dikirim

---

## Error Handling

Semua error responses akan mengikuti format ini:

```json
{
  "error": "Error message here",
  "status": 400
}
```

**Common HTTP Status Codes:**

| Status | Meaning |
|--------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid request data |
| 404 | Not Found - Resource tidak ditemukan |
| 422 | Unprocessable Entity - Validation error |
| 500 | Internal Server Error - Server error |

---

## Example Requests

### Using cURL

```bash
# Get portfolio info
curl http://localhost:8000/api/portfolio

# Get all skills
curl http://localhost:8000/api/skills

# Get skills by category
curl "http://localhost:8000/api/skills?category=Frontend"

# Get all projects
curl http://localhost:8000/api/projects

# Get single blog post
curl http://localhost:8000/api/blog/getting-started-with-react

# Submit contact form
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I am interested in your services."
  }'
```

### Using JavaScript/Axios

```javascript
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api'
})

// Get portfolio info
const portfolio = await api.get('/portfolio')

// Get skills
const skills = await api.get('/skills', { params: { category: 'Frontend' } })

// Submit contact form
const response = await api.post('/contact', {
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!'
})
```

### Using Frontend Services

Backend sudah menyediakan `src/services/api.ts` yang dapat digunakan langsung:

```typescript
import { portfolioApi } from '@/services/api'

// Get portfolio
const portfolio = await portfolioApi.getPortfolio()

// Get skills
const skills = await portfolioApi.getSkills()

// Submit contact
await portfolioApi.submitContact({
  name: 'John',
  email: 'john@example.com',
  message: 'Hello'
})
```

---

## CORS Configuration

API sudah dikonfigurasi untuk menerima requests dari frontend.

**Allowed Origins** (di `.env`):
```env
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

Update ini jika frontend berjalan di URL yang berbeda.

---

## Rate Limiting

Untuk production, tambahkan rate limiting:

```php
// app/Http/Middleware/RateLimitMiddleware.php
// Limitasi: 60 requests per minute per IP
```

---

## Authentication

Untuk future enhancements dengan authentication:

```php
// Gunakan Laravel Sanctum
// php artisan install:api
// php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

---

**Last Updated**: 2026-06-29
