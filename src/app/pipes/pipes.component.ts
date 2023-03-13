import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
pageTitle:string="pipes in angular";
users:any[]=[
      {Id:101,Name:'anusha',city:'hyderabad',Salary:10000,DOB:new Date("05/10/1989")},
      {Id:102,Name:'esha',city:'chenni',Salary:20000,DOB:new Date("06/10/1989")},
      {Id:103,Name:'venkat',city:'benglore',Salary:30000,DOB:new Date("07/10/1989")},
      {Id:104,Name:'aruna',city:'mumbai',Salary:40000,DOB:new Date("08/10/1989")},

    ]
}
