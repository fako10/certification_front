import { Component, OnInit } from '@angular/core';
import {Examen} from "../models/Examen.model";
import {ExamenService} from "../_services/examen.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserExamen} from "../models/UserExamen.model";

@Component({
  selector: 'app-userexamenvalidate',
  templateUrl: './userexamenvalidate.component.html',
  styleUrls: ['./userexamenvalidate.component.css']
})
export class UserexamenvalidateComponent implements OnInit {

  userExamen?: UserExamen;
  constructor(private examenService : ExamenService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.retrieveExamen(this.route.snapshot.params['id']);
  }

  retrieveExamen(id: any) : void {
    this.examenService.getUserExamen(id).subscribe(
      data => {
        this.userExamen = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  gotoQuestionsDetails(id: any) : void {
    this.router.navigateByUrl(`/questionValidate/${this.userExamen?.id}`)
  }


}
