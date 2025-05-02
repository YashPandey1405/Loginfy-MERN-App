# 🚀 Loginfy-MERN Powered Application

A full-featured **Authentication System** built with the **MERN stack**. `Loginfy-MERN` demonstrates how to create a secure, scalable, and user-friendly login/signup system with modern tools and best practices.

---

## 🔧 Tech Stack

- **Frontend:** React.js (with Routing & Components)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT (Access & Refresh Tokens), Bcrypt.js
- **Mailing:** Nodemailer + Mailtrap + Mailgen
- **File Uploads:** Multer + Cloudinary (or local)
- **Security:** HTTP-only Cookies, CORS
- **Others:** dotenv, cookie-parser, custom API client for HTTP requests

---

## 📦 Features

- 🔐 Secure Signup and Login using **JWT**
- 🔁 Token Refresh with **Refresh Token**
- 🧂 Password hashing using **bcrypt.js**
- ✉️ Welcome Emails via **Mailgen + Nodemailer + Mailtrap**
- 🧾 User Info Fetch via Protected Routes (`/me`)
- 🧼 Auto-login with access token in cookies
- 🪪 Image upload on Signup
- 🍪 Cookie-based authentication (Access & Refresh Token stored in HTTP-only cookies)
- 🌐 **CORS** handled cleanly between Frontend (`localhost:5173`) and Backend
- ⚙️ Modular Code with Routes, Controllers, and Middlewares
- 🌍 Responsive frontend with **React routing**

---

## ▶️ Running the Project

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/Loginfy-MERN.git
cd Loginfy-MERN
```

### 2️⃣ Install dependencies In 2 Seperate Terminals

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3️⃣ Start the servers

```bash
# Backend
npm run dev

# Frontend
npm run dev
```

---

## 📸 Screenshots

### 🔐 Login Page

![Login Page](Conceptual-Learning\asserts\LoginPage.png)

### 📝 Signup Page

![Signup Page](Conceptual-Learning\asserts\SignupPage.png)

### 🏠 Home Page (After Login\Signup)

**Light Mode**
![Home Page Light](Conceptual-Learning\asserts\HomePageLight.png)

**Dark Mode**
![Home Page Dark](Conceptual-Learning\asserts\HomePageDark.png)

---

## 🧠 Lessons Learned

- Deep understanding of React Routing and State Management
- Working with JWT Tokens & Refresh Logic
- Real-world integration of Mailtrap and Nodemailer
- Middleware flow and protected routes using Express
- Handling file uploads with Multer and integrating with Cloudinary
- Building a clean, modular MERN application

---

## 🤝 Acknowledgements

- [Mailtrap](https://mailtrap.io/)
- [Mailgen](https://github.com/eladnava/mailgen)
- [Cloudinary](https://cloudinary.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---
