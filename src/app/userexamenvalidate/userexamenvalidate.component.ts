import {Component, OnInit} from '@angular/core';
import {Examen} from "../models/Examen.model";
import {ExamenService} from "../_services/examen.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserExamen} from "../models/UserExamen.model";
import {fromEvent, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-userexamenvalidate',
  templateUrl: './userexamenvalidate.component.html',
  styleUrls: ['./userexamenvalidate.component.css']
})
export class UserexamenvalidateComponent implements OnInit {

  userExamen?: UserExamen;
  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private examenService: ExamenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.retrieveExamen(this.route.snapshot.params['id']);

    history.pushState(null, '');

    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
        this.showError = true;
      });

    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
      console.log("cond");
      e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
      return confirmationMessage;              // Gecko, WebKit, Chrome <34
    });
  }

  retrieveExamen(id: any): void {
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

  gotoQuestionsDetails(id: any): void {
    this.router.navigateByUrl(`/questionValidate/${this.userExamen?.id}`)
  }


}
