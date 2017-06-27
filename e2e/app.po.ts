import { browser, by, element } from 'protractor';

export class RockPaperScissorsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPaperHandElement() {
    return element(by.css('img')); // First element
  }

  getPlayAgainButtonElement() {
    return element(by.css('button')); // Play again button
  }
}
