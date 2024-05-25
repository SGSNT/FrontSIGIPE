import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodolistComponent } from './periodolist.component';

describe('PeriodolistComponent', () => {
  let component: PeriodolistComponent;
  let fixture: ComponentFixture<PeriodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
