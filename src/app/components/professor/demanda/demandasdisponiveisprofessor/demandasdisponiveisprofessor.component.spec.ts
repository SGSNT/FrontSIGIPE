import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandasdisponiveisprofessorComponent } from './demandasdisponiveisprofessor.component';

describe('DemandasdisponiveisprofessorComponent', () => {
  let component: DemandasdisponiveisprofessorComponent;
  let fixture: ComponentFixture<DemandasdisponiveisprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandasdisponiveisprofessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandasdisponiveisprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
