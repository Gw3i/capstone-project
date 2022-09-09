/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddVideoModal from './AddVideoModal';

describe('DeleteModal', () => {
	it('should render the delete button', () => {
		render(<AddVideoModal />);
		const buttonText = 'Add';
		const button = screen.getByText(buttonText);
		expect(button).toBeInTheDocument();
	});
	it('should render the cancel button', () => {
		render(<AddVideoModal />);
		const buttonText = 'Cancel';
		const button = screen.getByText(buttonText);
		expect(button).toBeInTheDocument();
	});
	it('should allow the cancel button clicks', async () => {
		const onCancel = jest.fn();
		const buttonText = 'Cancel';
		render(<AddVideoModal onCancel={onCancel} />);
		const button = screen.getByText(buttonText);
		await userEvent.click(button);
		expect(onCancel).toHaveBeenCalledTimes(1);
	});
});
