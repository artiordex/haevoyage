package com.haevoyage.routes

import com.haevoyage.models.Reward
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

// In-memory storage (replace with database in production)
private val rewards = mutableListOf(
    Reward(1, "Beginner Badge", "Complete 5 challenges", 50, "🏆"),
    Reward(2, "Rising Star", "Complete 25 challenges", 250, "🌟"),
    Reward(3, "Champion", "Complete 100 challenges", 1000, "💎"),
    Reward(4, "Consistency Award", "Complete challenges 7 days in a row", 100, "🎯")
)

fun Route.rewardRoutes() {
    route("/api/rewards") {
        get {
            call.respond(rewards)
        }
        
        get("/{id}") {
            val id = call.parameters["id"]?.toIntOrNull()
            val reward = rewards.find { it.id == id }
            if (reward != null) {
                call.respond(reward)
            } else {
                call.respond(HttpStatusCode.NotFound, mapOf("error" to "Reward not found"))
            }
        }
    }
}
