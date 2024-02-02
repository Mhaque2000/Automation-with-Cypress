/// <reference types = "cypress"/>

describe('Chech Box', () => {
    it('Chech Box', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.wait(2000)

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        cy.wait(2000)

        cy.get('[type="checkbox"]').check(['option1', 'option2'])
        cy.wait(2000)

        cy.get('[type="checkbox"]').uncheck(['option1', 'option2'])
        cy.wait(2000)

        cy.get('[type="checkbox"]').check().should('be.checked').and('have.length', 3)
        cy.wait(2000)

        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
        cy.wait(2000)

    })

    it('Radio', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[for="radio1"] > .radioButton').check().should('be.checked')
        cy.wait(2000)

        cy.get('[for="radio2"] > .radioButton').check().should('be.checked')
        cy.wait(2000)

        cy.get('[for="radio3"] > .radioButton').check().should('be.checked')
        
    })
})