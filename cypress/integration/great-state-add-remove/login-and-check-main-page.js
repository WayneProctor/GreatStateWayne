describe("Technical Test Check Main Page", () => {
    it("navigates to Main Page", () => {
    Cypress.on("uncaught:exception", () => false);
    //clears cookies and visits internet site
    cy.visitSite();
    });

    it("checks Main Page content", () => {
    Cypress.on("uncaught:exception", () => false);
    //checks list of items on page
    cy.get("#content > ul")
        .should("include.text", "A/B Testing")
        .should("include.text", "Add/Remove Elements")
        .should("include.text", "Basic Auth")
        .should("include.text", "Broken Images")
        .should("include.text", "Challenging DOM")
        .should("include.text", "Checkboxes")
        .should("include.text", "Context Menu")
        .should("include.text", "Digest Authentication")
        .should("include.text", "Disappearing Elements")
        .should("include.text", "Drag and Drop")
        .should("include.text", "Dropdown")
        .should("include.text", "Dynamic Content")
        .should("include.text", "Dynamic Controls")
        .should("include.text", "Dynamic Loading")
        .should("include.text", "Entry Ad")
        .should("include.text", "Exit Intent")
        .should("include.text", "File Download")
        .should("include.text", "Floating Menu")
        .should("include.text", "Forgot Password")
        .should("include.text", "Form Authentication")
        .should("include.text", "Frames")
        .should("include.text", "Geolocation")
        .should("include.text", "Horizontal Slider")
        .should("include.text", "Hovers")
        .should("include.text", "Infinite Scroll")
        .should("include.text", "Inputs")
        .should("include.text", "JQuery UI Menus")
        .should("include.text", "JavaScript Alerts")
        .should("include.text", "JavaScript onload event error")
        .should("include.text", "Key Presses")
        .should("include.text", "Large & Deep DOM")
        .should("include.text", "Multiple Windows")
        .should("include.text", "Nested Frames")
        .should("include.text", "Notification Messages")
        .should("include.text", "Redirect Link")
        .should("include.text", "Secure File Download")
        .should("include.text", "Shadow DOM")
        .should("include.text", "Shifting Content")
        .should("include.text", "Slow Resources")
        .should("include.text", "Sortable Data Tables")
        .should("include.text", "Status Codes")
        .should("include.text", "Typos")
        .should("include.text", "WYSIWYG Editor");
    });
});