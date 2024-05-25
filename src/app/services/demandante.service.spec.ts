import { TestBed } from '@angular/core/testing';

import { DemandanteService } from './demandante.service';

describe('DemandanteService', () => {
  let service: DemandanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
