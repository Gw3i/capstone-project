import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import useStore from '../../hooks/useStore';
import StyledButton from '../StyledButton';
import StyledForm from '../StyledForm';
import StyledInputWarning from '../StyledInputWarning';
import StyledLabel from '../StyledLabel';

export default function EditForm() {
	const router = useRouter();
	const videos = useStore(state => state.videos);
	const ref = router.query;

	const videoQueryId = videos.filter(video => {
		return ref.id === video.id;
	});

	const onSubmit = data => {
		toBeEditedVideo.videoTitle = data.videoTitle;
		toBeEditedVideo.YouTubeLink = data.YouTubeLink;
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
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledLabel htmlFor="link">
					YouTube link
					<input
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
						defaultValue={toBeEditedVideo?.YouTubeLink}
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
					<input
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
				<StyledButton>Submit</StyledButton>
			</StyledForm>
		</>
	);
}