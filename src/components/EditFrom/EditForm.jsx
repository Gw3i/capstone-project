import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import useStore from '../../hooks/useStore';
import EmojiIcons from '../EmojiIcons';
import StyledButton from '../StyledBotton/StyledButton';
import StyledContainer from '../StyledContainer';
import StyledForm from '../StyledForm';
import StyledInput from '../StyledInput';
import StyledInputWarning from '../StyledInputWarning';
import StyledLabel from '../StyledLabel';
import StyledSelect from '../StyledSelect';
import Vectors from '../Vectors';

export default function EditForm() {
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);
	const categories = useStore(state => state.categories);

	const router = useRouter();
	const videos = useStore(state => state.videos);
	const ref = router.query;

	const videoQueryId = videos.filter(video => {
		return ref.id === video.id;
	});

	const onSubmit = data => {
		toBeEditedVideo.videoTitle = data.videoTitle;
		toBeEditedVideo.category = data.category;
		setConfirmationMessage('Great! The video was edited!');
		router.push('/');
	};

	const toBeEditedVideo = videoQueryId[0];
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	return (
		<>
			<Vectors variant="bigBlobExplore" />
			<Vectors variant="smallBlob" />
			<Vectors variant="bigPurpleEdit" />

			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<EmojiIcons variant="arrowEdit" />
				<EmojiIcons variant="nice" />
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
						defaultValue={toBeEditedVideo?.videoTitle}
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
						<option value={toBeEditedVideo?.category}>
							{toBeEditedVideo?.category}
						</option>
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
				<StyledContainer variant="buttons">
					<StyledButton variant="standard" type="button" onClick={() => router.back()}>
						Cancel
					</StyledButton>
					<StyledButton variant="submit">Submit</StyledButton>
				</StyledContainer>
			</StyledForm>
		</>
	);
}
