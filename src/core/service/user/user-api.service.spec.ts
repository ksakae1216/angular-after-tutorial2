import { TestBed } from '@angular/core/testing';

import { UserApiService } from './user-api.service';

describe('UserApi.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserApiService = TestBed.get(UserApiService);
    expect(service).toBeTruthy();
  });
});
