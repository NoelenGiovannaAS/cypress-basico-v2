//<reference types="Cypress" 
describe('Teste automação FOR ALL Test',function(){
    it('Acessa site', beforeEach(){
        cy.visit('http://aprendendotestar.com.br/treinar-automacao.phpfun')
    }),
    it('Verifica titulo', function(){
        cy.title().should('be.equal','Sobre - Aprendendo a Testar - Um guia para você aprender sobre testes de Software')
    }),
    it('Preenche campos obrigatórios e enviar o formulário', function(){
        cy.get()
        .should('be.visible')
        .type('Noelen')
        .should('have.value','Noelen')
        cy.title().should('be.equal','Sobre - Aprendendo a Testar - Um guia para você aprender sobre testes de Software')
    })

})
