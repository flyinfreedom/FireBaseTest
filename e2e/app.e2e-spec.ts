import { FireBaseOnePage } from './app.po';

describe('fire-base-one App', function() {
  let page: FireBaseOnePage;

  beforeEach(() => {
    page = new FireBaseOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
