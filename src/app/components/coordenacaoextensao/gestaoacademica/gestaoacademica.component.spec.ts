import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoacademicaComponent } from './gestaoacademica.component';

describe('GestaoacademicaComponent', () => {
  let component: GestaoacademicaComponent;
  let fixture: ComponentFixture<GestaoacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoacademicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestaoacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
