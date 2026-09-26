import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { MacPages } from './mac.pages';
import { MAC_PROCESSORS } from '../../data/mac.interface';
import { MacService } from '../../services/mac/mac.service';

describe('MacPages', () => {
  let component: MacPages;
  let fixture: ComponentFixture;
  const macServiceMock = { getAllMacProcessors: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacPages],
      providers: [{ provide: MacService, useValue: macServiceMock }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacPages);
    component = fixture.componentInstance;
  });

  afterEach(() => jest.clearAllMocks());

  it('should load processors and set state to success', () => {
    macServiceMock.getAllMacProcessors.mockReturnValue(of(MAC_PROCESSORS));
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.state).toBe('success');
    expect(component.processors).toEqual(MAC_PROCESSORS);
  });

  it('should set state to error when the service fails', () => {
    macServiceMock.getAllMacProcessors.mockReturnValue(throwError(() => new Error('error')));
    fixture.detectChanges();

    expect(component.state).toBe('error');
  });

  it('should render the Mac table after loading the processors', () => {
    macServiceMock.getAllMacProcessors.mockReturnValue(of(MAC_PROCESSORS));
    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector('app-mac-table');

    expect(table).toBeTruthy();
  });
});
