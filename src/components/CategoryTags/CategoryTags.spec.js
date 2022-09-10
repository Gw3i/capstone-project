/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import CategoryTags from './CategoryTags';

describe('Category Tags', () => {
	it('should render the category tags', () => {
		render(<CategoryTags />);
		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(15);
	});
});
