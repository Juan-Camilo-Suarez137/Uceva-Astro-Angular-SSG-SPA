import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { RyzenPages } from './ryzen.pages';
import { RYZENPROCESSORS } from '../../data/ryzen.interface';
import { RyzenService } from '../../services/ryzen/ryzen.service';

describe('RyzenPages', () => {
  let component: RyzenPages;
  let fixture: ComponentFixture<RyzenPages>;
  const ryzenServiceMock = { getAllRyzenProcessors: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RyzenPages],
      providers: [{ provide: RyzenService, useValue: ryzenServiceMock }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RyzenPages);
    component = fixture.componentInstance;
  });

  afterEach(() => jest.clearAllMocks());

  it('should load processors and set state to success', () => {
    ryzenServiceMock.getAllRyzenProcessors.mockReturnValue(of(RYZENPROCESSORS));
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.state).toBe('success');
    expect(component.processors).toEqual(RYZENPROCESSORS);
  });

  it('should set state to error when the service fails', () => {
    ryzenServiceMock.getAllRyzenProcessors.mockReturnValue(throwError(() => new Error('error')));
    fixture.detectChanges();

    expect(component.state).toBe('error');
  });

  it('should render the Ryzen table after loading the processors', () => {
    ryzenServiceMock.getAllRyzenProcessors.mockReturnValue(of(RYZENPROCESSORS));
    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector('app-ryzen-table');

    expect(table).toBeTruthy();
  });
});
