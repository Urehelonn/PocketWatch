import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDayRecordComponent } from './single-day-record.component';

describe('SingleDayRecordComponent', () => {
  let component: SingleDayRecordComponent;
  let fixture: ComponentFixture<SingleDayRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDayRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDayRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
