const functions = require('../Helpers/waitFunctions.js');

describe('creating new specialty through provider', function() {
  it('should create and add new specialty through provider', function() {

browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers');


functions.tableClick(by.className,'fa fa-pencil icon-edit grow',0);

//navigate to Specialties and Conditions
functions.clickWait(by.xpath,'//*[@id="vertical-tab-container"]/div/ul/li[2]/div');

//create new specialty
functions.clickWait(by.buttonText,'Create New');
functions.keysWait(by.className,'Name ','AAAA');

//Save and verify
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');

  });
});
