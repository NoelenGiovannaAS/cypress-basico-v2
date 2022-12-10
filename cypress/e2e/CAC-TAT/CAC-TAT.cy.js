/// <reference types="Cypress" --> search references, autocomplite, signature of functions
describe('Central de Atendimento ao Cliente TAT', function() { // -----> Test Suit
    it('verifica o título da aplicação', function() { // ------> test
        cy.visit('./src/index.html')
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
})