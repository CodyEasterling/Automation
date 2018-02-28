const functions = require('../Helpers/waitFunctions.js');

describe('createLocation', function() {
  it('should properly create a location', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/dashboard/home?');

//create new location
functions.clickWait(by.linkText,"Locations List");
functions.clickWait(by.id,"AddNew");
functions.keysWait(by.className,"Name","AAA");
functions.keysWait(by.className,"Address1","1 Test Lane");
functions.keysWait(by.className,"Address2","Suite B");
functions.keysWait(by.className,"City","Birmingham");
//functions.clickWait(by.className,"StateId");
//functions.clickWait(by.css,"#admin-detail-view > div > div.form-horizontal.ng-scope > div:nth-child(9) > div > div > select > option:nth-child(2)");
functions.keysWait(by.className,"PostalCode","35226");
functions.keysWait(by.className,"CostCenter","Birmingham");
functions.keysWait(by.className,"Phone","205-111-2234");
functions.keysWait(by.className,"Fax","205-222-3344");
functions.keysWait(by.className,"Email","test@email.com");


//save and return
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');









  });
});
