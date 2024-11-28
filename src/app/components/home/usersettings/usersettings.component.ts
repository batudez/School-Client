import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../../../contracts/Student';
import { AuthService } from '../../../services/auth.service';
import { UpdateUserFormComponent } from './update-user-form/update-user-form.component';
// Modal bileşeni


@Component({
  selector: 'app-usersettings',
  standalone: true,
  imports: [],
  templateUrl: './usersettings.component.html',
  styleUrl: './usersettings.component.scss'
})
export class UsersettingsComponent implements OnInit {

  user : Student
  constructor(private authService : AuthService,public dialog: MatDialog){}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
      console.log(user);
      
    })
  }

  openUpdateForm(): void {
    const dialogRef = this.dialog.open(UpdateUserFormComponent, {
      width: '600px',
      height: '500px',
      data: {
        id : this.user.id, 
        nameSurname: this.user.nameSurname, 
        email: this.user.email, 
        telephoneNumber : this.user.telephoneNumber,
        address : this.user.address,
        imageUrl : this.user.imageUrl   } // Mevcut kullanıcı bilgilerini gönderiyoruz
    });



    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user = result; // Bilgileri güncelledikten sonra kullanıcıyı güncelle
        console.log('Kullanıcı bilgileri güncellendi:', this.user);
      }
    });

}
}
