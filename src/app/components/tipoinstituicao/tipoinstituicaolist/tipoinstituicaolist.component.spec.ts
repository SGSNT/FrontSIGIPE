import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoinstituicaolistComponent } from './tipoinstituicaolist.component';

describe('TipoinstituicaolistComponent', () => {
  let component: TipoinstituicaolistComponent;
  let fixture: ComponentFixture<TipoinstituicaolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoinstituicaolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoinstituicaolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
