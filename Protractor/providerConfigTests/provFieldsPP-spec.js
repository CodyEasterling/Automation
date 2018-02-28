const functions = require('../Helpers/waitFunctions.js');

describe('providers location context on published page', function() {
  it('should check a published page for a providers location context', function() {




//browser.sleep(10000);

    //check provider exists on public page
    browser.sleep(10000);
    browser.get('http://live-phoenixqaca-ih.cphostaccess.com/provider/aaa-aaa-aaa-aaa-aaa-aaa');
    browser.sleep(3000);
    expect(element(by.xpath('//*[@id="provider_PublicDetailView_accordion"]/div[2]/div/div[2]/ih-accordion-zone/uib-accordion/div/div/div[2]/div/div/div[1]/div[1]/div/a')).isPresent()).toBe(true);
      element(by.xpath('//*[@id="provider_PublicDetailView_accordion"]/div[2]/div/div[2]/ih-accordion-zone/uib-accordion/div/div/div[2]/div/div/div[1]/div[1]/div/a')).getText().then(function (primaryNumber) {
      expect(primaryNumber).toBe('505-111-2234');
      console.log(primaryNumber);
      });



      });
    });
