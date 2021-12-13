import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtabChartComponent } from './etab-chart.component';

describe('EtabChartComponent', () => {
  let component: EtabChartComponent;
  let fixture: ComponentFixture<EtabChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtabChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtabChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
