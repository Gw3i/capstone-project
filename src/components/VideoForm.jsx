import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useStore } from 'zustand';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import StyledInputWarning from './StyledInputWarning';
import StyledLable from './StyledLabel';

export default function VideoForm() {
	// const setVideo = useStore(state => state.setVideo);
	const [videos, setVideos] = useState('');
	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm();

	console.log(videos);

	const onSubmit = data => {
		let video = {
			id: nanoid(),
			link: data.YouTubeLink,
			title: data.videoTitle,
		};
		setVideos(video);
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
							required: { value: true },
							pattern: {
								value: /^(https:\/\/www.youtube.com\/)[^\s$.#]*$/gi,
							},
						})}
						placeholder="https://www.youtube.com/..."
						name="YouTubeLink"
						type="text"
						id="link"
					/>
					{errors.YouTubeLink && errors.YouTubeLink.type === 'required' && (
						<StyledInputWarning>This is required</StyledInputWarning>
					)}
					{errors.YouTubeLink && errors.YouTubeLink.type === 'pattern' && (
						<StyledInputWarning>This is not the right link</StyledInputWarning>
					)}
				</StyledLable>
				<StyledLable htmlFor="title">
					Video title
					<StyledInput
						{...register('videoTitle', {
							required: { value: true },
							minLength: { value: 15 },
						})}
						placeholder="How to cook spaghetti..."
						name="videoTitle"
						type="text"
						id="title"
					/>
					{errors.videoTitle && errors.videoTitle.type === 'required' && (
						<StyledInputWarning>This is required</StyledInputWarning>
					)}
					{errors.videoTitle && errors.videoTitle.type === 'minLength' && (
						<StyledInputWarning>
							The title should have at least 15 characters
						</StyledInputWarning>
					)}
				</StyledLable>
				<button>Submit</button>
			</StyledForm>
		</>
	);
}
