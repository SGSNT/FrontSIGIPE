import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoinstituicaodetailsComponent } from './tipoinstituicaodetails.component';

describe('TipoinstituicaodetailsComponent', () => {
  let component: TipoinstituicaodetailsComponent;
  let fixture: ComponentFixture<TipoinstituicaodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoinstituicaodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoinstituicaodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
