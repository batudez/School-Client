import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../contracts/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  course : Course[];
  baseUrl = "http://localhost:44300/api/Courses"

  constructor(private http : HttpClient) { }

  getCoursesByInstructorId(instructorId : string): Observable<any> {

    const token = localStorage.getItem('jwtToken');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Bearer Token olarak ekleniyor
    });
    return this.http.get(`${this.baseUrl}/instructor/${instructorId}`, { headers });
  }


}
