import { EmployeeListPage } from './app.po';

describe('employee-list App', () => {
  let page: EmployeeListPage;

  beforeEach(() => {
    page = new EmployeeListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
