import user from '../fixtures/users.json' 

Cypress.Commands.add('login', (email, password) => {
    cy.visit("/");
    cy.get("[href='/login']").click();
    cy.get("[name='login_email']").type(user.email || secrets.EMAIL);
    cy.get("[name='login_password']").type(user.password || secrets.PASSWORD);
    cy.get("body").then($body => {
        if ($body.find("[data-uxa-log='login_form_submit_button']").length > 0) {
            cy.get("[data-uxa-log='login_form_submit_button']").click();
        }
            else {
                cy.get('.signin-button').click();
            }
    });
});