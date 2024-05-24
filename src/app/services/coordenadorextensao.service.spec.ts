import { TestBed } from '@angular/core/testing';

import { CoordenadorextensaoService } from './coordenadorextensao.service';

describe('CoordenadorextensaoService', () => {
  let service: CoordenadorextensaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordenadorextensaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
