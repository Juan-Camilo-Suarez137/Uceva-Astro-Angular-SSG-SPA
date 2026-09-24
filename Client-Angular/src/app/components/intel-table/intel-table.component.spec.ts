import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntelTableComponent } from './intel-table.component';
import { INTEL_PROCESSORS } from '../../data/Intel.interface';

describe('IntelTableComponent', () => {
  let component: IntelTableComponent;
  let fixture: ComponentFixture<IntelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntelTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntelTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render one row per processor', () => {
    component.processors = INTEL_PROCESSORS;
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(INTEL_PROCESSORS.length);
  });

  it('should render the model of each processor', () => {
    component.processors = INTEL_PROCESSORS;
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Core i9-14900K');
    expect(text).toContain('Core i5-12400');
  });
});