import { Component, OnInit } from '@angular/core';
import { CertificationService } from '../_services/certification.service';
import { Certification } from '../models/certification.model';
import {fromEvent, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certifications?: Certification[];
  currentTutorial: Certification = {};
  currentIndex = -1;
  title = '';
  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();


  constructor(private certificationService: CertificationService) { }

  ngOnInit(): void {
    this.retrieveCertifications();

    history.pushState(null, '');

    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
        this.showError = true;
      });
  }

  retrieveCertifications(): void {
    this.certificationService.getAll()
      .subscribe(
        data => {
          this.certifications = data;
          console.log('test');
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCertifications();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Certification, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }



}
