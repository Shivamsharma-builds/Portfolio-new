# Shivam Sharma — Portfolio

Production-ready React/Vite portfolio with a Vercel serverless API, MongoDB Atlas contact storage, and Nodemailer confirmation emails.

## Production architecture

```text
Browser
  │
  ├── React + Vite static app
  │       └── /resume.pdf
  │
  └── same-origin /api/*
          ├── /api/health
          ├── /api/profile
          ├── /api/projects
          └── /api/contact
                  │
                  ├── MongoDB Atlas
                  └── SMTP / Nodemailer
```

The production deployment uses **one Vercel project**. The frontend is served by Vite and the files in the root `api/` directory are deployed as Vercel Node.js Functions.

The production frontend calls the API with same-origin paths such as `/api/contact`; no production `VITE_API_URL` is required.

---

## Features

- Responsive React portfolio
- Dynamic project and profile sections
- Contact form with server-side validation
- Contact messages stored in MongoDB Atlas
- Confirmation email through Nodemailer
- Static downloadable resume at `/resume.pdf`
- Same-origin Vercel API
- Basic honeypot protection for contact submissions
- Optimized WebP profile images
- Lazy loading for below-the-fold imagery
- Deferred animation-library loading
- Vite production build optimization

---

## Technology stack

### Frontend

- React
- Vite
- React Icons
- Tailwind CSS / project styling
- Framer Motion
- Lenis
- GSAP + ScrollTrigger

### Backend

- Vercel Node.js Functions
- MongoDB Atlas
- Mongoose
- Nodemailer

### Local development backend

An Express server is retained for local development where applicable. Production API routes are handled by Vercel Functions in `api/`.

---

## Project structure

```text
Portfolio/
├── api/
│   ├── health.js
│   ├── profile.js
│   ├── projects.js
│   └── contact.js
│
├── server/
│   ├── db.js
│   ├── email.js
│   └── ...
│
├── src/
│   ├── components/
│   ├── assets/
│   └── ...
│
├── public/
│   └── resume.pdf
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

---

## Local development

### 1. Install dependencies

From the project root:

```bash
npm install
```

### 2. Configure environment variables

Copy the example environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Fill in the required local credentials. Never commit `.env`.

### 3. Run the Vite application

```bash
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

### 4. Run the local full-stack development setup

If the project includes the local Express development server and the corresponding script:

```bash
npm run dev:full
```

The local Express API normally runs at:

```text
http://localhost:5000
```

### 5. Test the Vercel-style environment locally

Install the Vercel CLI if needed:

```bash
npm install -g vercel
```

Then:

```bash
vercel dev
```

This is useful for testing the root `/api/*` Functions and Vercel routing before production deployment.

---

# Production deployment on Vercel

## 1. Push the project to GitHub

Commit the project source code, but **never commit `.env` or production credentials**.

Check before pushing:

```bash
git status
```

You can also verify that `.env` is not tracked:

```bash
git ls-files .env
```

That command should return nothing.

---

## 2. Import the repository into Vercel

Open the Vercel dashboard and import the GitHub repository.

Recommended project settings:

```text
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

No separate frontend/backend Vercel projects are required for this architecture.

---

## 3. Add environment variables

In:

```text
Vercel
→ Project
→ Settings
→ Environment Variables
```

Add the following to the **Production** environment:

```text
MONGODB_URI
MONGODB_DB_NAME

PORTFOLIO_NAME
CONTACT_EMAIL
CONTACT_PHONE
CONTACT_LOCATION
CONTACT_AVAILABILITY

GITHUB_URL
LINKEDIN_URL
TWITTER_URL

SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
MAIL_FROM
```

Keep MongoDB and SMTP credentials server-side.

Do **not** expose these as `VITE_*` variables.

The frontend should call:

```js
fetch('/api/contact', ...)
```

rather than a hardcoded localhost or production API URL.

---

## 4. Configure MongoDB Atlas

Create a MongoDB Atlas database user with a strong password.

Configure Atlas Network Access so the deployed application can connect to the cluster.

If a database password has previously been exposed, rotate it before production.

Use the complete MongoDB connection string as the value of:

```text
MONGODB_URI
```

and keep the database name in:

```text
MONGODB_DB_NAME
```

---

## 5. Configure SMTP / Nodemailer

Provide the SMTP credentials through Vercel environment variables:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password-or-app-password
MAIL_FROM="Your Name <your-email@example.com>"
```

For Gmail, use a Google App Password rather than your normal account password.

---

## 6. Build locally before deployment

Run:

```bash
npm run build
```

A successful build ends with:

```text
✓ built in ...
```

Warnings about large chunks do not necessarily mean the build failed.

For this project, the Vite chunk warning threshold is configured as a reporting threshold only. It does not make the JavaScript bundle smaller.

---

## 7. Deploy a Vercel preview

From the project root:

```bash
vercel
```

Test the preview deployment before production.

Verify:

```text
/
 /resume.pdf
 /api/health
 /api/profile
 /api/projects
Contact form
MongoDB contact record
Confirmation email
```

For the contact form, verify all three parts:

```text
Contact form
    ↓
POST /api/contact
    ↓
MongoDB Atlas
    +
Nodemailer confirmation email
```

---

## 8. Deploy production

Once the preview works:

```bash
vercel --prod
```

If the GitHub repository is connected to Vercel, pushing to the configured production branch can also trigger a production deployment automatically.

---

# API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API and MongoDB health check |
| GET | `/api/profile` | Portfolio profile data |
| GET | `/api/projects` | Project data |
| POST | `/api/contact` | Store contact message and send confirmation email |
| GET | `/resume.pdf` | Static resume |

Production clients should use `/resume.pdf` directly.

---

# Contact form flow

```text
Visitor
   │
   ▼
React Contact Form
   │
   │ POST /api/contact
   ▼
Vercel Function
   │
   ├── Validate input
   │
   ├── Check honeypot
   │
   ├── Save contact
   │      │
   │      ▼
   │   MongoDB Atlas
   │
   └── Send confirmation
          │
          ▼
       Nodemailer
```

A successful database write should not be discarded solely because confirmation-email delivery fails.

---

# Security

- Never commit `.env`.
- Keep MongoDB credentials server-side.
- Keep SMTP credentials server-side.
- Validate and length-limit contact form input on the server.
- Use the hidden honeypot field to reduce basic automated submissions.
- Use same-origin `/api/*` requests in production.
- Rotate credentials immediately if they have been exposed.
- Do not put secrets in `VITE_*` variables.

---

# Performance optimizations

The production build includes:

- `profile1.png` and `profile2.png` converted to WebP.
- Hero profile image prioritized with `fetchPriority="high"`.
- Below-the-fold About image lazy-loaded.
- GSAP, ScrollTrigger, and Lenis loading deferred so animation dependencies can be split from the initial application chunk.
- Production source maps disabled.
- Vite chunk warning threshold set to `600 kB` as a reporting threshold only.

The chunk warning threshold does **not** reduce bundle size. Actual performance improvements come from image optimization, code splitting, and deferred loading.

---

# Useful commands

Install:

```bash
npm install
```

Development:

```bash
npm run dev
```

Full local development, if configured:

```bash
npm run dev:full
```

Production build:

```bash
npm run build
```

Vercel preview:

```bash
vercel
```

Vercel production:

```bash
vercel --prod
```

---

# Troubleshooting

### `npm run build` fails

Run:

```bash
npm install
npm run build
```

Then inspect the first actual error above the final Vite summary.

### `/api/contact` returns 500

Check:

- `MONGODB_URI`
- `MONGODB_DB_NAME`
- MongoDB Atlas Network Access
- SMTP environment variables
- Vercel Function logs

### Contact saves but email is not received

Check:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM`

Also check spam/junk folders and your SMTP provider's delivery logs.

### `/api/*` works locally but not on Vercel

Confirm that the production project contains the root:

```text
api/
```

directory and that the environment variables are configured for the **Production** environment.

### MongoDB connection errors

Verify the Atlas connection string, database-user password, and Network Access configuration. Rotate the database-user password if the previous password was exposed.

---

# License

This portfolio is personal project code.
