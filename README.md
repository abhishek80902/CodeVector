# 🚀 Product Catalog Service

A high-performance backend service built with **Node.js**, **Express.js**, and **MongoDB** that supports browsing **200,000+ products** with **cursor-based pagination**, category filtering, and consistent results even when the underlying data changes.

> **Assignment:** CodeVector Backend Take-Home Task

---

## ✨ Features

- ⚡ Handles **200,000+ products**
- 🔄 Cursor-based pagination (No `skip()` / `limit()` pagination)
- 📂 Category filtering
- 🚀 Optimized MongoDB indexes
- 📦 Bulk data seeding (200K products)
- 🛡️ Global error handling
- 📄 Standardized API responses
- 🏗️ Clean layered architecture (Controller → Service → Model)
- 🌐 Ready for deployment on Render + MongoDB Atlas

---

# 🏗️ Project Structure

```text
backend/
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── constants
│   │   └── categories.js
│   │
│   ├── controllers
│   │   └── product.controller.js
│   │
│   ├── middleware
│   │   └── error.middleware.js
│   │
│   ├── models
│   │   └── product.model.js
│   │
│   ├── routes
│   │   └── product.routes.js
│   │
│   ├── scripts
│   │   └── seedProducts.js
│   │
│   ├── services
│   │   └── product.service.js
│   │
│   ├── utils
│   │   ├── apiResponse.js
│   │   ├── asyncHandler.js
│   │   └── cursor.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

# 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the backend directory

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

Start the development server

```bash
npm run dev
```
