import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutesDemandesComponent } from './toutes-demandes.component';

describe('ToutesDemandesComponent', () => {
  let component: ToutesDemandesComponent;
  let fixture: ComponentFixture<ToutesDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutesDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
