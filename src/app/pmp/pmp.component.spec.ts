import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpComponent } from './pmp.component';

describe('PmpComponent', () => {
  let component: PmpComponent;
  let fixture: ComponentFixture<PmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
