/// <reference types = 'cypress'/>
/// <reference types='cypress-xpath' />
import 'cypress-iframe'
import SnapHomePage from "../../PageObjects/SnapdealPageObjects/SnapHomePage";
import SnapSareePage from "../../PageObjects/SnapdealPageObjects/SnapSareePage";
import SnapProductPage from "../../PageObjects/SnapdealPageObjects/SnapProductPage";
before(function() {
    cy.fixture('snapdeal').then(function(data) {
        this.data = data;
    })

})
describe('Snapdeal Testing', function() {
    it.skip('Saree Search', function() {
        cy.visit('https://www.snapdeal.com/');
        const homepage = new SnapHomePage();
        const sareepage = new SnapSareePage();
        const productpage = new SnapProductPage();
        homepage.enterSaree(this.data.searchItem);
        homepage.clickSearchButton();
        homepage.verifySaree(this.data.searchItem);
        sareepage.setPrice(this.data.startingPrice, this.data.endingPrice);
        sareepage.verifyPrice(this.data.price);
        sareepage.clickRating();
        sareepage.verifyRating(this.data.rating);
        sareepage.clickFirstSaree();
        productpage.clickBuy();
        productpage.verifyBuy(this.data.headingText);
    })
    it('hover1',function(){
        cy.visit('https://www.snapdeal.com/');
        // cy.get('[navindex="1"]').trigger('mouseover')
        // cy.wait(1000)
        // cy.frameLoaded('[allow="join-ad-interest-group"]')
        cy.xpath("//span[contains(text(),'Formal Shoes')]").click({force: true})
        // cy.frameLoaded('[allow="join-ad-interest-group"]')
        // cy.iframe().find('li[navindex="1" ]>div>div>div>div p:nth-child(5) a').click({force: true})
        cy.url().should('include', 'mens-footwear-floater-sandals')
    })
    it('hover2',function(){
        cy.visit('https://www.snapdeal.com/');
        // cy.get('[navindex="1"]').trigger('mouseover')
        // cy.wait(1000)
        cy.get('li[navindex="1" ]>div>div>div>div p:nth-child(5) a').eq(1).click({force: true})
        cy.url().should('include', 'men-apparel-trousers')
    })
    it('hover3',function(){
        cy.visit('https://www.snapdeal.com/');
        // cy.get('[navindex="1"]').trigger('mouseover')
        // cy.wait(1000)
        cy.get('li[navindex="1" ]>div>div>div>div p:nth-child(5) a').eq(2).click({force: true})
        cy.url().should('include', 'fashion-mens-jewellery')
    })
    // it('hover3',function(){
    //     cy.visit('https://www.snapdeal.com/');
    //     cy.xpath('(//li[@navindex="1" ]//div//div//div//div)[1]').invoke('show')
    //     cy.get('li[navindex="1" ]>div>div>div>div p:nth-child(6)').eq(1).click()
    // })
})

// await page.hover("div.leftNavigationLeftContainer.expandDiv>ul li:nth-child(2)")
//     await page.click("//span[contains(text(),'Formal Shoes')]")
