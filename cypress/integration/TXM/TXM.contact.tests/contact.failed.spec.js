describe('Send the contact form', () => {
    it('failed sending contact form', () => {
        cy.visit('https://txm.pl/')

        cy.contains('Kontakt').click()

        cy.url().should('include', '/kontakt')

        cy.get('#cc_form_39').click()

        cy.contains('To pole jest wymagane')
        cy.contains('Adres email jest wymagany')
    })
})