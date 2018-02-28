const functions = require('../Helpers/waitFunctions.js');

describe ('site search navigation', function() {



  it('should verify site search on home page', function() {
      browser.get('http://live-phoenixqaca-ih.cphostaccess.com/');
      functions.keysWait(by.id,'globalSiteSearchBox','AAAAutomation');
      functions.clickWait(by.id,"siteSearchButton");
      functions.titleWait('Search Results Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
      functions.expectWait(by.linkText, 'AAAAutomation');
  });


  it('should verify site search on a content app page', function() {
      browser.get('http://live-phoenixqaca-ih.cphostaccess.com/providers/provider-search');
      functions.keysWait(by.id,'globalSiteSearchBox','AAAAutomation');
      functions.clickWait(by.id,"siteSearchButton");
      functions.titleWait('Search Results Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
      functions.expectWait(by.linkText, 'AAAAutomation');
  });


it('should verify site search on a content page', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/phoenix-down/wakka-wakka');
    functions.keysWait(by.id,'globalSiteSearchBox','AAAAutomation');
    functions.clickWait(by.id,"siteSearchButton");
    functions.titleWait('Search Results Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
    functions.expectWait(by.linkText, 'AAAAutomation');
  });


it('should verify site search on a static page', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/alpha-prime/alpha-one');
    functions.keysWait(by.id,'globalSiteSearchBox','AAAAutomation');
    functions.clickWait(by.id,"siteSearchButton");
    functions.titleWait('Search Results Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
    functions.expectWait(by.linkText, 'AAAAutomation');
  });


  it('should verify site search results widget functionality', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/alpha-prime/alpha-one');
    functions.keysWait(by.css, '#q',"AAAAutomation");
    functions.clickWait(by.className, 'btn btn-primary btnGo');
    functions.expectWait(by.linkText, 'AAAAutomation');
    functions.expectWait(by.xpath, '//*[@id="ih-page-header"]/div/div/div/div/div[2]/div[1]/div/h5');
    });


  it('should verify site G2 search of providers', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/');
    functions.keysWait(by.id,'globalSiteSearchBox',"Hudson Allen");
    functions.clickWait(by.id,"siteSearchButton");
    functions.expectWait(by.linkText, 'Dr Allen, D., Hudson Sr.');
    functions.titleWait('Search Results Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
    });


  it('should verify provider G2 search result link functionality', function() {
    functions.clickWait(by.linkText, 'Dr Allen, D., Hudson Sr.');
    functions.titleWait('Dr Allen D. Hudson Sr. - Pulmonology - Mobile, Alabama (AL)');
    });


  it('should verify event G2 search', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/');
    functions.keysWait(by.id,'globalSiteSearchBox',"ACLS");
    functions.clickWait(by.id,"siteSearchButton");
    functions.expectWait(by.linkText, 'ACLS Provider Course');
    functions.titleWait('Search Results Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
    });


  it('should verify event G2 search result link functionality', function() {
    functions.clickWait(by.linkText, 'ACLS Provider Course');
    functions.titleWait('ACLS Provider Course - Nashville, Tennessee (TN) - Phoenix QA');
    });


  it('should verify services G2 search', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/');
    functions.keysWait(by.id,'globalSiteSearchBox',"Cardiology");
    functions.clickWait(by.id,"siteSearchButton");
    functions.expectWait(by.linkText, 'Cardiology');
    functions.titleWait('Search Results Nashville, Tennessee (TN), Phoenix QA, Hoover, AL');
    });


  it('should verify services G2 search result link functionality', function() {
    functions.clickWait(by.linkText, 'Cardiology');
    functions.titleWait('Public , , Alabama (AL),');
    });

  it('should verify page meta in G2 (meta default)', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/');
    functions.keysWait(by.id, 'globalSiteSearchBox','"Meta makes it betta"');
    functions.clickWait(by.id, 'siteSearchButton');
    functions.expectWait(by.linkText, 'Alpha One');
    });


  it('should verify page meta in G2 (content)', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/');
    functions.keysWait(by.id, 'globalSiteSearchBox','"Our content is the best content."');
    functions.clickWait(by.id, 'siteSearchButton');
    functions.expectWait(by.linkText, 'Alpha Two');
    });


  it('should verify page meta in G2 (site config default)', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/');
    functions.keysWait(by.id, 'globalSiteSearchBox','"Site Config"');
    functions.clickWait(by.id, 'siteSearchButton');
    functions.expectWait(by.linkText, 'Alpha Three');
    });


  it('should verify page meta in G2 (meta override)', function() {
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/');
    functions.keysWait(by.id, 'globalSiteSearchBox','"Meta Override"');
    functions.clickWait(by.id, 'siteSearchButton');
    functions.expectWait(by.linkText, 'Alpha Four');
    });








});
