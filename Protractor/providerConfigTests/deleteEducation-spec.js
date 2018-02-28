const functions = require('../Helpers/waitFunctions.js');

describe('delete education', function() {
  it('should delete the previously created education', function() {

//navigate to Education Types
browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/educationTypes');
//selecting education type to delete
functions.clickWait(by.xpath,'//*[@class ="left ui-grid-render-container-left ui-grid-render-container ui-grid-render-container"]/div[2]/div/div[1]/div/div/div/div/div');
functions.clickWait(by.id,'DeleteRecords');
functions.clickWait(by.className,'ih-button-ok');
functions.expectWait(by.id,'SuccessPanel');


  });
});
