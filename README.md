# E-Learning Platform

This is an E-Learning Platform project with a frontend built using React and a backend using Node.js, connected to a MongoDB database. The project uses Docker for containerization and Docker Compose for orchestrating multiple services.

## Project Structure

- **frontend/**: Contains the React application for the frontend.
  - **Dockerfile**: Dockerfile for building the frontend image.
  - **package.json**: Defines the dependencies and scripts for the React application.
  - **public/**: Contains static files like `index.html`.
  - **src/**: Contains the React application source code.

- **backend/**: Contains the Node.js application for the backend.
  - **Dockerfile**: Dockerfile for building the backend image.
  - **package.json**: Defines the dependencies and scripts for the Node.js application.
  - **server.js**: Entry point for the backend application.

- **docker-compose.yml**: Defines the services, networks, and volumes for the project.

## Getting Started

### Prerequisites

- Docker
- Docker Compose
