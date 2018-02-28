const functions = require('../Helpers/waitFunctions.js');

describe('provider creation', function() {
  it('should properly create a provider', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers');

//create new provider
functions.clickWait(by.id,"AddNew");

functions.keysWait(by.className,"FirstName","AAA");
functions.keysWait(by.className,"MiddleName","AAA");
functions.keysWait(by.className,"LastName","AAA");
functions.keysWait(by.className,"NameSuffix","AAA");
functions.keysWait(by.className,"AdditionalSuffix","AAA");
//functions.clickWait(by.className,"Gender");
//functions.clickWait(by.xpath, '//*[@id="admin-detail-view"]/div/div[3]/div[10]/div/div/select/option[3]');
//functions.clickWait(by.className,"ProviderGroup");
//functions.clickWait(by.xpath,'//*[@id="admin-detail-view"]/div/div[3]/div[11]/div/div/select/option[2]');
functions.keysWait(by.className,"DateOfBirth","03/20/1990");
functions.keysWait(by.className,'InPracticeSince','01/01/2000');
functions.keysWait(by.className,'Email','test@email.com');
functions.keysWait(by.className,'Fax','205-222-3344');

//save and return
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');







  });
});
