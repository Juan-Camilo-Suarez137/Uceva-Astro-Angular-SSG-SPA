import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyzenPages } from './ryzen.pages';

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
});
