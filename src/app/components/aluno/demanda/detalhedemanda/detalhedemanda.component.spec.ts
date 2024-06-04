import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhedemandaComponent } from './detalhedemanda.component';

describe('DetalhedemandaComponent', () => {
  let component: DetalhedemandaComponent;
  let fixture: ComponentFixture<DetalhedemandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhedemandaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhedemandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
