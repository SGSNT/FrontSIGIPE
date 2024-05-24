import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusdemandadetailsComponent } from './statusdemandadetails.component';

describe('StatusdemandadetailsComponent', () => {
  let component: StatusdemandadetailsComponent;
  let fixture: ComponentFixture<StatusdemandadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusdemandadetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusdemandadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
