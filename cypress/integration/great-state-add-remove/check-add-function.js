describe("Check Add Function", () => {
    it("navigate to add/remove element function", () => {
    Cypress.on("uncaught:exception", () => false);
    //helpper to visit site and check elements
    cy.visitSite();
    //navigates to Add/Remove Elements page and checks headers and footers on the page
    cy.get("#content > ul > li:nth-child(2) > a")
        .contains("Add/Remove Elements")
        .should("be.visible")
        .click();
    cy.get("h3")
        .contains("Add/Remove Elements")
        .should("be.visible");
    cy.get("#page-footer")
        .contains("Elemental Selenium")
        .should("be.visible");
    });

    it("using Add Element and Delete", () => {
    Cypress.on("uncaught:exception", () => false);
    //confirms Add Element button is present and uses the add and remove buttons
    cy.get("#content > div > button")
        .contains("Add Element")
        .should("be.visible")
        .click();
    cy.get("#elements > button")
        .contains("Delete")
        .should("be.visible")
        .click();
    cy.get("#elements > button")
        .should("not.exist");
    });

    it("using Add Element to create multiple Delete elements", () => {
    Cypress.on("uncaught:exception", () => false);
    //adds three Delete Buttons to the page
    cy.get("#content > div > button")
        .contains("Add Element")
        .should("be.visible")
        .click();
    cy.get("#elements > button")
        .contains("Delete")
        .should("be.visible");
    cy.get("#content > div > button")
        .click();
    cy.get("#elements > button")
        .contains("Delete")
        .should("be.visible");
    cy.get("#elements > button:nth-child(2)")
        .contains("Delete")
        .should("be.visible");
    cy.get("#content > div > button")
        .click();
    cy.get("#elements > button:nth-child(3)")
        .contains("Delete")
        .should("be.visible");
    });

    it("removing the multiple Delete elements", () => {
    Cypress.on("uncaught:exception", () => false);
    //removes the middle Delete Button. Checks only two Buttons now showing
    cy.get("#elements > button:nth-child(2)")
        .contains("Delete")
        .should("be.visible")
        .click();
    cy.get("#elements > button")
        .contains("Delete")
        .should("be.visible");
    cy.get("#elements > button:nth-child(2)")
        .contains("Delete")
        .should("be.visible")
    cy.get("#elements > button:nth-child(3)")
        .should("not.exist");
    //removes the first Delete Button. Checks only one Button now showing
    cy.get("#elements > button")
        .contains("Delete")
        .should("be.visible")
        .click();
    cy.get("#elements > button:nth-child(2)")
        .should("not.exist")
    cy.get("#elements > button:nth-child(3)")
        .should("not.exist");
    //removes the last Delete Button. Checks no Buttons now showing
    cy.get("#elements > button")
        .contains("Delete")
        .should("be.visible")
        .click();
    cy.get("#elements > button")
        .should("not.exist")
    cy.get("#elements > button:nth-child(2)")
        .should("not.exist")
    cy.get("#elements > button:nth-child(3)")
        .should("not.exist");
    });

    it("return to Main Page", () => {
    Cypress.on("uncaught:exception", () => false);
    //return to main page
    cy.visitSite();
    });
});

