Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe("Chceck pagination tast cases" , () => {

    it("Check pagination", () => {
        cy.visit('https://txm.pl/mezczyzna/bielizna-meska/skarpetki');
        cy.get('.m-pagination_next').eq(0).click(); //top arrow
        cy.get('.m-pagination_input').should('have.value', 2);
        cy.get('.m-pagination_prev').eq(0).click();
        cy.get('.m-pagination_input').should('have.value', 1);
        cy.get('.m-pagination_next').eq(1).click(); //bottom arrow
        cy.get('.m-pagination_input').should('have.value', 2);
        cy.get('.m-pagination_prev').eq(1).click();
        cy.get('.m-pagination_input').should('have.value', 1);
        cy.get('.m-pagination_input').clear().type('2').click();
        cy.get('.m-pagination_input').should('have.value', 2);
    });
});