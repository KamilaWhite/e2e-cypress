describe('Send the contact form', () => {
    it('successfully submits the contact form', () => {
        cy.visit('https://txm.pl/')

        cy.contains('Kontakt').click()

        cy.url().should('include', '/kontakt')

        cy.get('#cc_form_229')
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id magna magna. Suspendisse vitae mauris quis dolor bibendum pellentesque non vel orci.')
            .should('have.value', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id magna magna. Suspendisse vitae mauris quis dolor bibendum pellentesque non vel orci.')

        cy.get('#cc_form_35')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

        cy.get('.s-inputParent.m-form_btn').click()

        cy.contains('Dziękujemy za przesłanie zapytnia. Każdy problem i sugestia są dla nas ważne, dlatego skontaktujemy się z Tobą jak najszybciej. Prosimy jednak o chwilę cierpliwości.')
    })
})