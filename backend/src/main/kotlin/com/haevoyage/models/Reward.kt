package com.haevoyage.models

import kotlinx.serialization.Serializable

@Serializable
data class Reward(
    val id: Int,
    val name: String,
    val description: String,
    val pointsRequired: Int,
    val icon: String
)
