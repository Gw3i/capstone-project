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
	/*
	it('should render an image', async () => {
		await render(<Category />);
		const image = screen.getByAltText(/"Warum vergeht Zeit\?"/i);
		expect(image).toBeInTheDocument();
	});

		it('should render the delete button', () => {
			render(<Category />);
			const buttonText = 'Delete';
			const button = screen.getByText(buttonText);
			expect(button).toBeInTheDocument();
		});

		it('should render the cancel button', () => {
			render(<Category />);
			const buttonText = 'Cancel';
			const button = screen.getByText(buttonText);
			expect(button).toBeInTheDocument();
		});
		it('should allow the cancel button clicks', async () => {
			const onCancel = jest.fn();
			const buttonText = 'Cancel';
			render(<Category onCancel={onCancel} />);
			const button = screen.getByText(buttonText);
			await userEvent.click(button);
			expect(onCancel).toHaveBeenCalledTimes(1);
		});
	*/
});