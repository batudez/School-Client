import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginResponse } from '../contracts/LoginResponse';
import { User } from '../contracts/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken : string;
  student : any;
  instructor : any;
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http : HttpClient,
    private router : Router) { }


  userRegister(user : any){
    this.http.post("http://localhost:44300/api/Auth/register",user).subscribe({
      next: (response) => {
        alert("Kayır Başarılı !.");
        this.router.navigate(["/login"]);
        
      }, error: (error) => {
        alert("Kayıt Başarısız !.")
      }
    });
    
  }

  userLogin(user : User) {
    this.http.post("http://localhost:44300/api/Auth/login",user).subscribe({
      next : (response : LoginResponse) => {
        this.accessToken = response.accessToken.token;
        localStorage.setItem('jwtToken',this.accessToken);
        const token = response.accessToken.token
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        
        if(user.isLoggerInstructor){
          this.http.get("http://localhost:44300/api/instructors/"+response.schoolId,{headers : headers}).subscribe((data) => {
            this.instructor = data; 
            this.userSubject.next(data);
            console.log(data);
            this.router.navigate(["/home"])
            alert("asd")
            
          })
          
        } else {
          this.http.get("http://localhost:44300/api/Students/"+response.schoolId,{headers : headers}).subscribe((data)=> {
            this.student = data;
            this.userSubject.next(data); // !!
            console.log(data);
            this.router.navigate(["/home"])
            
          })
        }
      }
    })
  }


  gettouser(){
    return this.userSubject.value;
  }

}
