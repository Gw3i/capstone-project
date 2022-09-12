/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import VideoCardInfoBox from './VideoCardInfoBox';

describe('VideoCardInfoBox', () => {
	it('should render the video title', () => {
		const videoTitle = 'How to cook spaghetti?';
		render(<VideoCardInfoBox videoTitle={videoTitle} />);

		const title = screen.getByText(videoTitle);

		expect(title).toBeInTheDocument();
	});

	it('should render the category tag', () => {
		const categoryTag = 'Biology';
		render(<VideoCardInfoBox category={categoryTag} />);

		const tag = screen.getByText(categoryTag);

		expect(tag).toBeInTheDocument();
	});

	it('should render the bookmark button', () => {
		render(<VideoCardInfoBox />);

		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument();
	});
});
