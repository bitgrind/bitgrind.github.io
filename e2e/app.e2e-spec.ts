import { GithubPortfolioPage } from './app.po';

describe('github-portfolio App', function() {
  let page: GithubPortfolioPage;

  beforeEach(() => {
    page = new GithubPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
