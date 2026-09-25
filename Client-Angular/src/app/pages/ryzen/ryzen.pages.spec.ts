import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RyzenPages } from './ryzen.pages';
import { RYZENPROCESSORS } from '../../data/ryzen.interface';

describe('RyzenPages', () => {
  let component: RyzenPages;
  let fixture: ComponentFixture<RyzenPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RyzenPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RyzenPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the Ryzen processors successfully', () => {
    expect(component.state).toBe('success');
    expect(component.processors).toEqual(RYZENPROCESSORS);
  });

  it('should render the Ryzen table after loading the processors', () => {
    const table = fixture.nativeElement.querySelector('app-ryzen-table');

    expect(table).toBeTruthy();
  });
});
