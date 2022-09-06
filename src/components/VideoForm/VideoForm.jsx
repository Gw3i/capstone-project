import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

import useStore from '../../hooks/useStore';
import ConfirmationMessage from '../ConfirmationMessage';
import SearchForm from '../SearchForm.jsx';
import StyledButton from '../StyledButton';
import StyledForm from '../StyledForm';
import StyledInput from '../StyledInput';
import StyledInputWarning from '../StyledInputWarning';
import StyledLabel from '../StyledLabel';
import StyledSelect from '../StyledSelect';
import Typography from '../Typography';

export default function VideoForm() {
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);
	const confirmationMessage = useStore(state => state.confirmationMessage);

	const setVideos = useStore(state => state.setVideos);
	const categories = useStore(state => state.categories);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit(data) {
		setVideos(data);
		reset();
		setConfirmationMessage('Greate! You are logged in now');
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledLabel htmlFor="link">
					YouTube link
					<StyledInput
						{...register('YouTubeLink', {
							required: 'This field is required',
							pattern: {
								value: /^(https:\/\/www.)?(youtube.com\/)(embed)?[\w\d]{5,}[^\s$#]*$/gi,
								message: 'This is not the right YouTube url',
							},
						})}
						placeholder="https://www.youtube.com/..."
						name="YouTubeLink"
						type="text"
						id="link"
					/>
					<ErrorMessage
						errors={errors}
						name="YouTubeLink"
						render={({ messages }) =>
							messages &&
							Object.entries(messages).map(([type, message]) => (
								<StyledInputWarning key={type} role="alert">
									{message}
								</StyledInputWarning>
							))
						}
					/>
				</StyledLabel>
				<StyledLabel htmlFor="title">
					Video title
					<StyledInput
						{...register('videoTitle', {
							required: 'This field is required',
							minLength: { value: 10, message: 'The min. length is 10 characters' },
						})}
						placeholder="How to cook spaghetti..."
						name="videoTitle"
						type="text"
						id="title"
					/>
					<ErrorMessage
						errors={errors}
						name="videoTitle"
						render={({ messages }) =>
							messages &&
							Object.entries(messages).map(([type, message]) => (
								<StyledInputWarning key={type} role="alert">
									{message}
								</StyledInputWarning>
							))
						}
					/>
				</StyledLabel>
				<StyledLabel htmlFor="categories">
					Choose a category
					<StyledSelect
						{...register('category', { required: 'This filed is required' })}
						id="categories"
					>
						<option value="">-- Choose a category --</option>
						{categories.map(category => (
							<option key={category.id} value={category.name}>
								{category.name}
							</option>
						))}
					</StyledSelect>
					<ErrorMessage
						errors={errors}
						name="category"
						render={({ messages }) =>
							messages &&
							Object.entries(messages).map(([type, message]) => (
								<StyledInputWarning key={type} role="alert">
									{message}
								</StyledInputWarning>
							))
						}
					/>
				</StyledLabel>
				<StyledButton variant="submit">Submit</StyledButton>
			</StyledForm>
			{confirmationMessage && <ConfirmationMessage />}
			<Typography variant="h2" decoration="borderBottom">
				OR
			</Typography>
			<SearchForm />
		</>
	);
}
