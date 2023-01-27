import { TestBed } from '@angular/core/testing';

import { RandomTickService } from './randomTick.service';

describe('OperatorsService', () => {
  let service: RandomTickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomTickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
