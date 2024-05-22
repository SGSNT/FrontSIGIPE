import { TestBed } from '@angular/core/testing';

import { FuncaoService } from './funcao.service';

describe('FuncaoService', () => {
  let service: FuncaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
