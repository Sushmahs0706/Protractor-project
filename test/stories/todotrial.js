var todoPage = require('../pages/todo.page');

describe('TODO MVC',function(){
 beforeEach(function(){
  browser.get('http://todomvc.com/examples/angularjs/#/');
 });

	it('should have expected page title', function() {
	expect(browser.getTitle()).toEqual('AngularJS • TodoMVC');
	});

	it('should have expected header title', function() {
		expect(todoPage.header.getText()).toEqual('todos');
	});

	it('should have todo inputbox', function() {
    expect(todoPage.todoBox.isDisplayed()).toBe(true);
   	});

	it('should able to write on todo inputbox', function() {
      expect(todoPage.todoBox.isEnabled()).toBe(true);
      expect(todoPage.todoBox.getAttribute('placeholder')).toEqual('What needs to be done?');
      todoPage.createItem('Testing');
      expect(todoPage.todoBox.getAttribute('value')).toEqual('Testing');
      //check the value of todo input box

	});

	it('should able to create todo item when hit enter', function() {
		    todoPage.addItem('sushma');
		    todoPage.addItem('roja');
        todoPage.addItem('vidya');
        //check length of todoItems
         let list = element.all(by.css('.todo-list li'));
         expect(list.count()).toBe(3);
       	});

	it('should able to delete item', function(){
         todoPage.deleteone();
         let list = element.all(by.css('.todo-list li'));
         expect(list.count()).toBe(2);
        //check length of todoItem
        //expect(length).to.be.equal(2) 
	});

	it('should able to complete todo item', function() {
        todoPage.clickbtn();
        let list = element.all(by.css('.todo-list li'));
        expect(list.count()).toBe(0);
        //check length of completed item
	});

	it('should able to filter todo item with All', function() {
         todoPage.allbtn();
         let list = element.all(by.css('.todo-list li'));
         expect(list.count()).toBe(2);
         //check length of all items
	});

	it('should able to filter todo item with Active', function() {
         todoPage.activebtn();
         let list = element.all(by.css('.todo-list li'));
         expect(list.count()).toBe(2);
	});

	it('should able to delete all todo item', function() {
         todoPage.deletebtn();
         let list = element.all(by.css('.todo-list li'));
         expect(list.count()).toBe(0);
         //check length should be zero
	 });			
	
    it('should able to edit item', function() {
    	 todoPage.addItem('sushma');
		   todoPage.addItem('roja');
       todoPage.addItem('vidya');
    	 let item = todoPage.todoItem(0);
   	   todoPage.edit(item,"hs");
       browser.sleep(20000);
       let first = element.all(by.css('.todo-list li')).first();
       expect(first.getText()).toBe('hs');
      // expect(todoPage.todoItem.getAttribute('value')).toEqual('sushmahs');
      //  expect(element(by.css('.ng-binding')).evaluate('sushmahs'));
      //  browser.sleep(20000);
   	  //  check value of item
   	});


});