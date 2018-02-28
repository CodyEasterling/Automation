exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [ './providerConfigTests/ihlogin-spec.js',
          './providerConfigTests/providerFieldValidation-spec.js',
          './providerConfigTests/createProvider-spec.js',
          './providerConfigTests/providerLocContext-spec.js',
          //'./providerConfigTests/providerLocationInsurance-spec.js',
          //'./providerConfigTests/providerLocationServices-spec.js',
          //'./providerConfigTests/providerLocationHours-spec.js',
          './providerConfigTests/providerExistingSpecialty-spec.js',
          './providerConfigTests/providerNewSpecialty-spec.js',
          './providerConfigTests/providerExistingLanguage-spec.js',
          './providerConfigTests/providerNewLanguage-spec.js',
          './providerConfigTests/providerExistingEducation-spec.js',
          './providerConfigTests/providerNewEducation-spec.js',
          './providerConfigTests/providerExistingClinicalInterest-spec.js',
          './providerConfigTests/providerNewClinicalInterest-spec.js',
          './providerConfigTests/providerExistingType-spec.js',
          './providerConfigTests/providerNewType-spec.js',
          './providerConfigTests/providerDynamicColumns-spec.js',
          //'./providerConfigTests/provFieldsPP-spec.js',
          './providerConfigTests/deleteProvider-spec.js',
          './providerConfigTests/deleteSpecialty-spec.js',
          './providerConfigTests/deleteLanguage-spec.js',
          //'./providerConfigTests/deleteInsurance-spec.js',
          //'./providerConfigTests/deleteService-spec.js',
          './providerConfigTests/deleteEducation-spec.js',
          './providerConfigTests/deleteClinicalInterest-spec.js',
          './providerConfigTests/deleteType-spec.js'
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
                              filePrefix: 'providerCA-' + capabilities.browserName + Date.now()
                            }))
                          });




                       var webRep = require('jasmine-slack-reporter');
                       browser.getProcessedConfig().then(function(config) {
                          var capabilities = config.capabilities;
                           var browserName = config.capabilities.browserName;
                           jasmine.getEnv().addReporter(new webRep.WebReporter({
                             projectName:'Provider Content Apps',
                             environment : 'Phoenix-QA'+ " " + capabilities.browserName,
                             slackUrl : 'slackWebHookHere',
                             channel : '#automation-codx'
                           }));
                       });

      }
};
