import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerform:FormGroup
  constructor(private formBuilder:FormBuilder) {
    this.registerform=this.formBuilder.group({
      name: ['', [Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })

    
   }
   get registerformcontrol() {
    return this.registerform.controls
  }

  ngOnInit(): void {
  }

}
