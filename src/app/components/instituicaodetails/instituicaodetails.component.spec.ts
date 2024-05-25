import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaodetailsComponent } from './instituicaodetails.component';

describe('InstituicaodetailsComponent', () => {
  let component: InstituicaodetailsComponent;
  let fixture: ComponentFixture<InstituicaodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstituicaodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstituicaodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
