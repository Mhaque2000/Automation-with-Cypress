before(function(){
    cy.fixture("paytm").then(function(data){
        this.data =data
    })
})