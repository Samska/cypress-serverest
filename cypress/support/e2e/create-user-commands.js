Cypress.Commands.add('fillAndSubmitForm', (user) => {
    cy.get('input[name=nome]').type(user.nome)
    cy.get('input[name=email]').type(user.email)
    cy.get('input[name=password]').type(user.password)
    cy.get('input[name=administrador]').check()
    cy.get('.btn.btn-primary').click()
})