import { JsGpioPage } from './app.po';

describe('js-gpio App', () => {
  let page: JsGpioPage;

  beforeEach(() => {
    page = new JsGpioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
