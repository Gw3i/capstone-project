import Image from 'next/image';
import { useEffect } from 'react';

import useStore from '../hooks/useStore';

import PlaylistVideo from './PlaylistVideo';
import StyledContainer from './StyledContainer';
import StyledList from './StyledList';
import StyledListItem from './StyledListItem';
import StyledSumbitText from './StyledSubmitText';

export default function ChannelCard({ channelItem }) {
	const setCurrentItem = useStore(state => state.setCurrentItem);
	const fetchChannelData = useStore(state => state.fetchChannelData);
	const channelPlaylists = useStore(state => state.channelPlaylists);
	const playlistVideos = useStore(state => state.playlistVideos);

	const confirmationMessage = useStore(state => state.confirmationMessage);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);

	useEffect(() => {
		const confirmMessage = setTimeout(() => {
			setConfirmationMessage(null);
		}, 2000);
		return () => {
			clearTimeout(confirmMessage);
		};
	}, [setConfirmationMessage, confirmationMessage]);

	return (
		<>
			{confirmationMessage && (
				<StyledSumbitText variant="editConfirm">{confirmationMessage}</StyledSumbitText>
			)}
			<StyledContainer variant="channelCard">
				<Image
					src={channelItem.thumbnails?.high?.url}
					alt={channelItem.channelTitle}
					layout="fixed"
					width={70}
					height={70}
				/>
				<StyledContainer variant="channelCardText">
					<h2>{channelItem.channelTitle}</h2>
					<h3>{channelItem.descrition}</h3>
					<button
						onClick={() => {
							setCurrentItem(channelItem.channelId);
							fetchChannelData({
								variant: 'channelPlaylists',
								id: channelItem.channelId,
							});
						}}
					>
						Choose this channel
					</button>
				</StyledContainer>
				<StyledContainer variant="column">
					{channelPlaylists
						.filter(channelPlaylist => {
							return channelPlaylist.snippet.channelId === channelItem.channelId;
						})
						.map(channelPlaylist => {
							return (
								<StyledList variant="playlist" key={channelPlaylist.id}>
									<StyledListItem>
										<Image
											src={channelPlaylist.snippet.thumbnails.standard?.url}
											alt={channelItem.channelTitle}
											layout="fixed"
											width={40}
											height={40}
										/>
										<p>{channelPlaylist.snippet.title}</p>
										<button
											onClick={() => {
												fetchChannelData({
													variant: 'playlistVideos',
													id: channelPlaylist.id,
												});
											}}
										>
											Choose a playlist
										</button>

										{playlistVideos
											.filter(playlistVideo => {
												return (
													playlistVideo.snippet.playlistId ===
													channelPlaylist.id
												);
											})
											.map(playlistVideo => {
												return (
													<StyledList
														variant="playlistVideo"
														key={
															playlistVideo.snippet.resourceId.videoId
														}
													>
														<StyledListItem>
															<PlaylistVideo
																videoTitle={
																	playlistVideo.snippet.title
																}
																YouTubeLink={
																	playlistVideo.snippet.resourceId
																		.videoId
																}
															/>
														</StyledListItem>
													</StyledList>
												);
											})}
									</StyledListItem>
								</StyledList>
							);
						})}
				</StyledContainer>
			</StyledContainer>
		</>
	);
}
