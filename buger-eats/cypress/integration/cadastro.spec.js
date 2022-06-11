describe("cadastro page", () => {
    it("Usuário deve ser tornar um entregador", () => {
        cy.viewport(1440, 900);
        cy.visit("baseUrl");
        cy.get('a[href="/deliver"]').click();
<<<<<<< HEAD
        cy.get("#page-deliver form h1")
            .should("have.text", "Cadastre-se para  fazer entregas");
=======
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
>>>>>>> staging
    });
});