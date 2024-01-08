import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../models/Question.model';
import { UserExamen } from '../models/UserExamen.model';
import { QuestionService } from '../_services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
userExamen?: UserExamen;
currentQuestion?:Question;
questionNumber = 0;
questions?: Array<Question>;
display: any;


  constructor(private questionService : QuestionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.timer(1);
    this.getUserExamen(this.route.snapshot.params['id']);
  }

  getUserExamen(id: string): void {
    this.questionService.get(id)
      .subscribe(
        data => {
          this.userExamen = data;
          this.questions = data.questions;
          if(this.questions)
            this.currentQuestion =  this.questions[this.questionNumber];
          console.log(id);
          console.log(data);
          console.log( this.currentQuestion);
        },
        error => {
          console.log(error);
        });
  }


  getNextQuestion() {
    this.questionNumber = this.questionNumber + 1;
    if (this.questions)
      this.currentQuestion =  this.questions[this.questionNumber];
      console.log( this.currentQuestion);


  }

  isLastQuestion() {
    if(this.questionNumber + 1 == this.questions?.length)  return true
    else return false;
  }

  validateExamen():void {
    console.log('valider')
    this.questionService.saveExamen(this.userExamen || new UserExamen).subscribe(data => {
        this.userExamen = data;
        console.log('data');
        console.log(data)
    });
    console.log(this.userExamen)
    // @ts-ignore
    this.router.navigateByUrl(`/userExamenValidate/${this.userExamen?.id}`);
  }

  timer(minute: any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
        this.validateExamen();
      }
    }, 1000);
  }

}

