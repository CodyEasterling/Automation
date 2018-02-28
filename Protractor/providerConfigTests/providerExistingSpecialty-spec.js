const functions = require('../Helpers/waitFunctions.js');

describe('adding existing provider specialty', function() {
  it('should add an existing specialty to a provider', function() {

browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers');

//select provider "AAA"
functions.tableClick(by.className,'fa fa-pencil icon-edit grow',0);

//navigate to Specialties and Conditions
functions.clickWait(by.xpath,'//*[@id="vertical-tab-container"]/div/ul/li[2]/div');
//selecting a specialty
functions.clickWait(by.partialButtonText,'Add Existing');
functions.clickWait(by.className,'caret pull-right');
functions.clickWait(by.css,'#ui-select-choices-row-0-0 > span > div');
functions.clickWait(by.buttonText,'Add');
//save and verify SuccessPanel
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');










  });
});
