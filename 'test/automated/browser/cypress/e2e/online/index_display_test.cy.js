describe('Home Page Display Test', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000');

  });



  it('should show the main component', () => {

    cy.get('Main')

      .should('be.visible');

  });



  it('should render without errors', () => {

    cy.get('body')

      .should('not.contain', 'An unexpected error has occurred.');

  });



  afterEach(() => {

    cy.end();

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