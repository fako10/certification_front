import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserexamenvalidateComponent } from './userexamenvalidate.component';

describe('UserexamenvalidateComponent', () => {
  let component: UserexamenvalidateComponent;
  let fixture: ComponentFixture<UserexamenvalidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserexamenvalidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserexamenvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
