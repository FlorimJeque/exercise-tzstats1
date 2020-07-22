import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title message', () => {
    page.navigateTo();

    expect(page.getTitleText()).toEqual('Operations Table');
    setTimeout(() => {}, 5000);
  });

  it('should display 4 columns of table', () => {
    page.navigateTo();
    expect(page.getTableColumns().count()).toEqual(4);
  });

  it('should load first 10 operations', () => {
    page.navigateTo();
    expect(page.getTableRows().count()).toBeGreaterThanOrEqual(10);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
