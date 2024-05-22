import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandalistComponent } from './demandalist.component';

describe('DemandalistComponent', () => {
  let component: DemandalistComponent;
  let fixture: ComponentFixture<DemandalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandalistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
