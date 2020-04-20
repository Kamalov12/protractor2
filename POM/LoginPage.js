//var testData =require ("../TestData/appData.json")

let LoginPage=function(){
    this.userName= element(by.id("txtUsername"));
    this.passWord=element(by.id("txtPassword"));
     this.loginBtn=element(by.xpath("//*[@id='btnLogin']"));
    

}

module.exports=new LoginPage();