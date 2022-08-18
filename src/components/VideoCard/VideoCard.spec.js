/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import HomePage from '../../pages';

describe('Home', () => {
	it('renders a heading', () => {
		render(<HomePage />);

		const heading = screen.getByRole('heading', {
			name: /Home/i,
		});

		expect(heading).toBeInTheDocument();
	});
});

describe('Link', () => {
	it('renders the link to create page', () => {
		render(<HomePage />);

		const link = screen.getByRole('link', { name: 'to create page' });

		expect(link).toHaveAttribute('href', '/create');
		expect(link).toBeInTheDocument();
	});
});
