const functions = require('../Helpers/waitFunctions.js');

describe('log in to Crownpeak', function() {
  it('should verify login', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://csqa01.influencehealth.com/Phoenix/admin');
    var width = 1600;
    var height = 1200;
    browser.driver.manage().window().setSize(width, height);
    //browser.manage().window().maximize();
functions.keysWait(by.name,'userName','User');
functions.keysWait(by.name,'password','Password');
functions.clickWait(by.id,'loginButton');

//provider verification
functions.expectWait(by.xpath,'//*[@id="admin-list-view"]/div/div/div[2]/div/div/div[1]/div[1]/div/div');
//event verification
functions.expectWait(by.xpath,'//*[@id="admin-list-view"]/div/div/div[2]/div/div/div[1]/div[2]/div/div/a');
//location verification
functions.expectWait(by.xpath,'//*[@id="admin-list-view"]/div/div/div[2]/div/div/div[1]/div[3]/div/div/a');
//service verification
functions.expectWait(by.xpath,'//*[@id="admin-list-view"]/div/div/div[2]/div/div/div[1]/div[4]/div/div/a');
//config verification
functions.expectWait(by.xpath,'//*[@id="admin-list-view"]/div/div/div[2]/div/div/div[1]/div[5]/div/div/a');
  });
});
