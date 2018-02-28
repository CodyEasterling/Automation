const functions = require('../Helpers/waitFunctions.js');

describe('deleteLocationType', function() {
  it('should delete a location type properly', function() {

//navigate to providers
browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/location/locationTypes?')
//selecting provider to delete
functions.clickWait(by.xpath,'//*[@class ="left ui-grid-render-container-left ui-grid-render-container ui-grid-render-container"]/div[2]/div/div[1]/div/div/div/div/div');
functions.clickWait(by.id,'DeleteRecords');
functions.clickWait(by.className,'ih-button-ok');
functions.expectWait(by.id,'SuccessPanel');






  });
});
