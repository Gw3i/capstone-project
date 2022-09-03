import { ErrorMessage } from '@hookform/error-message';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import useStore from '../hooks/useStore';

import StyledButton from './StyledButton';
import StyledContainer from './StyledContainer';
import StyledForm from './StyledForm';
import StyledInputWarning from './StyledInputWarning';
import StyledLabel from './StyledLabel';
import StyledModalSection from './StyledModalSection';
import StyledSumbitText from './StyledSubmitText';

export default function AddVideoModal({ onCancel, videoTitle, YouTubeLink }) {
	const categories = useStore(state => state.categories);
	const setVideos = useStore(state => state.setVideos);
	const confirmationMessage = useStore(state => state.confirmationMessage);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);

	useEffect(() => {
		const confirmMessage = setTimeout(() => {
			setConfirmationMessage(null);
		}, 2000);
		return () => {
			clearTimeout(confirmMessage);
		};
	}, [setConfirmationMessage, confirmationMessage]);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit(data) {
		setVideos(data);
		reset();
		setConfirmationMessage('Great! The video was added!');
	}

	return (
		<StyledModalSection variant="addVideo">
			<h2>Please add your video to a category</h2>

			{confirmationMessage && (
				<StyledSumbitText variant="editConfirm">{confirmationMessage}</StyledSumbitText>
			)}
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
					<StyledButton type="button" onClick={onCancel}>
						Cancel
					</StyledButton>
					<StyledButton type="submit">Add</StyledButton>
				</StyledContainer>
			</StyledForm>
		</StyledModalSection>
	);
}