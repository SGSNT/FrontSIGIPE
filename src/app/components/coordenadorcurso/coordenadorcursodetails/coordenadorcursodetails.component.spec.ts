import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorcursodetailsComponent } from './coordenadorcursodetails.component';

describe('CoordenadorcursodetailsComponent', () => {
  let component: CoordenadorcursodetailsComponent;
  let fixture: ComponentFixture<CoordenadorcursodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordenadorcursodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoordenadorcursodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
