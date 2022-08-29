import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useStore from '../hooks/useStore';

import ChannelPlaylist from './ChannelPlaylist';
import StyledButton from './StyledButton';
import StyledForm from './StyledForm';
import StyledInputWarning from './StyledInputWarning';
import StyledLabel from './StyledLabel';

export default function SearchForm() {
	const setCurrentItem = useStore(state => state.setCurrentItem);
	const setPlaylistId = useStore(state => state.setPlaylistId);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	const [fetchedChannels, setFetchedChannels] = useState([]);

	async function onSearch(data) {
		const fetchedChannels = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${data.playlistSearch}&type=channel&key=${process.env.NEXT_PUBLIC_API_KEY}`;

		const result = await fetch(fetchedChannels);
		const channelData = await result.json();
		console.log(channelData);
		setFetchedChannels(channelData);
		setCurrentItem('');
		setPlaylistId('');
		reset();
	}

	const channelItems = fetchedChannels?.items?.map(item => item.snippet);
	console.log(channelItems);

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
			<ChannelPlaylist channelItems={channelItems} />
		</>
	);
}
