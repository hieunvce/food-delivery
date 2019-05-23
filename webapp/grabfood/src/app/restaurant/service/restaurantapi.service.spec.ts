import { TestBed } from '@angular/core/testing';

import { RestaurantapiService } from './restaurantapi.service';

describe('RestaurantapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantapiService = TestBed.get(RestaurantapiService);
    expect(service).toBeTruthy();
  });
});
