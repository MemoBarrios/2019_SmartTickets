import { TestBed, inject } from '@angular/core/testing';

import { CategoriasService } from './categorias.service';

describe('CategoriasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriasService]
    });
  });

  it('should be created', inject([CategoriasService], (service: CategoriasService) => {
    expect(service).toBeTruthy();
  }));
});
