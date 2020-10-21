import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-main-menu p-menubar h1')).getText() as Promise<string>;
  }

  getWelcomeText() {
    return element(by.css('app-start p')).getText() as Promise<string>;
  }
}
