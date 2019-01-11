var todo = {
	title: function () {
		return $('head > title');
	},

	// get title() {
	// 	return $('h1');
	// },
    get header(){
    	return $('h1');
    },
  
    get todoBox(){
		return $('[ng-model="newTodo"]');
	},

	createItem: function(item) {
		this.todoBox.clear();
		this.todoBox.sendKeys(item);
	},

	addItem: function(item) {
		this.todoBox.clear();
		this.todoBox.sendKeys(item).submit();
	},
		
    get complete(){
     return element(by.css('body > ng-view > section > footer > ul > li:nth-child(3) > a'));
	},

	clickbtn:function(){
		this.complete.click();
		},

	 get select(){
		return element(by.xpath('/html/body/ng-view/section/section/ul/li[1]/div/input'));

	},

	todoItem: function(num) {
		return element.all(by.repeater('todo in todos')).get(num);
	},

	 todoItem1: function() {
	 	return element.all(by.repeater('todo in todos')).get();
	 },

	edit:function(ele, val) {
		let editBox = ele.$('form input');
	    browser.actions().
	    mouseMove(ele).
	    doubleClick().
	    perform();
	    browser.actions().
	    mouseMove(ele).
	    doubleClick().
	    perform();
	    //element(by.css('.ng-binding')).clear();
	    editBox.sendKeys(val);
	    editBox.submit();
	},

	deleteone:function(){
     this.select.click();
     this.clearbtn.click();
	},

	get selectAll(){
		return $('body > ng-view > section > section > label');
	},

	get clearbtn(){
		return $('body > ng-view > section > footer > button');
	},

	deletebtn:function(){
		this.selectAll.click();
		this.clearbtn.click();
	},

	get all(){
		return $('body > ng-view > section > footer > ul > li:nth-child(1) > a');
	},

	allbtn:function(){
		this.all.click();
	},

	get active(){
		return $('body > ng-view > section > footer > ul > li:nth-child(2) > a');
	},

	activebtn:function(){
     this.active.click();
	},

	get numofitem(){
		return $('body > ng-view > section > footer > span > strong')
	},	
}
module.exports = todo;