describe('table', ()=>{
    it('coloum value', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('td:nth-child(2)').each(($el, index, $list)=>{
            const text = $el.text()
            if(text.includes('QA Expert Course')){
                cy.get('td:nth-child(2)').eq(index).next().then((price)=>{
                    const pricevalue = price.text()
                    expect(pricevalue).to.eq('25')
                })
            }
        })
    })

    it.only('coloum value', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('td:nth-child(2)').each(($el, index, $list)=>{
            const text = $el.text()
            if(text.includes('QA Expert Course')){
                cy.get('td:nth-child(2)').eq(index).next().should('have.text', '25')  
            }
        })
    })
})