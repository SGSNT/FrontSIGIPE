import { TestBed } from '@angular/core/testing';

import { StatuspessoaService } from './statuspessoa.service';

describe('StatuspessoaService', () => {
  let service: StatuspessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatuspessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
