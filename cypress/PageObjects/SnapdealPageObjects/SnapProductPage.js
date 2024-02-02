class SnapProductPage{
    buyLocator = '#buy-button-id';
    textLocator = '.trust-play-link > span';
    clickBuy(){
        cy.get(this.buyLocator).click();
    }
    verifyBuy(text){
        cy.get(this.textLocator).should('contain',text);
    }
}
export default SnapProductPage;