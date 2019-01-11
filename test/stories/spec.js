describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:8080/examples/angularjs/#/');
    expect(browser.getTitle()).toEqual('AngularJS • TodoMVC');
  });
});