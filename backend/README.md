# Haevoyage Backend

Kotlin + Spring Boot REST API backend for the Haevoyage micro-challenge social recovery platform.

## Tech Stack

- **Kotlin** - Modern JVM language
- **Spring Boot 3.2** - Application framework
- **Gradle** - Build tool
- **JDK 17** - Java Development Kit

## Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── kotlin/
│   │   │   └── com/haevoyage/api/
│   │   │       ├── HaevoyageApplication.kt  # Main application entry point
│   │   │       ├── config/                  # Configuration classes
│   │   │       │   └── CorsConfig.kt       # CORS configuration
│   │   │       ├── controller/              # REST controllers
│   │   │       │   ├── HealthController.kt # Health check endpoint
│   │   │       │   └── ChallengeController.kt # Challenge endpoints
│   │   │       ├── service/                 # Business logic
│   │   │       │   └── ChallengeService.kt # Challenge service
│   │   │       └── model/                   # Data models
│   │   │           ├── Challenge.kt        # Challenge model
│   │   │           └── HealthResponse.kt   # Health response model
│   │   └── resources/
│   │       └── application.properties       # Application configuration
│   └── test/
│       └── kotlin/
│           └── com/haevoyage/api/
│               └── HaevoyageApplicationTests.kt # Integration tests
├── gradle/                                  # Gradle wrapper files
├── build.gradle.kts                        # Build configuration
└── settings.gradle.kts                     # Project settings
```

## Prerequisites

- JDK 17 or higher
- Gradle (wrapper included)

## Getting Started

### Build the Project

Build the project using the Gradle wrapper:

```bash
./gradlew build
```

### Run the Application

Run the application:

```bash
./gradlew bootRun
```

The API will be available at `http://localhost:8080`.

### Run Tests

Execute the test suite:

```bash
./gradlew test
```

## API Endpoints

### Health Check

Check if the API is running:

```
GET /api/health
```

Response:
```json
{
  "status": "OK",
  "timestamp": "2025-11-13T14:52:00"
}
```

### Challenges

Get all challenges:

```
GET /api/challenges
```

Response:
```json
[
  {
    "id": 1,
    "title": "Morning Walk",
    "description": "Take a 10-minute walk outside in the morning",
    "difficulty": "easy",
    "category": "physical",
    "createdAt": "2025-11-13T14:52:00"
  },
  ...
]
```

Get a specific challenge:

```
GET /api/challenges/{id}
```

Response:
```json
{
  "id": 1,
  "title": "Morning Walk",
  "description": "Take a 10-minute walk outside in the morning",
  "difficulty": "easy",
  "category": "physical",
  "createdAt": "2025-11-13T14:52:00"
}
```

## Configuration

The application can be configured via `src/main/resources/application.properties`:

- `server.port` - Server port (default: 8080)
- `spring.application.name` - Application name
- `logging.level.*` - Logging levels

## CORS Configuration

CORS is configured to allow requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Alternative frontend port)

Modify `src/main/kotlin/com/haevoyage/api/config/CorsConfig.kt` to add additional origins.

## Development

### Adding New Endpoints

1. Create a model in `model/` package
2. Create a service in `service/` package
3. Create a controller in `controller/` package with `@RestController` and `@RequestMapping`

### Code Style

The project follows Kotlin coding conventions. Key points:
- Use data classes for models
- Prefer immutability (`val` over `var`)
- Use meaningful names
- Keep controllers thin (delegate to services)

## Next Steps

- Add database integration (PostgreSQL, MySQL, or MongoDB)
- Implement authentication and authorization (Spring Security)
- Add validation for request bodies
- Implement user management endpoints
- Add pagination for list endpoints
- Set up API documentation (Swagger/OpenAPI)
- Add integration and unit tests
- Set up CI/CD pipeline
- Configure production-ready settings (logging, monitoring, etc.)

## Troubleshooting

### Port Already in Use

If port 8080 is already in use, change the port in `application.properties`:
```properties
server.port=8081
```

### Build Failures

If the build fails, ensure you have:
- JDK 17 or higher installed
- `JAVA_HOME` environment variable set correctly
- Proper internet connection for dependency downloads

### CORS Errors

If you encounter CORS errors from the frontend:
1. Check that the frontend URL is included in `CorsConfig.kt`
2. Ensure the backend server is running
3. Verify the frontend is making requests to the correct URL
