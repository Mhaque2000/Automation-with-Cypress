class AmazonProductPage{
    productTitleLocator = '#productTitle'
    addtoCartLocator = '#add-to-cart-button'
    productAddedVerifyLocator = 'span.a-size-medium-plus.a-color-base.sw-atc-text.a-text-bold'
    productTitle(){
        return cy.get(this.productTitleLocator)
    }
    addToCart(){
        return cy.get(this.addtoCartLocator)
    }
    productAddedVerify(){
        // cy.get('div#attachDisplayAddBaseAlert h4.a-alert-heading').should('be.visible')
        return cy.get(this.productAddedVerifyLocator)
    }
}
export default AmazonProductPage;