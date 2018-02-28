const functions = require('../Helpers/waitFunctions.js');

describe('createLocationService', function() {
  it('should properly create a location service', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/location/services?');

//create new
functions.clickWait(by.id,"AddNew");

functions.keysWait(by.className,"ServiceName","AAA");
element(by.css("#taTextElement_Description","This service is the best service. Ask anyone, they will tell you the same.")).sendKeys
("This service is the best service. Ask anyone, they will tell you the same.");
//functions.keysWait(by.css,"#taTextElement_Description","This service is the best service. Ask anyone, they will tell you the same.");
//save and return
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');


  });
});
