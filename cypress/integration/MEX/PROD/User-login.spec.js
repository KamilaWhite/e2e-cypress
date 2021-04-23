
var env = Cypress.env().terg.melog;

describe("User login test cases", () => {
  beforeEach(() => {
    cy.visit("https://www.mediaexpert.pl/login");
  });
  it("Blank fields", () => {
    cy.get(".is-signIn").click();
    cy.contains("To pole jest wymagane");
    cy.contains("To pole jest wymagane");
    cy.url().should("include", "/login");
  });

  it("Blank password field", () => {
    cy.get("#enp_customer_form_login_username")
      .type(env.login)
      .should("have.value", env.login);
    cy.get(".is-signIn").click();
    cy.contains("To pole jest wymagane");
    cy.url().should("include", "/login");
  });

  it("Incorrect password", () => {
    cy.get("#enp_customer_form_login_username")
      .type(env.login)
      .should("have.value", env.login);
    cy.get("#enp_customer_form_login_password").type("xxx");
    cy.get(".is-signIn").click();
    cy.contains("Nieprawidłowa nazwa użytkownika lub hasło");
    cy.url().should("include", "/login");
  });

  it("Check email field validation", () => {
    cy.get("#enp_customer_form_login_username")
      .type("wrongemail@mail.")
      .should("have.value", "wrongemail@mail.");
    cy.get("#enp_customer_form_login_password").type(env.pwd);
    cy.get(".is-signIn").click();
    cy.contains("Podaj poprawny adres e-mail");
    cy.url().should("include", "/login");
  });

  it("There is no user in the database", () => {
    cy.url().should("include", "/login");
    cy.get("#enp_customer_form_login_username")
      .type("fake.email@fake.com")
      .should("have.value", "fake.email@fake.com");
    cy.get("#enp_customer_form_login_password").type("xxx");
    cy.get(".is-signIn").click();
    cy.contains("Nieprawidłowa nazwa użytkownika lub hasło");
    cy.url().should("include", "/login");
  });

  it("Successful login", () => {
    cy.url().should("include", "/login");
    cy.get("#enp_customer_form_login_username")
      .type(env.login)
      .should("have.value", env.login);
    cy.get("#enp_customer_form_login_password").type(env.pwd);
    cy.get(".is-signIn").click();
    cy.url().should("include", "/www.mediaexpert.pl");
  });
});