describe("Conference Overview Page Test", function() {
  context("Desktop Test Case", () => {
    before(() => {
      // Navigate to the root
      cy.visit("http://localhost:4000/");
      // Communities overview page
      cy.contains("Communities").click({ force: true });
      cy.url().should("include", "/communities");
    });

    beforeEach(() => {
      cy.clearLocalStorage();
      cy.viewport("macbook-13");
    });

    it("From the sidenav of the community tab, navigate to the conference overview page", () => {
      // COMMUNITIES OVERVIEW SIDENAV
      cy.get(".sgds-menu")
        .get(".sgds-menu-list")
        .get(".second-level-nav")
        .contains("Events")
        .click({
          force: true,
        });

      // EVENTS OVERVIEW
      cy.get("a[href='conferences']").click({ force: true });
      cy.url().should("include", "/communities/events/conferences/");
    });

    it("Check whether the background color, status and title of the events are correct for upcoming events (Relative to Figma)", () => {
      cy.visit("/communities/events/conferences/");
      
    });

    it("Check whether the background color, status and title of the events are correct for past events (Relative to Figma)", () => {
      cy.visit("/communities/events/conferences/");
    });
  });
});
