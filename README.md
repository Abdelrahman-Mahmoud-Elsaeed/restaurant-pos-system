# Restaurant POS & Inventory System

A full-stack web application designed to manage restaurant operations including orders, inventory, menu items, and user management.  
Built with a modern structure using **Node.js, Express, MongoDB, and a frontend framework (React)**.

This system helps restaurants streamline daily operations, track stock in real-time, and improve order management efficiency.

# Frontend Architecture Overview

This project follows a **modular, feature-based structure** to ensure scalability, maintainability, and clear separation of concerns.


## app/

### Purpose
Handles the **core setup and configuration of the application**

### Contains
- `App.jsx` → Root application component
- `router.jsx` → Main routing configuration
- Global providers (state management, auth, etc.)

### Responsibility
- Application initialization
- Route setup and integration
- Connecting all modules together



## modules/

### Purpose
Contains all **business features of the application**

Each folder represents a **self-contained feature/module**

### Contains
- Feature pages (UI screens / pages)
- Feature-specific components
- Feature logic (hooks)
- API services for that feature (services)
- Module-specific routes (routes)

### Example Modules
- `auth` → authentication (login/register)
- `pos` → cashier point-of-sale system
- `orders` → order management
- `inventory` → stock management
- `menu` → products/items management
- `users` → staff management
- `reports` → analytics and reports

### Responsibility
- Core business logic
- Feature-based development
- Independent module structure


## layouts/

### Purpose
Defines the **overall UI structure of the application base on the role**

### Contains
- `AdminLayout.jsx` → Admin dashboard layout
- `CashierLayout.jsx` → POS system layout
- `AuthLayout.jsx` → Authentication pages layout

### Responsibility
- Page structure and UI frame
- Navigation (sidebar, header, etc.)
- Wrapping module pages based on user role


## shared/

### Purpose
Contains **reusable code shared across the entire application**

### Contains
- UI components (buttons, modals, tables, inputs)
- Custom hooks (useFetch, useDebounce, etc.)
- Utility functions (formatting, helpers)
- API configuration (axios instance)
- Global constants (roles, statuses, configs)

### Responsibility
- Code reuse
- Reducing duplication
- Shared application logic



## assets/

### Purpose
Stores all **static files used in the UI**

### Contains
- Images (logos, product images)
- Icons (SVGs, icon packs)
- Global styles (CSS/SCSS/themes)

### Responsibility
- Visual resources
- UI styling assets


## Architecture Summary

- `app/` → application setup and routing
- `modules/` → business features (core logic)
- `layouts/` → UI structure per role
- `shared/` → reusable components and utilities
- `assets/` → static files and visuals


# Backend Architecture Overview

This project follows a **layered and modular architecture** to keep the code clean, scalable, and easy to maintain.


## app.js

### Purpose
The **entry point of the backend application**

### Responsibility
- Initializes Express app
- Connects middlewares
- Registers routes


## config/

### Purpose
Contains all **configuration files for the system**

### Contains
- Database connection (MongoDB)
- Environment variables setup

### Responsibility
- Centralized configuration management
- Separation of environment-specific logic


## controllers/

### Purpose
Handles the **request and response logic**

### Responsibility
- Receives requests from routes
- Calls services for business logic
- Returns responses to the client

### Think of it as:
“Traffic controller between client and business logic”


## routes/

### Purpose
Defines all **API endpoints**

### Responsibility
- Maps HTTP requests to controllers
- Organizes endpoints by feature/module

### Example:
- `/auth`
- `/orders`
- `/inventory`


## models/

### Purpose
Defines the **database structure**

### Responsibility
- Schema definitions (MongoDB / ORM models)
- Data relationships
- Field validations at schema level

### Think of it as:
“Database blueprint”


## middlewares/

### Purpose
Functions that run **before reaching controllers**

### Responsibility
- Authentication (JWT verification)
- Authorization (role-based access)
- Error handling
- Logging


## validators/

### Purpose
Handles **request data validation**

### Responsibility
- Validate incoming request bodies
- Ensure required fields exist
- Protect API from invalid data


## utils/

### Purpose
Contains **helper functions used across the backend**

### Responsibility
- Formatting functions
- Token generation helpers
- Reusable logic (non-business specific)


## uploads/

### Purpose
Stores **uploaded files**

### Responsibility
- Images (products, users)
- Receipts or documents
- Temporary file storage (if needed)



##  Backend Architecture Summary

- `app.js` → application entry point
- `config/` → system configuration
- `controllers/` → request handling layer
- `routes/` → API endpoint definitions
- `models/` → database structure
- `middlewares/` → request processing layer
- `validators/` → input validation
- `utils/` → helper functions
- `uploads/` → file storage


# Installation Guide

This project follows a **monorepo architecture**, where both the **frontend** and **backend** exist in the same repository but are managed independently.


## Project Structure (Monorepo)


```
root/
│
├── backend/       # Node.js + Express API
├── frontend/      # React application
└── package.json   # Root scripts (monorepo manager)

```


## Environment Setup

Both frontend and backend use environment variables for configuration.

> ⚠️ Important:
> Environment files are included in this project for development purposes.  
> Make sure to review and adjust them based on your local setup before running the project.

### Backend `.env`
Located in:
```

/backend/.env

```

### Frontend `.env`
Located in:
```

/frontend/.env

````


## Installation

Install dependencies for both frontend and backend:

```bash
npm run install-all
````

This will install:

* Backend dependencies (`/backend`)
* Frontend dependencies (`/frontend`)


## Development

Run both frontend and backend together:

```bash
npm run dev
```

### Or run separately:

Backend only:

```bash
npm run server
```

Frontend only:

```bash
npm run client
```


## Build (Frontend)

To build the frontend for production:

```bash
npm run build
```

---

## Start Production Server

Run backend in production mode:

```bash
npm run start
```


## Available Scripts

```json
"scripts": {
  "dev": "concurrently \"npm run dev --prefix backend\" \"npm run dev --prefix frontend\"",

  "server": "npm run dev --prefix backend",
  "client": "npm run dev --prefix frontend",

  "install-all": "npm install --prefix backend && npm install --prefix frontend",

  "build": "npm run build --prefix frontend",

  "start": "npm run start --prefix backend"
}
```


## Notes

* This project uses **concurrently** to run frontend and backend at the same time.
* Both apps are fully independent but managed from a single root command.
* Always ensure both `.env` files are correctly configured before running the project.
* This setup is designed for **development-first workflow** (monorepo convenience).


---

# Contributing Guide

This project follows a **structured Git workflow** to keep the codebase clean, stable, and easy to collaborate on.


## Branch Strategy

We use the following branches:

- `main` → Stable production-ready code
- `develop` → Integration branch (latest development changes)
- `feature/*` → New feature development branches  
- `fix/*` → Bug fixing branches  
- `refactor/*` → Code refactoring and improvement branches  


## Workflow

### 1. Pull latest changes

Always start by syncing with the latest `develop` branch:

```bash id="pull1"
git pull origin develop
````


### 2. Create a feature branch

Create a new branch for your task:

```bash id="branch1"
git checkout -b feature/your-task-name
```


### 3. Work on your feature

Make your changes and commit regularly:

```bash id="commit1"
git commit -m "feat: add login form"
```


### 4. Push your branch

```bash id="push1"
git push origin feature/your-task-name
```


### 5. Open a Pull Request

Create a Pull Request from your feature branch → `develop`


## Rules (Important)

* ❌ Never push directly to `main`
* ❌ Avoid pushing directly to `develop`
* ✅ Always use Pull Requests
* ✅ Code must be reviewed before merging
* ✅ Keep PRs small and focused (avoid huge changes in one PR)


## Commit Convention

We follow clean and consistent commit messages:

### Examples:

```bash id="commit2"
feat: add product carousel
```

```bash id="commit3"
fix: resolve login bug
```

```bash id="commit4"
refactor: clean auth service
```


## Summary

* Work in feature branches
* Merge only through PRs to `develop`
* Keep commits clean and meaningful
* Never bypass the review process




# Naming Conventions

This project follows strict naming rules to ensure **consistency, readability, and scalability** across frontend, backend, and database layers.


# Frontend (React)

### Variables
Use **camelCase**

```js
const cartItems = [];
const userData = {};
````

---

### Functions

Use **camelCase**

```js
function getUserData() {}
const fetchProducts = () => {};
```

---

### Components

Use **PascalCase**

```jsx
function ProductCard() {}
function LoginForm() {}
```

---

### Files & Folders

Use **PascalCase**

```txt
ProductCard.jsx
UserService.js
UseCart.js
```

---

### Constants

Use **UPPER_CASE**

```js
const API_BASE_URL = "https://api.example.com";
const MAX_ITEMS = 10;
```

---

# Backend (Node.js / Express)

### Variables

Use **snake_case**

```js
const user_id = req.params.id;
const order_list = [];
```

---

### Functions

Use **camelCase**

```js
function getUserData() {}
function createOrder() {}
```

---

### Files & Folders

Use **dot notation (feature.layer.js)**

```txt
user.controller.js
order.service.js
product.model.js
auth.middleware.js
inventory.validator.js
```

---

### Constants

Use **UPPER_CASE**

```js
const JWT_SECRET = "secret_key";
const PORT = 5000;
```

---

### API Routes

Use **kebab-case**

```txt
GET    /api/user-profile
POST   /api/create-order
GET    /api/inventory-items
```

---

### Classes

Use **PascalCase**

```js
class UserController {}
class OrderService {}
```

---

# Database

### Collections / Tables

Use **UPPER_CASE**

```txt
USERS
ORDERS
INVENTORY_PRODUCTS
```

---

### Fields

Use **snake_case**

```json
{
  "user_id": "123",
  "full_name": "Abdelrahman",
  "created_at": "2026-04-22"
}
```

---

# 🧠 Summary

| Layer               | Rule       |
| ------------------- | ---------- |
| Frontend Variables  | camelCase  |
| Frontend Functions  | camelCase  |
| Frontend Components | PascalCase |
| Frontend Files      | PascalCase |
| Frontend Constants  | UPPER_CASE |
| Backend Variables   | snake_case |
| Backend Functions   | camelCase  |
| Backend Files       | kebab-case |
| Backend API Routes  | kebab-case |
| Backend Classes     | PascalCase |
| DB Collections      | UPPER_CASE |
| DB Fields           | snake_case |

---

# 📌 Rule of Thumb

> “Each layer has its own strict convention — never mix rules inside the same layer.”