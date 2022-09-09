import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

import useStore from '../../hooks/useStore';
import ConfirmationMessage from '../ConfirmationMessage';
import StyledButton from '../StyledButton';
import StyledContainer from '../StyledContainer';
import StyledForm from '../StyledForm';
import StyledInputWarning from '../StyledInputWarning';
import StyledLabel from '../StyledLabel';
import StyledModalSection from '../StyledModalSection';
import Typography from '../Typography';

export default function AddVideoModal({ onCancel, videoTitle, YouTubeLink }) {
	const categories = useStore(state => state.categories);
	const setVideos = useStore(state => state.setVideos);
	const confirmationMessage = useStore(state => state.confirmationMessage);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit(data) {
		setVideos(data);
		reset();
		onCancel();
		setConfirmationMessage('Great! The video was added!');
	}

	return (
		<StyledModalSection>
			<Typography variant="h3">Please add your video to a category</Typography>

			{confirmationMessage && <ConfirmationMessage />}
			<StyledForm variant="addVideo" onSubmit={handleSubmit(onSubmit)}>
				<StyledLabel variant="playlistVideo" htmlFor="title">
					<input
						{...register('videoTitle')}
						name="videoTitle"
						type="hidden"
						id="title"
						value={videoTitle}
					/>
				</StyledLabel>
				<input
					{...register('YouTubeLink')}
					name="YouTubeLink"
					type="hidden"
					id="link"
					value={YouTubeLink}
				/>
				<StyledLabel htmlFor="categories">
					<select
						{...register('category', { required: 'This field is required' })}
						id="categories"
					>
						<option value="">-- Choose a category --</option>
						{categories.map(category => (
							<option key={category.id} value={category.name}>
								{category.name}
							</option>
						))}
					</select>
				</StyledLabel>
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
				<StyledContainer variant="buttons">
					<StyledButton type="button" variant="standard" onClick={onCancel}>
						Cancel
					</StyledButton>
					<StyledButton type="submit" variant="filled">
						Add
					</StyledButton>
				</StyledContainer>
			</StyledForm>
		</StyledModalSection>
	);
}
