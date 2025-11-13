# Haevoyage Frontend

React + TypeScript + Vite frontend for the Haevoyage micro-challenge social recovery platform.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **ESLint** - Code linting

## Project Structure

```
frontend/
├── src/
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── components/      # Reusable UI components
│   │   └── Layout.tsx   # Main layout component with navigation
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── ChallengesPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── services/        # API and external services
│   │   └── api.ts       # Centralized API client
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts     # Shared types
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component with routing
│   ├── App.css          # Global styles
│   ├── index.css        # Root styles
│   └── main.tsx         # App entry point
├── public/              # Public static files
├── .env.example         # Environment variables template
└── package.json         # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env to set your backend API URL if different from default
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Building for Production

Build the app:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

## API Integration

The frontend connects to the backend API at `http://localhost:8080/api` by default. This can be configured via the `VITE_API_BASE_URL` environment variable.

See `src/services/api.ts` for available API endpoints.

## Available Routes

- `/` - Home page
- `/about` - About the platform
- `/dashboard` - User dashboard (requires backend)
- `/challenges` - View challenges (requires backend)
- `*` - 404 Not Found page

## Features

- ✅ Client-side routing with React Router
- ✅ TypeScript for type safety
- ✅ Centralized API service layer
- ✅ Responsive layout with navigation
- ✅ Placeholder pages for all main routes
- ✅ Error handling for API calls

## Next Steps

- Add authentication and user management
- Implement state management (Redux, Zustand, or Context API)
- Add UI component library (Material-UI, Ant Design, etc.)
- Implement form validation
- Add testing (Vitest, React Testing Library)
- Set up CI/CD pipeline
