package com.example.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.expensetracker.model.Expense;


@Repository
public interface ExpenseRepositiory extends JpaRepository<Expense, Long> {

}
