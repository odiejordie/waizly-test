describe("Visit Login Test", () => {
    it("Visit login page", () => {
        cy.visit("/login");
    });
});

describe("Post Login", () => {
    it("Input credenial and login", () => {
        cy.visit("/login");
        cy.get("#email").type("odiejordie@gmail.com");
        cy.get("#password").type("12341234");
        cy.get("#login-btn").click();

        cy.url().should("include", "/dashboard");

        cy.getCookie("meminjam_dengan_gaya_session").should("exist");
    });
});
