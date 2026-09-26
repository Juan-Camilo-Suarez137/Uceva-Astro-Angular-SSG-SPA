import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntelTableComponent } from './intel-table.component';
import { INTEL_MOCK } from '../../mocks/intel.mocks';

describe('Componente de tabla Intel', () => {
  let component: IntelTableComponent;
  let fixture: ComponentFixture<IntelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntelTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntelTableComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('debería renderizar una fila por cada procesador', () => {
    component.processors = INTEL_MOCK;
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(INTEL_MOCK.length);
  });

  it('debería renderizar los datos de los procesadores', () => {
    component.processors = INTEL_MOCK;
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;
    expect(text).toContain(INTEL_MOCK[0].model);
    expect(text).toContain(INTEL_MOCK[0].generation);
    expect(text).toContain(INTEL_MOCK[1].socket);
    expect(text).toContain(String(INTEL_MOCK[1].maxBoostGHz));
  });
});