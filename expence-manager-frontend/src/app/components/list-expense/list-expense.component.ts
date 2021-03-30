import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/services/expense.service';


@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {
  expenses: Expense[] = []

  filters ={
    keyword:""
  }
  constructor(private _expenseService:ExpenseService) { }

  ngOnInit(): void {
    this.listExpenses();
  }
  listExpenses() {
    this._expenseService.getExpenses().subscribe(
      data => this.expenses = this.filterExpenses(data)
    )
  }

  filterExpenses(expenses:Expense[]){
    //console.log(this.filters)
    return expenses.filter((e)=>{
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }

}
