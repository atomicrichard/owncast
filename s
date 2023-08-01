relevant_file_path="test/automated/browser/cypress/e2e/web/pages/index.cy.js":
import { setup } from '../../support/setup.js';
setup();

describe(`Web pages index`, () => {
	it('Can visit the page', () => {
		cy.visit('http://localhost:8080');
	});

	it('Page should display correctly', () => {
		cy.get('body').should('be.visible');
		cy.get('header').should('be.visible');
		cy.get('footer').should('be.visible');
	});
});