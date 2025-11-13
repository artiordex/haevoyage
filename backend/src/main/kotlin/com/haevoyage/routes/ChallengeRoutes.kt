package com.haevoyage.routes

import com.haevoyage.models.Challenge
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

// In-memory storage (replace with database in production)
private val challenges = mutableListOf(
    Challenge(1, "Take a 10-minute walk outside", "Get some fresh air and movement", "Physical", 10, "Easy"),
    Challenge(2, "Call a friend or family member", "Reconnect with someone you care about", "Social", 15, "Easy"),
    Challenge(3, "Try a new recipe", "Experiment in the kitchen and try something new", "Creative", 20, "Medium"),
    Challenge(4, "Practice gratitude", "Write down 3 things you're thankful for", "Mental", 10, "Easy")
)

fun Route.challengeRoutes() {
    route("/api/challenges") {
        get {
            call.respond(challenges)
        }
        
        get("/{id}") {
            val id = call.parameters["id"]?.toIntOrNull()
            val challenge = challenges.find { it.id == id }
            if (challenge != null) {
                call.respond(challenge)
            } else {
                call.respond(HttpStatusCode.NotFound, mapOf("error" to "Challenge not found"))
            }
        }
    }
}
