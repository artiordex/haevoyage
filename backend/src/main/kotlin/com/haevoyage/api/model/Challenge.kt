package com.haevoyage.api.model

data class Challenge(
    val id: Long,
    val title: String,
    val description: String,
    val difficulty: String? = null,
    val category: String? = null,
    val createdAt: String? = null
)
