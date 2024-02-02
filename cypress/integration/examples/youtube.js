describe('youtube automation', ()=>{
    it('test 1', ()=>{
        cy.visit('https://www.youtube.com/')
        cy.get('#search-input > #search').should('be.visible').type('cypress vs playwright')
        cy.get('#search-icon-legacy').should('be.visible').click()
        cy.get('.ytd-search-header-renderer > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click()
        cy.get(':nth-child(1) > :nth-child(8) > #endpoint > #label > yt-formatted-string.style-scope').should('be.visible').and('have.text','This month').click()
        
    })
    it('test 2', ()=>{
        
    })
})