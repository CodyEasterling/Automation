const functions = require('../Helpers/waitFunctions.js');

describe('provider location hours config', function() {
  it('should configure location hours for a provider', function() {

browser.sleep(1000);
functions.csTableClick(by.css,'[ng-click="toggleOpen()"',2);
functions.clickWait(by.css,'#vertical-tab-container > div > div > div.tab-pane.ng-scope.active > div > div > div:nth-child(4) > div > div > div > div.row.ng-scope > uib-accordion > div > div.stacked.panel.panel-default.panel.panel-default.panel-open > div.panel-collapse.in.collapse > div > div > div > div.pull-right.ng-scope > div > button');
functions.clickWait(by.className,'Day');
functions.clickWait(by.css,'#vertical-tab-container > div > div > div.tab-pane.ng-scope.active > div > div > div:nth-child(4) > div > div > div > div.row.ng-scope > uib-accordion > div > div.stacked.panel.panel-default.panel.panel-default.panel-open > div.panel-collapse.in.collapse > div > div > div > div:nth-child(4) > div > div > div > div.form-horizontal > div:nth-child(1) > div > div > select > option:nth-child(2)');
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');

  });
});
