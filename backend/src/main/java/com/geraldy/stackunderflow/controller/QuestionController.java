package com.geraldy.stackunderflow.controller;

import com.geraldy.stackunderflow.dto.QuestionRequest;
import com.geraldy.stackunderflow.dto.QuestionResponse;
import com.geraldy.stackunderflow.service.QuestionService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/questions")
public class QuestionController {
    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    public List<QuestionResponse> getQuestions() {
        return questionService.getAllQuestions();
    }

    @GetMapping("/{id}")
    public QuestionResponse getQuestionById(@PathVariable Long id) {
        return questionService.getQuestionById(id);
    }

    @PostMapping
    public QuestionResponse createQuestion(@Valid @RequestBody QuestionRequest request) {
        return questionService.createQuestion(request);
    }

    @PutMapping("/{id}")
    public QuestionResponse updateQuestion(
            @PathVariable Long id,
            @RequestBody QuestionRequest request
    ) {
        return questionService.updateQuestion(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable Long id) {
        questionService.deleteQuestion(id);
    }
}
