import { TrafficMeisterPage } from './app.po';

describe('traffic-meister App', () => {
  let page: TrafficMeisterPage;

  beforeEach(() => {
    page = new TrafficMeisterPage();
  });

    it('should display message saying Traffic Meister', () => {
    page.navigateTo();
        expect(page.getParagraphText()).toEqual('Traffic Meister');
  });
});
