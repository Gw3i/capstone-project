/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Nav from './Nav';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			query: jest.fn(),
		};
	},
}));

describe('Nav', () => {
	it('should be displayed', () => {
		render(<Nav />);
		const navbar = screen.getByRole('navigation');
		expect(navbar).toBeInTheDocument();
	});

	it('should render the Home button', () => {
		render(<Nav />);
		const linkText = 'Home';
		const link = screen.getByText(linkText);
		expect(link).toBeInTheDocument();
	});

	it('should render the Explore link', () => {
		render(<Nav />);
		const linkText = 'Explore';
		const link = screen.getByText(linkText);
		expect(link).toBeInTheDocument();
	});

	it('should render the Bookmarks link', () => {
		render(<Nav />);
		const linkText = 'Bookmarks';
		const link = screen.getByText(linkText);
		expect(link).toBeInTheDocument();
	});

	it('should render the Create link', () => {
		render(<Nav />);
		const linkText = 'Create';
		const link = screen.getByText(linkText);
		expect(link).toBeInTheDocument();
	});
});
