import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandantelistComponent } from './demandantelist.component';

describe('DemandantelistComponent', () => {
  let component: DemandantelistComponent;
  let fixture: ComponentFixture<DemandantelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandantelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandantelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
