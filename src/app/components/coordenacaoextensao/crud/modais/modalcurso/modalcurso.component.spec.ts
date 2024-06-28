import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcursoComponent } from './modalcurso.component';

describe('ModalcursoComponent', () => {
  let component: ModalcursoComponent;
  let fixture: ComponentFixture<ModalcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalcursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
