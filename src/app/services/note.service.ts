import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = 'http://localhost:44300/api/Notes'; // API base URL

  constructor(private http: HttpClient) { }

  // Method to fetch notes by StudentId
  getNotesByStudentId(studentId: string): Observable<any> {
    const token = localStorage.getItem('jwtToken');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Bearer Token olarak ekleniyor
    });

    const params = new HttpParams().set('StudentId', studentId);

    return this.http.get(this.baseUrl, { params,headers });
  }

  getNotesByCourseId(courseId: string): Observable<any>{
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Bearer Token olarak ekleniyor
    });
    const params = new HttpParams().set('CourseId', courseId);
    return this.http.get(`${this.baseUrl}/GetNotesByCourseId?CourseId=${courseId}`, {params,headers})
  }


}
