import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GacolegiadosComponent } from './gacolegiados.component';

describe('GacolegiadosComponent', () => {
  let component: GacolegiadosComponent;
  let fixture: ComponentFixture<GacolegiadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GacolegiadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GacolegiadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
