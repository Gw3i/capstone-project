/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchForm from './SearchForm';

describe('Search Form', () => {
	const user = userEvent.setup();

	it('should render username input', () => {
		render(<SearchForm />);
		const userInput = screen.getByPlaceholderText(/channel name.../i);
		expect(userInput).toBeInTheDocument();
	});

	it('should render the login button', () => {
		render(<SearchForm />);
		const buttonText = 'Search';
		const button = screen.getByText(buttonText);
		expect(button).toBeInTheDocument();
	});

	it('search input should be empty', () => {
		render(<SearchForm />);
		const searchInput = screen.getByPlaceholderText(/channel name.../i);
		expect(searchInput.value).toBe('');
	});

	it('should show error message when input is empty', async () => {
		render(<SearchForm />);

		const errorMessage = screen.queryByText(/This field is required/i);
		expect(errorMessage).not.toBeInTheDocument();

		const button = screen.getByRole('button', { name: /search/i });
		await user.click(button);

		const errorMessagesAfterClick = await waitFor(() => screen.getAllByRole('alert'));
		expect(errorMessagesAfterClick).toHaveLength(1);
	});
});
