import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesireListComponent } from './desire-list.component';

describe('DesireListComponent', () => {
  let component: DesireListComponent;
  let fixture: ComponentFixture<DesireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesireListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
