import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RyzenTableComponent } from './ryzen-table.component';
import { RYZENPROCESSORS } from '../../data/ryzen.interface';

describe('RyzenTableComponent', () => {
  let component: RyzenTableComponent;
  let fixture: ComponentFixture<RyzenTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RyzenTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RyzenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one row per processor', () => {
    component.processors = RYZENPROCESSORS;
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(RYZENPROCESSORS.length);
  });

  it('should render the processor data', () => {
    component.processors = RYZENPROCESSORS;
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Ryzen 5 5600X');
    expect(text).toContain('Zen 3');
    expect(text).toContain('AM5');
    expect(text).toContain('5.7');
  });
});
