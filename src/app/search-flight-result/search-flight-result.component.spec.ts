import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightResultComponent } from './search-flight-result.component';

describe('SearchFlightResultComponent', () => {
  let component: SearchFlightResultComponent;
  let fixture: ComponentFixture<SearchFlightResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
