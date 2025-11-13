package com.haevoyage.api.controller

import com.haevoyage.api.model.Challenge
import com.haevoyage.api.service.ChallengeService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/challenges")
class ChallengeController(private val challengeService: ChallengeService) {
    
    @GetMapping
    fun getAllChallenges(): List<Challenge> {
        return challengeService.getAllChallenges()
    }
    
    @GetMapping("/{id}")
    fun getChallengeById(@PathVariable id: Long): ResponseEntity<Challenge> {
        val challenge = challengeService.getChallengeById(id)
        return if (challenge != null) {
            ResponseEntity.ok(challenge)
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).build()
        }
    }
}
