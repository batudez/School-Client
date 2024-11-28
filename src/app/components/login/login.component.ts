import { NgIf, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, TitleCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  // loginForm!: FormGroup
  // errorMessage?: string;



  // constructor(
  //   private formBuilder : FormBuilder,
  //   private http : HttpClient,
  //   private authService : AuthService,
  // private router : Router){}

  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //    email : ['',[Validators.required,Validators.email]],
  //    password : ['',[Validators.required,Validators.minLength(3)]],
  //  })

  //  }

  //  onSubmit(user : any){
  //   this.authService.userLogin(user)
  //  }

  loginType: 'instructor' | 'student' = 'instructor'; // Varsayılan instructor login
  instructorLoginForm: FormGroup;
  studentLoginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    // Instructor form
    this.instructorLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Student form
    this.studentLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  setLoginType(type: 'instructor' | 'student'): void {
    this.loginType = type;
    this.errorMessage = ''; // Buton değişiminde hata mesajını temizleyin
  }

  onSubmit(user: any): void {
    if (this.loginType === 'instructor') {
       this.authService.instructorLogin(user);
      console.log('Instructor Login', user);
    } else {
      this.authService.studentLogin(user);
      console.log('Student Login', user);
    }
  }


}
