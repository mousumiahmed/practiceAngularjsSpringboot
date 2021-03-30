package com.example.expensetracker.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tbl_expenseTracker")
@Setter
@Getter
public class Expense {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String expense;
	private String description;
	private BigDecimal Amount;
}
