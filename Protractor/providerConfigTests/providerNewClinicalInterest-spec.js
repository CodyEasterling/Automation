const functions = require('../Helpers/waitFunctions.js');

describe('creating new education through provider', function() {
  it('should create and add new education through provider', function() {

    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers');

//select provider "AAA"
    functions.tableClick(by.className,'fa fa-pencil icon-edit grow',0);

    //navigate to "Clinical Interest"
    functions.clickWait(by.xpath,'//*[@id="vertical-tab-container"]/div/ul/li[6]/div');
    functions.clickWait(by.partialButtonText,'Create New');
    functions.keysWait(by.className,'ClinicalInterestName ','AAA');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
      });
    });
