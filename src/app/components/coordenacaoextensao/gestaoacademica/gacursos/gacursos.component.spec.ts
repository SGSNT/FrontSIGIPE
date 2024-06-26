import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GacursosComponent } from './gacursos.component';

describe('GacursosComponent', () => {
  let component: GacursosComponent;
  let fixture: ComponentFixture<GacursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GacursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GacursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
