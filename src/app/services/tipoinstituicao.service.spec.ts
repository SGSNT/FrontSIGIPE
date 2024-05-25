import { TestBed } from '@angular/core/testing';

import { TipoinstituicaoService } from './tipoinstituicao.service';

describe('TipoinstituicaoService', () => {
  let service: TipoinstituicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoinstituicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
