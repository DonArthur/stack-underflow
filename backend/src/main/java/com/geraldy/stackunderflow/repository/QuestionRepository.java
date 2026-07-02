package com.geraldy.stackunderflow.repository;

import com.geraldy.stackunderflow.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
