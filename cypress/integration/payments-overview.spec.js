describe('PaymentsApp', () => {
  before(() => {
    // arrange
    cy.visit('http://localhost:3000/');
  })

  it('should render payments overview page', () => {
    // act and assert
    cy.get('[data-testid="title"]').should('contain.text', 'Payments');
  })

  it('should render payments table', () => {
    // act and assert
    cy.get('[data-testid="table-row"]').should('be.visible');
  })

  it('should open payment details page', () => {
    // arrange
    const tableRow = cy.get('[data-testid="table-row"]').first();

    // act
    tableRow.click();

    // assert
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/payments/pay_5c3c5964c48f30c128f9e588')
    })
  })

  it('should go back to the payments page', () => {
    // arrange
    const backBtn = cy.get('[data-testid="back-btn"]');

    // act
    backBtn.click();

    // assert
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/payments')
    })
  })
});