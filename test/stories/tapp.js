describe('TODO MVC', function() {
	it('should have expected page title', function() {
		browser.get('http://todomvc.com/examples/angularjs/#/');
		expect(browser.getTitle()).toEqual('AngularJS • TodoMVC');
	});

	it('should have expected header title', function() {
		expect(element(by.css('body > ng-view > section > header > h1')).getText()).toEqual('todos');
	});

	it('should have todo inputbox', function() {
    browser.isElementPresent(element(by.css('body > ng-view > section > header > form > input'))).then(function(){
    	console.log('element is present')
    });
	});

	it('should able to write on todo inputbox', function() {
     element(by.model('newTodo')).sendKeys("sushma").submit();
	browser.sleep(2000);
	});

	it('should able to create todo item when hit enter', function() {
      var a=element(by.model('newTodo'))
	a.sendKeys("roja").submit();
	a.sendKeys("vidya").submit();
	browser.sleep(2000);
	});

	//it('should able to edit item', function() {

	//});

	it('should able to complete todo item', function() {
      element(by.css('body > ng-view > section > footer > ul > li:nth-child(3) > a')).click();
      browser.sleep(2000);
	});

	it('should able to filter todo item with All', function() {
    element(by.css('body > ng-view > section > footer > ul > li:nth-child(1) > a')).click();
	browser.sleep(2000);
	});
	it('should able to delete todo item', function() {
    element(by.css('body > ng-view > section > section > ul > li > div > input')).click();
    browser.sleep(2000);
    element(by.css('body > ng-view > section > footer > button')).click();
    browser.sleep(2000);
	});

	it('should able to filter todo item with Active', function() {
    element(by.css('body > ng-view > section > footer > ul > li:nth-child(2) > a')).click();
	});
	it('should able to delete all completed todo item', function() {
    element(by.css('body > ng-view > section > section > label')).click();
    element(by.css('body > ng-view > section > footer > button')).click();
	});







//deletebtn:function(){
		this.selectAll.click();
		this.clearbtn.click();
	},



	//select
	get select(){
		return element(by.xpath('/html/body/ng-view/section/section/ul/li[1]/div/input'));

	},