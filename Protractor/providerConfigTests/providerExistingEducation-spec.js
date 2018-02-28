const functions = require('../Helpers/waitFunctions.js');

describe('adding existing education to a provider', function() {
  it('should add an existing education to a provider', function() {

browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers');

//select provider "AAA"
functions.tableClick(by.className,'fa fa-pencil icon-edit grow',0);
//navigate to "Education"
functions.clickWait(by.xpath,'//*[@id="vertical-tab-container"]/div/ul/li[5]/div');
functions.clickWait(by.partialButtonText,'Add Existing');
functions.clickWait(by.className,'caret pull-right');
functions.clickWait(by.css,'#ui-select-choices-row-0-0');
functions.clickWait(by.buttonText,'Add');
functions.keysWait(by.className,'InstitutionName','Test');
functions.clickWait(by.className, 'IsCompleted');
functions.keysWait(by.className, 'YearCompleted','1989');
functions.clickWait(by.id,'SaveButton');
functions.expectWait(by.id,'SuccessPanel');

  });
});
