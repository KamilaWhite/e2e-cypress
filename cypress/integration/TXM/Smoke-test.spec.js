describe("Smoke tests to check if pages are work", () => {
    it("Visit the maine page", () => {
      cy.visit("https://txm.pl/");
      cy.get('.b-offers');
    });
  
    it("Visit the page with contact form", () => {
      cy.visit("https://txm.pl/kontakt");
      cy.get('.s-pageTitle');
    });
  
    it("Visit the login page", () => {
      cy.visit("https://txm.pl/login");
      cy.get('.is-separator');
    });
  
    it("Visit the find a store page", () => {
      cy.visit("https://txm.pl/sklepy_txm_textil_market");
      cy.get('.b-pos_list');
    });
  
    it('Visit the Search page', () => {
      cy.visit("https://txm.pl/");
      cy.get('.b-header_nav > .js-search_trigger').click();
      cy.get('.m-search_submit').click();
      cy.contains('Niestety nie udało się znaleźć wyszukiwanego produktu.');
    });

    it("Visit the empty cart page", () => {
        cy.visit("https://txm.pl/koszyk/lista");
        cy.get('.b-cart_empty');
    });
  
    it('Visit the Opinions page', () => {
      cy.visit("https://txm.pl/opinie");
      cy.get('.m-contentBox_reviewContent');
    });

    it('Visit the newsletter page', () => {
        cy.visit("https://txm.pl/newsletter");
        cy.get('.m-widget_header');
      });
  
    it('Visit the Girls jackets page', () => {
      cy.visit("https://txm.pl/dziewczynka/odziez/kurtki");
      cy.get("#js-product-listing");
    });
  
    it('Visit the baby hats page', () => {
      cy.visit("https://txm.pl/niemowlak/dodatki/czapki");
      cy.get('#js-product-listing');
    });
  
    it('Visit the House items page', () => {
      cy.visit("https://txm.pl/dom/artykuly-domowe");
      cy.get('#js-product-listing');
    });
  
    it('Visit the outlet page', () => {
      cy.visit("https://txm.pl/lp-oferta-outlet?sort=default&page=1&limit=50&iuyjtgre=");
      cy.get('#js-product-listing');
    });
  });