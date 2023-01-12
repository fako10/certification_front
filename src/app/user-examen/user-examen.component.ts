import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Question } from '../models/Question.model';
import { UserExamen } from '../models/UserExamen.model';
import { QuestionService } from '../_services/question.service';

@Component({
  selector: 'app-user-examen',
  templateUrl: './user-examen.component.html',
  styleUrls: ['./user-examen.component.css']
})
export class UserExamenComponent implements OnInit {

  userExamen?: UserExamen;
  currentQuestion?:Question;
  questionNumber = -1;
  questions?: Array<Question>;

  constructor(private questionService : QuestionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserExamen(this.route.snapshot.params['id']);
  }

  getUserExamen(id: string): void {
    this.questionService.getUserExamen(id)
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

}
