import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { useStore } from 'zustand';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import StyledLable from './StyledLabel';

export default function VideoForm() {
	const setVideo = useStore(state => state.setVideo);
	const { register, handleSubmit } = useForm();

	const onSubmit = data => {
		let video = {
			id: nanoid(),
			link: data.YouTubeLink,
			title: data.videoTitle,
		};
		setVideo(video);
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledLable htmlFor="link">
					YouTube link
					<StyledInput
						{...register('YouTubeLink', {
							required: 'This field is required',
							minLength: {
								value: 20,
								message: 'Min. length is 20 symbols',
								pattern: /^(https:\/\/www.youtube.com\/embed)[^\s$.#]*$/gi,
							},
						})}
						placeholder="https://www.youtube.com/embed/..."
						type="text"
						id="link"
					/>
				</StyledLable>
				<StyledLable htmlFor="title">
					Video title
					<StyledInput
						{...register('videoTitle', {
							required: 'This field is required',
							minLength: { value: 15, message: 'Min. length is 15 symbols' },
						})}
						placeholder="How to cook spaghetti..."
						type="text"
						id="title"
					/>
				</StyledLable>
				<button>Submit</button>
			</StyledForm>
		</>
	);
}
