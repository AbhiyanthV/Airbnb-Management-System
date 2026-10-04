# 🏠 Airbnb Management System

A full-stack **Airbnb-inspired house rental and booking application** built using **React.js** and **Spring Boot**.

The application allows users to **register, log in securely, browse available properties, view property details, and make bookings** through a simple and responsive user interface.

<br>

## 🚀 **Features**

## 👤 **User Management**

- **User registration**
- **User login**
- **JWT-based authentication**
- **Spring Security authentication**
- **Protected API endpoints**
- **User information management**

<br>

## 🏠 **Property Management**

- **View available properties**
- **View property details**
- **Add new properties**
- **Manage property information**
- **Browse rental houses**

<br>

## 📅 **Booking Management**

- **Book available properties**
- **View booking details**
- **Manage bookings**
- **Booking validation**
- **User-specific booking information**

<br>

## 🎨 **User Interface**

- **Airbnb-inspired design**
- **Responsive layout**
- **Login and registration forms**
- **Navigation header**
- **Property listing interface**
- **Booking interface**
- **Toast notifications**
- **React Router navigation**

<br>

## 🛠️ **Technologies Used**

## 💻 **Frontend**

- **React.js**
- **JavaScript**
- **HTML5**
- **CSS3**
- **Axios**
- **React Router**
- **React Toastify**

<br>

## ⚙️ **Backend**

- **Java**
- **Spring Boot**
- **Spring Security**
- **JWT**
- **Spring Data JPA**
- **Hibernate**
- **H2 Database**
- **Maven**

<br>

## 📸 **Screenshots**

## 🔐 **Login Page**

<img width="1000" height="600" alt="Login Page" src="https://github.com/user-attachments/assets/160c4c78-084a-4d6c-af48-d6a8659f66ec" />

<br>
<br>

## 📝 **Registration Page**

<img width="1000" height="600" alt="Registration Page" src="https://github.com/user-attachments/assets/2fd345d8-e8d4-4518-a57a-cd8d530a7183" />

<br>
<br>

## 🏠 **Home Page**

<img width="1200" height="600" alt="Home Page" src="https://github.com/user-attachments/assets/a5c6844d-3162-4f6e-84eb-56082fd8207d" />

<br>
<br>

## 🏡 **Property Listing**

<img width="1872" height="915" alt="Property Listing" src="https://github.com/user-attachments/assets/492f3900-b8a1-4b9a-9d30-44fef3ded8fb" />

<br>
<br>

## 📄 **Property Details**

<img width="1876" height="907" alt="Property Details" src="https://github.com/user-attachments/assets/c1d880a1-2b69-44e3-b997-a062d39b5d51" />

<br>
<br>

## 👤 **Profile**

<img width="1891" height="915" alt="Profile" src="https://github.com/user-attachments/assets/851ad7aa-ec1a-49db-b45b-e9fb3dbba5e0" />

<br>
<br>

# 🏗️ **Application Architecture**

```text
                    ┌──────────────────────┐
                    │    React Frontend    │
                    │      airbnb-ui       │
                    └──────────┬───────────┘
                               │
                               │ Axios / REST API
                               ▼
                    ┌──────────────────────┐
                    │   Spring Boot API    │
                    │       Backend        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Spring Security    │
                    │       + JWT          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Controllers      │
                    │ User / House / Booking│
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       Services       │
                    │    Business Logic    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Repositories     │
                    │    Spring Data JPA   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      H2 Database     │
                    │     In-Memory DB     │
                    └──────────────────────┘

```

# 🔄 **Application Process Flow** 
```text
                         START
                           │
                           ▼
                  ┌─────────────────┐
                  │  User Registers │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │   User Login    │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ Authentication  │
                  │   Successful?   │
                  └──────┬─────┬────┘
                         │     │
                       YES      NO
                         │     │
                         ▼     ▼
                ┌────────────┐ Login
                │ JWT Token  │ Again
                │ Generated  │
                └──────┬─────┘
                       │
                       ▼
                ┌────────────┐
                │  Home Page │
                └──────┬─────┘
                       │
                       ▼
             ┌────────────────────┐
             │ Browse Properties  │
             └─────────┬──────────┘
                       │
                       ▼
             ┌────────────────────┐
             │ View Property      │
             │ Details            │
             └─────────┬──────────┘
                       │
                       ▼
             ┌────────────────────┐
             │   Book Property    │
             └─────────┬──────────┘
                       │
                       ▼
             ┌────────────────────┐
             │ Booking Validation │
             └─────────┬──────────┘
                       │
                       ▼
             ┌────────────────────┐
             │ Booking Confirmed  │
             └─────────┬──────────┘
                       │
                       ▼
             ┌────────────────────┐
             │ View Booking       │
             │ Details            │
             └────────────────────┘

```
# 🔐 **Authentication Flow**
The application uses JWT (JSON Web Token) authentication with Spring Security.
```text
User Login
    ↓
Spring Boot Authentication
    ↓
Username & Password Validation
    ↓
JWT Token Generated
    ↓
Token Sent to Frontend
    ↓
Token Stored in Local Storage
    ↓
Token Sent with Protected Requests
    ↓
JWT Filter Intercepts Request
    ↓
JWT Token Validated
    ↓
Access Granted
```

## ⚙️ **Installation and Setup**

## 📋 **Prerequisites**

Make sure the following are installed:

- **Java 17 or later**
- **Maven**
- **Node.js**
- **npm**
- **Git**

<br>

## 🔧 **Backend Setup**

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/AbhiyanthV/Airbnb-Management-System.git
```
### 2️⃣ **Navigate to Backend**
```bash
cd Airbnb-Management-System/airbnb
```

### 3️⃣ **Configure Database**
Open:

src/main/resources/application.properties

**Set your H2 database username and password:**

spring.datasource.username=Set Username
<br>
spring.datasource.password=Set password

Replace the placeholder values with your preferred username and password.

For example:

spring.datasource.username=admin
<br>
spring.datasource.password=admin123

⚠️ Important: Do not add real production passwords or sensitive credentials to GitHub.

# 4️⃣ **Run Backend**
mvn spring-boot:run

The backend will run on:

http://localhost:8080


🎨 Frontend Setup
# 1️⃣ **Navigate to Frontend**
Open another terminal:

```bash
cd Airbnb-Management-System/airbnb-ui
```

# 2️⃣ **Install Dependencies**
```bash
npm install
```

# 3️⃣ **Start React Application**
```bash
npm start
```

The frontend will run on:

http://localhost:3000

#🗄️ **Database**
This project uses H2 Database for development.

# 🔑 **H2 Console**
The H2 database console can be accessed at:

http://localhost:8080/h2-console


Database configuration:

airbnb/src/main/resources/application.properties

The application uses an in-memory H2 database during development.

# 🔮 **Future Improvements**

🔎 Property search and filtering

⭐ Property reviews and ratings

📷 Property image upload

💳 Online payment integration

❌ Booking cancellation

👤 User profile management

📍 Location-based property search

☁️ Cloud deployment

📱 Improved mobile responsiveness

🔔 Email notifications


🚀 Future Deployment
The application can be further enhanced and deployed using cloud platforms.



