import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserexamrecapquestionsComponent } from './userexamrecapquestions.component';

describe('UserexamrecapquestionsComponent', () => {
  let component: UserexamrecapquestionsComponent;
  let fixture: ComponentFixture<UserexamrecapquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserexamrecapquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserexamrecapquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
