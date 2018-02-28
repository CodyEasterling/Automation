const functions = require('../Helpers/waitFunctions.js');

describe('creating new language through provider', function() {
  it('should create and add new language through provider', function() {

    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers');

    functions.tableClick(by.className,'fa fa-pencil icon-edit grow',0);

    //navigate to "Languages"
    functions.clickWait(by.xpath,'//*[@id="vertical-tab-container"]/div/ul/li[4]/div');
    functions.clickWait(by.partialButtonText,'Create New');
    functions.keysWait(by.className,'LanguageName ','AAA');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
          });
    });
