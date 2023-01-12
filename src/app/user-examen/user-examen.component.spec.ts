import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExamenComponent } from './user-examen.component';

describe('UserExamenComponent', () => {
  let component: UserExamenComponent;
  let fixture: ComponentFixture<UserExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
