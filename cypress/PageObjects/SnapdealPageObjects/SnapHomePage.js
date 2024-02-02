class SnapHomePage{
    searchBoxLocator = '#inputValEnter';
    searchButtonLocator = '.searchTextSpan';
    textLocator = '#searchMessageContainer > .search-result-txt-section > .nnn';
    enterSaree(item){
        cy.get(this.searchBoxLocator).type(item);
    }
    clickSearchButton(){
        cy.get(this.searchButtonLocator).click();
    }
    verifySaree(searchText){
        cy.get(this.textLocator).should('contain', searchText);
    }
    hoverMensFashion(){
        return cy.get('.navlink.hoverIn p:nth-child(6) a');
    }
    locateFormalShoes(){
        return cy.contains('Formal Shoes')
    }
}
export default SnapHomePage;