import { TestBed } from '@angular/core/testing';

import { StatusdemandaService } from './statusdemanda.service';

describe('StatusdemandaService', () => {
  let service: StatusdemandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusdemandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
