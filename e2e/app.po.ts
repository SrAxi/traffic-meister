import { browser, by, element } from 'protractor';

export class TrafficMeisterPage {
  navigateTo () {
    return browser.get('/');
  }

  getParagraphText () {
    return element(by.css('app-root h1')).getText();
  }

  countOpts (type: string) {
    return element(by.css(`select.${type}`)).all(by.tagName('option')).count();
  }

  getDropdownOpt (type: string, opt: number) {
    return element(by.css(`select.${type} option:nth-child(${opt})`));
  }

  getReloadButton () {
    return element(by.css('button.reloadButton'));
  }
}
