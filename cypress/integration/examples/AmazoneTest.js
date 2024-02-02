import AmazonHomePage from "../../PageObjects/AmazonPageObjects/AmazonHomePage"
import AmazonSearchPage from "../../PageObjects/AmazonPageObjects/AmazonSearchPage"
import AmazonProductPage from "../../PageObjects/AmazonPageObjects/AmazonProductPage"
describe('amazon', function () {
    before(function () {
        cy.fixture('amazon').then(function (data) {
            this.data = data
        })
    })
    it('Buying iPhone', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('https://www.amazon.in/')
        const homepage = new AmazonHomePage()
        const searchpage = new AmazonSearchPage()
        const productpage = new AmazonProductPage()
        homepage.searchbar().click().type(this.data.item)
        homepage.searchButton().click()
        searchpage.resultHeader().should('contain', this.data.item)
        searchpage.preferredItem().should('be.visible')
        // when I use contains method in AmazonSerachPAge
        searchpage.preferredItem().should('have.attr', 'target')
        searchpage.preferredItem().invoke('removeAttr', 'target').click()
        // when I use xpath in AmazonSerachPAge
        // searchpage.preferredItem().parent().should('have.attr', 'target')
        // searchpage.preferredItem().parent().invoke('removeAttr', 'target').click()
        productpage.productTitle().should('contain', this.data.producttitle)
        productpage.addToCart().click({force: true})

    })
    it.skip('hover',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList').trigger('mouseover')
        cy.get('[href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya"] > .nav-text').click()
        
    })
})