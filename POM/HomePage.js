//import { element, by } from "protractor"


var HomePage = function (){

this.tabName=element(by.linkText("PIM"));
this.moduleName=element(by.linkText("Configuration"));
this.subModuleName=element(by.linkText("Optional Fields"));



}

module.exports = new HomePage();