import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandaatualComponent } from './demandaatual.component';

describe('DemandaatualComponent', () => {
  let component: DemandaatualComponent;
  let fixture: ComponentFixture<DemandaatualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandaatualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandaatualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
