const functions = require('../Helpers/waitFunctions.js');

describe('createLocationType', function() {
  it('should properly create a location type', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/location/locationTypes?');

//create new 
functions.clickWait(by.id,"AddNew");

functions.keysWait(by.className,"Name","AAA");
functions.keysWait(by.className,"ImageUrl","https://goo.gl/images/UIBTRc")
//save and return
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');


  });
});
