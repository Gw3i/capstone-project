/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EditForm from './EditForm';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			query: jest.fn(),
		};
	},
}));

describe('Edit Form', () => {
	const user = userEvent.setup();

	it('should render YouTube title input', () => {
		render(<EditForm />);
		const title = screen.getByLabelText(/video title/i);
		expect(title).toBeInTheDocument();
	});

	it('should render category input', () => {
		render(<EditForm />);
		const categoryInput = screen.getByLabelText(/choose a category/i);
		expect(categoryInput).toBeInTheDocument();
	});

	it('should render the Submit button', () => {
		render(<EditForm />);
		const buttonText = 'Submit';
		const button = screen.getByText(buttonText);
		expect(button).toBeInTheDocument();
	});

	it('should render the Cancel button', () => {
		render(<EditForm />);
		const buttonText = 'Cancel';
		const button = screen.getByText(buttonText);
		expect(button).toBeInTheDocument();
	});

	it('should show error message when input is empty', async () => {
		render(<EditForm />);

		const errorMessage = screen.queryByText(/This field is required/i);
		expect(errorMessage).not.toBeInTheDocument();

		const button = screen.getByRole('button', { name: /submit/i });
		await user.click(button);

		const errorMessagesAfterClick = await waitFor(() => screen.getAllByRole('alert'));
		expect(errorMessagesAfterClick).toHaveLength(2);
	});
});
