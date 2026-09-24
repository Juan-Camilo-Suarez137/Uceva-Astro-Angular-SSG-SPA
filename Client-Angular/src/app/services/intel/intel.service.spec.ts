import { TestBed } from '@angular/core/testing';
import { IntelService } from './intel.service';
import { INTEL_PROCESSORS } from '../../data/Intel.interface';

describe('IntelService', () => {
  let service: IntelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the Intel processors', (done) => {
    service.getAll().subscribe((processors) => {
      expect(processors).toEqual(INTEL_PROCESSORS);
      done();
    });
  });
});