var todoPage = require('../pages/todo.page');
describe('TODO MVC', function() {

	it.only('should have expected page title', function() {
	browser.get('http://todomvc.com/examples/angularjs/#/');
	console.log(todoPage);
	expect(todoPage.title.getTitle()).toEqual('AngularJS • TodoMVC');
	});

	it('should have expected header title', function() {
		expect(todoPage.header.getText()).toEqual('todos');
	});

	it('should have todo inputbox', function() {
     expect( todoPage.inputbox.isElementPresent()).toBe("true");
     });

	it('should able to write on todo inputbox', function() {
     element(todoPage.inputbox.sendKeys("sushma")).submit();
	browser.sleep(2000);
	});

	it('should able to create todo item when hit enter', function() {
      element(todoPage.inputbox.sendKeys("roja")).submit();
      element(todoPage.inputbox.sendKeys("vidya")).submit();
      element(todoPage.inputbox.sendKeys("sush")).submit();
	browser.sleep(2000);
	});

	//it('should able to edit item', function() {

	//});

	it('should able to complete todo item', function() {
      element(todoPage.complete).click();
	});

	it('should able to filter todo item with All', function() {
    element(by.css('body > ng-view > section > footer > ul > li:nth-child(1) > a')).click();
	});

	it('should able to delete todo item', function() {
    element(by.css('body > ng-view > section > section > ul > li > div > input')).click();
    element(by.css('body > ng-view > section > footer > button')).click();
	});

	it('should able to filter todo item with Active', function() {
    element(by.css('body > ng-view > section > footer > ul > li:nth-child(2) > a')).click();
	});

	it('should able to delete all completed todo item', function() {
    element(by.css('body > ng-view > section > section > label')).click();
    element(by.css('body > ng-view > section > footer > button')).click();
	});
});
