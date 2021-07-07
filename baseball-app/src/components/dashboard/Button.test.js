import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from './Button.js';

test('Button renders without crashing', () => {
    const testFunc = () => {
        return 'test';
    }
    render(<Button handlerFunction={testFunc} type='strike' />); 
})

test('Button should be able to be clicked', () => {
    const testFunc = () => {
        return true;
    }
    let buttonType = 'strike';
    const {getByTestId} = render(<Button handlerFunction={testFunc} type={buttonType} />);
    fireEvent.click(getByTestId('test'));
    
    // buttonType = 'ball';
    // fireEvent.click(getByTestId('test-ball'));  
 
    // buttonType = 'foul';


    // buttonType = 'hit';
})