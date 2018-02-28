//global methods
var EC = protractor.ExpectedConditions;


module.exports = {


  selectDropdownbyNum:(optionNum) => {
    if (optionNum){
      var options = element.findElements(by.tagName('option'))
        .then(function(options){
          options[optionNum].click();
        });
    }
  },



clickWait: (locator,path) => {
  var findIt = element(locator(path));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000).then(() => {
  findIt.click();
  expect(EC.elementToBeClickable(findIt));
  })
},


csTableClick: (locator,path,row) => {
  var findIt = element(by.id('AddNew'));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000)
  .then(() => {
      var table = element.all(locator(path));
      table.get(row).click();
  })
},

csFirstClick: (locator,path) => {
  var findIt = element(by.id('SaveButton'));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000)
  .then(() => {
      var table = element.all(locator(path));
      table.last().click();
  })
},

tableClick: (locator,path,row) => {
  var findIt = element(by.id('ApplyFilter'));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000)
  .then(() => {
      var table = element.all(locator(path));
      table.get(row).click();
  })
},



liveTableClick: (locator,path,row) => {
  var findIt = element(by.id('globalSiteSearchBox'));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000)
  .then(() => {
      var table = element.all(locator(path));
      table.get(row).click();
  })
},




valueCheck: (path, text) => {
  var findIt = $(path);
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000).then(() => {
  expect(findIt.getText()).toEqual(text);
  });
},





fieldKeys: (row, text) => {
  var findIt = element(by.id('globalSiteSearchBox'));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000)
  .then(() => {
      var table = element.all(by.className('form-control  ng-pristine ng-untouched ng-valid'));
      table.get(row).sendKeys(text);
  })
},





locKeys: (row, text) => {
  var findIt = element(by.id('globalSiteSearchBox'));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000)
  .then(() => {
      var table = element.all(by.className('btn btn-default form-control ui-select-toggle'));
      table.get(row).sendKeys(text);
  })
},




keysWait: (locator,path,text) =>  {
  var findIt = element(locator(path));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000).then(() => {
  findIt.clear().sendKeys(text);
  expect(findIt.getAttribute('value')).toEqual(text);
  })
},


v3Title: (pageTitle) => {
  var findIt = element(by.className('logo ng-scope'));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000)
    .then(() => {
        return browser.getTitle()
        .then((titleString) => {
expect(pageTitle).toEqual(titleString);
    });
  });
},




titleWait: (pageTitle) => {
  var findIt = element(by.id('siteSearchButton'));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000)
    .then(() => {
        return browser.getTitle()
        .then((titleString) => {
expect(pageTitle).toEqual(titleString);
    });
  });
},




noNGTitleWait: () => {
    var findIt = element(by.id('siteSearchButton'));
    var isClickable = EC.elementToBeClickable(findIt);
      return browser.ignoreSynchronization = true
      browser.wait(isClickable, 8000)
        .then(() => {
        return browser.getTitle()
    .then((titleString) => {
expect(pageTitle).toEqual(titleString);
  });
});
},



expectWait: (locator, path) => {
  var findIt = element(locator(path));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000).then(() => {
expect(element(locator(path)).isDisplayed()).toBe(true);
  });
},



falseWait: (locator1, path1, locator2, path2 ) => {
  var findIt = element(locator1(path1));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000).then(() => {
expect(element(locator2(path2)).isPresent()).toBe(false);
  });
},

headerFind: (locator,path,count) => {
  element.all(locator(path)).then(() => {
  var table = element.all(locator(path));
  expect(table.count()).toBe(count);
  });
},

headerClick: (locator,path,row) => {
   element.all(locator(path))
    .then(() => {
      var table = element.all(locator(path));
      table.get(row).click();
  })
},


}
