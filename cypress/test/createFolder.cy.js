Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Create a folder',() => {
    it('Add a new folder', function () {
        cy.login();
        cy.get("[href='/h?role=personal']").click();
        cy.get("[aria-label='Create']").click();
        cy.get(".dig-Menu-row:nth-child(1) > .dig-Menu-row-content:nth-child(2) > .dig-Menu-row-title").click();
        cy.get("[placeholder='Folder name']").type("New Folder");
        cy.get(".dig-Button:nth-child(2) > .dig-Button-content").click();
    });
});