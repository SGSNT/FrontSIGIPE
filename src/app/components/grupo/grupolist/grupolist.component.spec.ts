import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupolistComponent } from './grupolist.component';

describe('GrupolistComponent', () => {
  let component: GrupolistComponent;
  let fixture: ComponentFixture<GrupolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
