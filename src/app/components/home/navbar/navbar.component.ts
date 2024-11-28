import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  user: any;
  userName : string;
  studentId : string;
  instructorId : string;
  constructor(private router:Router,private authService : AuthService) {
    this.authService.user$.subscribe(user => {
      this.user = user;
    })
    //this.userName = localStorage.getItem('nameSurname');
    //this.studentId = localStorage.getItem('studentId');
  }
  ngOnInit(): void {
   
  }

  quit(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}
