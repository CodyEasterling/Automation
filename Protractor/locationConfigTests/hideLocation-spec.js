const functions = require('../Helpers/waitFunctions.js');

describe("long asynchronous specs", function() {
    var originalTimeout;
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    });
    it("takes a long time", function(done) {
        setTimeout(function() {
            done();
        }, 9000);
    });
    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});
describe('hideLocation', function() {


  it('should properly hide location from site search or location search', function() {
//validate AAAAutomation is in site search and location search
browser.get('http://live-phoenixqaca-ih.cphostaccess.com/locations/folder-search');
    functions.clickWait(by.className,"ih-button-search");
    functions.expectWait(by.linkText,"AAAAutomation");
    functions.keysWait(by.id,"globalSiteSearchBox","AAAAutomation");
    functions.clickWait(by.id,"siteSearchButton");
    functions.expectWait(by.linkText,"AAAAutomation");
//hide AAAAutomation from site search and location search
browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/location/locations?');
    functions.clickWait(by.css,'#Edit_604');
    functions.clickWait(by.className,'IsHiddenFromSiteSearch');
    functions.clickWait(by.className,'IsHiddenFromLocationSearchField');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
    browser.sleep(3000);
//verify that AAAAutomation is now hidden in site search and location siteSearchButton
browser.get('http://live-phoenixqaca-ih.cphostaccess.com/locations/folder-search');
  functions.clickWait(by.className,"ih-button-search");
  functions.falseWait(by.id,"siteSearchButton",by.linkText,"AAAAutomation");
  functions.keysWait(by.id,"globalSiteSearchBox","AAAAutomation");
  functions.clickWait(by.id,"siteSearchButton");
  functions.falseWait(by.id,"siteSearchButton",by.linkText,"AAAAutomation");
});

it('should return Location to site and CA search', function() {
//return visibility of AAAAutomation to site search and location search
browser.get('https://csqa01.influencehealth.com/Phoenix/admin/v1/modules/location/locations?');
    functions.clickWait(by.css,'#Edit_604');
    functions.clickWait(by.className,'IsHiddenFromSiteSearch');
    functions.clickWait(by.className,'IsHiddenFromLocationSearchField');
    functions.clickWait(by.id,'SaveButton');
    functions.expectWait(by.id,'SuccessPanel');
    browser.sleep(3000);
//validate AAAAutomation is in site search and location search
browser.get('http://live-phoenixqaca-ih.cphostaccess.com/locations/folder-search');
    functions.clickWait(by.className,"ih-button-search");
    functions.expectWait(by.linkText,"AAAAutomation");
    functions.keysWait(by.id,"globalSiteSearchBox","AAAAutomation");
    functions.clickWait(by.id,"siteSearchButton");
    functions.expectWait(by.linkText,"AAAAutomation");
  });
});
