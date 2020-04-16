describe('My First Test', function() {
    it('Visits the home of Destinia', function() {
        cy.visit('https://www.destinia.com')

        cy.get('.acInput').type('Madrid')

        cy.get('button[id=search_button_hotelsearchwidget0]').click()
    })

    it('Selects option Madrid', function() {
        cy.url().contains('online.destinia.com')

        cy.get('a[data-name=Madrid, España]').click()
    })
})