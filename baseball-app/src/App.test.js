import React from 'react';

import { render } from '@testing-library/react';

import App from './App.js';

test('App renders without crashing', () => {
    render(<App />);
})

test('contains the scores', () => {
    const container = render(<App />);
    container.getByTestId('home');
    container.getByTestId('inn');
    container.getByTestId('guest');
    container.getByTestId('ball');
    container.getByTestId('strike');
    container.getByTestId('out');
    container.getByTestId('foul'); 
})