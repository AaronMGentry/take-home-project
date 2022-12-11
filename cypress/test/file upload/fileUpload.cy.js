
//const baseUrl = cypress.config('baseUrl');
//import login from '../fixtures/user.json';

describe('Test File Upload',() => {
    before(function () {
        cy.visit('www.dropbox.com');
        cy.url().should('include', 'dropbox.com');
    });
    it('login', function () {
        cy.contains('Sign in').should('be.visible');
        cy.get("[href='/login']").click();
        cy.get("[name='login_email']").type('aaronwantstoworkatguild@gmail.com');
        cy.get("[name='login_password']").type('PrettyPleaseGuild2022');

        cy.get("body").then($body => {
        if ($body.find("[data-uxa-log='login_form_submit_button']").length > 0) {
            cy.get("[data-uxa-log='login_form_submit_button']").click();
        }
            else {
                cy.get('.signin-button').click();
            }
        });

        cy.url().should('include','personal');
        
        
        cy.fixture('ClassGrades.csv')
        .then(fileContent => {
            cy.get('input[type="file"]')
            .attachFile({
                fileContent,
                fileName: 'ClassGrades.csv',
                mimeType: 'text/csv',
            });
        });
    })
});