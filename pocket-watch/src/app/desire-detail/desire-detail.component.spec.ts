import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesireDetailComponent } from './desire-detail.component';

describe('DesireDetailComponent', () => {
  let component: DesireDetailComponent;
  let fixture: ComponentFixture<DesireDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesireDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
