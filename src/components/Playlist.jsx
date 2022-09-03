import Image from 'next/image';
import Link from 'next/link';

import useStore from '../hooks/useStore';

import Icon from './Icon';
import PlaylistVideo from './PlaylistVideo';
import StyledButton from './StyledButton';
import StyledContainer from './StyledContainer';
import StyledList from './StyledList';
import StyledListItem from './StyledListItem';
import StyledText from './StyledText';

export default function Playlist() {
	const channels = useStore(state => state.channels);
	const channelItems = channels?.map(channel => channel.snippet);
	const channelItem = channelItems?.map(channel => channel);
	const fetchChannelData = useStore(state => state.fetchChannelData);
	const channelPlaylists = useStore(state => state.channelPlaylists);
	const playlistVideos = useStore(state => state.playlistVideos);
	const currentItem = useStore(state => state.currentItem);

	return (
		<>
			<Link href="/create">
				<a>{`<- back`}</a>
			</Link>
			<StyledContainer variant="scrollPlaylists">
				{channelPlaylists
					.filter(channelPlaylist => {
						return channelPlaylist.snippet.channelId === currentItem.id;
					})
					.map(channelPlaylist => {
						return (
							<StyledList variant="playlist" key={channelPlaylist.id}>
								<StyledListItem variant="playlist">
									<Image
										src={channelPlaylist.snippet.thumbnails.standard?.url}
										alt={channelItem.channelTitle}
										objectFit="cover"
										width={190}
										height={110}
									/>
									<StyledText variant="playlist">
										{channelPlaylist.snippet.title}
									</StyledText>
									<StyledButton
										variant="playlist"
										onClick={() => {
											fetchChannelData({
												variant: 'playlistVideos',
												id: channelPlaylist.id,
											});
										}}
									>
										<Icon
											variant="arrow"
											size="24px"
											position="relative"
											top="6px"
										/>{' '}
										Choose a playlist
									</StyledButton>
								</StyledListItem>
							</StyledList>
						);
					})}
			</StyledContainer>
			{channelPlaylists
				.filter(channelPlaylist => {
					return channelPlaylist.snippet.channelId === currentItem.id;
				})
				.map(channelPlaylist => {
					return (
						<>
							{playlistVideos
								.filter(playlistVideo => {
									return playlistVideo.snippet.playlistId === channelPlaylist.id;
								})
								.map(playlistVideo => {
									return (
										<StyledList
											variant="playlistVideo"
											key={playlistVideo.snippet.resourceId.videoId}
										>
											<StyledListItem>
												<PlaylistVideo
													videoTitle={playlistVideo.snippet.title}
													YouTubeLink={
														playlistVideo.snippet.resourceId.videoId
													}
												/>
											</StyledListItem>
										</StyledList>
									);
								})}
						</>
					);
				})}
		</>
	);
}
