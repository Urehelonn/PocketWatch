import { TestBed } from '@angular/core/testing';

import { AchievementService} from './achievement-service.service';

describe('AchievementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AchievementService = TestBed.get(AchievementService);
    expect(service).toBeTruthy();
  });
});
