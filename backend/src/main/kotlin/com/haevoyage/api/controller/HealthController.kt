package com.haevoyage.api.controller

import com.haevoyage.api.model.HealthResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@RestController
@RequestMapping("/api")
class HealthController {
    
    @GetMapping("/health")
    fun health(): HealthResponse {
        return HealthResponse(
            status = "OK",
            timestamp = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME)
        )
    }
}
