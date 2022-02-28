import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasfillformComponent } from './gasfillform.component';

describe('GasfillformComponent', () => {
  let component: GasfillformComponent;
  let fixture: ComponentFixture<GasfillformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasfillformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GasfillformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
