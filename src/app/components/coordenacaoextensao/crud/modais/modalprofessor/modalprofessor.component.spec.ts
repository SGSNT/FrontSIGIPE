import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalprofessorComponent } from './modalprofessor.component';

describe('ModalprofessorComponent', () => {
  let component: ModalprofessorComponent;
  let fixture: ComponentFixture<ModalprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalprofessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
