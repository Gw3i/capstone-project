import { ErrorMessage } from '@hookform/error-message';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';

import useStore from '../hooks/useStore';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import StyledInputWarning from './StyledInputWarning';
import StyledLable from './StyledLabel';

export default function VideoForm() {
	const setVideos = useStore(state => state.setVideos);
	const videos = useStore(state => state.videos);

	console.log(videos);
	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	const onSubmit = data => {
		let videoModel = {
			id: nanoid(),
			link: data.YouTubeLink,
			title: data.videoTitle,
		};
		setVideos(videoModel);
		resetField('YouTubeLink');
		resetField('videoTitle');
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledLable htmlFor="link">
					YouTube link
					<StyledInput
						{...register('YouTubeLink', {
							required: 'This is field required',
							pattern: {
								value: /^(https:\/\/www.)?(youtube.com\/)[\w\d]{5,}[^\s$#]*$/gi,
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
								<StyledInputWarning key={type}>{message}</StyledInputWarning>
							))
						}
					/>
				</StyledLable>
				<StyledLable htmlFor="title">
					Video title
					<StyledInput
						{...register('videoTitle', {
							required: 'This is field required',
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
								<StyledInputWarning key={type}>{message}</StyledInputWarning>
							))
						}
					/>
				</StyledLable>
				<button>Submit</button>
			</StyledForm>
			<ul>
				{videos?.map(video => {
					return (
						<>
							<li key={video.videoModel.link}>{video.videoModel.link}</li>
							<li key={video.videoModel.title}>{video.videoModel.title}</li>
						</>
					);
				})}
			</ul>
		</>
	);
}
