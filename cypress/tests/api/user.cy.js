import { faker } from '@faker-js/faker'

describe('Users endpoint', () => {
    const payload = {
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: `${faker.datatype.boolean()}`
    }
    const userId = Cypress.env('userId');

    it('Get all users', () => {
        cy.getAllUsers().then((body) => {
            expect(body).to.have.property('quantidade');
            expect(body).to.have.property('usuarios');
        });
    });

    it('Create a user', () => {
        cy.createUser(payload).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');

            Cypress.env('userId', response.body._id);
        });
    });

    it('Get user by ID', () => {
        cy.getUserById(Cypress.env('userId')).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('nome');
            expect(response.body).to.have.property('email');
            expect(response.body).to.have.property('password');
            expect(response.body).to.have.property('administrador');
            expect(response.body).to.have.property('_id');
        });
    });

    it('Update user by ID', () => {
        const updatedEmail = faker.internet.email();
        const updatedPayload = { ...payload, email: updatedEmail };

        cy.updateUserById(Cypress.env('userId'), updatedPayload).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Registro alterado com sucesso');
        });
    });

    it('Delete user by ID', () => {
        cy.deleteUserById(Cypress.env('userId')).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Registro excluído com sucesso');
        });
    });
});