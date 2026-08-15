# My Personal Portfolio

This repository hosts the complete codebase for my personal portfolio website, designed to showcase my projects, skills, and provide a convenient way for visitors to get in touch. The application is structured into a frontend (React-based) and a backend (Node.js/Express) to ensure a robust and scalable architecture.

## Features

*   **Dynamic Project Display**: Easily manage and display a diverse range of projects with detailed descriptions and links.
*   **Contact Form**: A fully functional contact form that allows visitors to send messages directly, with confirmation emails for successful submissions.
*   **Profile Management**: Serves up-to-date profile information and a downloadable resume.
*   **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.
*   **Modern Technology Stack**: Built with contemporary and efficient technologies for performance and maintainability.

## Technology Stack

### Frontend

*   **Framework**: React.js - A declarative, component-based JavaScript library for building user interfaces.
*   **Build Tool**: Vite - A fast development build tool that provides instant server start and lightning-fast HMR.
*   **Icons**: React Icons - Popular icon libraries integrated as React components for easy use.
*   **Motion**: Framer Motion - A production-ready motion library for React. (Assumed based on common portfolio practices)
*   **Scrolling**: Lenis - A smooth scrolling library. (Assumed based on common portfolio practices)
*   **Animations**: GSAP + ScrollTrigger - A powerful animation library for JavaScript, often used with ScrollTrigger for scroll-based animations. (Assumed based on common portfolio practices)

### Backend

*   **Framework**: Express.js - A minimalist web framework for Node.js, used for building robust APIs.
*   **Database**: MongoDB Atlas - A cloud-based NoSQL database service for storing contact messages, profile data, and project information.
*   **ORM**: Mongoose - An elegant MongoDB object modeling tool for Node.js, simplifying data interaction.
*   **Email Service**: Nodemailer - A module for Node.js applications to allow easy email sending, used for contact form confirmations.

## Project Structure

The project is divided into two main parts:

*   **`client/`**: Contains the React frontend application.
*   **`server/`**: Contains the Node.js/Express backend API.

The backend handles contact form submissions, storing messages in a MongoDB Atlas database and sending confirmation emails. It also exposes API endpoints to serve portfolio content such as profile details, project information, and the resume.

## Setup

To get the project up and running on your local machine, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

### 2. Backend Setup

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

Configure environment variables:

1.  Copy `.env.example` to `.env`.
2.  Replace `<db_password>` in `MONGODB_URI` with the password for your MongoDB Atlas database user.
3.  Ensure your MongoDB Atlas Network Access allows the machine running the backend to connect.
4.  Configure email settings for Nodemailer in `.env`:
    ```env
    SMTP_HOST=smtp.example.com
    SMTP_PORT=465
    SMTP_SECURE=true
    SMTP_USER=your-email@example.com
    SMTP_PASS=your-email-password-or-app-password
    MAIL_FROM="Your Name <your-email@example.com>"
    ```
    *For Gmail, enable 2-Step Verification and create a Google App Password. Use the App Password as `SMTP_PASS`.*

### 3. Frontend Setup

Navigate to the `client` directory and install dependencies:

```bash
cd ../client # Go back to the root and then into client
npm install
```

## Usage

### Start the Backend Server

From the `server` directory:

```bash
npm run server
```

The API will run on `http://localhost:5000` by default.

### Start the Frontend Development Server

From the `client` directory:

```bash
npm run dev
```

The frontend application will typically run on `http://localhost:5173` (or another available port) and will automatically open in your browser.

## API Endpoints (Backend)

*   `GET /api/health` - Checks API and database health.
*   `GET /api/profile` - Retrieves portfolio profile data.
*   `GET /api/projects` - Retrieves project data.
*   `POST /api/contact` - Stores a contact message in MongoDB and sends a confirmation email.
*   `GET /api/resume` - Serves the `public/resume.pdf` file.

Contact messages are stored in the `portfolio` database in the `contactmessages` collection.

## License
