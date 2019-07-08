import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDesirePageComponent } from './create-desire-page.component';

describe('CreateDesirePageComponent', () => {
  let component: CreateDesirePageComponent;
  let fixture: ComponentFixture<CreateDesirePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDesirePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDesirePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
