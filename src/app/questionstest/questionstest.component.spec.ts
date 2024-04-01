import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionstestComponent } from './questionstest.component';

describe('QuestionstestComponent', () => {
  let component: QuestionstestComponent;
  let fixture: ComponentFixture<QuestionstestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionstestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
