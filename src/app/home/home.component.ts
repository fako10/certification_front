import { Component, OnInit } from '@angular/core';
import {fromEvent, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();
  constructor() { }

  ngOnInit(): void {



    window.addEventListener("keyup", disableF5);

    window.addEventListener("keydown", disableF5);
    function disableF5(e: any) {

      if ((e.which || e.keyCode) == 116) e.preventDefault();

    };


    history.pushState(null, '');

    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
        this.showError = true;
      });


  }

}
