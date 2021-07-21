Cypress.Commands.add('visitSite', () => {

    cy.clearCookies();
    cy.visit(Cypress.env("testURL"));
    //checks headers and footers of the main page
    cy.get("h1")
        .contains("Welcome to the-internet")
        .should("be.visible");
    cy.get("h2")
        .contains("Available Examples")
        .should("be.visible");
    cy.get("#page-footer")
        .contains("Elemental Selenium")
        .should("be.visible");
  })