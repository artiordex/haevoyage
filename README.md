# Haevoyage

Haevoyage is a micro-challenge social recovery platform that helps young adults reconnect with life and community through small actions, built on a scalable architecture powered by React, Vite, TypeScript, and Kotlin with Spring Boot.

## Overview

This platform provides:
- **Daily Micro-Challenges**: Small, achievable tasks to build confidence
- **Progress Tracking**: Monitor your journey and celebrate milestones
- **Community Support**: Connect with others on similar paths
- **Personalized Goals**: Tailor challenges to your needs

## Project Structure

```
haevoyage/
├── frontend/          # React + Vite + TypeScript frontend
│   ├── src/
│   │   ├── pages/    # Application pages
│   │   ├── components/ # Reusable UI components
│   │   ├── services/ # API integration
│   │   └── types/    # TypeScript definitions
│   └── README.md     # Frontend documentation
│
├── backend/          # Kotlin + Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── kotlin/
│   │   │   │   └── com/haevoyage/api/
│   │   │   │       ├── controller/  # REST endpoints
│   │   │   │       ├── service/     # Business logic
│   │   │   │       ├── model/       # Data models
│   │   │   │       └── config/      # Configuration
│   │   │   └── resources/
│   │   └── test/
│   └── README.md     # Backend documentation
│
├── .gitignore        # Git ignore patterns
├── LICENSE           # Project license
└── README.md         # This file
```

## Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### Backend
- **Kotlin** - Modern JVM language
- **Spring Boot 3.2** - Production-ready framework
- **Gradle** - Build automation
- **JDK 17** - Java runtime

## Quick Start

### Prerequisites
- **Node.js 18+** and npm (for frontend)
- **JDK 17+** (for backend)
- Git

### Setup Instructions

1. **Clone the repository**:
```bash
git clone https://github.com/artiordex/haevoyage.git
cd haevoyage
```

2. **Start the Backend**:
```bash
cd backend
./gradlew bootRun
```
The API will be available at `http://localhost:8080`

3. **Start the Frontend** (in a new terminal):
```bash
cd frontend
npm install
npm run dev
```
The app will be available at `http://localhost:5173`

4. **Access the Application**:
Open your browser and navigate to `http://localhost:5173`

## Development

### Frontend Development
See [frontend/README.md](frontend/README.md) for detailed instructions on:
- Running the development server
- Building for production
- Project structure
- Available routes
- API integration

### Backend Development
See [backend/README.md](backend/README.md) for detailed instructions on:
- Running the API server
- Available endpoints
- Adding new features
- Running tests
- Configuration options

## API Endpoints

The backend provides the following REST endpoints:

- `GET /api/health` - Health check
- `GET /api/challenges` - Get all challenges
- `GET /api/challenges/{id}` - Get a specific challenge

See [backend/README.md](backend/README.md) for complete API documentation.

## Available Routes

Frontend routes:
- `/` - Home page
- `/about` - About the platform
- `/dashboard` - User dashboard
- `/challenges` - Browse challenges

## Features

### Current Features ✅
- React frontend with routing
- Kotlin backend with REST API
- CORS configuration for local development
- Sample challenge data
- Health check endpoint
- Responsive layout with navigation

### Planned Features 🚧
- User authentication and authorization
- Database integration
- User progress tracking
- Challenge completion
- Social features (sharing, comments)
- Notifications
- Mobile app support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ for young adults seeking to reconnect with life and community.**
