# PHAIS+  
Medication management and exchange system for hospital pharmacies.  

### UNIFOR  
Final project for the Systems Analysis and Development course at the University of Fortaleza.  

#### Team  
- Beatriz Vidal  
- Victor Kauan  
- Mikael Oliveira  
- Yago Santos  
- Natan Rocha  


------

# PHAIS+: Architecture and System Design

Below is a detailed view of the project architecture and system design, explaining how technologies, services, and components integrate to create the PHAIS+ application, a robust and scalable system for medication management in pharmacies and hospitals.

## 1. Architecture Overview

The system is divided into three main pillars:

- **Mobile Frontend**: Mobile application for end users (pharmacies, hospitals, patients).
- **Web Frontend**: Web interface for administrators and managers.
- **Backend**: Based on microservices, with an API Gateway to manage requests and integrations.

The architecture is decentralized, focusing on scalability, simplified maintenance, and performance. The use of microservices and Docker allows the system to be easily scalable and adaptable to different scenarios.

---

## 2. Mobile Frontend

### Technologies Used

- **React Native**: Framework for cross-platform mobile app development (iOS and Android).
- **Expo**: Facilitates development and app execution without complex configurations.
- **Expo Router**: File-based navigation, similar to Next.js.
- **React Navigation**: Library for screen navigation management.
- **React Hook Form + Yup**: For form management and validation.
- **Axios**: Performs HTTP calls to the backend.
- **Socket.IO Client**: Real-time communication with the backend.
- **Lodash**: Data manipulation utility.
- **Jest**: Unit and integration testing.

### Main Features

- **User Authentication**: User login and registration (pharmacies, hospitals, patients).
- **Medication Management**: Query, add, and remove medications.
- **Orders/Requests**: Creation and tracking of medication orders.
- **Real-time Notifications**: Updates about orders, inventory, and alerts.
- **Backend Integration**: Communication via REST API and WebSocket (Socket.IO).

---

## 3. Web Frontend

### Technologies Used

- **React.js**: Library for building user interfaces.
- **Vite**: Fast build and development tool.
- **Tailwind CSS**: Utility-first CSS framework for responsive styling.
- **MUI Joy UI**: UI component library based on Material UI.
- **React Router**: Frontend route management.
- **Axios**: Performs HTTP calls to the backend.
- **React Hot Toast**: Display of notifications and alerts.
- **Emotion**: CSS-in-JS styling.

### Main Features

- **Administrative Dashboard**: Metrics and reports visualization.
- **User Management**: User creation, editing, and deletion.
- **Inventory Control**: Medication inventory monitoring and updating.
- **Order Management**: Approval, rejection, and order tracking.
- **Backend Integration**: Communication via REST API.

---

## 4. Backend

### Microservices Architecture

The backend is divided into three main microservices, each with specific responsibilities:

#### **Medicines Microservice (`medicines`)**
- Manages medication registration, queries, and updates.
- Integrates with the database via Prisma ORM.

**Endpoints:**
- `GET /medicines`: Lists all medications.
- `POST /medicines`: Adds a new medication.
- `PUT /medicines/:id`: Updates an existing medication.
- `DELETE /medicines/:id`: Removes a medication.

#### **Requests Microservice (`requests`)**
- Manages medication orders (creation, approval, rejection).

**Endpoints:**
- `GET /requests`: Lists all requests.
- `POST /requests`: Creates a new request.
- `PUT /requests/:id`: Updates request status.

#### **Users Microservice (`users`)**
- Manages authentication, authorization, and user profiles.

**Endpoints:**
- `POST /users/login`: User authentication.
- `POST /users/register`: New user registration.
- `GET /users/:id`: Gets user information.

### Technologies Used

- **Node.js**: Runtime environment for microservices.
- **TypeScript**: Main development language.
- **Prisma ORM**: Database access tool.
- **Docker**: Microservices containerization.
- **KrakenD**: API Gateway for request management.
- **Socket.IO**: Real-time communication between frontend and backend.

### Database

Each microservice has its own database, managed by Prisma ORM.  
Supported databases: **PostgreSQL, MySQL, or SQLite**.

---

## 5. API Gateway (KrakenD)

### Main Functions

- **Endpoint Unification**: Centralizes requests to microservices.
- **Load Balancing**: Distributes requests among microservice instances.
- **Security**: Request authentication and authorization.
- **Cache**: Improves performance by storing frequently requested responses.

### Configuration

- `krakend.json`: KrakenD configuration file, defining routes, authentication, and microservices integration.
- **Docker Compose**: KrakenD and microservices orchestration.

---

## 6. Infrastructure and Deployment

### Technologies Used

- **Docker**: Containerization of microservices and API Gateway.
- **Docker Compose**: Container orchestration.
- **Nginx**: Web server to serve the web frontend.
- **Cloud Providers**: Possibility of deployment on services like **AWS, Google Cloud, or Azure**.

### Deployment Flow

1. **Container Building**: Each microservice and the API Gateway are built as Docker containers.
2. **Orchestration**: Docker Compose brings up all services (database, microservices, API Gateway).
3. **Cloud Deployment**: Containers are deployed to a cloud provider, with load balancing and monitoring.

---

## 7. Conclusion

The system is designed to be **scalable, modular, and easy to maintain**. The division into microservices allows each part of the system to be developed, tested, and deployed independently.  

The use of modern technologies such as **React Native, Node.js, TypeScript, Prisma ORM, and Docker** ensures a **high level of performance and flexibility**. The **API Gateway (KrakenD)** centralizes and manages requests, while **Docker Compose** facilitates service orchestration.  

This architecture is ideal for a **medication manager** that needs to serve different types of users (**pharmacies, hospitals, patients**) efficiently and securely.
