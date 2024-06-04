import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandasdisponiveiscoordenacaocursoComponent } from './demandasdisponiveiscoordenacaocurso.component';

describe('DemandasdisponiveiscoordenacaocursoComponent', () => {
  let component: DemandasdisponiveiscoordenacaocursoComponent;
  let fixture: ComponentFixture<DemandasdisponiveiscoordenacaocursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandasdisponiveiscoordenacaocursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandasdisponiveiscoordenacaocursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
