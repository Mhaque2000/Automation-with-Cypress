import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AmazonHomePage from "../../../../PageObjects/AmazonPageObjects/AmazonHomePage";
import AmazonSearchPage from "../../../../PageObjects/AmazonPageObjects/AmazonSearchPage";
import AmazonProductPage from "../../../../PageObjects/AmazonPageObjects/AmazonProductPage";
const homepage = new AmazonHomePage()
const searchpage = new AmazonSearchPage()
const productpage = new AmazonProductPage()
Given('User open application', function () {
    cy.visit('https://www.amazon.in/');
})
When('User searched the product', function () {
    homepage.searchbar().click().type(this.data.item)
    homepage.searchButton().click()
})
When('User validate the product', function () {
    searchpage.resultHeader().should('contain', this.data.item)
})
When('User click the preferred product', function () {
    searchpage.preferredItem().should('be.visible')
    searchpage.preferredItem().should('have.attr', 'target')
    searchpage.preferredItem().invoke('removeAttr', 'target').click()
})
When('User validate the clicked product', function () {
    productpage.productTitle().should('contain', this.data.producttitle)
})
Then('User added the product in the cart', function () {
    productpage.addToCart().click({ force: true })
})
// ('User validate add to cart function', function () {
//     productpage.productAddedVerify().should('contain', 'Added to Cart', { timeout: 30000 })
// })