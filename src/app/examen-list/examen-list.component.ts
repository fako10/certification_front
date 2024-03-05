import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../_services/examen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from '../models/Examen.model';
import {ExamenGroup} from "../models/ExamenGroup.model";

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css']
})
export class ExamenListComponent implements OnInit {

  examens?: Examen[];
  examenGroups?: ExamenGroup[];

  currentExamen: Examen = {};
  currentIndex = -1;

  currentExamenGroup: ExamenGroup = {};


  certification?: string;
  title = '';
  constructor(private examenService : ExamenService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.getExamens(this.route.snapshot.params['id']);
    this.getExamenGroups(this.route.snapshot.params['id']);
    console.log(this.certification);
  }

  getExamenGroups(id: string): void {
    this.examenService.getExamenGroups(id).subscribe(
      data => {
        this.examenGroups = data;
        console.log('loggons examenGroup')
        console.log(id);
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

  getExamens(id: string): void {
    this.examenService.get(id)
      .subscribe(
        data => {
          this.examens = data;
          var examen = this.examens?.find(() => true) ;
          console.log('loggons examen')
          console.log(examen);
          if(typeof examen != "undefined") {
            this.certification = examen.certification;
          }
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

  setActiveExamenGroup(exam: ExamenGroup, index: number): void {
    this.currentExamenGroup = exam;
    this.currentIndex = index;
  }

  onViewFaceSnap(id : any): void {
    this.router.navigateByUrl(`/userExamenValidate/${id}`)
  }
}
