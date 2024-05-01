import { TestBed } from '@angular/core/testing';

import { BuscarDadosApiService } from './buscar-dados-api.service';

describe('BuscarDadosApiService', () => {
  let service: BuscarDadosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarDadosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
