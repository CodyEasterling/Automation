const functions = require('../Helpers/waitFunctions.js');



describe('Live Page Navigation', function() {


  it('should check left page navigation.', function() {
        browser.get('http://live-phoenixqaca-ih.cphostaccess.com/alpha-prime/alpha-one');
        functions.clickWait(by.linkText,'Alpha Two');
        functions.titleWait('Alpha Two Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
        functions.clickWait(by.linkText,'Alpha Four');
        functions.titleWait('Alpha Four Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
      });


it('should check left page navigation.', function() {
      functions.clickWait(by.linkText,'Alpha Three');
      functions.titleWait('Alpha Three Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
      functions.clickWait(by.linkText,'Alpha One');
      functions.titleWait('Alpha One Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
      });




});
