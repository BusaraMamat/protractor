describe('angularjs homepage', function() {
  it('should get each', function() {
    browser.get('http://localhost:8081');
    var stuffs = element.all(by.css('.teststuff'));
    expect(stuffs.count()).toBe(3);
    stuffs.each(function(stuff) {
      console.log('In an each');
      expect(stuff.getAttribute('value').then(function(value) {
        console.log('in expect, value = ' + value);
        return value;
      })).toEqual('10');
      stuff.sendKeys(
        protractor.Key.chord(protractor.Key.CONTROL, 'a'),
        protractor.Key.NULL,
        '30').then(function() {
          console.log('After sendKeys');
        });
    }).then(function() {
      console.log('Done with each');
    });
  });
  // it('should greet the named user', function() {
  //   browser.get('http://www.angularjs.org');

  //   element(by.model('yourName')).sendKeys('Julie');

  //   var greeting = element(by.binding('yourName'));

  //   expect(greeting.getText()).toEqual('Hello Julie!');
  // });

  // describe('todo list', function() {
  //   var todoList;

  //   beforeEach(function() {
  //     browser.get('http://www.angularjs.org');

  //     todoList = element.all(by.repeater('todo in todos'));
  //   });

  //   it('should list todos', function() {
  //     expect(todoList.count()).toEqual(2);
  //     expect(todoList.get(1).getText()).toEqual('build an angular app');
  //   });

  //   it('should add a todo', function() {
  //     var addTodo = element(by.model('todoText'));
  //     var addButton = element(by.css('[value="add"]'));

  //     addTodo.sendKeys('write a protractor test');
  //     addButton.click();

  //     expect(todoList.count()).toEqual(3);
  //     expect(todoList.get(2).getText()).toEqual('write a protractor test');
  //   });
  // });
});
