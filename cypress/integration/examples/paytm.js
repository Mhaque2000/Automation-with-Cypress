import FlighPageObjects from "../../PageObjects/PaytmPageObjects/FlightPageObjects";
describe('paytm', ()=>{
    before(function(){
        cy.fixture("paytm").then(function(data){
            this.data =data
        })
    })
    it('flight',{retries:3},function(){
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        const flightpageobject = new FlighPageObjects()
        cy.visit('https://tickets.paytm.com/flights/')
        flightpageobject.fromLocation().should('be.visible').click()
        flightpageobject.fromLocationTypeBox().clear().type(this.data.userLocation)
        cy.selectAirport(this.data.userLocation)
        // flightpageobject.fromLocationDropdown().each(($el, index, $list)=>{
        //     if($el.text() === this.data.userLocation){
        //         cy.wrap($el).click()
        //     }
        // })
        flightpageobject.toLocation().should('be.visible').click()
        flightpageobject.toLocationTypeBox().clear().type(this.data.destinationLocation)
        cy.selectAirport(this.data.destinationLocation)
        // flightpageobject.toLocationDropdown().each(($el, index, $list)=>{
        //     if($el.text() === this.data.destinationLocation){
        //         cy.wrap($el).click()
        //     }
        // })
        flightpageobject.calender().should('be.visible').click()
        flightpageobject.date().should('be.visible').click()
        flightpageobject.traveller().should('be.visible').should('be.visible').click()
        flightpageobject.children().click()
        flightpageobject.infants().click()
        flightpageobject.travellerSelected().should('be.visible').should('be.visible').click()
        flightpageobject.search().should('be.visible').should('be.visible').click()
    })
})