import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private http : HttpClient,
    private authService : AuthService){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nameSurname : ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telephoneNumber: ['', [Validators.required]],
      address: ['', Validators.required],
      imageUrl: ['', [Validators.required]],
      isInstructor: [false]
    });
  }

  onSubmit(user : any){
    console.log(user);
    
    this.authService.userRegister(user);
  }
}
