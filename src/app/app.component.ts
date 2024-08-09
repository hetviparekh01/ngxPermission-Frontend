import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngxPermission-Frontend';
  userForm!:FormGroup;
  user:any={
    email:""
  };
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.userForm=this.fb.group({
      email:['',[Validators.required]],
      password:[],
      check:[]
    })
  }
  
  onSubmit() {
    // throw new Error('Method not implemented.');
  }
}
