const functions = require('../Helpers/waitFunctions.js');

describe('adding existing language to a provider', function() {
  it('should add an existing language to a provider', function() {

browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers');

//select provider "AAA"
functions.tableClick(by.className,'fa fa-pencil icon-edit grow',0);
//navigate to "Languages"
functions.clickWait(by.xpath,'//*[@id="vertical-tab-container"]/div/ul/li[4]/div');
functions.clickWait(by.partialButtonText,'Add Existing');
functions.clickWait(by.className,'caret pull-right');
functions.clickWait(by.css,'#ui-select-choices-row-0-0 > span > div');
functions.clickWait(by.buttonText,'Add');
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');


  });
});
//*[@id="vertical-tab-container"]/div/div/div[4]/div/div/div[2]/div/button[1]
