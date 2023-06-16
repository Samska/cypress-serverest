import { faker } from '@faker-js/faker'

describe('Signup', () => {
    const successMessage = 'Cadastro realizado com sucesso';
    const usedEmailMessage = 'Este email já está sendo usado';
    const requiredNameMessage = 'Nome é obrigatório';
    const requiredEmailMessage = 'Email é obrigatório';
    const requiredPasswordMessage = 'Password é obrigatório';

    const user = {
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: `${faker.datatype.boolean()}`
    }

    beforeEach(() => {
        cy.visit(`${Cypress.env('webBaseUrl')}/cadastrarusuarios`)
    })

    it('Signup done successfully', () => {
        cy.fillAndSubmitForm(user);
        cy.contains(successMessage);
    })

    it('Signup with already used email', () => {
        cy.fillAndSubmitForm(user);
        cy.contains(usedEmailMessage);
    })

    it('Signup with empty fields', () => {
        cy.get('.btn.btn-primary').click();
        cy.contains(requiredNameMessage);
        cy.contains(requiredEmailMessage);
        cy.contains(requiredPasswordMessage);
    })
})