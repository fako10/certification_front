import { Component, OnInit } from '@angular/core';
import {Examen} from "../models/Examen.model";
import {ExamenService} from "../_services/examen.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  examen?: Examen;

  constructor(private examenService : ExamenService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    console.log('voyons iici' + this.route.snapshot.params['id']);
    this.getExamen(this.route.snapshot.params['id']);
  }

  getExamen(id: any) : void {
    this.examenService.getExamen(id)
      .subscribe(
        data => {
          this.examen = data;
          console.log('examen seul')
          console.log(id);
          console.log('examen  ' + data);
        },
        error => {
          console.log(error);
        });
  }
  onViewTest(id: any): void {
    console.log('testez voir');

  }
}
