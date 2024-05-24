import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursolistComponent } from './cursolist.component';

describe('CursolistComponent', () => {
  let component: CursolistComponent;
  let fixture: ComponentFixture<CursolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
