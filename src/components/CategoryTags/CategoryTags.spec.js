/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { nanoid } from 'nanoid';

import CategoryTags from './CategoryTags';

describe('Category Tags', () => {
	it('should render the category tags', () => {
		[
			{ id: nanoid(), name: 'Cooking' },
			{ id: nanoid(), name: 'Geography' },
			{ id: nanoid(), name: 'Math' },
		];

		render(<CategoryTags />);
		const link = screen.getByRole('link');
		expect(link.childElementCount).toBe(3);
	});
});
