/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import LoginForm from './LoginForm';

const mockLogin = jest.fn((username, password) => {
	return Promise.resolve({ username, password });
});

describe('Login form', () => {
	beforeEach(() => {
		render(<LoginForm login={mockLogin} />);
	});

	it('should display required error when value is invalid', async () => {
		await act(async () => {
			fireEvent.submit(screen.getByRole('button'));

			expect(await screen.findAllByRole('alert')).toHaveLength(2);
			expect(mockLogin).not.toBeCalled();
		});
	});

	it('should display matching error when username is invalid', async () => {
		await act(async () => {
			fireEvent.input(screen.getByRole('textbox', { name: /username/i }), {
				target: {
					value: 'test',
				},
			});

			fireEvent.input(screen.getByLabelText('Password'), {
				target: {
					value: 'password',
				},
			});

			fireEvent.submit(screen.getByRole('button'));

			expect(await screen.findAllByRole('alert')).toHaveLength(1);
			expect(mockLogin).not.toBeCalled();
			expect(screen.getByRole('textbox', { name: /username/i }).value).toBe('test');
			expect(screen.getByLabelText('Password').value).toBe('password');
		});
	});

	it('should display min length error when password is invalid', async () => {
		await act(async () => {
			fireEvent.input(screen.getByRole('textbox', { name: /username/i }), {
				target: {
					value: 'parent123',
				},
			});

			fireEvent.input(screen.getByLabelText('Password'), {
				target: {
					value: 'password123#',
				},
			});

			fireEvent.submit(screen.getByRole('button'));

			expect(await screen.findAllByRole('alert')).toHaveLength(1);
			expect(mockLogin).not.toBeCalled();
			expect(screen.getByRole('textbox', { name: /username/i }).value).toBe('parent123');
			expect(screen.getByLabelText('Password').value).toBe('password123#');
		});
	});

	it('should not display error when value is valid', async () => {
		await act(async () => {
			fireEvent.input(screen.getByRole('textbox', { name: /username/i }), {
				target: {
					value: 'parent123',
				},
			});

			fireEvent.input(screen.getByLabelText('Password'), {
				target: {
					value: 'password123#',
				},
			});

			fireEvent.submit(screen.getByRole('button'));

			await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
			expect(mockLogin).toBeCalledWith('parent123', 'password123#');
			expect(screen.getByRole('textbox', { name: /username/i }).value).toBe('');
			expect(screen.getByLabelText('Password').value).toBe('');
		});
	});
});
