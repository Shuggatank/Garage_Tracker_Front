import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchToastComponent } from './search-toast.component';

describe('SearchToastComponent', () => {
  let component: SearchToastComponent;
  let fixture: ComponentFixture<SearchToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
