var env = Cypress.env().txm;

describe("User login test cases", () => {
  beforeEach(() => {
    cy.visit("https://txm.pl/login");
  });
  it("Blank fields", () => {
    cy.get("#_submit").click();
    cy.contains("Adres email jest wymagany");
    cy.contains("Podaj hasło");
    cy.url().should("include", "/login");
  });

  it("Blank password field", () => {
    cy.get("#enp_customer_form_login_username")
      .type(env.login)
      .should("have.value", env.login);
    cy.get("#_submit").click();
    cy.contains("Podaj hasło");
    cy.url().should("include", "/login");
  });

  it("Incorrect password", () => {
    cy.get("#enp_customer_form_login_username")
      .type(env.login)
      .should("have.value", env.login);
    cy.get("#enp_customer_form_login_password").type("xxx");
    cy.get("#_submit").click();
    cy.contains("Nieprawidłowa nazwa użytkownika lub hasło");
    cy.url().should("include", "/login");
  });

  it("Check email field validation", () => {
    cy.get("#enp_customer_form_login_username")
      .type("wrongemail@mail.")
      .should("have.value", "wrongemail@mail.");
    cy.get("#enp_customer_form_login_password").type(env.pwd);
    cy.get("#_submit").click();
    cy.contains("Nieprawidłowy adres email");
    cy.url().should("include", "/login");
  });

  it("There is no user in the database", () => {
    cy.url().should("include", "/login");
    cy.get("#enp_customer_form_login_username")
      .type("fake.email@fake.com")
      .should("have.value", "fake.email@fake.com");
    cy.get("#enp_customer_form_login_password").type("xxx");
    cy.get("#_submit").click();
    cy.contains("Nieprawidłowa nazwa użytkownika lub hasło");
    cy.url().should("include", "/www.txm.pl");
    cy.url().should("include", "/login");
  });

  it.only("Successful login", () => {
    cy.url().should("include", "/login");
    cy.get("#enp_customer_form_login_username")
      .type(env.login)
      .should("have.value", env.login);
    cy.get("#enp_customer_form_login_password").type(env.pwd);
    cy.get("#_submit").click();
    cy.url().should("include", "/txm.pl");
  });
});