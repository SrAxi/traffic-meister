import { ApiService } from './api.service';

describe('ApiService without the TestBed', () => {
    let service: ApiService;
    beforeEach(() => {
        service = new ApiService();
    });
    it('should receive some data when calling fetch', () => {
        expect(service.fetch()).toBeDefined();
    });
});
