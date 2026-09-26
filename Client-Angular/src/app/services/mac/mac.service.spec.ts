import { TestBed } from '@angular/core/testing';
import { MacService } from './mac.service';
import { MAC_PROCESSORS } from '../../data/mac.interface';

describe('MacService', () => {
  let service: MacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the Mac processors', (done) => {
    service.getAllMacProcessors().subscribe((processors) => {
      expect(processors).toEqual(MAC_PROCESSORS);
      done();
    });
  });
});
