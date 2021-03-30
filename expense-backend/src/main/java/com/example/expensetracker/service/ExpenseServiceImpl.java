package com.example.expensetracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.repository.ExpenseRepositiory;

@Service
public class ExpenseServiceImpl implements ExpenseService {

	@Autowired
	ExpenseRepositiory expenseRepositiory;
	@Override
	public List<Expense> findAll() {
		// TODO Auto-generated method stub
		return expenseRepositiory.findAll();
	}
	@Override
	public Expense save(Expense expense) {
		// TODO Auto-generated method stub
		expenseRepositiory.save(expense);
		return expense;
	}
	@Override
	public Expense findById(Long id) {
		// TODO Auto-generated method stub
		if(expenseRepositiory.findById(id).isPresent()) {
			return expenseRepositiory.findById(id).get();
		}
		return null;
	}
	@Override
	public Expense delete(Long id) {
		// TODO Auto-generated method stub
		Expense expense = 	findById(id);
		expenseRepositiory.delete(expense);
		return expense;
	}

}
