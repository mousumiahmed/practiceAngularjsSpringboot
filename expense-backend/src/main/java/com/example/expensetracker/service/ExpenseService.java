package com.example.expensetracker.service;
import java.util.List;
import com.example.expensetracker.model.Expense;

public interface ExpenseService {
	List <Expense> findAll();

	Expense save(Expense expense);
	
	Expense findById(Long id);
	
	Expense delete(Long id);
}
