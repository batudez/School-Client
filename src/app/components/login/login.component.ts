import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  
  userLoginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
              private authService : AuthService
  ) {
   
  }
  ngOnInit(): void {

     this.userLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isLoggerInstructor: [true] 
    });
  }

  onSubmit(formValue: any) {
    if (formValue.isInstructor) {
      
      this.authService.userLogin(formValue)

    } else {

      this.authService.userLogin(formValue)
    }


  }

}
