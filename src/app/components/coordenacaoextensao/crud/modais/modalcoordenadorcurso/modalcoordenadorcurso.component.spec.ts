import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcoordenadorcursoComponent } from './modalcoordenadorcurso.component';

describe('ModalcoordenadorcursoComponent', () => {
  let component: ModalcoordenadorcursoComponent;
  let fixture: ComponentFixture<ModalcoordenadorcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalcoordenadorcursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalcoordenadorcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
