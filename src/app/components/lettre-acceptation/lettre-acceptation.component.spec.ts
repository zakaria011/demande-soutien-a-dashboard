import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettreAcceptationComponent } from './lettre-acceptation.component';

describe('LettreAcceptationComponent', () => {
  let component: LettreAcceptationComponent;
  let fixture: ComponentFixture<LettreAcceptationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettreAcceptationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettreAcceptationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
