import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

// the describe function is not absolutely necessary for the test to run; it is used to organize tests into sections that are typically labeled with the element being tested.
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    })
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        // Here, we have used a custom matcher to compare the expected value to the one received by our query.
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        // Similar to an id attribute, we will add a data-testid to the <a> element. Also similar to the getElementById DOM method, we will use the getByTestId method to return the DOM element.
        const { getByTestId } = render(<Nav />);
        // Assert
        // If either assertion fails, this test will fail
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})