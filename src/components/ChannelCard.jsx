import Image from 'next/image';
import { Fragment } from 'react';

import useStore from '../hooks/useStore';

import PlaylistVideo from './PlaylistVideo';
import StyledContainer from './StyledContainer';

export default function ChannelCard({ channelItem }) {
	const setCurrentItem = useStore(state => state.setCurrentItem);
	const fetchChannelData = useStore(state => state.fetchChannelData);
	const channelPlaylists = useStore(state => state.channelPlaylists);
	const playlistVideos = useStore(state => state.playlistVideos);

	return (
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
							<Fragment key={channelPlaylist.id}>
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
											playlistVideo.snippet.playlistId === channelPlaylist.id
										);
									})
									.map(playlistVideo => {
										return (
											<ul key={playlistVideo.snippet.resourceId.videoId}>
												<li>
													<PlaylistVideo
														videoTitle={playlistVideo.snippet.title}
														YouTubeLink={
															playlistVideo.snippet.resourceId.videoId
														}
													/>
												</li>
											</ul>
										);
									})}
							</Fragment>
						);
					})}
			</StyledContainer>
		</StyledContainer>
	);
}
