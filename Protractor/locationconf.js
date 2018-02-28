exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [  './locationConfigTests/ihlogin-spec.js',
            './locationConfigTests/createLocation-spec.js',
            './locationConfigTests/createLocationType-spec.js',
            './locationConfigTests/createLocationInsurance-spec.js',
            './locationConfigTests/createLocationService-spec.js',
            './locationConfigTests/locationDynamicColumns-spec.js',
            './locationConfigTests/deleteService-spec.js',
            './locationConfigTests/deleteInsurance-spec.js',
            './locationConfigTests/deleteLocation-spec.js',
            './locationConfigTests/deleteLocationType-spec.js',
            './locationConfigTests/hideLocation-spec.js'
            //'./locationConfigTests/locationHours-spec.js',

          ],


  //multiCapabilities: [{
              //'browserName': 'chrome'
            //}, {
              //'browserName': 'firefox'
            //},

           //],

            //maxSessions: 1,


  framework: 'jasmine2' ,
                  onPrepare: function() {
                     browser.getProcessedConfig().then(function(config) {
                       var capabilities = config.capabilities;
                        var browserName = config.capabilities.browserName;
                      var jasmineReporters = require('./node_modules/jasmine-reporters');
                      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
                        consolidateAll: true,
                        savePath: './testresults',
                        filePrefix: 'locationCA-' + capabilities.browserName + Date.now()
                      }))
                    });




                 var webRep = require('jasmine-slack-reporter');
                 browser.getProcessedConfig().then(function(config) {
                    var capabilities = config.capabilities;
                     var browserName = config.capabilities.browserName;
                     jasmine.getEnv().addReporter(new webRep.WebReporter({
                       projectName:'Location Content Apps',
                       environment : 'Phoenix-QA'+ " " + capabilities.browserName,
                       slackUrl : 'slackWebHookHere',
                       channel : '#automation-codx'
                     }));
                 });

}


};
