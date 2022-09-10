/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('Login Form', () => {
	it('should render username input', () => {
		render(<LoginForm />);
		const userInput = screen.getByPlaceholderText(/parent123/i);
		expect(userInput).toBeInTheDocument();
	});

	it('should render password input', () => {
		render(<LoginForm />);
		const userInput = screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*\*\*\*\*\*/i);
		expect(userInput).toBeInTheDocument();
	});

	it('should render the login button', () => {
		render(<LoginForm />);
		const buttonText = 'Login';
		const button = screen.getByText(buttonText);
		expect(button).toBeInTheDocument();
	});
});
