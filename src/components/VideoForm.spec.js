/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import VideoForm from './VideoForm';

describe('VideoForm', () => {
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
