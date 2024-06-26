import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalgacursosComponent } from './modalgacursos.component';

describe('ModalgacursosComponent', () => {
  let component: ModalgacursosComponent;
  let fixture: ComponentFixture<ModalgacursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalgacursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalgacursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
