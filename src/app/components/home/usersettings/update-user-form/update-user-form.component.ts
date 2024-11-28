import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user-form.component.html',
  styleUrl: './update-user-form.component.scss'
})
export class UpdateUserFormComponent {

  constructor(
    private http:HttpClient,
    public dialogRef: MatDialogRef<UpdateUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSave(): void {
    // updatedUser nesnesi oluşturuluyor
    const updatedUser = {
      id: localStorage.getItem("studentId"),  // 'studentId' burada bir ID olmalı
      nameSurname: this.data.nameSurname,
      email: this.data.email,
      telephoneNumber: this.data.telephoneNumber,
      address: this.data.address,
      imageUrl: this.data.imageUrl,  // Image URL'si eklendi
    };
  
    // requestBody direkt olarak updatedUser nesnesi olacak şekilde gönderiliyor
    const requestBody = updatedUser;
  
    console.log(requestBody);  // Gerekirse debug için kontrol edebilirsiniz
  
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  
    // HTTP PUT isteği
    this.http.put("http://localhost:44300/api/Students", requestBody, { headers: headers }).subscribe(
      (response) => {
        console.log("Başarılı.");
        this.dialogRef.close(this.data);  // Başarılı olduğunda pencereyi kapat
      },
      (error) => {
        console.log(error);  // Hata durumunda log
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close(); // Modalı iptal ediyoruz
  }

}
