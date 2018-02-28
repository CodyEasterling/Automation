exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',


  specs: [  './livePagesTests/ihlogin-spec.js',
            './livePagesTests/siteSearch-spec.js',
            './livePagesTests/leftRightNav-spec.js',
            './livePagesTests/caSearches-spec.js',
            //'./livePagesTests/eventRegistration-spec.js'
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
                        filePrefix: 'LivePage-' + capabilities.browserName + Date.now()
                      }))
                    });




                 var webRep = require('jasmine-slack-reporter');
                 browser.getProcessedConfig().then(function(config) {
                    var capabilities = config.capabilities;
                     var browserName = config.capabilities.browserName;
                     jasmine.getEnv().addReporter(new webRep.WebReporter({
                       projectName:'Live Page Navigating',
                       environment : 'Phoenix-QA'+ " " + capabilities.browserName,
                       slackUrl : 'slackWebHookHere',
                       channel : '#automation-codx'
                     }));
                 });

}


};
