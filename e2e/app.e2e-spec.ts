import { RockPaperScissorsPage } from './app.po';

describe('rock-paper-scissors App', () => {
  let page: RockPaperScissorsPage;

  beforeEach(() => {
    page = new RockPaperScissorsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Rock, paper & scissors!!');
  });

  it('should play a paper hand and play again button is shown', () => {
    page.navigateTo();
    page.getPaperHandElement().click();

    expect(page.getPlayAgainButtonElement().isDisplayed()).toBeTruthy();
  });

});
