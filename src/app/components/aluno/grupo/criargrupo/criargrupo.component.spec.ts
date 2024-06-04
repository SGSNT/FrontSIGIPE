import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriargrupoComponent } from './criargrupo.component';

describe('CriargrupoComponent', () => {
  let component: CriargrupoComponent;
  let fixture: ComponentFixture<CriargrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriargrupoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriargrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
