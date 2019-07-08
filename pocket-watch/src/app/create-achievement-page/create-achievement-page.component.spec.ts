import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAchievementPageComponent } from './create-achievement-page.component';

describe('CreateAchievementPageComponent', () => {
  let component: CreateAchievementPageComponent;
  let fixture: ComponentFixture<CreateAchievementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAchievementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAchievementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
