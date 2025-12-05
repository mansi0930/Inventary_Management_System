🛒 Inventory Management System (MERN Stack)

A full-stack Inventory Management System built using the MERN stack (MongoDB, Express, React, Node.js).
This project allows users to add, update, delete, and view products stored in the inventory.

🚀 Features

✔ Add new products (Name, Price, Quantity)
✔ Edit/Update existing products
✔ Delete products from inventory
✔ Display product list in a clean UI
✔ RESTful APIs using Express & MongoDB
✔ Fully responsive frontend with React
✔ Axios for API communication
✔ CORS enabled for development

🧱 Tech Stack
Layer	Technology
Frontend	React, Axios, Bootstrap
Backend	Node.js, Express.js
Database	MongoDB (Compass/Atlas)
Other	Nodemon, dotenv, cors
📂 Project Structure
Inventary_Management/
 ├── client/        # React frontend
 ├── server/        # Node + Express backend
 ├── models/        # Mongoose schemas
 ├── routes/        # API routes
 ├── controllers/   # CRUD logic
 └── .env           # MongoDB connection string

🧪 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Add new product
GET	/api/products/:id	Get single product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/inventory-management.git
cd inventory-management

2️⃣ Install dependencies

Backend:

cd server
npm install


Frontend:

cd client
npm install

3️⃣ Create .env
MONGO_URI=mongodb://localhost:27017/Product
PORT=5000

4️⃣ Start the apps

Backend:

npm run dev


Frontend:

npm start

📸 Screenshots

<img width="1917" height="911" alt="image" src="https://github.com/user-attachments/assets/ca98f42f-18dd-409d-949a-eeef05c8bc88" />


📌 Future Improvements

🔧 Authentication (Login/Signup)
📦 Stock alerts (Low quantity warning)
📈 Dashboard & charts
💾 Export to Excel/PDF
🔍 Search & Filter products
