describe("Login Page", () => {
    it("successfully loads", () => {
        cy.visit("/login");
    });

    it("register, logout, and login test", () => {
        const uuid = () => Cypress._.random(0, 1e6);
        const id = uuid();
        const testName = `odiejordie-${id}`;
        const testEmail = `${testName}@gmail.com`;

        cy.visit("/login");
        cy.get("#register-panel-open-span").click();

        cy.get("#register-name").type(testName);
        cy.get("#register-email").type(testEmail);
        cy.get("#register-password").type("12341234");
        cy.get("#password-confirmation").type("12341234");
        cy.get("#register-submit-btn").click();

        cy.url().should("include", "/dashboard");
        cy.getCookie("meminjam_dengan_gaya_session").should("exist");

        cy.get("#floating-profile-img").click();
        cy.get("#logout-label").click();

        cy.get("#login-label").click();
        cy.url().should("include", "/login");

        cy.get("#email").type(testEmail);
        cy.get("#password").type("12341234");
        cy.get("#login-btn").click();

        cy.url().should("include", "/dashboard");
    });
});
