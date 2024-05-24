import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessordetailsComponent } from './professordetails.component';

describe('ProfessordetailsComponent', () => {
  let component: ProfessordetailsComponent;
  let fixture: ComponentFixture<ProfessordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessordetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
