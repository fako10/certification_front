import { Component, OnInit } from '@angular/core';
import {fromEvent, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-itil',
  templateUrl: './itil.component.html',
  styleUrls: ['./itil.component.css']
})
export class ItilComponent implements OnInit {

  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {

    history.pushState(null, '');

    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
        this.showError = true;
      });

  }

}
