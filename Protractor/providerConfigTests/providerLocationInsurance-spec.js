const functions = require('../Helpers/waitFunctions.js');

describe('provider location insurance config', function() {
  it('should configure location insurance of a provider', function() {


//location insurances
browser.sleep(1000);
functions.csTableClick(by.className,'ng-binding > "Insurances"');
functions.clickWait(by.css,'#vertical-tab-container > div > div > div.tab-pane.ng-scope.active > div > div > div:nth-child(4) > div > div > div > div.row.ng-scope > uib-accordion > div > div.stacked.panel.panel-default.panel.panel-default.panel-open > div.panel-collapse.in.collapse > div > div > div > div.pull-right.ng-scope > div > button:nth-child(2)');
functions.keysWait(by.className,'InsuranceName','AAA');
functions.clickWait(by.id,'SaveButton');
//functions.expectWait(by.id,'SuccessPanel');










  });
});
