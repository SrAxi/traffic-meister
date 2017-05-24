import { TrafficMeisterPage } from './app.po';

describe('traffic-meister App', () => {
  let page: TrafficMeisterPage;

  beforeEach(() => {
    page = new TrafficMeisterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
