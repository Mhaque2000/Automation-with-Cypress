import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SnapHomePage from "../../../../PageObjects/SnapdealPageObjects/SnapHomePage";
import SnapSareePage from "../../../../PageObjects/SnapdealPageObjects/SnapSareePage";
import SnapProductPage from "../../../../PageObjects/SnapdealPageObjects/SnapProductPage";
const homepage = new SnapHomePage();
const sareepage = new SnapSareePage();
const productpage = new SnapProductPage();
Given('user open the application', function () {
    cy.visit('https://www.snapdeal.com/');
})
When('user search {string}', function(content){
    homepage.enterSaree(content)
    homepage.clickSearchButton();
})
When('user validate {string}', function(content){
    homepage.verifySaree(content);
})
When('user apply price-range {string} to {string}', function(content1,content2){
    sareepage.setPrice(content1, content2);
})
When('user validate {string} price-range', function(content){
    sareepage.verifyPrice(content);
})
When('user apply 4.0 rating filter', function(){
    sareepage.clickRating();
})
When('user validate {string} rating', function(content){
    sareepage.verifyRating(content);
})
When('user choose first saree', function(){
    sareepage.clickFirstSaree();
})
When('user buy the saree', function(){
    productpage.clickBuy();
})
Then('user validate {string} text', function(content){
    productpage.verifyBuy(content);
})
