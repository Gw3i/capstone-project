import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useStore from '../../hooks/useStore';
import StyledButton from '../StyledButton';
import StyledForm from '../StyledForm';
import StyledInputWarning from '../StyledInputWarning';
import StyledLabel from '../StyledLabel';
import StyledSumbitText from '../StyledSubmitText';

export default function VideoForm() {
	const [showText, setShowText] = useState(false);

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
		setShowText(true);
		const fadeMessage = setTimeout(() => {
			setShowText(false);
		}, 3000);
		return () => {
			clearTimeout(fadeMessage);
		};
	}

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
				<StyledLabel htmlFor="categories">Choose a category</StyledLabel>
				<select
					{...register('category', { required: 'This filed is required' })}
					id="categories"
				>
					<option value="">-- Choose a category --</option>
					{categories.map(category => (
						<option key={category.id} value={category.name}>
							{category.name}
						</option>
					))}
				</select>
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

				<StyledButton>Submit</StyledButton>
			</StyledForm>
			{showText ? <StyledSumbitText>Great! Your video was added</StyledSumbitText> : ''}
			<h2>OR</h2>
			<StyledForm onSubmit={handleSubmit()}>
				<StyledLabel htmlFor="videoPlaylist">
					Search for a YouTube channels playlist
					<input
						{...register('playlistSearch', {
							required: 'This field is required',
						})}
						placeholder="channel name..."
						name="playlistSearch"
						type="text"
						id="videoPlaylist"
					/>
					<ErrorMessage
						errors={errors}
						name="playlistSearch"
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
				<StyledButton>Search</StyledButton>
			</StyledForm>
		</>
	);
}
