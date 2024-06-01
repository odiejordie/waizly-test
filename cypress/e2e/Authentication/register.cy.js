describe("Visit Register Page", () => {
    it("Visit login page", () => {
        cy.visit("/login");

        cy.get("#register-panel-open-span").click();
    });
});

describe("Post Register", () => {
    it("Input credenial and login", () => {
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
    });
});
