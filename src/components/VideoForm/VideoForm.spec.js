/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StyledButton from '../StyledButton';

import VideoForm from './VideoForm';

describe('VideoForm', () => {
	describe('Button component', () => {
		it('should render children', () => {
			const text = 'Submit';
			render(<StyledButton>{text}</StyledButton>);
			const button = screen.getByText(text);
			expect(button).toBeInTheDocument();
		});
	});

	describe('Button component', () => {
		it('should allow clicks', async () => {
			const handleClick = jest.fn();
			const text = 'Submit';
			render(<StyledButton onClick={handleClick}>{text}</StyledButton>);
			const button = screen.getByText(text);
			await userEvent.click(button);
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});

	it('should show error message when input is empty', async () => {
		const user = userEvent.setup();
		render(<VideoForm />);

		const errorMessage = screen.queryByText(/This field is required/i);
		expect(errorMessage).not.toBeInTheDocument();

		const button = screen.getByRole('button', { name: /submit/i });
		await user.click(button);

		const errorMessagesAfterClick = await waitFor(() => screen.getAllByRole('alert'));
		expect(errorMessagesAfterClick).toHaveLength(2);
	});
});
