import { ApiService } from './api.service';

describe('ApiService without the TestBed', () => {
  let service: ApiService;
  beforeEach(() => {
    service = new ApiService();
  });

  // Testing that the method `fetch()` returns data
  it('should receive some data when calling fetch', () => {
    expect(service.fetch()).toBeDefined();
  });
});
