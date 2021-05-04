Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe("Chceck pagination tast cases" , () => {
    beforeEach(() => {
        cy.visit('https://txm.pl/mezczyzna/bielizna-meska/skarpetki');
      });

    it("Check top arrow", () => {
        cy.get('.m-pagination_next').eq(0).click();
        cy.get('.m-pagination_input').should('have.value', 2);
        cy.get('.m-pagination_prev').eq(0).click();
        cy.get('.m-pagination_input').should('have.value', 1);
    });
        
    it("Check bottom arrow", () => {   
        cy.get('.m-pagination_next').eq(1).click();
        cy.get('.m-pagination_input').should('have.value', 2);
        cy.get('.m-pagination_prev').eq(1).click();
        cy.get('.m-pagination_input').should('have.value', 1);
    });

    it("Check input pagination field", () => {      
        cy.get('.m-pagination_input').clear().type('2{enter}');
        cy.get('.js-jumpToPage').should('have.value', 2);
    });
});