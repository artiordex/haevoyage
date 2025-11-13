package com.haevoyage.api.service

import com.haevoyage.api.model.Challenge
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@Service
class ChallengeService {
    
    private val challenges = mutableListOf(
        Challenge(
            id = 1,
            title = "Morning Walk",
            description = "Take a 10-minute walk outside in the morning",
            difficulty = "easy",
            category = "physical",
            createdAt = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME)
        ),
        Challenge(
            id = 2,
            title = "Connect with a Friend",
            description = "Send a message to a friend you haven't talked to in a while",
            difficulty = "easy",
            category = "social",
            createdAt = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME)
        ),
        Challenge(
            id = 3,
            title = "Learn Something New",
            description = "Spend 15 minutes learning about a topic that interests you",
            difficulty = "medium",
            category = "mental",
            createdAt = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME)
        ),
        Challenge(
            id = 4,
            title = "Cook a Meal",
            description = "Prepare a simple meal from scratch",
            difficulty = "medium",
            category = "practical",
            createdAt = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME)
        )
    )
    
    fun getAllChallenges(): List<Challenge> {
        return challenges
    }
    
    fun getChallengeById(id: Long): Challenge? {
        return challenges.find { it.id == id }
    }
}
