import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaodetailsComponent } from './funcaodetails.component';

describe('FuncaodetailsComponent', () => {
  let component: FuncaodetailsComponent;
  let fixture: ComponentFixture<FuncaodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncaodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncaodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
