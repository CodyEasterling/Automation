const functions = require('../Helpers/waitFunctions.js');

describe('locationHours', function() {
  it('should properly manipulate location hours', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/location/locations?');


functions.clickWait(by.css,'#Edit_604');
functions.clickWait(by.css,'#vertical-tab-container > div > ul > li:nth-child(2) > div');
functions.clickWait(by.css,'#vertical-tab-container > div > div > div.tab-pane.ng-scope.active > div > div > div.pull-right.ng-scope > div > button');
functions.clickWait(by.className,'Day');
functions.clickWait(by.css,'#vertical-tab-container > div > div > div.tab-pane.ng-scope.active > div > div > div:nth-child(4) > div > div > div > div.form-horizontal > div:nth-child(1) > div > div > select > option:nth-child(3)');
//functions.clickWait(by.id,'SaveButton');
//functions.expectWait(by.id,'ErrorPanel');
functions.keysWait(by.className,'OpenTime','3:00 AM');
functions.keysWait(by.className,'CloseTime','7:00 AM');
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');
browser.sleep(5000);
functions.clickWait(by.className,'fa fa-trash');
functions.clickWait(by.className,'ih-button-ok');
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');


  });
});
