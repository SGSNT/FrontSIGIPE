import { TestBed } from '@angular/core/testing';

import { CoordenadorcursoService } from './coordenadorcurso.service';

describe('CoordenadorcursoService', () => {
  let service: CoordenadorcursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordenadorcursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
