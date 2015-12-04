describe('test1', function test1() {
  it('test11', function test2() {
    browser.get('https://angular.github.io/protractor/#/');

    expect(browser.getTitle()).toEqual('Protractor - end to end testing for AngularJS');
  });
});
