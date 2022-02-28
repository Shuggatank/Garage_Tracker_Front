import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilchangeformComponent } from './oilchangeform.component';

describe('OilchangeformComponent', () => {
  let component: OilchangeformComponent;
  let fixture: ComponentFixture<OilchangeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilchangeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OilchangeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
