import { AdminDnDPage } from './app.po';

describe('admin-dn-d App', function() {
  let page: AdminDnDPage;

  beforeEach(() => {
    page = new AdminDnDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
