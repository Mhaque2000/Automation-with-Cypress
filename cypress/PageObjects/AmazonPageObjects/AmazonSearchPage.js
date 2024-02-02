class AmazonSearchPage{
    resultHeaderLocator = '.a-color-state'
    preferredItemLocator = "'Apple iPhone 14 (256 GB) - (Product) RED'"
    // preferredItemLocator = "//h2//span[contains(text(),'Apple iPhone 14 (256 GB) - (Product) RED')]"
    resultHeader(){
        return cy.get(this.resultHeaderLocator)
    }
    preferredItem(){
        return cy.contains(this.preferredItemLocator)
        // return cy.get('h2.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2>a').eq(0)
    }
}
export default AmazonSearchPage