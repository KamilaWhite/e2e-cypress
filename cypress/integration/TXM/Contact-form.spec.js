describe("Checking kontact button", () => {
    it("Check if the Contact page works", () => {
      cy.visit("https://txm.pl/");
      cy.contains("Kontakt").click();
      cy.url().should("include", "/kontakt");
    });
  });
  
  describe("Send the contact form", () => {
    beforeEach(() => {
      cy.visit("https://txm.pl/kontakt");
    });
  
    it("Send a blank form", () => {
      cy.get("#cc_form_39").click();
      cy.contains("To pole jest wymagane");
      cy.contains("Adres email jest wymagany");
    });
  
    it("Checking the correct email form", () => {
      cy.get("#cc_form_229")
        .type("Wiadomość testowa, proszę nie odpowiadać.")
        .should("have.value", "Wiadomość testowa, proszę nie odpowiadać.");
      cy.get("#cc_form_35").type("fake@email").should("have.value", "fake@email");
      cy.get(".s-inputParent.m-form_btn").click();
      cy.contains("Nieprawidłowy adres email");
    });
  
    it("Successfully submits the contact form", () => {
      cy.get("#cc_form_229")
        .type("Wiadomość testowa, proszę nie odpowiadać.")
        .should("have.value", "Wiadomość testowa, proszę nie odpowiadać.");
      cy.get("#cc_form_35")
        .type("fake@email.com")
        .should("have.value", "fake@email.com");
      cy.get(".s-inputParent.m-form_btn").click();
      cy.contains(
        "Dziękujemy za przesłanie zapytnia. Każdy problem i sugestia są dla nas ważne, dlatego skontaktujemy się z Tobą jak najszybciej. Prosimy jednak o chwilę cierpliwości."
      );
    });
  });