import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandaModalComponent } from './demanda-modal.component';

describe('DemandaModalComponent', () => {
  let component: DemandaModalComponent;
  let fixture: ComponentFixture<DemandaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
