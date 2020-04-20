
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config={

    //connecting to webdriverJS
    directConnect: true,
    capabilities:{

        //Browser name
        browserName: 'chrome',
    },

    // multiCapabilities:[
    //     { browserName: 'firefox'},
    //     {browserName: 'chrome'}
    // ],

    onPrepare:  function () {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
            showstack: false
        }));
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '../reports/screenshots',
            preserveDirectory: false,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docName: 'CyberBank-Report.html'
        }).getJasmine2Reporter());
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 6000000,
        print:  ()=> {}


    },



    //Test case that we want to run
    specs : ["./spec01.js"],

    //BDD framework
    frameWork: 'jasmine',

}