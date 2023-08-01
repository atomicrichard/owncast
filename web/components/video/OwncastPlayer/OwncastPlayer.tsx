import { setup } from '../../support/setup.js';
setup();

describe(`Online video embed`, () => {
	it('Can visit the page', () => {
		cy.visit('http://localhost:8080');
	});

	it('Should have a play button', () => {
		cy.get('.vjs-big-play-button').should('be.visible');
	});
});

  // Add a test to make sure the video resizes correctly

  it('Should resize correctly', () => {

    cy.get('.video-js')

      .should('have.css', 'width', '100%')

      .and('have.css', 'height', '100%');

  });


