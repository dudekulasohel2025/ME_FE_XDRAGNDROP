describe("Drag N Drop App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // change to your app URL
  });
  
  it("UI renders: Title", () => {
    cy.contains("Drag & Drop Digits").should("be.visible");
  });

  it("UI renders: Description", () => {
    cy.contains("Drag the boxes to reorder the digits 0–9.").should("be.visible");
    cy.contains("Tip: Try reordering to make 0123456789 or reverse it!").should("be.visible");
  });

  it("UI renders: Digits", () => {
    cy.contains("0").should("be.visible");
    cy.contains("1").should("be.visible");
    cy.contains("2").should("be.visible");
    cy.contains("3").should("be.visible");
    cy.contains("4").should("be.visible");
    cy.contains("5").should("be.visible");
    cy.contains("6").should("be.visible");
    cy.contains("7").should("be.visible");
    cy.contains("8").should("be.visible");
    cy.contains("9").should("be.visible");
  });
});

