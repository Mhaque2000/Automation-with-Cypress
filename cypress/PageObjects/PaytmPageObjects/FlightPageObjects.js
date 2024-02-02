class FlighPageObjects{
    fromLocation(){
        return cy.get('#srcCode')
    }
    fromLocationTypeBox(){
        return cy.get('#text-box')
    }
    fromLocationDropdown(){
        return cy.get('._1Lig4')
    }
    toLocation(){
        return cy.get('#destCode')
    }
    toLocationTypeBox(){
        return cy.get('#text-box')
    }
    toLocationDropdown(){
        return cy.get('._1Lig4')
    }
    calender(){
        return cy.get('#departureDate')
    }
    date(){
        return cy.get(':nth-child(2) > .calendar > tbody > :nth-child(2) > :nth-child(6) > .calendar__day > :nth-child(1)')
    }
    traveller(){
        return cy.get('#numPax')
    }
    children(){
        return cy.get(':nth-child(2) > .vbz_Y > :nth-child(3)')
    }
    infants(){
        return cy.get(':nth-child(3) > .vbz_Y > :nth-child(3)')
    }
    travellerSelected(){
        return cy.get('._2Hmhv')
    }
    search(){
        return cy.get('#flightSearch')
    }
}

export default FlighPageObjects