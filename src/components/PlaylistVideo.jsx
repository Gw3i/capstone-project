import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

import useStore from '../hooks/useStore';

import StyledButton from './StyledButton';
import StyledContainer from './StyledContainer';
import StyledForm from './StyledForm';
import StyledInputWarning from './StyledInputWarning';
import StyledLabel from './StyledLabel';

export default function PlaylistVideo({ videoTitle, YouTubeLink }) {
	const categories = useStore(state => state.categories);
	const setVideos = useStore(state => state.setVideos);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit(data) {
		setVideos(data);
		reset();
	}
	return (
		<StyledContainer>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledLabel htmlFor="title">
					{videoTitle}
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
				<StyledLabel htmlFor="categories">Choose a category</StyledLabel>
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

				<StyledButton>Add video</StyledButton>
			</StyledForm>
		</StyledContainer>
	);
}
