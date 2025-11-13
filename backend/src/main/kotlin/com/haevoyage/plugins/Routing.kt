package com.haevoyage.plugins

import io.ktor.server.application.*
import io.ktor.server.routing.*
import com.haevoyage.routes.*

fun Application.configureRouting() {
    routing {
        userRoutes()
        challengeRoutes()
        rewardRoutes()
    }
}
