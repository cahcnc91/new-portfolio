describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("clicks on link view my work and goes to url /work", () => {
    cy.get('[data-cy=header-view-work]').click();
    cy.url().should("include", "/work");
  });

  it("shows text about dev", () => {
    cy.get('[data-cy=about-section-header]').contains(`I'm a full-stack developer based in NYC. I love coding, I'm extremely
    social and I'm obsessed with being productive.`).should('be', true)

  })

  it("show 3 cards on the bottom", () => {
    cy.get('[data-cy=about-cards]').children().should('have.length', 3)
  })
});
