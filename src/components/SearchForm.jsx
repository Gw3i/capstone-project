import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useFetch from '../hooks/useFetch';

import ChannelCard from './ChannelCard';
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

	const [channelNames, setChannelNames] = useState('');

	function onSearch(data) {
		setChannelNames(data);
		reset();
	}

	const channePlaylistURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${channelNames.playlistSearch}&type=playlist&key=${process.env.NEXT_PUBLIC_API_KEY}`;

	const { data } = useFetch(channePlaylistURL);

	const channelItems = data?.items?.map(item => {
		return item.snippet;
	});
	const channelId = channelItems?.map(item => {
		return item.channelId;
	});
	const channelName = channelItems?.map(item => {
		return item.channelTitle;
	});
	const playlistThumbnails = channelItems?.map(item => {
		return item.thumbnails.high.url;
	});

	console.log(playlistThumbnails[0]);
	console.log(channelName[0]);
	console.log(channelId[0]);

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
			<ChannelCard />
		</>
	);
}
