# TECH-LAB97 E-Commerce Platform

A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce platform that sells various phones, laptops, tablets, smartwatches, and accessories. The project includes:

- **Frontend:** A React application that displays products with pagination, user authentication (signup, login, logout), and cart functionality.
- **Backend:** A Node.js/Express REST API that handles user authentication (with JWT), product CRUD operations, and simulated payment integrations (MPESA and PayPal).
- **Admin Panel:** A separate React admin dashboard for managing products (CRUD operations) with an attractive, modern UI.

## Features

- **User Authentication:** Signup (with phone number), login, and secure JWT-based authentication.
- **Product Management:** Create, read, update, and delete products via the admin dashboard.
- **Payment Integration:** Simulated endpoints for MPESA (with push notification simulation) and PayPal payments.
- **Responsive UI:** Attractive and responsive design using React, CSS, and Material-UI components.
- **Pagination:** Displays products 12 per page.
- **RESTful API:** All backend operations follow REST principles.

## Technologies Used

- **Frontend:** React, Axios, React Router v6, Material-UI (MUI), CSS3, HTML5
- **Backend:** Node.js, Express, MongoDB, Mongoose, JSON Web Tokens (JWT), bcryptjs, CORS
- **Others:** Git, GitHub, MongoDB Atlas

## Folder Structure

/tech-lab97 ├── backend │ ├── config │ │ └── db.js # MongoDB connection configuration │ ├── models │ │ ├── Product.js # Product model schema │ │ └── User.js # User model schema │ ├── routes │ │ ├── auth.js # Authentication routes (signup/login) │ │ ├── product.js # Product CRUD routes (with pagination) │ │ └── payment.js # Payment simulation routes (MPESA & PayPal) │ ├── seed.js # Seed script for sample data │ └── server.js # Main server file ├── frontend │ ├── public │ ├── src │ │ ├── components │ │ │ ├── Header.js │ │ │ ├── Footer.js │ │ │ ├── ProductCard.js │ │ │ ├── Login.js │ │ │ └── Signup.js │ │ ├── pages │ │ │ ├── Home.js │ │ │ ├── ProductDetail.js │ │ │ └── CartPage.js │ │ ├── App.js │ │ └── styles │ │ └── main.css │ ├── package.json # Frontend dependencies and proxy configuration └── admin ├── public ├── src │ ├── components │ │ └── AdminHeader.js │ ├── pages │ │ ├── Dashboard.js │ │ └── Login.js │ ├── App.js │ └── styles │ └── main.css ├── package.json # Admin dependencies and proxy configuration


## Installation

### Prerequisites

- Node.js (v14+ recommended)
- npm (v6+)
- A MongoDB Atlas account (or a local MongoDB instance)
- Git

### Setup Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/daniel-ndeto/tech-lab97-ecommerce.git
   cd tech-lab97-ecommerce/backend

2. **Install dependencies:**
    ```bash
    npm install


3. **Configure Environment Variables:**
**Create a .env file in the backend folder with the following:
  ```bash
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=5000
   JWT_SECRET=yourSuperSecretKey
 

 # Setup Frontend

Navigate to the frontend folder:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

Ensure your `package.json` includes a proxy configuration:

```json
"proxy": "http://localhost:5000"
```

Start the Frontend Development Server:

```bash
npm start
```

The app should open at [http://localhost:3000](http://localhost:3000).

# Setup Admin Panel

Navigate to the admin folder:

```bash
cd ../admin
```

Install dependencies:

```bash
npm install
```

Also ensure your `package.json` includes a proxy configuration:

```json
"proxy": "http://localhost:5000"
```

Start the Admin Development Server:

```bash
npm start
```

The admin panel should open at [http://localhost:3000](http://localhost:3000) (or on the configured port).

# Running the Project

## Backend:
Ensure the backend server is running on port 5000. It handles API requests, user authentication, product management, and payment processing.

## Frontend:
The frontend displays products, user login/signup, and the shopping cart by fetching data from the backend via the proxy.

## Admin Panel:
The admin panel is used for managing products (CRUD operations) and viewing summaries.

# Payment Integrations (Simulated)

## MPESA:
The simulated endpoint `/api/payment/mpesa` triggers a mock MPESA push prompting the user to insert their PIN.

## PayPal:
The simulated endpoint `/api/payment/paypal` initiates a mock PayPal payment directed to `danielndeto222@gmail.com`.

# Technologies & Libraries

- **React** for building dynamic user interfaces.
- **Express** for building the backend REST API.
- **MongoDB & Mongoose** for database operations.
- **JWT & bcryptjs** for secure authentication.
- **Axios** for HTTP requests.
- **Material-UI (MUI), @emotion/react, and @emotion/styled** for styling (optional).
- **react-router-dom** for routing in both the frontend and admin panel.

# Additional Notes

## Deployment:
Use `npm run build` in both the frontend and admin projects to create production builds.

## Environment Variables:
Do not commit sensitive information (e.g., `JWT_SECRET`) to your repository. Use a `.env` file for configuration.

## Future Improvements:
This project can be extended with features like product search, order management, and real payment integrations.

# License
MIT 
