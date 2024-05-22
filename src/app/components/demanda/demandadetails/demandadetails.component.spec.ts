import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandadetailsComponent } from './demandadetails.component';

describe('DemandadetailsComponent', () => {
  let component: DemandadetailsComponent;
  let fixture: ComponentFixture<DemandadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandadetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
