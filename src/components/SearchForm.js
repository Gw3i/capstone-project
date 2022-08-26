import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

import StyledButton from './StyledButton';
import StyledForm from './StyledForm';
import StyledInputWarning from './StyledInputWarning';
import StyledLabel from './StyledLabel';

export default function SearchForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSearch() {
		reset();
	}

	return (
		<StyledForm onSubmit={handleSubmit(onSearch)}>
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
	);
}
