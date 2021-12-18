import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressDemandesComponent } from './inprogress-demandes.component';

describe('InprogressDemandesComponent', () => {
  let component: InprogressDemandesComponent;
  let fixture: ComponentFixture<InprogressDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprogressDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
