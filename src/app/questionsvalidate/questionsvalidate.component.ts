import {Component, OnInit} from '@angular/core';
import {UserExamen} from "../models/UserExamen.model";
import {Question} from "../models/Question.model";
import {QuestionService} from "../_services/question.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Reponse} from "../models/Reponse.model";
import {fromEvent, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-questionsvalidate',
  templateUrl: './questionsvalidate.component.html',
  styleUrls: ['./questionsvalidate.component.css']
})
export class QuestionsvalidateComponent implements OnInit {

  userExamen?: UserExamen;
  currentQuestion?: Question;
  questionNumber = 0;
  questions?: Array<Question>;
  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private questionService: QuestionService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    console.log('question validate');
    this.getUserExamen(this.route.snapshot.params['id']);

    history.pushState(null, '');

    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
        this.showError = true;
      });
  }

  iscorrect(question: Question): string {
    if (question.isCorrecte) {
      return "correct";
    } else return "incorrect";
  }

  getClass(reponse: Reponse): string {

    if (reponse.correcte) {
      console.log('correct' + reponse.intitule);
      return "correct";
    }
    if (reponse.selectionne && !reponse.correcte) {
      console.log('incorrect' + reponse.intitule);
      return "incorrect";
    } else {
      console.log('blank');
      return "blank";
    }
  }


  getUserExamen(id: string): void {
    this.questionService.getUserExamen(id)
      .subscribe(
        data => {
          this.userExamen = data;
          this.questions = data.questions;
          if (this.questions)
            this.currentQuestion = this.questions[this.questionNumber];
          console.log(id);
          console.log(data);
          console.log(this.currentQuestion);
        },
        error => {
          console.log(error);
        });
  }


  getNextQuestion() {
    this.questionNumber = this.questionNumber + 1;
    if (this.questions)
      this.currentQuestion = this.questions[this.questionNumber];
    console.log(this.currentQuestion);


  }

  isLastQuestion() {
    if (this.questionNumber + 1 == this.questions?.length) return true
    else return false;
  }
}
