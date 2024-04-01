import { Component, OnInit } from '@angular/core';
import {fromEvent, Subject, takeUntil} from "rxjs";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();
  constructor(private title: Title,
              private meta : Meta
              ) { }

  ngOnInit(): void {
    this.title.setTitle('Certifications');
    this.meta.updateTag({
      name: 'description',
      content: ''
    });

  }

}
