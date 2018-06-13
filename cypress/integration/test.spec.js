const path = "http://localhost:3000/";

describe("SlateInspector", () => {
  beforeEach(() => {
    cy.visit(path);
  });

  it("should be able to delete and add image panels", function() {
    cy.get("#query").type("hello from cypress");
  });
});
