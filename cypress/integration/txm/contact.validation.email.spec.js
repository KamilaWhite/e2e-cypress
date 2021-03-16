describe('Email validation', () => {
    it('checking email validation', () => {
        cy.visit('https://txm.pl/')

        cy.contains('Kontakt').click()

        cy.url().should('include', '/kontakt')

        cy.get('#cc_form_229')
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id magna magna. Suspendisse vitae mauris quis dolor bibendum pellentesque non vel orci.')
            .should('have.value', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id magna magna. Suspendisse vitae mauris quis dolor bibendum pellentesque non vel orci.')

        cy.get('#cc_form_35')
            .type('fake@email')
            .should('have.value', 'fake@email')

        cy.get('.s-inputParent.m-form_btn').click()

        cy.contains('Nieprawidłowy adres email')
    })
})