import user from '../fixtures/users.json' 
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Login',() => {
    before(function () {
        cy.visit("/");
        cy.url().should('include', 'dropbox.com');
    });
    it('Enter credentials and login', function () {
        cy.contains('Sign in').should('be.visible');
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
    })
});