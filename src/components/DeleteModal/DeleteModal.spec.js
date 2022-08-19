/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StyledButton from '../StyledButton';

import DeleteModal from './DeleteModal';

describe('DeleteModal', () => {
	it('should render the delete button', () => {
		render(<DeleteModal />);
		const buttonText = 'Delete';
		const button = screen.getByText(buttonText);
		expect(button).toBeInTheDocument();
	});
	it('should render the cancel button', () => {
		render(<DeleteModal />);
		const buttonText = 'Cancel';
		const button = screen.getByText(buttonText);
		expect(button).toBeInTheDocument();
	});
	it('should allow the cancel button clicks', async () => {
		const onDelete = jest.fn();
		const buttonText = 'Cancel';
		render(<DeleteModal onDelete={onDelete} />);
		const button = screen.getByText(buttonText);
		await userEvent.click(button);
		expect(onDelete).toHaveBeenCalledTimes(1);
	});
});

describe('DeleteButton', () => {
	it('should allow the delete button clicks', async () => {
		const handleClick = jest.fn();
		render(<StyledButton onClick={handleClick}>Delete</StyledButton>);
		const button = screen.getByRole('button', { name: /Delete/i });
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
