const functions = require('../Helpers/waitFunctions.js');
var fields = ['PrimaryAttendee.FirstName','PrimaryAttendee.LastName','PrimaryAttendee.Email','PrimaryAttendee.Phone','PrimaryAttendee.Address1','PrimaryAttendee.Address2','PrimaryAttendee.City','PrimaryAttendee.PostalCode',];
var entries = ['Cody','Easterling','cody.easterling@influencehealth.com','205-555-1234','1 Test Lane','Suite B','Hoover','35226'];

describe('Event Registration', function() {


  it('should reach the event cart page', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/events/event-results?EventText=automation&&LocationDescendants=true');
    functions.expectWait(by.className,'btn btn-primary ih-button-register');
    functions.clickWait(by.className,'btn btn-primary ih-button-register');
    browser.sleep(2000);
    functions.titleWait('Event Cart Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
  });



  it('should verify default fields on Event Cart', function() {

    for (var i = 0; i < fields.length; i++) {
    functions.expectWait(by.model, fields[i]);
          };
    });

  it('should verify required fields on Event Cart', function() {
    functions.clickWait(by.className,'btn btn-primary ih-button-configurable');
    functions.expectWait(by.className,'alert alert-danger error-panel');
    });

  it('should enter values into fields', function() {
    for (var i = 0; i < fields.length; i++) {
    functions.keysWait(by.model,fields[i],entries[i]);
    };
    functions.clickWait(by.model,'PrimaryAttendee.State');
    element(by.cssContainingText('option', 'Alabama')).click();
    });

  it('should properly direct to registration confirmation', function() {
    functions.clickWait(by.className,'btn btn-primary ih-button-configurable');
    browser.sleep(2000);
    functions.titleWait('Registration Confirmation Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
  });






});
