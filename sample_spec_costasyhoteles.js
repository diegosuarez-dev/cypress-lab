describe('My First Test', function() {
    it('Visits the home of Costas y hoteles', function() {
        cy.visit('http://booking.costasyhoteles.es/')

        cy.get('#hotelsearchwidget0-location').type('Madrid')

        cy.get('#hotelsearchwidget0-checkdates > a:nth-child(6)').click()

        cy.get('div.calendar:nth-child(87) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > a:nth-child(27)').click({force : true})

        cy.get('button[id=search_button_hotelsearchwidget0]').click({force : true})

        //Probando git
    })
})