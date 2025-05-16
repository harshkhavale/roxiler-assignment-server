
# Roxiller Assignment - Server

This is the backend of the application, developed using **Node.js**, **Express.js**, **PostgreSQL**, and **Prisma ORM**. It serves a role-based store rating system, supporting System Administrators, Store Owners, and Normal Users.

## Live Demo

[Deployed on Render](https://roxiler-assignment-server-5uzz.onrender.com/)

---

## Tech Stack

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **Prisma ORM**
* **CORS**
* **dotenv**
* **JWT (JSON Web Tokens)**

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/harshkhavale/roxiller-assignment-server.git
cd roxiller-assignment-server/server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root of the `server` directory with the following content:

```env
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database_name>"
PORT=5000
JWT_SECRET="your_secret_key"
```


### 4. Prisma Setup

Run database migrations and generate the Prisma client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start the Server

```bash
npm run dev
```

The server will be accessible on `http://localhost:5000` (or the configured port).

---

## Project Structure

```
server/
├── prisma/
│   └── schema.prisma       # Prisma schema file
├── src/
│   ├── controllers/        # Route handler logic
│   ├── routes/             # API routes
│   ├── middlewares/        # Auth and validation middleware
│   ├── models/             # Prisma models (via Prisma Client)
│   └── utils/              # Helper functions
├── .env                    # Environment variables
├── index.js                # Entry point
├── package.json
```

---

## Key Functionalities

* User registration and login with role assignment (Normal User, Store Owner, Admin)
* JWT authentication and role-based access control
* Store creation and management by admins
* Store rating system by users
* Rating visibility and dashboard for store owners
* System metrics dashboard for administrators


