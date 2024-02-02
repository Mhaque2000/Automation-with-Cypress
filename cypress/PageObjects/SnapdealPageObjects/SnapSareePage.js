class SnapSareePage{
    startPriceLocator = ':nth-child(3) > .price-text-box > .input-filter';
    endPriceLocator = ':nth-child(5) > .price-text-box > .input-filter';
    goLocator = '.price-go-arrow';
    priceRangeLocator = '.clear-filter-pill';
    ratingLocator = '[data-filtername="avgRating"] > .filter-content > .filter-inner > :nth-child(1) > label';
    ratingStarLocator = ':nth-child(2) > .clear-filter-pill';
    firstSareeLocator = '.js-section>[data-js-pos="0"]>div:nth-child(2)>a';
    setPrice(starting, ending){
        cy.get(this.startPriceLocator).clear().type(starting);
        cy.get(this.endPriceLocator).clear().type(ending);
        cy.get(this.goLocator).click();   
    }
    verifyPrice(priceValue){
        cy.get(this.priceRangeLocator).should('contain',priceValue)
    }
    clickRating(){
        cy.get(this.ratingLocator).click();
    }
    verifyRating(ratingValue){
        cy.get(this.priceRangeLocator).should('contain',ratingValue);
    }
    clickFirstSaree(){
        cy.get(this.firstSareeLocator).invoke('removeAttr', 'target').click();
    }
}
export default SnapSareePage;