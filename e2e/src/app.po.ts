import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.tagName('h1')).getText() as Promise<string>;
  }

  getTableColumns() {
    return element(by.css('.table-virtual .table-virtual-header-columns')).all(
      by.tagName('span')
    );
  }

  getTableRows() {
    return element(by.tagName('cdk-virtual-scroll-viewport')).all(
      by.css('.table-virtual-row')
    );
  }
}
