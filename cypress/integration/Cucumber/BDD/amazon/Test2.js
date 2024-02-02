/// <reference types = 'cypress'/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AmazonHomePage from "../../../../PageObjects/AmazonPageObjects/AmazonHomePage";
const homepage = new AmazonHomePage()
When("User hover on Account & Lists option", function(){
    homepage.AccountAndsList().trigger('mouseover')
})
When("User click Your Account option", function(){
    homepage.YourAccount().should('be.visible').click()
})
When("User validate {string} Your Account", function(content){
   homepage.YourAccountValidation().should('contain', content)
})
When("User click Your Wish List option", function(){
    homepage.YourWishList().should('be.visible').click()
})
When("User validate {string} Your Wish List", function(content){
    homepage.YourWishListValidation().should('contain', content)
})
When("User click Your Recommendations option", function(){
    homepage.YourRecommendations().should('be.visible').click()
})
When("User validate {string} Your Recommendations", function(content){
    homepage.YourRecommendationsValidation().should('contain', content)
})
When("User click Your Prime Video option", function(){
    homepage.YourPrimeVideo().should('be.visible').click()
})
When("User validate {string} path", function(content){
    homepage.YourPrimeVideoValidation().should('not.contain', content)
})
When("User click Your Seller Account option", function(){
    homepage.YourSellerAccount().should('be.visible').click()
})
When("User validate {string} Your Seller Account option", function(content){
    homepage.YourSellerAccountValidation().should('have.text', content)
})
When("User click Free Amazon Bussiness Account option", function(){
    homepage.FreeAmazonBusinessAccount().should('be.visible').click()
})
Then("User validate {string} Free Amazon Bussiness Account", function(content){
    homepage.FreeAmazonBusinessAccountValidation().should('contain', content)
})
