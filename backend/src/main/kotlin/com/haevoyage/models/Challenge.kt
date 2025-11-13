package com.haevoyage.models

import kotlinx.serialization.Serializable

@Serializable
data class Challenge(
    val id: Int,
    val title: String,
    val description: String,
    val category: String,
    val points: Int,
    val difficulty: String
)
