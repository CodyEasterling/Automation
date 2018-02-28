const functions = require('../Helpers/waitFunctions.js');

describe('provider field validation', function() {
  it('should check for provider field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers');

//create new provider
functions.clickWait(by.id,'AddNew');
browser.sleep(1000);
//validation on first and last name
functions.clickWait(by.id,'SaveAndReturnButton');
functions.expectWait(by.id,'ErrorPanel');
//populate required fields

//firstName
functions.keysWait(by.className,'FirstName','AAA');
//validation on last lastName
functions.clickWait(by.id,'SaveAndReturnButton');
functions.expectWait(by.id,'ErrorPanel');
//lastName correction
functions.keysWait(by.className,'LastName','AAA');

//phone number Validation
//functions.keysWait(by.xpath,'//*[@id="admin-detail-view"]/div/div[3]/div[15]/div/div/input','');
//functions.clickWait(by.id,"SaveAndReturnButton");
//functions.expectWait(by.id,'ErrorPanel');
//phone number correction
functions.keysWait(by.className,'Phone','2055554425');

//fax number validation
//functions.keysWait(by.xpath,'//*[@id="admin-detail-view"]/div/div[3]/div[16]/div/div/input','');
//functions.clickWait(by.id,"SaveAndReturnButton");
//functions.expectWait(by.id,'ErrorPanel');
//fax number correction
functions.keysWait(by.className,'Fax','2055554425');



//provider creation
functions.clickWait(by.id,"SaveAndReturnButton");

//selecting provider to delete
functions.clickWait(by.xpath,'//*[@class ="left ui-grid-render-container-left ui-grid-render-container ui-grid-render-container"]/div[2]/div/div[1]/div/div/div/div/div');
functions.clickWait(by.className,'btn btn-default pull-right ng-scope');
functions.clickWait(by.className,'btn btn-primary btn-sm pull-right ih-button-ok');


  });
});
