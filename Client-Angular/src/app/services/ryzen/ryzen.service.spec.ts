import { TestBed } from '@angular/core/testing';
import { RyzenService } from './ryzen.service';
import { RYZEN_PROCESSORS } from '../../data/ryzen.interface';

describe('RyzenService', () => {
  let service: RyzenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RyzenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the Ryzen processors', (done) => {
    service.getAllRyzenProcessors().subscribe((processors) => {
      expect(processors).toEqual(RYZEN_PROCESSORS);
      done();
    });
  });
});
