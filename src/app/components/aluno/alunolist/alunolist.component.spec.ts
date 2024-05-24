import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunolistComponent } from './alunolist.component';

describe('AlunolistComponent', () => {
  let component: AlunolistComponent;
  let fixture: ComponentFixture<AlunolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlunolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
