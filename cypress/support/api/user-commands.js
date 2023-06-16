Cypress.Commands.add('getAllUsers', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('apiBaseUrl')}/usuarios`,
    }).its('body');
});

Cypress.Commands.add('createUser', (payload) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/usuarios`,
        body: payload,
    });
});

Cypress.Commands.add('getUserById', (userId) => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('apiBaseUrl')}/usuarios/${userId}`,
    });
});

Cypress.Commands.add('updateUserById', (userId, updatedPayload) => {
    return cy.request({
        method: 'PUT',
        url: `${Cypress.env('apiBaseUrl')}/usuarios/${userId}`,
        body: updatedPayload,
    });
});

Cypress.Commands.add('deleteUserById', (userId) => {
    return cy.request({
        method: 'DELETE',
        url: `${Cypress.env('apiBaseUrl')}/usuarios/${userId}`,
    });
});
