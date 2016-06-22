describe('upgrade ng1/ng2 application', function() {
  beforeEach(function() {
    browser.pause();
    browser.get('http://localhost:8000/all/playground/src/upgrade');
  });

  it('should bind between ng1 and ng2 app', function() {
    var ngInput = element(by.css('input[ng-model="name"]'));

    var ngSpan = element(by.css('span.ng-binding'));

    ngInput.sendKeys('Earth');

    expect(ngSpan.getText()).toEqual('WorldEarth');
  });
});
