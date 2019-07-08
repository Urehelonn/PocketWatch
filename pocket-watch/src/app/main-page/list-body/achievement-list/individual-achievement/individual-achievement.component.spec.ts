import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAchievementComponent } from './individual-achievement.component';

describe('IndividualAchievementComponent', () => {
  let component: IndividualAchievementComponent;
  let fixture: ComponentFixture<IndividualAchievementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualAchievementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
