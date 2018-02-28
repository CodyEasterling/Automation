const functions = require('../Helpers/waitFunctions.js');

describe('Dynamic Columns: Providers', function() {


  it('should check Text DC field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/dynamiccolumns?');
    functions.clickWait(by.id,'AddNew');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should create Provider Text Dynamic Column', function() {
    functions.keysWait(by.className,'FieldName','TextTest');
    functions.keysWait(by.className,'FieldLabel','Testable');
    functions.clickWait(by.className,'IsRequired');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should check Provider Text DC surfacing on Provider Edit', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers/64?');
    functions.expectWait(by.className,'form-control dynamicCol_TextTest');
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

  it('should delete Provider Text Dynamic Column', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/dynamiccolumns?');
    functions.csTableClick(by.css,'[ng-click="selectButtonClick(row, $event)"]',0);
    functions.clickWait(by.id,'DeleteRecords');
    functions.clickWait(by.className,'ih-button-ok')
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should ensure Text Dynamic Column is removed from provider', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers/64?');
    functions.falseWait(by.id,'SaveButton',by.className,'form-control dynamicCol_TextTest');
  });

  it('should check Provider Number DC field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/dynamiccolumns?');
    functions.clickWait(by.id,'AddNew');
    functions.clickWait(by.className,'form-control DataType');
    element(by.cssContainingText('option', 'Number')).click();
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should create Provider Number Dynamic Column', function() {
    functions.keysWait(by.className,'FieldName','NumTest');
    functions.keysWait(by.className,'FieldLabel','Number');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should check Provider Number DC surfacing on Provider Edit', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers/64?');
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

  it('should delete Provider Number Dynamic Column', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/dynamiccolumns?');
    functions.csTableClick(by.css,'[ng-click="selectButtonClick(row, $event)"]',0);
    functions.clickWait(by.id,'DeleteRecords');
    functions.clickWait(by.className,'ih-button-ok')
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should ensure Number Dynamic Column is removed from provider', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers/64?');
    functions.falseWait(by.id,'SaveButton',by.className,'form-control dynamicCol_NumTest ng-valid ng-valid-required');
  });

  it('should check Provider Date DC field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/dynamiccolumns?');
    functions.clickWait(by.id,'AddNew');
    functions.clickWait(by.className,'form-control DataType');
    element(by.cssContainingText('option', 'Date')).click();
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should create Provider Date Dynamic Column', function() {
    functions.keysWait(by.className,'FieldName','DateTest');
    functions.keysWait(by.className,'FieldLabel','CustomDate');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should check Provider Date DC surfacing on Provider Edit', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers/64?');
    functions.expectWait(by.className,'form-control dynamicCol_DateTest ng-valid ng-valid-required');
  });

  it('should delete Provider Date Dynamic Column', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/dynamiccolumns?');
    functions.csTableClick(by.css,'[ng-click="selectButtonClick(row, $event)"]',0);
    functions.clickWait(by.id,'DeleteRecords');
    functions.clickWait(by.className,'ih-button-ok')
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should ensure Date Dynamic Column is removed from provider', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers/64?');
    functions.falseWait(by.id,'SaveButton',by.className,'form-control dynamicCol_DateTest ng-valid ng-valid-required');
  });

  it('should check Provider Dropdown DC field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/dynamiccolumns?');
    functions.clickWait(by.id,'AddNew');
    functions.clickWait(by.className,'form-control DataType');
    element(by.cssContainingText('option', 'Dropdown')).click();
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should create Provider Dropdown Dynamic Column', function() {
    functions.keysWait(by.className,'FieldName','DropdownTest');
    functions.keysWait(by.className,'FieldLabel','CustomDropdown');
    functions.keysWait(by.className,'form-control DropdownOptions','One Two Three')
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should check Provider Dropdown DC surfacing on Provider Edit', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers/64?');
    functions.expectWait(by.className,'form-control dynamicCol_DropdownTest');
  });

  it('should delete Provider Dropdown Dynamic Column', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/dynamiccolumns?');
    functions.csTableClick(by.css,'[ng-click="selectButtonClick(row, $event)"]',0);
    functions.clickWait(by.id,'DeleteRecords');
    functions.clickWait(by.className,'ih-button-ok')
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should ensure Dropdown Dynamic Column is removed from provider', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/providers/64?');
    functions.falseWait(by.id,'SaveButton',by.className,'form-control dynamicCol_DropdownTest');
  });

  it('should check Provider Content Editor DC field validation', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/dynamiccolumns?');
    functions.clickWait(by.id,'AddNew');
    functions.clickWait(by.className,'form-control DataType');
    element(by.cssContainingText('option', 'Content Editor')).click();
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'ErrorPanel');
  });

  it('should create Provider Content Editor Dynamic Column', function() {
    functions.keysWait(by.className,'FieldName','ContentTest');
    functions.keysWait(by.className,'FieldLabel','CustomEditor');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
  });

  it('should delete Provider Content Editor Dynamic Column', function() {
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/provider/dynamiccolumns?');
    functions.csTableClick(by.css,'[ng-click="selectButtonClick(row, $event)"]',0);
    functions.clickWait(by.id,'DeleteRecords');
    functions.clickWait(by.className,'ih-button-ok')
    functions.expectWait(by.id,'SuccessPanel');
  });









});
