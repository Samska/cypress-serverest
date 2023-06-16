describe('Signup', () => {
    let newUser;
    const successMessage = 'Cadastro realizado com sucesso';
    const usedEmailMessage = 'Este email já está sendo usado';
    const requiredNameMessage = 'Nome é obrigatório';
    const requiredEmailMessage = 'Email é obrigatório';
    const requiredPasswordMessage = 'Password é obrigatório';

    before(() => {
        cy.createRandomUser().then((user) => {
            newUser = user;
        });
    })

    beforeEach(() => {
        cy.visit(`${Cypress.env('webBaseUrl')}/cadastrarusuarios`)
    })

    it('Signup done successfully', () => {
        cy.fillAndSubmitForm(newUser);
        cy.contains(successMessage);
    })

    it('Signup with already used email', () => {
        cy.fillAndSubmitForm(newUser);
        cy.contains(usedEmailMessage);
    })

    it('Signup with empty fields', () => {
        cy.get('.btn.btn-primary').click();
        cy.contains(requiredNameMessage);
        cy.contains(requiredEmailMessage);
        cy.contains(requiredPasswordMessage);
    })
})