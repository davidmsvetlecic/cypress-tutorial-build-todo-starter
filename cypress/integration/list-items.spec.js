describe("List item", () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it("display completed items properly", () => {
    cy.get(".todo-list li")
      .filter(".completed")
      .should("have.length", 1)
      .and("contain", "Eggs")
      .find(".toggle")
      .should("be.checked");
  });

  it("show remaining todos count in the footer", () => {
    cy.get(".todo-count").should("contain", 3);
  });

  it("remove a todo", () => {
    cy.route({
      url: "/api/todos/1",
      method: "DELETE",
      status: 200,
      response: {},
    });
    cy.get(".todo-list li").as("list");
    cy.get("@list").first().find(".destroy").invoke("show").click();
    cy.get("@list").should("have.length", 3).and("not.contain", "Milk");
  });
});
