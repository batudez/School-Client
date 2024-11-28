import { NgFor } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CourseService } from '../../../services/course.service';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-not-giris',
  standalone: true,
  imports: [MatButtonModule,NgFor,FormsModule],
  templateUrl: './not-giris.component.html',
  styleUrl: './not-giris.component.scss'
})
export class NotGirisComponent implements OnInit {

  instructorId : string;
  courses : any[];
  courseIdd : string;
  students : any[];
  grade : number;

  constructor(private courseService : CourseService,
              private noteService : NoteService,
              private http : HttpClient
  ) {}
  ngOnInit(): void {

    this.getCourseList();
  }

  getCourseList(){
    this.instructorId = localStorage.getItem("instructorId");
    this.courseService.getCoursesByInstructorId(this.instructorId).subscribe((data) => {
        this.courses = data.items.$values;
        console.log(this.courses);
        
        
    })
  }

  getNotesList(courseId:string){
    this.noteService.getNotesByCourseId(courseId).subscribe((data) => {
      this.students=data.items.$values
      this.courseIdd = courseId;
      
    })
      
  }

  saveGrades(courseId: string) {
    // "gradeUpdates" verisini oluştur
    const gradeUpdates = this.students.map(student => ({
      studentId: student.studentId,
      courseId: this.courseIdd,
      value: student.grade
    }));
  
    // Beklenen API formatına göre "gradeUpdates" anahtarıyla sarmala
    const requestBody = {
      gradeUpdates: gradeUpdates
    };
  
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Bearer Token ekleniyor
    });
  
    // PUT isteği gönder
    this.http.put('http://localhost:44300/api/notes/update-grades', requestBody, { headers: headers })
      .subscribe(response => {
        alert('Grades updated successfully');
      }, error => {
        console.error('Error updating grades:', error);
      });
  }

}

const data = {
  $id: "1",
  count: 6,
  hasNext: false,
  hasPrevious: false,
  index: 0,
  items: {
    $id: '2',
    $values: [
      // Buraya items'ların dizisi gelecek
    ]
  },
  pages: 1,
  size: 10
};
