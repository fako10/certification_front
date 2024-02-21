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


  }

}
