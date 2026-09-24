import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { IntelPage } from './intel.page';
import { IntelService } from '../../services/intel/intel.service';
import { INTEL_PROCESSORS } from '../../data/Intel.interface';

describe('IntelPage', () => {
  let component: IntelPage;
  let fixture: ComponentFixture<IntelPage>;
  const intelServiceMock = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntelPage],
      providers: [{ provide: IntelService, useValue: intelServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(IntelPage);
    component = fixture.componentInstance;
  });

  afterEach(() => jest.clearAllMocks());

  it('should load processors and set state to success', () => {
    intelServiceMock.getAll.mockReturnValue(of(INTEL_PROCESSORS));
    fixture.detectChanges();

    expect(component.state).toBe('success');
    expect(component.processors).toEqual(INTEL_PROCESSORS);
  });

  it('should set state to error when the service fails', () => {
    intelServiceMock.getAll.mockReturnValue(throwError(() => new Error('error')));
    fixture.detectChanges();

    expect(component.state).toBe('error');
  });
});