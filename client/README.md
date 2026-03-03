<div align="center">

# 🔥 Dev Enterprises

### Advanced Fire Protection Solutions — Official Website

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

> The official corporate website for **Dev Enterprises**, a Mumbai-based fire safety company with 20+ years of expertise in firefighting equipment, suppression systems, and fire protection solutions.

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Pages & Routes](#-pages--routes)
- [Scripts](#-scripts)
- [Contact](#-contact)

---

## 🏢 About

**Dev Enterprises** specializes in advanced fire protection solutions, offering high-quality firefighting equipment and suppression systems. With over **20 years of expertise**, we deliver reliable and customized safety solutions to safeguard lives and assets across Mumbai and beyond.

This repository contains the full-stack web application — a React frontend and a TypeScript/Express backend — used as the company's online presence.

---

## ✨ Features

- 🎬 **Fullscreen Hero Video** — Immersive splash screen with animated entry
- 🏠 **Dynamic Home Page** — Showcases services, industry partners, and call-to-action sections
- 🛒 **Product Catalog** — Searchable and filterable fire safety equipment listing with category navigation
- 🔥 **Fire System Services** — Detailed overview of installation, maintenance, and audit services
- 🤝 **Business Associates** — Animated carousel of trusted industry brands
- 📬 **WhatsApp-Integrated Contact Form** — Enquiries routed directly to WhatsApp with pre-formatted messages
- 🗺️ **Embedded Google Maps** — Live location of the corporate office
- 💫 **Page Transitions** — Smooth `Framer Motion` animations on every route change
- 📱 **Fully Responsive** — Mobile-first design across all screen sizes
- ⚡ **Floating Phone Button** — Always-visible quick-contact floating action button

---

## 🛠 Tech Stack

### Frontend (`/client`)

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | ~5.9 | Type safety |
| Vite | 7.x | Build tool & dev server |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 12.x | Animations & transitions |
| React Router DOM | 7.x | Client-side routing |
| Lucide React | Latest | Icon library |

### Backend (`/server`)

| Technology | Version | Purpose |
|---|---|---|
| Node.js | LTS | Runtime |
| Express | 5.x | HTTP server & REST API |
| TypeScript | 5.9 | Type safety |
| Mongoose | 9.x | MongoDB ODM |
| dotenv | Latest | Environment variable management |
| CORS | Latest | Cross-origin resource sharing |

---

## 📁 Project Structure

```
DevEnterprises/
├── client/                    # Frontend (React + Vite)
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── assets/            # Images & media
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── AnimatedPage.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   └── FloatingPhoneIcon.tsx
│   │   ├── contexts/
│   │   │   └── SplashContext.tsx  # Global splash screen state
│   │   ├── pages/             # Route-level page components
│   │   │   ├── Home.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── OurProducts.tsx
│   │   │   ├── FireSystem.tsx
│   │   │   ├── BusinessAssociates.tsx
│   │   │   └── ContactUs.tsx
│   │   ├── App.tsx            # Root app & routes
│   │   └── main.tsx           # Entry point
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
│
└── server/                    # Backend (Express + MongoDB)
    ├── src/
    │   └── index.ts           # Express server entry point
    ├── tsconfig.json
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://www.mongodb.com/) (local or Atlas URI)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/DevEnterprises.git
cd DevEnterprises
```

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file in `/server` (see [Environment Variables](#-environment-variables)), then start the dev server:

```bash
npm run dev
```

The API will be available at `http://localhost:5000`.

### 3. Setup the Frontend

```bash
cd ../client
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🔐 Environment Variables

Create a `.env` file inside the `/server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port the Express server runs on | `5000` |
| `MONGO_URI` | MongoDB connection string | — |

> ⚠️ **Never commit your `.env` file.** It is already included in `.gitignore`.

---

## 🗺 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero video, services overview, industry partners |
| `/about-us` | About Us | Company story, services, meet the proprietor |
| `/our-products` | Our Products | Full searchable fire safety product catalog |
| `/fire-system` | Fire System | Fire suppression system types and details |
| `/business-associates` | Business Associates | Trusted brand partners carousel |
| `/contact-us` | Contact Us | WhatsApp enquiry form + office map |

---

## 📜 Scripts

### Client (`/client`)

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Server (`/server`)

| Command | Description |
|---|---|
| `npm run dev` | Start server with hot-reload (`tsx watch`) |
| `npm run build` | Compile TypeScript |
| `npm start` | Run compiled production server |

---

## 📬 Contact

**Dev Enterprises**
- 📍 G.H. Society, Sakinaka, Mumbai – 400072
- 📞 [+91 96995 72999](tel:+919699572999)
- 📧 [deventp.fire@gmail.com](mailto:deventp.fire@gmail.com)
- 🕐 Mon–Sat: 9:00 AM – 11:00 PM | Emergency: 24/7

---

<div align="center">

Made with ❤️ for fire safety — **Dev Enterprises** © 2025

</div>
