const functions = require('../Helpers/waitFunctions.js');

describe('location context on provider', function() {
  it('should add location context to a provider', function() {


//functions.clickWait(by.className,'fa fa-pencil icon-edit grow');

//add location context
browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers');
functions.tableClick(by.className,'fa fa-pencil icon-edit grow',0);
functions.clickWait(by.css,'#vertical-tab-container > div > ul > li:nth-child(3) > div');
functions.clickWait(by.css,'#vertical-tab-container > div > div > div.tab-pane.ng-scope.active > div > div > div.pull-right.ng-scope > div > button');
functions.clickWait(by.css,'#vertical-tab-container > div > div > div.tab-pane.ng-scope.active > div > div > div.row > div > div > div > div.ui-select-match > span');
functions.clickWait(by.css,'#ui-select-choices-row-0-0 > span');
functions.clickWait(by.css,'#vertical-tab-container > div > div > div.tab-pane.ng-scope.active > div > div > div.row > div > div > button.btn.btn-primary.btn-sm.beside-medium');
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');
browser.sleep(1000);
  });
});
