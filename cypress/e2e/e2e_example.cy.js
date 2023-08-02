/// <reference types="cypress" />

describe('Home Page Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays correctly', () => {
    cy.get('Main').should('be.visible')
  })
})