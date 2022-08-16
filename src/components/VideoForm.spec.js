import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import StyledInput from './StyledInput';
import StyledLable from './StyledLabel';
import VideoForm from './VideoForm';

describe('VideoForm', () => {
	it('should render two input fields and a sumbit button', () => {
		const labelText = 'labelText';
		const buttonText = 'submit';
		const placeholder = 'placeholder text';
		render(
			<>
				<StyledLable>
					{labelText}
					<StyledInput placeholder={placeholder} />
				</StyledLable>
				<StyledLable>
					{labelText}
					<StyledInput placeholder={placeholder} />
				</StyledLable>
				<button>{buttonText}</button>
			</>
		);

		const labelTextForInput = screen.getAllByText(labelText);
		expect(labelTextForInput).toBeInTheDocument();

		const placeholderText = screen.getAllByText(placeholder);
		expect(placeholderText).toBeInTheDocument();

		const submitButtonText = screen.getByText(buttonText);
		expect(submitButtonText).toBeInTheDocument();
	});

	it('should pass validation', async () => {
		const handleSubmit = jest.fn();
		const YoutubeLink = screen.getByRole('textbox', {
			name: /youtube link/i,
		});
		userEvent.type(YoutubeLink, 'https://youtube.com/embed/mBLVfrv__wU?feature=share');
		const videoTitle = screen.getByRole('textbox', {
			name: /video title/i,
		});
		userEvent.type(videoTitle, 'How to cook spaghetti');

		await userEvent.click(
			screen.getByRole('button', {
				name: /submit/i,
			})
		);
		expect(handleSubmit).toBeCalledTimes(1);

		render(<VideoForm onSubmit={handleSubmit} />);
	});

	// it('show error message when input field is empty', () => {
	// 	const YoutubeLink = screen.getByRole('textbox', {
	// 		name: /youtube link/i,
	// 	});
	// 	const videoTitle = screen.getByRole('textbox', {
	// 		name: /video title/i,
	// 	});

	// 	userEvent.click(
	// 		screen.getByRole('button', {
	// 			name: /submit/i,
	// 		})
	// 	);
	// });
});
