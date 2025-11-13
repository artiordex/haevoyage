package com.haevoyage.routes

import com.haevoyage.models.User
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

// In-memory storage (replace with database in production)
private val users = mutableListOf(
    User(1, "Sample User", "user@example.com", "2025", 0, 0)
)

fun Route.userRoutes() {
    route("/api/users") {
        get {
            call.respond(users)
        }
        
        get("/{id}") {
            val id = call.parameters["id"]?.toIntOrNull()
            val user = users.find { it.id == id }
            if (user != null) {
                call.respond(user)
            } else {
                call.respond(HttpStatusCode.NotFound, mapOf("error" to "User not found"))
            }
        }
    }
}
