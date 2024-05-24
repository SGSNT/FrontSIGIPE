import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoalistComponent } from './pessoalist.component';

describe('PessoalistComponent', () => {
  let component: PessoalistComponent;
  let fixture: ComponentFixture<PessoalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoalistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
