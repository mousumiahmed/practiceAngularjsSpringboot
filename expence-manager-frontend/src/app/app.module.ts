import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListExpenseComponent } from './components/list-expense/list-expense.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule,Routes} from "@angular/router";
import {AddExpenseComponent} from './components/add-expense/add-expense.component';
import {FormsModule} from "@angular/forms";
;

const router: Routes=[
  {
    path:'expenses',
    component:ListExpenseComponent
  },
  {
    path:'addexpense',
    component:AddExpenseComponent,
  },
  {
    path:'editexpense/:id',
    component:AddExpenseComponent,
  },
  {
    path:'',
    redirectTo:'/expenses',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddExpenseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
