import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useFetch from '../hooks/useFetch';

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

	const [channelName, setChannelName] = useState('');

	function onSearch(data) {
		setChannelName(data);
		reset();
	}

	const channelNameURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${channelName.playlistSearch}&type=channel&key=${process.env.NEXT_PUBLIC_API_KEY}`;

	const { data } = useFetch(channelNameURL);

	const channelIDs = data?.items?.map(item => {
		return item.id.channelId;
	});

	console.log(channelIDs);
	return (
		<>
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
		</>
	);
}
