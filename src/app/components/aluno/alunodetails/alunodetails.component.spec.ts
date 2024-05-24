import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunodetailsComponent } from './alunodetails.component';

describe('AlunodetailsComponent', () => {
  let component: AlunodetailsComponent;
  let fixture: ComponentFixture<AlunodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlunodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
