import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmptestComponent } from './pmptest.component';

describe('PmptestComponent', () => {
  let component: PmptestComponent;
  let fixture: ComponentFixture<PmptestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmptestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
