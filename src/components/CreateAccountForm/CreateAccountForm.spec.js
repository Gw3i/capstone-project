/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CreateAccountForm from './CreateAccoutForm';

describe('Create Account Form', () => {
	const user = userEvent.setup();

	it('should render username input', () => {
		render(<CreateAccountForm />);
		const userInput = screen.getByPlaceholderText(/parent123/i);
		expect(userInput).toBeInTheDocument();
	});

	it('should render password input', () => {
		render(<CreateAccountForm />);
		const userPassword = screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*\*\*\*\*\*/i);
		expect(userPassword).toBeInTheDocument();
	});

	it('should render date input', () => {
		render(<CreateAccountForm />);
		const userAge = screen.getByLabelText('Age');
		expect(userAge).toBeInTheDocument();
	});

	it('should render the create new account button', () => {
		render(<CreateAccountForm />);
		const buttonText = 'Create new account';
		const button = screen.getByText(buttonText);
		expect(button).toBeInTheDocument();
	});

	it('username input should be empty', () => {
		render(<CreateAccountForm />);
		const userInput = screen.getByPlaceholderText(/parent123/i);
		expect(userInput.value).toBe('');
	});

	it('password input should be empty', () => {
		render(<CreateAccountForm />);
		const userPassword = screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*\*\*\*\*\*/i);
		expect(userPassword.value).toBe('');
	});

	it('date input should be empty', () => {
		render(<CreateAccountForm />);
		const userAge = screen.getByLabelText('Age');
		expect(userAge.value).toBe('');
	});

	it('should show error message when input is empty', async () => {
		render(<CreateAccountForm />);

		const errorMessage = screen.queryByText(/This field is required/i);
		expect(errorMessage).not.toBeInTheDocument();

		const button = screen.getByRole('button', { name: /create new account/i });
		await user.click(button);

		const errorMessagesAfterClick = await waitFor(() =>
			screen.getAllByText(/This field is required/i)
		);
		expect(errorMessagesAfterClick).toHaveLength(3);
	});
});
