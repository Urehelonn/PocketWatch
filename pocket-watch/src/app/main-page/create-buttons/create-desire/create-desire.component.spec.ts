import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDesireComponent } from './create-desire.component';

describe('CreateDesireComponent', () => {
  let component: CreateDesireComponent;
  let fixture: ComponentFixture<CreateDesireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDesireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDesireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
