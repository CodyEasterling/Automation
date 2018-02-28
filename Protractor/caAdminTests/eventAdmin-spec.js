const functions = require('../Helpers/waitFunctions.js');
var buttons = ['ApplyFilter','ClearFilter','AddNew','DeleteRecords'];



describe('CA Admin base functionality', function() {

  it('should check Provider Admin button visibility', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/events');
    for (var i = 0; i < buttons.length; i++) {
    functions.expectWait(by.id, buttons[i]);
      };
    functions.expectWait(by.className,'ui-grid-pager-container');
  });

  it('should check existence of all Event Admin columns', function() {
    functions.headerFind(by.className,'ui-grid-header-cell-label',7);

    for (var i = 0; i < 7; i++) {
    functions.headerClick(by.className, 'ui-grid-header-cell-label', i);
      };
  });



});
