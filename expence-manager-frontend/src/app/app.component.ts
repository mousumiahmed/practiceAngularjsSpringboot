import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data={
    "title":"Ahmed",
    "name":"Mousumi"
  }
  title = 'angular-practice';

  onNameClick(name:string,title:string){
    console.log(name)
    window.alert("Welcome  "+name +"  "+title);
  }
  //onNameClick(data)
}
