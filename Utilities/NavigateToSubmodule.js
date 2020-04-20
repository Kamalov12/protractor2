var homePage = require ('../POM/HomePage')

var Page=function navigateTo(){
    

    
    this.navigateTo= async function( ){
        await browser.sleep(2000);
    await homePage.tabName.click();ß
    await browser.sleep(4000);
    await homePage.moduleName.click();
    await browser.sleep(3000);
    await homePage.subModuleName.click();
    await browser.sleep(3000);


    }
}

module.exports=new Page();