import { TestBed } from '@angular/core/testing';

import { FidzulaService } from './fidzula.service';

describe('FidzulaService', () => {
  let service: FidzulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FidzulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
