/* eslint-disable no-undef */
describe('Testing exercise 7', () => {
  describe('Testing homepage GET /', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Should have href link /news', () => {
      cy.get('a[href="/news"]').should('exist')
      cy.get('input').type('Hello world')
      cy.get('button').click({force: true})
    })
  })

  describe.skip('Testing news page GET /news', () => {
    
  })

  describe.skip('Testing news details page GET /news/5', () => {
    
  })
})