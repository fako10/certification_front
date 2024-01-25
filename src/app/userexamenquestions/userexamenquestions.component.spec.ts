import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserexamenquestionsComponent } from './userexamenquestions.component';

describe('UserexamenquestionsComponent', () => {
  let component: UserexamenquestionsComponent;
  let fixture: ComponentFixture<UserexamenquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserexamenquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserexamenquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
