exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [  './eventConfigTests/ihlogin-spec.js',
            './eventConfigTests/eventDynamicColumns-spec.js'
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
                              filePrefix: 'eventCA-' + capabilities.browserName + Date.now()
                            }))
                          });




                       var webRep = require('jasmine-slack-reporter');
                       browser.getProcessedConfig().then(function(config) {
                          var capabilities = config.capabilities;
                           var browserName = config.capabilities.browserName;
                           jasmine.getEnv().addReporter(new webRep.WebReporter({
                             projectName:'Event Content Apps',
                             environment : 'Phoenix-QA'+ " " + capabilities.browserName,
                             slackUrl : 'slackWebHookHere',
                             channel : '#automation-codx'
                           }));
                       });

      }
};
