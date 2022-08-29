import Image from 'next/image';

import useStore from '../hooks/useStore';

import StyledContainer from './StyledContainer';

export default function ChannelCard({ item, playlistItems, playlistVideos, loading, data, error }) {
	const setChannelId = useStore(state => state.setChannelId);
	const setCurrentItem = useStore(state => state.setCurrentItem);
	const channelId = useStore(state => state.channelId);
	const setPlaylistId = useStore(state => state.setPlaylistId);
	const playlistId = useStore(state => state.playlistId);

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
						setCurrentItem(item.channelId);
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
								{loading && <p>Loading...</p>}
								{error && <p>{error?.message}</p>}
								{data &&
									playlistVideos
										.filter(() => {
											return playlistId === playlistItem.id;
										})
										.map(playlistVideo => {
											return (
												<ul key={playlistVideo.snippet.resourceId.videoId}>
													<li>{playlistVideo.snippet.title}</li>
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
}
