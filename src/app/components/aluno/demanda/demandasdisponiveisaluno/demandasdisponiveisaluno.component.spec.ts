import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandasdisponiveisalunoComponent } from './demandasdisponiveisaluno.component';

describe('DemandasdisponiveisalunoComponent', () => {
  let component: DemandasdisponiveisalunoComponent;
  let fixture: ComponentFixture<DemandasdisponiveisalunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandasdisponiveisalunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandasdisponiveisalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
