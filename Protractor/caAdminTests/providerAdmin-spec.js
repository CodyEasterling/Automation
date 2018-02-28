const functions = require('../Helpers/waitFunctions.js');
var buttons = ['ApplyFilter','ClearFilter','AddNew','DeleteRecords'];



describe('CA Admin base functionality', function() {

  it('should check Provider Admin button visibility', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers?');
    for (var i = 0; i < buttons.length; i++) {
    functions.expectWait(by.id, buttons[i]);
      };
    functions.expectWait(by.className,'ui-grid-pager-container');
  });

it('should check existence of all Provider Admin columns', function() {
  functions.headerFind(by.className,'ui-grid-header-cell-label',8);

  for (var i = 0; i < 8; i++) {
  functions.headerClick(by.className, 'ui-grid-header-cell-label', i);
  console.log(element(by.className('ui-grid-header-cell-label')));
    };
});



});
