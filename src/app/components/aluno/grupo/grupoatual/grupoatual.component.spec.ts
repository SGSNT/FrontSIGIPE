import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoatualComponent } from './grupoatual.component';

describe('GrupoatualComponent', () => {
  let component: GrupoatualComponent;
  let fixture: ComponentFixture<GrupoatualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoatualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupoatualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
