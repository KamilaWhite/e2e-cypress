// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("checkIf404TextNotExists", () => {
    cy.contains("Przepraszamy, spróbuj za chwilę").should("not.exist");
  });
  Cypress.Commands.add("checkIf500TextNotExists", () => {
    cy.contains("Nie mogliśmy znaleźć takiej strony").should("not.exist");
  });
  Cypress.Commands.add("checkIf404TextNotExistsAtTXM", () => {
    cy.contains(".b-alertPage_text").should("not.exist");
  });
  Cypress.Commands.add("checkIf500TextNotExistsAtTXM", () => {
    cy.contains("Wewnętrzny błąd serwera!").should("not.exist");
  });
  // before(() => {
  //   cy.visit('');
  //   cy.setCookie('cookies', "1");
  //   cy.reload();
  //   Cypress.Cookies.preserveOnce('cookies');
  //   });
  //
  //
  // -- This is a child command --
  // Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
  //
  //
  // -- This is a dual command --
  // Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
  //
  //
  // -- This will overwrite an existing command --
  // Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })