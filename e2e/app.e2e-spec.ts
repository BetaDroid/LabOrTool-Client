import { LabOrToolClientPage } from './app.po';

describe('lab-or-tool-client App', () => {
  let page: LabOrToolClientPage;

  beforeEach(() => {
    page = new LabOrToolClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
