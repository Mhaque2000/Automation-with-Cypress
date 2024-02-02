// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
/// <reference types='cypress-xpath' />
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })



// Adding reusable method*****************************************************************************
Cypress.Commands.add("selectAirport", (airportName) => { 
    cy.get('._1Lig4').each(($el, index, $list) => {
        if($el.text().includes(airportName))
        {
            cy.wrap($el).click()
        }
        })
})
//****************************************************************************************************
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
