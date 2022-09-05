import { ErrorMessage } from '@hookform/error-message';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import useStore from '../hooks/useStore';

import ChannelPlaylist from './ChannelPlaylist';
import StyledButton from './StyledButton';
import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import StyledInputWarning from './StyledInputWarning';
import StyledLabel from './StyledLabel';

export default function SearchForm() {
	const setCurrentItem = useStore(state => state.setCurrentItem);
	const setChannelSearch = useStore(state => state.setChannelSearch);
	const channelSearch = useStore(state => state.channelSearch);
	const fetchChannelData = useStore(state => state.fetchChannelData);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSearch(data) {
		setChannelSearch(data);
		setCurrentItem('');
		reset();
	}

	useEffect(() => {
		fetchChannelData({ variant: 'channels', searchQuery: channelSearch.playlistSearch });
	}, [fetchChannelData, channelSearch.playlistSearch]);

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSearch)}>
				<StyledLabel htmlFor="videoPlaylist">
					Search for a YouTube channels playlist
					<StyledInput
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
			<ChannelPlaylist />
		</>
	);
}
