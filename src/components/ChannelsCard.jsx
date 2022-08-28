import Image from 'next/image';

import useFetch from '../hooks/useFetch';
import useStore from '../hooks/useStore';

import StyledContainer from './StyledContainer';

export default function ChannelsCard({ channelItems }) {
	const setChannelId = useStore(state => state.setChannelId);
	const setPlaylistId = useStore(state => state.setPlaylistId);
	const channelId = useStore(state => state.channelId);
	const playlistId = useStore(state => state.playlistId);

	const fetchedPlaylists = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=25&key=${process.env.NEXT_PUBLIC_API_KEY}`;

	const fetchedPlaylistVideos = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${process.env.NEXT_PUBLIC_API_KEY}`;

	const {
		loading: loadingChannelIds,
		data: dataChannelIds,
		error: errorChannelIds,
	} = useFetch(fetchedPlaylists);

	const {
		loading: loadingPlaylistVideos,
		data: dataPlaylistVideos,
		error: errorPlaylistVideos,
	} = useFetch(fetchedPlaylistVideos);

	const playlistItems = dataChannelIds?.items;
	const playlistVideos = dataPlaylistVideos?.items;

	return (
		<>
			{loadingChannelIds && <p>Loading...</p>}
			{errorChannelIds && <p>{errorChannelIds.message}</p>}
			{channelItems?.map(item => {
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
												src={playlistItem.snippet.thumbnails.standard.url}
												alt={item.channelTitle}
												layout="fixed"
												width={40}
												height={40}
											/>
											<p>{playlistItem.snippet.title}</p>
											<button
												onClick={() => {
													console.log(playlistItem.id);
													setPlaylistId(playlistItem.id);
												}}
											>
												Choose a playlist
											</button>
											{loadingPlaylistVideos && <p>Loading...</p>}
											{errorPlaylistVideos && (
												<p>{errorPlaylistVideos?.message}</p>
											)}
											{dataPlaylistVideos &&
												playlistVideos
													.filter(() => {
														return playlistId === playlistItem.id;
													})
													.map(playlistVideo => {
														return (
															<ul
																key={
																	playlistVideo.snippet.resourceId
																		.videoId
																}
															>
																<li>
																	{playlistVideo.snippet.title}
																</li>
																<li>{`https://www.youtube.com/embed/${playlistVideo.snippet.resourceId.videoId}`}</li>
															</ul>
														);
													})}
										</>
									);
								})}
						</StyledContainer>
					</StyledContainer>
				);
			})}
		</>
	);
}
