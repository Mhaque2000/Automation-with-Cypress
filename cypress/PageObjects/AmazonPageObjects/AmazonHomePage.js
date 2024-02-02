class AmazonHomePage{
    searchBarLocator = '#twotabsearchtextbox'
    searchButtonLocator = '#nav-search-submit-button'
    AccountAndsListLocator = '#nav-link-accountList'
    YourAccountLocator = '[href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya"] > .nav-text'
    YourAccountValidationLocator = '.a-row.a-spacing-base>h1'
    YourWishListLocator = '[href="/hz/wishlist/ls?requiresSignIn=1&ref_=nav_AccountFlyout_wl"] > .nav-text'
    YourWishListValidationLocator = '#my-lists-tab > a > div'
    YourRecommendationsLocator = '[href="/gp/yourstore?ref_=nav_AccountFlyout_recs"] > .nav-text'
    YourRecommendationsValidationLocator = '.a-size-large'
    YourPrimeVideoLocator = '[href="/gp/redirect.html?location=https%3A%2F%2Fwww.primevideo.com%2F%3Fref_%3D_apv&source=nav_linktree&token=13D4F90D28CD96790B94E6091246BB1B2AE9FA05"] > .nav-text'
    YourSellerAccountLocator = '[href="/b/?node=2838698031&ld=AZINSOAYAFlyout&ref_=nav_AccountFlyout_sell"] > .nav-text'
    YourSellerAccountValidationLocator = 'h1.heading.align-start.font-size-xlarge.color-squid-ink.ember.font-heavy'
    FreeAmazonBusinessAccountLocator = '[href="/gp/browse.html?node=21102587031&ref_=nav_ya_flyout_b2b_reg_bottom"] > .nav-text'
    FreeAmazonBusinessAccountValidationLocator = '.navFooterBackToTopText'
    searchbar(){
        return cy.get(this.searchBarLocator)
    }
    searchButton(){
        return cy.get(this.searchButtonLocator)
    }
    AccountAndsList(){
        return cy.get(this.AccountAndsListLocator)
    }
    YourAccount(){
        return cy.get(this.YourAccountLocator)
    }
    YourAccountValidation(){
        return cy.get(this.YourAccountValidationLocator)
    }
    YourWishList(){
        return cy.get(this.YourWishListLocator)
    }
    YourWishListValidation(){
        return cy.get(this.YourWishListValidationLocator)
    }
    YourRecommendations(){
        return cy.get(this.YourRecommendationsLocator)
    }
    YourRecommendationsValidation(){
        return cy.get(this.YourRecommendationsValidationLocator)
    }
    YourPrimeVideo(){
        return cy.get(this.YourPrimeVideoLocator)
    }
    YourPrimeVideoValidation(){
        return cy.url()
    }
    YourSellerAccount(){
        return cy.get(this.YourSellerAccountLocator)
    }
    YourSellerAccountValidation(){
        return cy.get(this.YourSellerAccountValidationLocator)
    }
    FreeAmazonBusinessAccount(){
        return cy.get(this.FreeAmazonBusinessAccountLocator)
    }
    FreeAmazonBusinessAccountValidation(){
        return cy.get(this.FreeAmazonBusinessAccountValidationLocator)
    }
}
export default AmazonHomePage;