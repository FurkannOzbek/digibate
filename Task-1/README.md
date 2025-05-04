# Digibate Content Generator - Task 1

## Project Overview

This project is a content generator web application that helps users create engaging social media content. The application consists of a frontend built with Angular and a backend built with NestJS.

## Features

- Generate custom captions based on user input (Mock answers at the moment)
- Choose from predefined caption suggestions (Promotional, Product Launch, Get Engagement, Announce a Sale)
- Realistic typing animation effect for generated content
- Responsive design that works on mobile, tablet, and desktop devices
- Error handling with user-friendly notifications

## Project Structure

The project is organized into two main directories:

### Frontend (Angular)

- Built with Angular 19.2.10
- Material UI components for a modern interface
- Responsive design with CSS media queries
- Services for API communication and typing animation

### Backend (NestJS)

- Built with NestJS framework
- REST API endpoints for generating caption content
- Input validation with class-validator
- Cross-origin resource sharing (CORS) enabled

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm (v8+)

### Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/FurkannOzbek/digibate
cd digibate/Task-1
```

2. Install and run the backend

```bash
cd backend
npm install
npm run start:dev
```

3. Install and run the frontend

```bash
cd frontend
npm install
 npm start or ng serve(if you have Angular CLI)
```

4. Access application at http://localhost4200

5. Curl command for testing endpoint when backend running

```bash
curl -X POST http://localhost:3000/askAi \
  -H "Content-Type: application/json" \
  -d '{"message": "Test Message"}'
```

## Screenshots
