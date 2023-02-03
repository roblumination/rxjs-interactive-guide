import { TestBed } from '@angular/core/testing';

import { MarbleConstructionService } from './marble-construction.service';

describe('MarbleConstructionService', () => {
  let service: MarbleConstructionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarbleConstructionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
