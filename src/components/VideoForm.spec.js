/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import VideoForm from './VideoForm';

describe('VideoForm', () => {
	it('should show error message when input empty', async () => {
		render(<VideoForm errorMessage="This field is required" />);

		const errorMessage = screen.queryByText(/This field is required/i);
		expect(errorMessage).not.toBeInTheDocument();

		const button = screen.getByRole('button', { name: /submit/i });
		await userEvent.click(button);

		const errorMessageAfterClick = screen.getByText(/his field is required/i);
		expect(errorMessageAfterClick).toBeInTheDocument();
	});
});
