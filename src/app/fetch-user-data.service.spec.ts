import { TestBed } from '@angular/core/testing';

import { FetchUserDataService } from './fetch-user-data.service';

describe('FetchUserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchUserDataService = TestBed.get(FetchUserDataService);
    expect(service).toBeTruthy();
  });
});
