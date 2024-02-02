describe('Mouse Hover', ()=>{
    it('jQuery show', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click()
        cy.url().should('contain', 'top')

    })
})