import { setup } from '../../support/setup.js';



setup();



describe(`Web page index tests`, () => {

	it('Can visit the page', () => {

		cy.visit('http://localhost:8080');

	});



	it('Should display the main component correctly', () => {

		cy.get('.Main').should('be.visible');

	});

});
import { ReactElement } from 'react';
import { Main } from '../components/layouts/Main/Main';

export default function Home() {
  return <Main />;
}
Home.getLayout = function getLayout(page: ReactElement) {
  return page;
};
