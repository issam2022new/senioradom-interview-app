import { TestBed } from '@angular/core/testing';

import { GpsPointService } from './gps-point.service';

describe('GpsPointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpsPointService = TestBed.get(GpsPointService);
    expect(service).toBeTruthy();
  });
});
