before(function () {
    cy.fixture('amazon').then(function (data) {
        this.data = data
    })
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
})