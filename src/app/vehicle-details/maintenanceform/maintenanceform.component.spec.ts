import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceformComponent } from './maintenanceform.component';

describe('MaintenanceformComponent', () => {
  let component: MaintenanceformComponent;
  let fixture: ComponentFixture<MaintenanceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
