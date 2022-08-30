import Image from 'next/image';
import { Fragment } from 'react';

import useStore from '../hooks/useStore';

import StyledContainer from './StyledContainer';

export default function ChannelCard({ item }) {
	const setCurrentItem = useStore(state => state.setCurrentItem);
	const fetchChannelData = useStore(state => state.fetchChannelData);
	const channelPlaylists = useStore(state => state.channelPlaylists);
	const playlistVideos = useStore(state => state.playlistVideos);

	return (
		<StyledContainer key={item.channelId} variant="channelCard">
			<Image
				src={item.thumbnails.high.url}
				alt={item.channelTitle}
				layout="fixed"
				width={70}
				height={70}
			/>
			<StyledContainer variant="channelCardText">
				<h2>{item.channelTitle}</h2>
				<h3>{item.descrition}</h3>
				<button
					onClick={() => {
						setCurrentItem(item.channelId);
						fetchChannelData({ variant: 'channelPlaylists', id: item.channelId });
					}}
				>
					Choose this channel
				</button>
			</StyledContainer>
			<StyledContainer variant="column">
				{channelPlaylists.map(channelPlaylist => {
					return (
						<Fragment key={channelPlaylist.id}>
							<Image
								src={channelPlaylist.snippet.thumbnails.standard.url}
								alt={item.channelTitle}
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
									return playlistVideo.snippet.playlistId === channelPlaylist.id;
								})
								.map(playlistVideo => {
									return (
										<ul key={playlistVideo.snippet.resourceId.videoId}>
											<li>{playlistVideo.snippet.title}</li>
											<li>{`https://www.youtube.com/embed/${playlistVideo.snippet.resourceId.videoId}`}</li>
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
