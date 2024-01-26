import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Psm1Component } from './psm1.component';

describe('Psm1Component', () => {
  let component: Psm1Component;
  let fixture: ComponentFixture<Psm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Psm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Psm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
