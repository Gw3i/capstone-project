import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import VideoForm from './VideoForm';

describe('VideoForm', () => {
	const onSubmit = jest.fn();

	beforeEach(() => {
		onSubmit.mockClear();
		render(<VideoForm onSubmit={onSubmit} />);
	});

	it('onSubmit is called when input fields pass validation', async () => {
		const YouTubeLink = screen.getByRole('textbox', {
			name: /youtube link/i,
		});
		user.type(YouTubeLink, 'https://www.youtube.com/embed/WOkeB4ZTjFM');

		user.click(screen.getByRole('button', { name: /Submit/i }));

		await waitFor(() => {
			expect(onSubmit).toHaveBeenCalledTimes(1);
		});

		expect(onSubmit).toHaveBeenCalledWith({
			YouTubeLink: 'https://www.youtube.com/embed/WOkeB4ZTjFM',
		});
	});
});
