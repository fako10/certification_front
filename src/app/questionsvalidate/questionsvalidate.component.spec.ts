import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsvalidateComponent } from './questionsvalidate.component';

describe('QuestionsvalidateComponent', () => {
  let component: QuestionsvalidateComponent;
  let fixture: ComponentFixture<QuestionsvalidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsvalidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
