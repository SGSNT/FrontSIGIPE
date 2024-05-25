import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodetailsComponent } from './grupodetails.component';

describe('GrupodetailsComponent', () => {
  let component: GrupodetailsComponent;
  let fixture: ComponentFixture<GrupodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
