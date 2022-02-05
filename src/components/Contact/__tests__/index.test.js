import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact/>);
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact/>);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('text content is visible', () => {
    it('text content is displayed', () => {
        const { getByTestId } = render(<Contact/>);
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
        expect(getByTestId('submit')).toHaveTextContent('Submit');

    })
})

