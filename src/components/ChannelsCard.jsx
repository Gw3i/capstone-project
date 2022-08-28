import Image from 'next/image';

import useFetch from '../hooks/useFetch';
import useStore from '../hooks/useStore';

import StyledContainer from './StyledContainer';

export default function ChannelsCard({ channelItems }) {
	const setChannelId = useStore(state => state.setChannelId);
	const setPlaylistId = useStore(state => state.setPlaylistId);
	const channelId = useStore(state => state.channelId);

	const fetchedPlaylists = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=25&key=${process.env.NEXT_PUBLIC_API_KEY}`;

	const { data } = useFetch();

	const playlistItems = data?.items;

	// const playlistId = data?.items?.map(item => item.id);

	console.log(fetchedPlaylists);
	return (
		<>
			{channelItems
				? channelItems?.map(item => {
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
											setChannelId(item.channelId);
										}}
									>
										Choose this channel
									</button>
								</StyledContainer>
								<StyledContainer variant="column">
									{playlistItems
										?.filter(playlistItem => {
											return playlistItem.snippet.channelId === channelId;
										})
										.map(playlistItem => {
											return (
												<>
													<Image
														src={
															playlistItem.snippet.thumbnails.standard
																.url
														}
														alt={item.channelTitle}
														layout="fixed"
														width={40}
														height={40}
													/>
													<p>{playlistItem.snippet.title}</p>
													<button
														onClick={() => {
															setPlaylistId(playlistItem.id);
														}}
													>
														Choose this channel
													</button>
												</>
											);
										})}
								</StyledContainer>
							</StyledContainer>
						);
				  })
				: ''}
		</>
	);
}
