describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
 
       cy.get("#opentab").invoke('removeAttr','target').click();
 
       cy.origin("https://www.qaclickacademy.com",()=>
       {
        cy.wait(3000)
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.wait(3000)
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
 
       })
 
    });
 
});
 