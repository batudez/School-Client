import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginResponse } from '../contracts/LoginResponse';
import { Student } from '../contracts/Student';
import { Instructor } from './../contracts/Instructor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken : string;
  student : Student;
  instructor : Instructor;
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http : HttpClient,
    private router : Router) { }


  userRegister(user : any){
    this.http.post("http://localhost:44300/api/Auth/register",user).subscribe({
      next: (response) => {
        console.log('Register successful', response);
        // Başarılı login durumunda yapılacak işlemler
      }, error: (error) => {
        console.error('register failed', error);
      }
    });
    
  }

  studentLogin(user : any){

    this.http.post("http://localhost:44300/api/Auth/login",user).subscribe({
      next: (response : LoginResponse) => {
        console.log("Login Successful",response);
        this.accessToken = response.accessToken.token;
        localStorage.setItem('jwtToken',this.accessToken);
  
        this.getUserStudent(response.email);
        this.router.navigate(['/home'])
        
      }, error: (error) => {
        alert('login failed');
      }
    });

  }

  instructorLogin(user : any){

    this.http.post("http://localhost:44300/api/Auth/login",user).subscribe({
      next: (response : LoginResponse) => {
        console.log("Login Successful",response);
        this.accessToken = response.accessToken.token;
        localStorage.setItem('jwtToken',this.accessToken);
  
        this.getUserInstructor(response.email);
        this.router.navigate(['/home'])
        
      }, error: (error) => {
        alert('login failed');
      }
    });

    
  }

  userLogin(user : any) {

  this.http.post("http://localhost:44300/api/Auth/login",user).subscribe({
    next: (response : LoginResponse) => {
      console.log("Login Successful",response);
      this.accessToken = response.accessToken.token;
      localStorage.setItem('jwtToken',this.accessToken);

      this.getUser(response.email);
      //localStorage.setItem('nameSurname' )
      this.router.navigate(['/home'])

      
    }, error: (error) => {
      console.error('login failed', error);

    }
  });
    

  }

 getUserStudent(email : string){
  const apiUrl = 'http://localhost:44300/api/Students/GetByEmailStudent';
  const url = `${apiUrl}?Email=${encodeURIComponent(email)}`;
  this.http.get<any>(url).subscribe((data) => {
    this.student = data;
    this.userSubject.next(data);
    //localStorage.setItem('nameSurname',this.student.nameSurname);
    localStorage.setItem('studentId',this.student.id);
  })
 }

 getUserInstructor(email : string){
  const apiUrl2 = 'http://localhost:44300/api/Instructors/GetByEmailInstructor';
    const url2 = `${apiUrl2}?Email=${encodeURIComponent(email)}`;
    this.http.get<any>(url2).subscribe((data) => {
      this.instructor = data;
      this.userSubject.next(data);
      localStorage.setItem('nameSurname',this.instructor.nameSurname);
      localStorage.setItem('instructorId',this.instructor.id);
    })

 }

  getUser(email : string) {

    // const apiUrl = 'http://localhost:44300/api/Students/GetByEmailStudent';
    // const url = `${apiUrl}?Email=${encodeURIComponent(email)}`;
    // const apiUrl2 = 'http://localhost:44300/api/Instructors/GetByEmailInstructor';
    // const url2 = `${apiUrl2}?Email=${encodeURIComponent(email)}`;

    // const url = `${apiUrl}?Email=${encodeURIComponent(email)}`;
    // const url2 = `${apiUrl2}?Email=${encodeURIComponent(email)}`;
    // this.http.get<any>(url).subscribe((data) => {
    //   this.student = data;
    //   this.userSubject.next(data);
    //   //localStorage.setItem('nameSurname',this.student.nameSurname);
    //   localStorage.setItem('studentId',this.student.id);
    // })
    // this.http.get<any>(url2).subscribe((data) => {
    //   this.instructor = data;
    //   localStorage.setItem('nameSurname',this.instructor.nameSurname);
    //   localStorage.setItem('instructorId',this.instructor.id);
    // })
  }

  gettouser(){
    return this.userSubject.value;
  }

}
