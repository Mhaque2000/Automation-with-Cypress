// import 'cypress-iframe'
import 'cypress-iframe'
// install iframe plugin npm install -D cypress-iframe
describe('iframe',()=>{
    it('iframe',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.wait(2000)
        cy.iframe().find('[href="mentorship"]').eq(0).click()
        cy.wait(2000)
        cy.iframe().find('.auto-container div.inner-box h1').should('have.text','Mentorship')

    })
})