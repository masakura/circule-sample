describe('test1', function test1() {
  beforeEach(function setup() {
    browser.ignoreSynchronization = true;
  });

  it('test11', function test2() {
    browser.get('http://localhost:8001');

    expect(browser.getTitle()).toEqual('Bootstrap take screenshot');
  });
});
