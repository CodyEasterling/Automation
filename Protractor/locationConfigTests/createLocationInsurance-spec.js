const functions = require('../Helpers/waitFunctions.js');

describe('createLocationInsurance', function() {
  it('should properly create a location insurance', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/location/insurances');

//create new
functions.clickWait(by.id,"AddNew");

functions.keysWait(by.className,"Name","AAA");

//save and return
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');








  });
});
