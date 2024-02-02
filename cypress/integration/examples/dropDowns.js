describe('Dropdowns', ()=>{
    it('Static dropdowns', ()=>{
        z
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1')
    })


    it.only('Dynamic dropdowns', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($el, index, $list)=>{
            if($el.text() === 'India'){
                cy.wrap($el).click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')
    })
})