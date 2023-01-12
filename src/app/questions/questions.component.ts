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

  constructor(private questionService : QuestionService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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

  validateExamen() {
    console.log('valider')
    this.questionService.saveExamen(this.userExamen || new UserExamen).subscribe(data => {
        this.userExamen = data;
        console.log('data');
        console.log(data)
    });
    console.log(this.userExamen)
    return this.userExamen;
  }

}

