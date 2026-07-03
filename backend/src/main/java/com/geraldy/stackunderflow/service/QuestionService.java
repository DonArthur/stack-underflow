package com.geraldy.stackunderflow.service;

import com.geraldy.stackunderflow.dto.QuestionRequest;
import com.geraldy.stackunderflow.dto.QuestionResponse;
import com.geraldy.stackunderflow.entity.Question;
import com.geraldy.stackunderflow.exception.QuestionNotFoundException;
import com.geraldy.stackunderflow.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public List<QuestionResponse> getAllQuestions() {
        return questionRepository.findAll().stream().map(this::toResponse).toList();
    }

    public QuestionResponse getQuestionById(Long id) {
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new QuestionNotFoundException(id));

        return toResponse(question);
    }

    public QuestionResponse createQuestion(QuestionRequest request) {
        Question question = new Question();

        question.setTitle(request.title());
        question.setDescription(request.description());
        question.setAuthorId(request.authorId());

        Question savedQuestion = questionRepository.save(question);
        return toResponse(savedQuestion);
    }

//    PUT
    public QuestionResponse updateQuestion(
            Long id,
            QuestionRequest request
    ) {
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new QuestionNotFoundException(id));

        question.setTitle(request.title());
        question.setDescription(request.description());

        Question updated = questionRepository.save(question);

        return toResponse(updated);
    }

//    DELETE
    public void deleteQuestion(Long id) {
        if (!questionRepository.existsById(id)) {
            throw new QuestionNotFoundException(id);
        }

        questionRepository.deleteById(id);
    }

    private QuestionResponse toResponse(Question question) {
        return new QuestionResponse(
                question.getId(),
                question.getTitle(),
                question.getDescription(),
                question.getAuthorId()
        );
    }
}
