import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../_services/examen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from '../models/Examen.model';

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css']
})
export class ExamenListComponent implements OnInit {

  examens?: Examen[];
  currentExamen: Examen = {};
  currentIndex = -1;
  title = '';
  constructor(private examenService : ExamenService, 
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.getExamens(this.route.snapshot.params['id']);
  }

  getExamens(id: string): void {
    this.examenService.get(id)
      .subscribe(
        data => {
          this.examens = data;
          console.log(id);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveTutorial(exam: Examen, index: number): void {
    this.currentExamen = exam;
    this.currentIndex = index;
  }

}
