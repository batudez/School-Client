import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { TableModule } from 'primeng/table';
import { HubUrls } from '../../../constants/hub-urls';
import { ReceiveFunctions } from '../../../constants/receive-functions';
import { Note } from '../../../contracts/Note';
import { NoteService } from '../../../services/note.service';
import { SignalrService } from '../../../services/signalr.service';


@Component({
  selector: 'app-ders-not',
  standalone: true,
  imports: [TableModule, MatTableModule, NgFor, MatButtonModule, MatIconButton],
  templateUrl: './ders-not.component.html',
  styleUrl: './ders-not.component.scss'
})
export class DersNotComponent implements OnInit {

  studentId: string
  notes: Note[];
  courseCode: string;
  courseName: string;
  constructor(private noteService: NoteService,
              private signalRService : SignalrService
  ) { 
    signalRService.start(HubUrls.NoteHub);
  }

  ngOnInit(): void {
    this.getStudentItems();
    this.signalRService.on(ReceiveFunctions.NoteUpdatedMessageReceiveFunction,message => {
      alert(message);
    })

  }

  displayedColumns: string[] = ['ders-kodu', 'note', 'student-id'];
  exportToPdf() {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['ders-kodu', 'note', 'student-id']],
      body: this.notes.map(row => [row.course.courseCode, row.value, row.studentId])
    });
    doc.save('table.pdf');
  }

  getStudentItems() {

    this.studentId = localStorage.getItem('studentId');
    this.noteService.getNotesByStudentId(this.studentId).subscribe((data) => {
      this.notes = data.items.$values;
      console.log(this.notes);


    })
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


