import { HwCubePage } from './app.po';

describe('hw-cube App', function() {
  let page: HwCubePage;

  beforeEach(() => {
    page = new HwCubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
