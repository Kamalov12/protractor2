//import { element, by } from "protractor";


//it is like class

var loginpage=require('./POM/LoginPage')
var homePage = require('./Utilities/NavigateToSubmodule')
var appData=require('./TestData/appData.json')

describe('Test Suit Name',function(){


    beforeEach(async function(){
        browser.ignoreSynchronization=true;
      await  browser.get('https://opensource-demo.orangehrmlive.com/index.php/auth/log')
      await  browser.manage().window().maximize();
      await   browser.sleep(5000);

     

    

    })

    afterEach(async function(){
         
        browser.sleep(5000);
        await browser.close();
    })

   it('Test Case Login', async function() {

        //we use this 
       //browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization=true;

      //await  browser.get('https://opensource-demo.orangehrmlive.com/index.php/auth/log')
     
       await browser.sleep(2000);
       loginpage.userName.sendKeys(appData.userName);
       await browser.sleep(2000);
       loginpage.passWord.sendKeys(appData.password);
       await browser.sleep(2000);
       loginpage.loginBtn.click();
       await browser.sleep(4000);

       homePage.navigateTo();

     



    });

    xit('Admin Users', async ()  => {

        browser.ignoreSynchronization=true;

       

     
        
    });
    


    xit('test case number 2 ', () => {

        element(by.id("logInPanelHeading")).getText().then(function(text){
            console.log(text);
            if(text=="LOGIN Panel"){
                console.log("passed")
            }
            else{
                console.log("fail");
            }

            
        })
        
    });


})
