import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriododetailsComponent } from './periododetails.component';

describe('PeriododetailsComponent', () => {
  let component: PeriododetailsComponent;
  let fixture: ComponentFixture<PeriododetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriododetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriododetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
