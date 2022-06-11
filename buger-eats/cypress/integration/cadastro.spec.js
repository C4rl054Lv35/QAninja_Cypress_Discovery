describe('cadastro page', () => {
            it('Usuário deve ser tornar um entregador', () => {
                        cy.viewport(1440, 900)
                        cy.visit('https://buger-eats.vercel.app')
                        cy.get('a[href="/deliver"]').click()