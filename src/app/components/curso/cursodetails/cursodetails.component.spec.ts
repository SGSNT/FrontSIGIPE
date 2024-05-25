import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursodetailsComponent } from './cursodetails.component';

describe('CursodetailsComponent', () => {
  let component: CursodetailsComponent;
  let fixture: ComponentFixture<CursodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
