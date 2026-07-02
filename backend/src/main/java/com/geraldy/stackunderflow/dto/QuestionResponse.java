package com.geraldy.stackunderflow.dto;

public record QuestionResponse(
        Long id,
        String title,
        String description,
        Long authorId
) {
}
