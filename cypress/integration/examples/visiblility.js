describe('Dropdowns', ()=>{
    it('Static dropdowns', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#displayed-text').should('be.visible')
        cy.wait(2000)

        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.wait(2000)

        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        
        
    })
})