import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDesireComponent } from './individual-desire.component';

describe('IndividualDesireComponent', () => {
  let component: IndividualDesireComponent;
  let fixture: ComponentFixture<IndividualDesireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualDesireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDesireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
