const functions = require('../Helpers/waitFunctions.js');

describe('Dynamic Columns: Events', function() {


  it('should check Text DC field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/dynamiccolumns?');
    functions.clickWait(by.id,'AddNew');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should create Events Text Dynamic Column', function() {
    functions.keysWait(by.className,'FieldName','TextTest');
    functions.keysWait(by.className,'FieldLabel','Testable');
    functions.clickWait(by.className,'IsRequired');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should check Location Text DC surfacing on Provider Edit', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/events/218?');
    functions.expectWait(by.className,'form-control dynamicCol_TextTest', 'Test Text');
  });

  it('should check "Is required" on required Text DC', function() {
    functions.keysWait(by.className,'form-control dynamicCol_TextTest', ' ');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should ensure text field can be properly populated', function() {
    functions.keysWait(by.className,'form-control dynamicCol_TextTest', 'Test Text');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should delete Events Text Dynamic Column', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/dynamiccolumns?');
    functions.csTableClick(by.css,'[ng-click="selectButtonClick(row, $event)"]',0);
    functions.clickWait(by.id,'DeleteRecords');
    functions.clickWait(by.className,'ih-button-ok')
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should ensure Text Dynamic Column is removed from events', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/events/218?');
    functions.falseWait(by.id,'SaveButton',by.className,'form-control dynamicCol_TextTest');
  });

  it('should check Events Number DC field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/dynamiccolumns?');
    functions.clickWait(by.id,'AddNew');
    functions.clickWait(by.className,'form-control DataType');
    element(by.cssContainingText('option', 'Number')).click();
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should create Events Number Dynamic Column', function() {
    functions.keysWait(by.className,'FieldName','NumTest');
    functions.keysWait(by.className,'FieldLabel','Number');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should check Events Number DC surfacing on Provider Edit', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/events/218?');
    functions.expectWait(by.className,'form-control dynamicCol_NumTest ng-valid ng-valid-required');
  });

  it('should ensure Number field validation', function() {
    functions.keysWait(by.className,'form-control dynamicCol_NumTest ng-valid ng-valid-required','Not a number');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should ensure Number field can be properly populated', function() {
    functions.keysWait(by.className,'form-control dynamicCol_NumTest ng-valid ng-valid-required','5555');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should delete Events Number Dynamic Column', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/dynamiccolumns?');
    functions.csTableClick(by.css,'[ng-click="selectButtonClick(row, $event)"]',0);
    functions.clickWait(by.id,'DeleteRecords');
    functions.clickWait(by.className,'ih-button-ok')
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should ensure Number Dynamic Column is removed from provider', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/events/218?');
    functions.falseWait(by.id,'SaveButton',by.className,'form-control dynamicCol_NumTest ng-valid ng-valid-required');
  });

  it('should check Events Date DC field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/dynamiccolumns?');
    functions.clickWait(by.id,'AddNew');
    functions.clickWait(by.className,'form-control DataType');
    element(by.cssContainingText('option', 'Date')).click();
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should create Events Date Dynamic Column', function() {
    functions.keysWait(by.className,'FieldName','DateTest');
    functions.keysWait(by.className,'FieldLabel','CustomDate');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should check Events Date DC surfacing on Event Edit', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/events/218?');
    functions.expectWait(by.className,'form-control dynamicCol_DateTest ng-valid ng-valid-required');
  });

  it('should delete Events Date Dynamic Column', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/dynamiccolumns?');
    functions.csTableClick(by.css,'[ng-click="selectButtonClick(row, $event)"]',0);
    functions.clickWait(by.id,'DeleteRecords');
    functions.clickWait(by.className,'ih-button-ok')
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should ensure Date Dynamic Column is removed from Event', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/events/218?');
    functions.falseWait(by.id,'SaveButton',by.className,'form-control dynamicCol_DateTest ng-valid ng-valid-required');
  });

  it('should check Events Dropdown DC field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/dynamiccolumns?');
    functions.clickWait(by.id,'AddNew');
    functions.clickWait(by.className,'form-control DataType');
    element(by.cssContainingText('option', 'Dropdown')).click();
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should create Events Dropdown Dynamic Column', function() {
    functions.keysWait(by.className,'FieldName','DropdownTest');
    functions.keysWait(by.className,'FieldLabel','CustomDropdown');
    functions.keysWait(by.className,'form-control DropdownOptions','One Two Three')
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should check Events Dropdown DC surfacing on Event Edit', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/events/218?');
    functions.expectWait(by.className,'form-control dynamicCol_DropdownTest');
  });

  it('should delete Events Dropdown Dynamic Column', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/dynamiccolumns?');
    functions.csTableClick(by.css,'[ng-click="selectButtonClick(row, $event)"]',0);
    functions.clickWait(by.id,'DeleteRecords');
    functions.clickWait(by.className,'ih-button-ok')
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should ensure Dropdown Dynamic Column is removed from provider', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/events/218?');
    functions.falseWait(by.id,'SaveButton',by.className,'form-control dynamicCol_DropdownTest');
  });

  it('should check Events Content Editor DC field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/dynamiccolumns?');
    functions.clickWait(by.id,'AddNew');
    functions.clickWait(by.className,'form-control DataType');
    element(by.cssContainingText('option', 'Content Editor')).click();
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should create Events Content Editor Dynamic Column', function() {
    functions.keysWait(by.className,'FieldName','ContentTest');
    functions.keysWait(by.className,'FieldLabel','CustomEditor');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should delete Events Content Editor Dynamic Column', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/event/dynamiccolumns?');
    functions.csTableClick(by.css,'[ng-click="selectButtonClick(row, $event)"]',0);
    functions.clickWait(by.id,'DeleteRecords');
    functions.clickWait(by.className,'ih-button-ok')
    functions.expectWait(by.id,'SuccessPanel');
  });


});
