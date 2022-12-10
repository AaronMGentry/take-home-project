
//const baseUrl = cypress.config('baseUrl');
//import login from '../fixtures/user.json';

describe('Test File Upload',() => {
    before(function () {
        cy.visit('www.dropbox.com');
        cy.url().should('include', 'dropbox.com');
    });
    it('login', function () {
        cy.contains('Sign in').should('be.visible');
        cy.click("[name='login_email']").type('aaronwantstoworkatguild@gmail.com');
        cy.click("[name='login_password']").type('PrettyPleaseGuild2022');
        cy.click('.signin-button');
    })
    it('should login', function() {
        cy.url().should('include','personal');
    })
});