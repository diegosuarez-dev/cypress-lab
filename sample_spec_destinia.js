describe('My First Test', function() {
    it('Visits the home of Destinia', function() {
        cy.visit('https://destinia.com/')

        cy.get('#hotelsearchwidget0-location').type('Madrid')

        cy.get('#result0_0').click()

        cy.get('#hotelsearchwidget0-checkdates > a.in_date').click()

        cy.get('div.calendar[style*="block"] div.month-container[data-month-tab=0] a[rel=1590703200000]').click({force : true})

        cy.get('div.calendar[style*="block"] div.month-container[data-month-tab=0] a[rel=1590962400000]').click({force : true})

        cy.get('#search_button_hotelsearchwidget0').click({force : true})
    })
})