import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandantedetailsComponent } from './demandantedetails.component';

describe('DemandantedetailsComponent', () => {
  let component: DemandantedetailsComponent;
  let fixture: ComponentFixture<DemandantedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandantedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandantedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
