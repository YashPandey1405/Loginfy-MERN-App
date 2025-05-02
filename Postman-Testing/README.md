# 📬 Loginfy-MERN – Postman API Collection

This project includes a Postman collection named **Loginfy-MERN**, created to test the authentication flow of your Node.js app using MERN (JSON Web Tokens). It covers all the key routes needed to register, log in, log out, and view the profile.

---

## 📂 Collection Overview

### 🔐 Login Folder

- **GET `/login`** – Basic route access check.
- **POST `/login`** – Authenticate a user.
  ```json
  {
    "loginUserName": "YashPandey",
    "loginEmail": "pandeyyash041@gmail.com",
    "loginPassword": "yashpandey"
  }
  ```

### 📝 Signup Folder

- **GET `/signup`** – Basic route access check.
- **POST `/signup`** – Create a new user.
  ```json
  {
    "signupUserName": "PrabhashPandey1405",
    "signupFullName": "Prabhash Pandey",
    "signupEmail": "pandeyprabhash1405@gmail.com",
    "signupPassword": "prabhashpandey"
  }
  ```

### 🚪 LogOut Folder

- **GET `/logout`** – Logs the user out.

### 👤 Profile Page (Accessible POST Login/Signup Only)

- **GET `/profile`** – Fetch user profile (likely requires auth token).

---

## 🚀 How to Use This Collection

1. Open [Postman](https://www.postman.com/downloads/).
2. Click on **Import** in the top-left corner.
3. Choose the exported file:
   ```
   postman/Loginfy-MERN.postman_collection.json
   ```
4. Start testing the API endpoints!

## ✅ Tips

- Be sure your backend server is running on `http://localhost:8080` before testing.
- Ensure `express.json()` middleware is active for JSON parsing.
- You can modify request bodies in Postman for different test cases.
