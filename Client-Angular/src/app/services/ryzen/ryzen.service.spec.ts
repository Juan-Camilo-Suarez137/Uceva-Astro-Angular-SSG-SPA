import { TestBed } from '@angular/core/testing';

import { RyzenService } from './ryzen.service';

describe('RyzenService', () => {
  let service: RyzenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RyzenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
