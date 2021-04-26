Cypress.on('Cookies', (err, runnable) => {
    cy.visit("https://txm.pl/");
    //clicking the button which throws the alert popup
    //As we are not handling,cypress selects OK
    cy.get('[#js-cookiePopup');
    cy.get('.mfp-close').click();
});

describe("Checking the functioning of the search engine", () => {
  beforeEach(() => {
    cy.visit("https://txm.pl");
  });
    it("Blank search", () => {
        cy.get('.b-header_nav .js-search_trigger').click();
        cy.get('.m-search_submit').click();
        cy.get('.b-offer_emptySearch').should('contain', "Niestety nie udało się znaleźć wyszukiwanego produktu.");
      });
      it("Blank search after press enter", () => {
        cy.get('.b-header_nav .js-search_trigger').click();
        cy.get('#query_querystring').type( '{enter}');
        cy.get('.b-offer_emptySearch').should('contain', "Niestety nie udało się znaleźć wyszukiwanego produktu.");
      });
      it("Checking funkcionality of 'x' ikon", () => {
        cy.get('.b-header_nav .js-search_trigger').click();
        cy.get('.m-search_suggestionClose').click();
        cy.get('#query_querystring').should('not.to.be.visible');
      });

      it("Searches by 3 letters and click", () => {
        cy.get('.b-header_nav .js-search_trigger').click();
        cy.get('#query_querystring').type('kur');
        cy.get('.m-search_submit').click();
        cy.get('#js-product-listing').should('exist');
        cy.get('.b-offer_category').should('contain', 'Wynik wyszukiwania dla: kur');
      });

      it("Searches by 3 letters and press enter", () => {
        cy.get('.b-header_nav .js-search_trigger').click();
        cy.get('#query_querystring').type('kur {enter}');
        cy.get('#js-product-listing').should('exist');
        cy.get('.b-offer_category').should('contain', 'Wynik wyszukiwania dla: kur');
      });

      it("Searches by 3 letters", () => {
        cy.get('.b-header_nav .js-search_trigger').click();
        cy.get('#query_querystring').type('suk');
        cy.get('.m-search_suggestionProducts').should('exist');
      });

      it("Click on the suggestoion", () => {
        cy.get('.b-header_nav .js-search_trigger').click();
        cy.get('#query_querystring').type('suk');
        cy.get('.m-search_suggestionProducts').should('exist');
        cy.get('.owl-item.active').eq(0).click();
        cy.get('.b-offer_show.js-offer_show').should('exist');
        cy.get('.m-breadcrumb_last').should('contain', 'Sukienki');
      });

      it("Click on the categories", () => {
        cy.get('.b-header_nav .js-search_trigger').click();
        cy.get('#query_querystring').type('suk');
        cy.get('.m-search_suggestionCategoryItem').eq(1).click();
        cy.get('#js-product-listing').should('exist');
        cy.get('.b-offer_category').should('contain', 'Sukienki');
      });
});