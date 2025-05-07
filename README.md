# 🛍️ E-commerce Application

This is a full-stack e-commerce application with a **Django (Python)** backend and a **React (JavaScript)** frontend.

---

## 🗂️ Brief Project Structure
eshop-web/
├── ecommerce_backend/ # Django project
│ └── ecommerce_backend
│ └── store
│ └── manage.py
│
├── ecommerce_frontend/ # React app
│ └── package.json
│ └── src/
│
└── .gitignore
└── README.md


---

## 🧠 Prerequisites

- Python 3.8+
- Node.js and npm
- Git

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mishrasur7/eshop-web.git
cd eshop-web
```
### 2. Setup the backend
```bash
cd ecommerce_backend
```

# Create virtual environment
```bash
python -m venv venv
```
# Activate the virtual environment
```bash
source venv/bin/activate # On Mac
```

```bash
venv\Scripts\activate # On Windows
```

# Install dependencies
```bash
pip install -r requirements.txt
```

# Apply migrations
```bash
python manage.py migrate
```

# Run development server
```bash
python manage.py runserver
```
Now visit http://localhost:8000

### 3. Setup the frontend 
```bash
cd ecommerce_frontend
```

# Install dependencies
```bash
npm install
```

# Start React development server
```bash
npm start
```

Now visit: http://localhost:3000



