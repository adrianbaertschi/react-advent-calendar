describe('The Home Page', function () {
    it('successfully loads', function () {
        cy.visit('/');
        cy.get('h1')
            .should('have.text', 'Calendar')
    })
});