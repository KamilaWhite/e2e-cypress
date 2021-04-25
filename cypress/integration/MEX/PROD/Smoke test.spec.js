describe("Smoke tests to check if pages are work", () => {
    it("Visit the maine page", () => {
      cy.visit("https://www.mediaexpert.pl/");
      cy.get(".c-zone_col, .home-page-container");
    });
  
    it("Visit the page with contact form", () => {
      cy.visit("https://www.mediaexpert.pl/zglos-blad");
      cy.get("#cc_form_257");
    });
  
    it("Visit the login page", () => {
      cy.visit("https://www.mediaexpert.pl/login");
      cy.contains("Zarejestruj się lub zaloguj przy użyciu");
    });
  
    it("Visit the wishlist page", () => {
      cy.visit("https://www.mediaexpert.pl/ulubione/storage");
      cy.contains("Wygląda na to, że nie dodałeś jeszcze nic do schowka");
    });
  
    it('Visit the "Droidy', () => {
      cy.visit("https://www.mediaexpert.pl/foto-i-kamery/drony-i-akcesoria/droidy");
      cy.get(".is-offers, .list-items");
    });
  
    it('Visit the "Witryny chłodnicze" page', () => {
      cy.visit("https://www.mediaexpert.pl/komputery-i-tablety/laptopy-i-ultrabooki/laptopy/apple");
      cy.get(".is-offers, .list-items");
    });
  
    it('Apple MacBook" page', () => {
      cy.visit("https://www.mediaexpert.pl/komputery-i-tablety/laptopy-i-ultrabooki/laptopy/apple");
      cy.get(".is-offers, .list-items");
    });
  
    it('Visit the "SEkspresy ciśnieniowe" page', () => {
      cy.visit("https://www.mediaexpert.pl/agd-male/ekspresy-i-kawa/ekspresy-cisnieniowe");
      cy.get(".is-offers, .list-items");
    });
  
    it('Visit the "Tablety" page', () => {
      cy.visit("https://www.mediaexpert.pl/komputery-i-tablety/tablety-i-e-booki/tablety");
      cy.get(".is-offers, .list-items");
    });
  
    it('Visit the "Piekarniki elektryczne" page', () => {
      cy.visit("https://www.mediaexpert.pl/agd-do-zabudowy/piekarniki-do-zabudowy/rodzaj-piekarnika_elektryczny");
      cy.get(".is-offers, .list-items");
    });
  });