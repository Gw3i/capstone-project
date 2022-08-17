/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import StyledVideoTitle from '../StyledVideoTitle';

import VideoCard from './VideoCard';

describe('VideoForm', () => {
	render(<VideoCard />);

	it('should render the video title', () => {
		const text = 'The video title is displayed';
		render(<StyledVideoTitle>{text}</StyledVideoTitle>);
		const title = screen.getByText(text);
		expect(title).toBeInTheDocument();
	});
});
