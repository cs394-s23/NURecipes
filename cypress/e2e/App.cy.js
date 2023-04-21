/* globals cy */
    
describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
  
    it ('opens with recipes', () => {
        cy.visit ('/');
        cy.get('[data-cy=postcard]').should('contain', 'View Details');
      });

    it('shows leaderboard when clicking on discovery page', () => {
        cy.visit ('/');
        cy.get('[data-cy=Discovery]').click();
        cy.get('[data-cy=lbcard]').should('contain' ,'View Details');
    });

  });