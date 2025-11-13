package com.haevoyage.models

import kotlinx.serialization.Serializable

@Serializable
data class User(
    val id: Int,
    val name: String,
    val email: String,
    val memberSince: String,
    val challengesCompleted: Int,
    val pointsEarned: Int
)
