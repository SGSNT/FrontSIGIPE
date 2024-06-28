import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcoordenadorextensaoComponent } from './modalcoordenadorextensao.component';

describe('ModalcoordenadorextensaoComponent', () => {
  let component: ModalcoordenadorextensaoComponent;
  let fixture: ComponentFixture<ModalcoordenadorextensaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalcoordenadorextensaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalcoordenadorextensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
