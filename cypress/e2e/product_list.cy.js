describe('the home page', () => {
  it('loads initially', () => {
    cy.visit('https://lindsaymergy.github.io/apple_acres/')
    cy.contains('p', 'Loading').should('be.visible')
  })
  
  it('loads phone number', () => {
    cy.contains('h2', '287-382-4789').should('be.visible')
  })

  it('loads product listings', () => {
    cy.get('.product').should('have.length', 8)
  })

  it('loads product details', () => {
    cy.get('.details').first().click()
    cy.get('.description').should('be.visible')
    cy.get('.rating').should('be.visible')
  })
})