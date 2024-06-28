import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltipoinstituicaoComponent } from './modaltipoinstituicao.component';

describe('ModaltipoinstituicaoComponent', () => {
  let component: ModaltipoinstituicaoComponent;
  let fixture: ComponentFixture<ModaltipoinstituicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaltipoinstituicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModaltipoinstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
