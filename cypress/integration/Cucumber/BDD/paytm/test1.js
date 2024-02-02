import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FlighPageObjects from "../../../../PageObjects/PaytmPageObjects/FlightPageObjects";
const flightpageobject = new FlighPageObjects()
Given(/^user open application$/, () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    cy.visit('https://tickets.paytm.com/flights/')
});

When(/^user click from option$/, () => {
    flightpageobject.fromLocation().should('be.visible').click()
});
When(/^user remove the existing departure location type "([^"]*)"$/, (args1) => {
    flightpageobject.fromLocationTypeBox().clear().type(args1)
});

When(/^user select the "([^"]*)" departure location from the dropdown$/, (args1) => {
    cy.get('._1Lig4').each(($el, index, $list) => {
        if ($el.text() === args1) {
            cy.wrap($el).click()
        }
    })
});

When(/^user click to option$/, () => {
    flightpageobject.toLocation().should('be.visible').click()
});

When(/^user remove the existing destination location and type "([^"]*)"$/, (args1) => {
    flightpageobject.toLocationTypeBox().clear().type(args1)
});

When(/^user select the "([^"]*)" destination location from the dropdown$/, (args1) => {
    cy.get('._1Lig4').each(($el, index, $list) => {
        if ($el.text() === args1) {
            cy.wrap($el).click()
        }
    })
});

When(/^user click the calender option$/, () => {
    flightpageobject.calender().should('be.visible').click()
});

When(/^user select the prefered date$/, () => {
    flightpageobject.date().should('be.visible').click()
});

When(/^user click the traveller option$/, () => {
    flightpageobject.traveller().should('be.visible').should('be.visible').click()
});

When(/^user select 1 adult, 1 child and 1 infant$/, () => {
    flightpageobject.children().click()
    flightpageobject.infants().click()
    flightpageobject.travellerSelected().should('be.visible').should('be.visible').click()
});

Then(/^user search for the available flight$/, () => {
    flightpageobject.search().should('be.visible').should('be.visible').click()
});
