import { MeetupProjectPage } from './app.po';

describe('meetup-project App', () => {
  let page: MeetupProjectPage;

  beforeEach(() => {
    page = new MeetupProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
