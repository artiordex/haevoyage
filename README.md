# Haevoyage

Haevoyage is a micro-challenge social recovery platform that helps young adults reconnect with life and community through small actions, built on a scalable architecture powered by React, Vite, TypeScript, and Kotlin.

## Project Structure

```
haevoyage/
├── frontend/          # React + Vite + TypeScript frontend
│   ├── src/
│   │   ├── pages/    # Application pages (Home, Challenges, Profile, Rewards)
│   │   ├── App.tsx   # Main app with routing
│   │   └── main.tsx  # Entry point
│   └── package.json
├── backend/           # Kotlin + Ktor backend
│   ├── src/main/kotlin/com/haevoyage/
│   │   ├── models/   # Data models (User, Challenge, Reward)
│   │   ├── routes/   # API routes
│   │   ├── plugins/  # Ktor plugins (Serialization, CORS, Routing)
│   │   └── Application.kt
│   └── build.gradle.kts
└── README.md
```

## Features

### Frontend
- **Home Page**: Welcome page with navigation to other sections
- **Challenges Page**: Browse available micro-challenges
- **Profile Page**: View user information and progress
- **Rewards Page**: See available rewards and achievements
- **Routing**: Client-side routing using React Router

### Backend
- **User API**: `/api/users` - Manage user data
- **Challenge API**: `/api/challenges` - Access challenge information
- **Reward API**: `/api/rewards` - View rewards and achievements
- **CORS Support**: Configured for cross-origin requests
- **JSON Serialization**: Built-in JSON support for API responses

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Java JDK (v11 or higher)
- Gradle (8.5 or higher)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd backend
./gradlew run
```

The backend API will be available at `http://localhost:8080`

### Build for Production

#### Frontend
```bash
cd frontend
npm run build
```

#### Backend
```bash
cd backend
./gradlew build
```

## API Endpoints

### Users
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID

### Challenges
- `GET /api/challenges` - Get all challenges
- `GET /api/challenges/{id}` - Get challenge by ID

### Rewards
- `GET /api/rewards` - Get all rewards
- `GET /api/rewards/{id}` - Get reward by ID

## Development

### Frontend Development
The frontend uses Vite for hot module replacement. Changes will be reflected immediately in the browser.

### Backend Development
The backend uses Ktor with auto-reload capabilities. Restart the server to see changes.

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite, React Router
- **Backend**: Kotlin 2.1, Ktor 3.0, Kotlinx Serialization
- **Build Tools**: npm, Gradle
