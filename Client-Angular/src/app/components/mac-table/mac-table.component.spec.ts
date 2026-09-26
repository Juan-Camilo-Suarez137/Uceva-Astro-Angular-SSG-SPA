import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MacTableComponent } from './mac-table.component';
import { MAC_PROCESSORS } from '../../data/mac.interface';

describe('MacTableComponent', () => {
  let component: MacTableComponent;
  let fixture: ComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one row per processor', () => {
    component.processors = MAC_PROCESSORS;
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(MAC_PROCESSORS.length);
  });

  it('should render the processor data', () => {
    component.processors = MAC_PROCESSORS;
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Apple M1');
    expect(text).toContain('M3');
    expect(text).toContain('3nm (N3B)');
    expect(text).toContain('4.4');
  });
});
