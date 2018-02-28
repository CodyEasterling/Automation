exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',


  specs: ['./caAdminTests/ihlogin-spec.js',
          './caAdminTests/providerAdmin-spec.js',
          './caAdminTests/locationAdmin-spec.js',
          './caAdminTests/eventAdmin-spec.js'
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
                        filePrefix: 'CA-' + capabilities.browserName + Date.now()
                      }))
                    });




                 var webRep = require('jasmine-slack-reporter');
                 browser.getProcessedConfig().then(function(config) {
                    var capabilities = config.capabilities;
                     var browserName = config.capabilities.browserName;
                     jasmine.getEnv().addReporter(new webRep.WebReporter({
                       projectName:'Content Apps',
                       environment : 'Phoenix-QA'+ " " + capabilities.browserName,
                       slackUrl : 'https://hooks.slack.com/services/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',
                       channel : '#automation-codx'
                     }));
                 });

} 


};
