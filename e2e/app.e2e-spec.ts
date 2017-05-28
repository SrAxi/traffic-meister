import { browser } from 'protractor';
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

  it('should show 8 colors when we first load the app', () => {
    page.navigateTo();
    expect(page.countOpts('colors')).toEqual(8);
  });

  it('when selecting \'Car\' in Types dropdown the other dropdowns should filter their options', function () {
    browser.waitForAngular();

    const brandCount = page.countOpts('brands');
    const colorCount = page.countOpts('colors');
    const typesFirstOption = page.getDropdownOpt('types', 1);

    expect(typesFirstOption.getText()).toBe('Car');

    typesFirstOption.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('brands')).not.toBe(brandCount);
        expect(page.countOpts('colors')).not.toBe(colorCount);
      });
    });
  });

  it('when selecting \'Bugatti Veyron\' in Brands dropdown the other dropdowns should filter their options', function () {
    browser.waitForAngular();

    const typeCount = page.countOpts('types');
    const colorCount = page.countOpts('colors');
    const brandsFirstOption = page.getDropdownOpt('brands', 1);

    expect(brandsFirstOption.getText()).toBe('Bugatti Veyron');

    brandsFirstOption.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('types')).toBe(typeCount);
        expect(page.countOpts('colors')).not.toBe(colorCount);
      });
    });
  });

  it('when selecting an option in Colors (after selecting Car brand) dropdown the other dropdowns should filter their options', function () {
    browser.waitForAngular();

    const typeCount = page.countOpts('types');
    const brandCount = page.countOpts('brands');
    const colorsFirstOption = page.getDropdownOpt('colors', 1);

    expect(colorsFirstOption.getText()).toBe('Red');

    colorsFirstOption.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('types')).not.toBe(typeCount);
        expect(page.countOpts('brands')).not.toBe(brandCount);
      });
    });
  });

  it('when clicking the Reload button it should load all the available options in all 3 dropdowns', function () {
    browser.waitForAngular();

    const reloadButton = page.getReloadButton();

    expect(reloadButton.getText()).toBe('Reload');

    reloadButton.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('types')).toEqual(3);
        expect(page.countOpts('brands')).toEqual(12);
        expect(page.countOpts('colors')).toEqual(8);
      });
    });
  });

  it('when selecting \'Airplane\'in Types dropdown the other dropdowns should filter their options', function () {
    browser.waitForAngular();

    const brandCount = page.countOpts('brands');
    const colorCount = page.countOpts('colors');
    const typesSecondOption = page.getDropdownOpt('types', 2);

    expect(typesSecondOption.getText()).toBe('Airplane');

    typesSecondOption.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('brands')).not.toBe(brandCount);
        expect(page.countOpts('colors')).not.toBe(colorCount);
      });
    });
  });

  it('when selecting \'Airbus A400M Atlas\' in Brands dropdown the other dropdowns should filter their options', function () {
    browser.waitForAngular();

    const typeCount = page.countOpts('types');
    const colorCount = page.countOpts('colors');
    const brandsThirdOption = page.getDropdownOpt('brands', 3);

    expect(brandsThirdOption.getText()).toBe('Airbus A400M Atlas');

    brandsThirdOption.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('types')).toBe(typeCount);
        expect(page.countOpts('colors')).not.toBe(colorCount);
      });
    });
  });

  it('when selecting an option in Colors (after selecting Airplane brand) dropdown the other dropdowns should filter their options', function () {
    browser.waitForAngular();

    const typeCount = page.countOpts('types');
    const brandCount = page.countOpts('brands');
    const colorsSecondOption = page.getDropdownOpt('colors', 2);

    expect(colorsSecondOption.getText()).toBe('White');

    colorsSecondOption.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('types')).not.toBe(typeCount);
        expect(page.countOpts('brands')).not.toBe(brandCount);
      });
    });
  });

  it('when clicking the Reload button it should load all the available options in all 3 dropdowns', function () {
    browser.waitForAngular();

    const reloadButton = page.getReloadButton();

    expect(reloadButton.getText()).toBe('Reload');

    reloadButton.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('types')).toEqual(3);
        expect(page.countOpts('brands')).toEqual(12);
        expect(page.countOpts('colors')).toEqual(8);
      });
    });
  });

  it('when selecting \'Train\'in Types dropdown the other dropdowns should filter their options', function () {
    browser.waitForAngular();

    const brandCount = page.countOpts('brands');
    const colorCount = page.countOpts('colors');
    const typesThirdOption = page.getDropdownOpt('types', 3);

    expect(typesThirdOption.getText()).toBe('Train');

    typesThirdOption.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('brands')).not.toBe(brandCount);
        expect(page.countOpts('colors')).not.toBe(colorCount);
      });
    });
  });

  it('when selecting \'Prairie 2-6-2\' in Brands dropdown the other dropdowns should filter their options', function () {
    browser.waitForAngular();

    const typeCount = page.countOpts('types');
    const colorCount = page.countOpts('colors');
    const brandsSecondOption = page.getDropdownOpt('brands', 2);

    expect(brandsSecondOption.getText()).toBe('Prairie 2-6-2');

    brandsSecondOption.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('types')).toBe(typeCount);
        expect(page.countOpts('colors')).not.toBe(colorCount);
      });
    });
  });

  it('when selecting an option in Colors (after selecting Train brand) dropdown the other dropdowns should filter their options', function () {
    browser.waitForAngular();

    const typeCount = page.countOpts('types');
    const brandCount = page.countOpts('brands');
    const colorsThirdOption = page.getDropdownOpt('colors', 3);

    expect(colorsThirdOption.getText()).toBe('Grey');

    colorsThirdOption.click().then(function () {
      browser.waitForAngular();
      browser.sleep(1000).then(function () {
        expect(page.countOpts('types')).toBe(typeCount);
        expect(page.countOpts('brands')).not.toBe(brandCount);
      });
    });
  });
});
