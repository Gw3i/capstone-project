/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginForm from './LoginForm';

jest.mock('users', () => ({
	__esModule: true,

	default: {
		get: () => ({
			user: { id: 1, username: 'parent123' },
		}),
	},
}));

describe('Login Form', () => {
	const user = userEvent.setup();

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

	it('username input should be empty', () => {
		render(<LoginForm />);
		const userInput = screen.getByPlaceholderText(/parent123/i);
		expect(userInput.value).toBe('');
	});

	it('username input should be empty', () => {
		render(<LoginForm />);
		const userInput = screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*\*\*\*\*\*/i);
		expect(userInput.value).toBe('');
	});

	it('should show error message when input is empty', async () => {
		render(<LoginForm />);

		const errorMessage = screen.queryByText(/This field is required/i);
		expect(errorMessage).not.toBeInTheDocument();

		const button = screen.getByRole('button', { name: /login/i });
		await user.click(button);

		const errorMessagesAfterClick = await waitFor(() => screen.getAllByRole('alert'));
		expect(errorMessagesAfterClick).toHaveLength(2);
	});
});
