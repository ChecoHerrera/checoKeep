import { ChecoKeepPage } from './app.po';

describe('checo-keep App', () => {
  let page: ChecoKeepPage;

  beforeEach(() => {
    page = new ChecoKeepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
