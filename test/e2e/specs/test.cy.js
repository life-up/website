/// <reference types="cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://www.baidu.com/')
  })

  it('.as() - alias a DOM element for later use', () => {
  
      cy.get('.s_btn').as('firstBtn')
      cy.get('@firstBtn').click()
  
      cy.get('@firstBtn')
        .should('have.class', 's_btn')
    })
})
