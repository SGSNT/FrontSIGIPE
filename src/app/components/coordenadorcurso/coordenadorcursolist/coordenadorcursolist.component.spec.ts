import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorcursolistComponent } from './coordenadorcursolist.component';

describe('CoordenadorcursolistComponent', () => {
  let component: CoordenadorcursolistComponent;
  let fixture: ComponentFixture<CoordenadorcursolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordenadorcursolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoordenadorcursolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
