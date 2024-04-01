import { Component, OnInit } from '@angular/core';
import {fromEvent, Subject, takeUntil} from "rxjs";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-itil',
  templateUrl: './itil.component.html',
  styleUrls: ['./itil.component.css']
})
export class ItilComponent implements OnInit {

  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private title: Title,
              private meta : Meta
  ) { }

  ngOnInit(): void {

    this.title.setTitle('ITIL exam practice test');
    this.meta.updateTag({
      name: 'description',
      content: 'Our ITIL Foundation test provides questions similar to those on the official exam. Our tests allow you to have optimal preparation for the exam. The explanations we give allow you to better understand the concepts.'
    });
    history.pushState(null, '');

    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
        this.showError = true;
      });

  }

}
