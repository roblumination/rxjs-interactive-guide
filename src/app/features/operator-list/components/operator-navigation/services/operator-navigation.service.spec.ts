import { TestBed } from '@angular/core/testing';

import { OperatorNavigationService } from './operator-navigation.service';

describe('NavigationService', () => {
  let service: OperatorNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
