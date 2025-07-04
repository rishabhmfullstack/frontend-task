# 🛡️ React Authentication Modal App

A simple React app demonstrating **Sign Up** and **Sign In** modals with validation, local storage user management, protected routes, and a personalized dashboard.

Built with:

- **React + Vite**
- **React Router**
- **React Bootstrap**
- **LocalStorage** (for user storage and session handling)

---

## 📸 Demo Overview

- 👤 **Sign Up Modal**

  - Fields: `Name`, `Email`, `Password`, `Terms Acceptance`
  - Validates all inputs
  - Checks for duplicate email
  - Stores user in `localStorage`
  - Shows success message on successful registration

- 🔐 **Sign In Modal**

  - Fields: `Email`, `Password`
  - Validates inputs
  - Authenticates using stored users
  - Redirects to dashboard on success

- 🧑‍💼 **Dashboard**
  - Protected route
  - Shows `Welcome, [User Name]`
  - Has a **Sign Out** button that clears session and redirects to home

---

## 📁 Project Structure

```txt
src/
├── App.js
├── components/
│ ├── SignUpModal.js
│ ├── SignInModal.js
├── pages/
│ ├── Home.js
│ ├── Dashboard.js
├── routes/
│ └── ProtectedRoute.js

```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rishabhmfullstack/frontend-task.git
cd frontend-task

npm install

npm run dev

```

Then visit:
👉 http://localhost:5173 (or whatever port Vite starts on)
