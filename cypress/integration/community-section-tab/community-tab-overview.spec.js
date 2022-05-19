describe("Community Overview Page Test", function() {
  context("Desktop Test Case", () => {
    beforeEach(() => {
      cy.clearLocalStorage();
      cy.viewport("macbook-13");
      // Navigate to the root
      cy.visit("http://localhost:4000/");
      // Click on the community tab anchor tag
      cy.contains("Communities").click({ force: true });
      // Check whether it's the community tab by checking the url
      cy.url().should("include", "/communities");
    });

    it("Test response when there is no upcoming or current events", () => {
      // Scroll into view
      cy.contains("Upcoming Events").scrollIntoView();
      // Get the card container housing the cards
      cy.get("#upcoming-events-container");
    });

    it("Test whether newsletter cards are displayed (Exactly 3 Visible Content)", () => {
      // Scroll into view
      cy.contains("What's New").scrollIntoView();
      // Get the tab container housing the cards
      cy.get("#tab1")
        .get(".card-grid-container")
        .get("div[id*='newsletter-visible-content']")
        .should("have.length", 3);
    });

    it("Test whether I can click on the view all newsletter card and last element is correct", () => {
      // Scroll into view
      cy.contains("What's New").scrollIntoView();
      // Click on the view more content
      cy.get("#newsletter-display-more").click();
      // Check if the last element is exactly 'Ensuring Secure Migration of Data to the Cloud'
      cy.get("#tab1")
        .get(".card-grid-container")
        .get("div[id*='newsletter']")
        .last()
        .get("h4")
        .contains("Ensuring Secure Migration of Data to the Cloud");
    });
  });

  //   context("Mobile Test Case", () => {
  //     beforeEach(() => {
  //       cy.viewport("iphone-xr");
  //     });

  //     it("Visit the main page", () => {
  //       cy.visit("http://localhost:4000/");

  //       cy.contains("Communities").click({ force: true });
  //     });
  //   });
});
