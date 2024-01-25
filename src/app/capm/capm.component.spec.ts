import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmComponent } from './capm.component';

describe('CapmComponent', () => {
  let component: CapmComponent;
  let fixture: ComponentFixture<CapmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
