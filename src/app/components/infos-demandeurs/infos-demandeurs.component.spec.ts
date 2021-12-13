import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosDemandeursComponent } from './infos-demandeurs.component';

describe('InfosDemandeursComponent', () => {
  let component: InfosDemandeursComponent;
  let fixture: ComponentFixture<InfosDemandeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosDemandeursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosDemandeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
