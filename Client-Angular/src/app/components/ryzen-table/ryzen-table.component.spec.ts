import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RyzenTableComponent } from './ryzen-table.component';
import { RYZEN_MOCK } from '../../mocks/ryzen.mocks';

describe('Componente de tabla Ryzen', () => {
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

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una fila por cada procesador', () => {
    component.processors = RYZEN_MOCK;
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(RYZEN_MOCK.length);
  });

  it('debería renderizar los datos de los procesadores', () => {
    component.processors = RYZEN_MOCK;
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;
    expect(text).toContain(RYZEN_MOCK[0].model);
    expect(text).toContain(RYZEN_MOCK[0].architecture);
    expect(text).toContain(RYZEN_MOCK[1].socket);
    expect(text).toContain(String(RYZEN_MOCK[1].maxBoostGHz));
  });
});
