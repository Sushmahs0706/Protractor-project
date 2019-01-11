var todoPage = require('../pages/todo.page');
describe.skip('testscript on todo app',function() {
	it('todomvc',function() {
     browser.get("http://todomvc.com/examples/angularjs/#/");
    var e= element(by.model("newTodo"));
    e.sendKeys("sushma").submit();
    e.sendKeys("vidya").submit();
    e.sendKeys("roja").submit();
    element(by.css('body > ng-view > section > section > ul > li:nth-child(1) > div > input')).click();
    element(by.css('body > ng-view > section > footer > button')).click();
    element(by.css('body > ng-view > section > footer > ul > li:nth-child(3) > a')).click();
    e.sendKeys("hs").submit();
    element(by.css('body > ng-view > section > footer > ul > li:nth-child(1) > a')).click();
    browser.sleep(1000);
    element(by.css('body > ng-view > section > section > label')).click();
    element(by.css('body > ng-view > section > footer > button')).click();
    browser.sleep(10000);
     });
});

describe('TODO MVC', function() {
	before(function() {
		browser.get("http://todomvc.com/examples/angularjs/#/");
	});
	it('should have expected page title', function() {
		console.log(todoPage);
		//expect(todoPage.he)
	});

	it('should have expected header title', function() {
		expect(todoPage.header.getText()).to.be.equal('TOddo');
	});

	it('should have todo inputbox', function() {

	});

	it('should able to write on todo inputbox', function() {

	});

	it('should able to create todo item when hit enter', function() {

	});

	it('should able to edit item', function() {

	});

	it('should able to complete todo item', function() {

	});

	it('should able to delete todo item', function() {

	});

	it('should able to filter todo item with All', function() {

	});

	it('should able to filter todo item with Active', function() {

	});

	it('should able to filter todo item with Completed', function() {

	});

	it('should able to delete all completed todo item', function() {

	});
});