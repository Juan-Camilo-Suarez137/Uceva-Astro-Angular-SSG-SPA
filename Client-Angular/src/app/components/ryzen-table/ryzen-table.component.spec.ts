import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyzenTableComponent } from './ryzen-table.component';

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
});
