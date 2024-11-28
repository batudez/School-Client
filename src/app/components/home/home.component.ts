import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from '../../contracts/Student';
import { AuthService } from '../../services/auth.service';
import { ContentComponent } from "./content/content.component";
import { DersNotComponent } from './ders-not/ders-not.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet,ContentComponent,DersNotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

   student : Student;

   constructor (private authService : AuthService) {}

   


}
