import { Component } from '@angular/core';
import { department } from '../model/employeelist';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-template-form-demo',
  templateUrl: './template-form-demo.component.html',
  styleUrls: ['./template-form-demo.component.css']
})
export class TemplateFormDemoComponent {
  departments:string[];
  emp:Employee;
  constructor(){
    this.departments=department;
    this.emp= new Employee( '','','','');
  }

}
