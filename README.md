# 🔐 Secure User Authentication System

A full-stack user authentication project built with **Angular**, **Spring Boot**, and **MongoDB** that supports secure login, registration, and role-based access control using **JWT**.

---

## 🚀 Features

- **User Registration** (automatic role: `USER`)
- **Admin Detection** on registration (`ADMIN` role based on username)
- **JWT-based Authentication** (access token)
- **Spring Boot REST API** secured with Spring Security
- **Angular frontend** with standalone components and signals
- **MongoDB for user storage**
- **Dashboard** showing user info (username, email, role)
- **Admin-Only Dashboard View**: Admins can see all registered users

---

## 🧰 Tech Stack

| Layer       |            Technology             |
|-------------|-----------------------------------|
| Frontend    | Angular                           |
| Backend     | Spring Boot(REST APIs, JWT Security)  |
| Database    | MongoDB                           |
| Security    | JWT Token + Spring Security       |

---


## 🔐 Admin Functionality

- Admin credentials: Username = `admin` (registered manually or by rule)
- Admin Dashboard:
  - Sees their own username, email, role
  - Views **all registered users** in the system

---

## 🌐 API Endpoints

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/auth/register` | Register user         |
| POST   | `/api/auth/login`    | Authenticate user     |
| GET    | `/api/user/profile`  | Get logged-in user    |
| GET    | `/api/user/all`      | Admin only: all users |

---

## Make sure to set these properties in application.properties:
- jwt.secret=your_jwt_secret_key
- jwt.expiration=3600000
- spring.data.mongodb.uri=mongodb://localhost:27017/auth-db
