/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Category from './Category';

describe('Category', () => {
	it('should render the headline', () => {
		render(<Category />);
		const headline = screen.getByText('Biology');
		expect(headline).toBeInTheDocument();
	});
});
