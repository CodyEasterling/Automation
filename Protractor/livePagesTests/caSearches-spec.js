const functions = require('../Helpers/waitFunctions.js');



describe('Content App Searches', function() {


      it('should check Provider Null Results', function() {
        browser.get('http://live-phoenixqaca-ih.cphostaccess.com/providers/provider-search');
        functions.fieldKeys(0,"Heyooooooooooooooooooooooooooooooooooooo");
        functions.clickWait(by.className,"btn btn-primary ih-button-search");
        functions.noNGTitleWait('Null Results Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
      });

      it('should check Provider basic Search Title Formula', function() {
        browser.get('http://live-phoenixqaca-ih.cphostaccess.com/providers/provider-search');
        functions.clickWait(by.className,"btn btn-primary ih-button-search");
        functions.titleWait('Find Medical Providers in Nashville, Tennessee (TN) - Page 1 - Phoenix QA, Hoover, Alabama (AL)');
      });

      it('should check Provider Results Pagination top', function() {
        functions.liveTableClick(by.css,'[ng-click="selectPage(page + 1, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Medical Providers in - Page 2 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(page - 1, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Medical Providers in - Page 1 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(totalPages, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Medical Providers in - Page 184 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(1, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Medical Providers in - Page 1 - ,');
      });

      it ('should check Provider Results Pagination bottom', function() {
        functions.liveTableClick(by.css,'[ng-click="selectPage(page + 1, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Medical Providers in - Page 2 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(page - 1, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Medical Providers in - Page 1 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(totalPages, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Medical Providers in - Page 184 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(1, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Medical Providers in - Page 1 - ,');
      });

      it('should check Provider Search', function() {
        browser.get('http://live-phoenixqaca-ih.cphostaccess.com/providers/provider-search');
        functions.fieldKeys(0,"Hudson");
        functions.clickWait(by.className,"btn btn-primary ih-button-search");
        functions.titleWait('Find Providers Hudson in Nashville, Tennessee (TN) - Page 1 - Phoenix QA, Hoover, Alabama (AL)');
        functions.expectWait(by.linkText,'Dr Allen, D., Hudson Sr.');
      });

      it('should verify List/Map functionality', function() {
        functions.clickWait(by.css,'[data-ng-click="ShowMap()"]');
        functions.expectWait(by.id,'mapContainerDiv');
        functions.clickWait(by.css,'[data-ng-click="HideMap()"]');
        functions.expectWait(by.className,'tab-content')
      });

      it('should check Provider Results > Details', function() {
        functions.clickWait(by.linkText, 'Dr Allen, D., Hudson Sr.');
        functions.titleWait('Dr Allen D. Hudson Sr. - Pulmonology - Mobile, Alabama (AL)');
        functions.expectWait(by.linkText, 'Make an Appointment');
      });

      it('should verify fields on Provider Details page', function() {
        functions.valueCheck('.ih-page-title','Dr Allen D. Hudson Sr.');
        functions.valueCheck('.ih-field-dateofbirth > div','1/7/1965');
        functions.valueCheck('.ih-field-primaryphone > div', '384-159-9454');
        functions.valueCheck('.ih-field-age > div','53');
        functions.valueCheck('.ih-field-primaryemail > div','tellus@Aenean.edu');
        functions.valueCheck('.ih-field-primarylocationname > div','Springhill Medical Center');
        functions.valueCheck('.ih-field-locationname > div','Springhill Medical Center');
        functions.valueCheck('.ih-field-primaryspecialty > div','Pulmonology');
      });

      it('should check Location basic Search Title Formula', function() {
        browser.get('http://live-phoenixqaca-ih.cphostaccess.com/locations/folder-search');
        functions.clickWait(by.className,"btn btn-primary ih-button-search");
        functions.titleWait('Find Locations in Nashville, Tennessee (TN) - Page 1 - Phoenix QA, Hoover, Alabama (AL)');
      });

      it('should check Location Results Pagination top', function() {
        functions.liveTableClick(by.css,'[ng-click="selectPage(page + 1, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Locations in - Page 2 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(page - 1, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Locations in - Page 1 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(totalPages, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Locations in - Page 11 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(1, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Locations in - Page 1 - ,');
      });

      it('should check Location Results Pagination bottom', function() {
        functions.liveTableClick(by.css,'[ng-click="selectPage(page + 1, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Locations in - Page 2 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(page - 1, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Locations in - Page 1 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(totalPages, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Locations in - Page 11 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(1, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Locations in - Page 1 - ,');
      });

      it('should check Location Search', function() {
        browser.get('http://live-phoenixqaca-ih.cphostaccess.com/locations/folder-search');
        functions.clickWait(by.className,"btn btn-primary ih-button-search");
        functions.titleWait('Find Locations in Nashville, Tennessee (TN) - Page 1 - Phoenix QA, Hoover, Alabama (AL)');
        functions.expectWait(by.linkText,'AAAAutomation');
      });

      it('should check Location Results > Details', function() {
        functions.clickWait(by.linkText,'AAAAutomation');
        functions.titleWait('AAAAutomation - Cosmetic Services - 331 Cahaba River Parc, Birmingham, Alabama (AL), 35243');
      });

      it('should verify fields on a Location Details Page', function() {
        functions.valueCheck('.ih-field-locationphone > div','205-218-1905');
        functions.valueCheck('.ih-field-locationfax > div','205-982-2345');
        functions.valueCheck('.ih-field-locationname > div','AAAAutomation');
        functions.valueCheck('.ih-field-locationaddress > div','331 Cahaba River Parc Birmingham, Alabama 35243');
        functions.valueCheck('.ih-field-servicename > div','Cosmetic Services');
        functions.valueCheck('.ih-field-servicedescription > div','Cosmetic Services');
      });

      it('should check Event basic Search Title Formula', function() {
        browser.get('http://live-phoenixqaca-ih.cphostaccess.com/events/event-search');
        functions.clickWait(by.className,"btn btn-primary ih-button-search");
        functions.titleWait('Find Wellness Classes and Events in Nashville, Tennessee (TN) - Page 1 - Phoenix QA, Hoover, Alabama (AL)');
      });

      it('should check Event Results Pagination top', function() {
        functions.liveTableClick(by.css,'[ng-click="selectPage(page + 1, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Wellness Classes and Events in - Page 2 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(page - 1, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Wellness Classes and Events in - Page 1 - ,');
        /*functions.liveTableClick(by.css,'[ng-click="selectPage(totalPages, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Wellness Classes and Events in - Page 21 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(1, $event)"]',0);
        browser.sleep(1000);
        functions.titleWait('Find Wellness Classes and Events in - Page 1 - ,');*/
      });

      it('should check Event Results Pagination bottom', function() {
        functions.liveTableClick(by.css,'[ng-click="selectPage(page + 1, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Wellness Classes and Events in - Page 2 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(page - 1, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Wellness Classes and Events in - Page 1 - ,');
        /*functions.liveTableClick(by.css,'[ng-click="selectPage(totalPages, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Wellness Classes and Events in - Page 21 - ,');
        functions.liveTableClick(by.css,'[ng-click="selectPage(1, $event)"]',1);
        browser.sleep(1000);
        functions.titleWait('Find Wellness Classes and Events in - Page 1 - ,');*/
      });

      it('should check Event Null Results', function() {
        browser.get('http://live-phoenixqaca-ih.cphostaccess.com/events/event-search');
        functions.fieldKeys(0,"Heyooooooooooooooooooooooooooooooooooooo");
        functions.clickWait(by.className,"btn btn-primary ih-button-search");
        functions.noNGTitleWait('Null Results Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
      });

      it('should check Event Search', function() {
        browser.get('http://live-phoenixqaca-ih.cphostaccess.com/events/event-search');
        functions.fieldKeys(0,'Automation Event Test');
        functions.clickWait(by.className,"btn btn-primary ih-button-search");
        functions.titleWait('Automation Event Test - Wellness Classes and Events in Nashville, Tennessee (TN) - Page 1 - Phoenix QA, Hoover, Alabama (AL)');
        functions.expectWait(by.linkText,'Automation Event Test');
      });

      it('should check Event Results > Details', function() {
        functions.clickWait(by.linkText,'Automation Event Test');
        functions.titleWait('Sean Constantine');
      });

      it('should verify fields on an Event Details Page', function() {
        functions.valueCheck('.ih-field-eventtitle > div','Automation Event Test');
        functions.expectWait(by.className, 'form-group ih-field-registerbutton');
        functions.valueCheck('.ih-field-eventdescription > div',"Don't stop me now");



      });


});
