import React from 'react';
import { render, screen } from '../helpers/test-utils';
import { Login } from '../components/Login/Login';


describe('Login', () =>{
    test('should render with initial state ', () => {
        const mockInitialState = { auth: {loggingIn: true} };

        render(<Login />, {initialState: mockInitialState });
        expect(screen.getByText(/username/i)).toBeInTheDocument();
    })
});