# 🧹 Housekeeping Management System

A full-stack web application to simplify and streamline hostel housekeeping management.  
Built using **Spring Boot** (back end) and **Angular** (front end), the system supports **admin-controlled scheduling, real-time service requests, feedback collection**, and more.

---

## 🚀 Deployment Links

- **Frontend (Angular + Netlify):**  
  👉 [https://housekeeping-app-maddy.netlify.app](https://housekeeping-app-maddy.netlify.app)

- **Backend (Spring Boot + Render):**  
  👉 [https://housekeeping-app-f55s.onrender.com](https://housekeeping-app-f55s.onrender.com)

---

## 📌 Important Note

> ⚠️ After login, please **refresh the page once** to reflect changes (due to state sync across services).

---

## 🔁 System Flow Overview

### 👑 Master (Super Admin)
- Pre-inserted into the H2 database.
- Responsible for **adding hostel Admins**.

---

### 🏢 Hostel Admin
- Logs in using credentials added by the Master.
- Can **add Housekeepers and Students** for their respective hostel and floors.

---

### 👩‍🎓 Student
- Logs in using provided credentials.
- Can:
  - **Request housekeeping service**.
  - **Submit feedback, complaints, or suggestions** based on services received.
  - **Reset password using OTP-based email system** in case of a forgotten password.

---

### 🧹 Housekeeping Flow
- **Students** submit requests for service.
- **Admin** allocates available Housekeepers.
  - If **no worker is available during request**, the student is **notified at submission**.
  - If **no worker is left at allocation time**, the **Admin can decline the request**.

---

## 🔐 Forgot Password (OTP-based)
- An OTP is sent to the student’s **registered email**.
- On verification, the password is **reset to default**.
- Students can then log in and update their password.

---

## 🛠️ Tech Stack

| Layer      | Technology             |
|------------|------------------------|
| Frontend   | Angular, TypeScript, HTML, CSS |
| Backend    | Spring Boot, REST APIs |
| Database   | H2 (in-memory or file-based) |
| Hosting    | Render (backend), Netlify (frontend) |

---

## 🗄️ Database Access

- **H2 Console:**  
  Navigate to `https://housekeeping-app-f55s.onrender.com/h2-console`

- **JDBC URL:**  
  `jdbc:h2:file:./data/testdb`  
  (default username: `sa`, no password)

---

## 📷 PPT illustration 

👉 [House-Keeping App PPT](https://docs.google.com/presentation/d/1RzwQyTIlvH7ZS15dfLnzgeiSNwks_jcb/edit?usp=sharing&ouid=101421511366538738174&rtpof=true&sd=true)
👉 [Backend Schema](https://drive.google.com/file/d/1CoLqbcZkBOfs4GwJi8QcGW6Lff1-I-dS/view?usp=sharing)

---

## 🧑‍💻 Author

**Madhesh Goyal**  
`Electrical Engineering | NIT Jalandhar`  
Full Stack Developer | Java | Angular | Spring Boot | REST APIs

---

## 📜 License

This project is for academic and learning purposes.  
Feel free to fork and modify it to suit your needs!

---
