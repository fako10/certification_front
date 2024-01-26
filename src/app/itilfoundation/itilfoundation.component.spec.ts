import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilfoundationComponent } from './itilfoundation.component';

describe('ItilfoundationComponent', () => {
  let component: ItilfoundationComponent;
  let fixture: ComponentFixture<ItilfoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilfoundationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilfoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
