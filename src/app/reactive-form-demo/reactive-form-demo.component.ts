import { Component } from '@angular/core';
import{ FormControl } from '@angular/forms' ;
import {FormGroup,Validators} from '@angular/forms';
import { department } from '../model/employeelist';


@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent {
 
  empForm:FormGroup;
  depts =department;
  eid:FormControl;
  ename:FormControl;
  constructor(){
    this.eid=new FormControl('',[Validators.required,Validators.minLength(3)]);

    this.empForm=new FormGroup({
      eid:this.eid,
      ename:this.ename,
      salary:new FormControl(111),
      dept:new FormControl("IT"),

  })

  }

}
