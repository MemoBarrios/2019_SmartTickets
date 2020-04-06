import { TestBed, inject } from '@angular/core/testing';

import { DepartamentosService } from './departamentos.service';

describe('DepartamentosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartamentosService]
    });
  });

  it('should be created', inject([DepartamentosService], (service: DepartamentosService) => {
    expect(service).toBeTruthy();
  }));
});
