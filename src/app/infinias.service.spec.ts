import { TestBed } from '@angular/core/testing';

import { InfiniasService } from './infinias.service';

describe('InfiniasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfiniasService = TestBed.get(InfiniasService);
    expect(service).toBeTruthy();
  });
});
