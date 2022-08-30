import { useState } from 'react';

import useStore from '../hooks/useStore';

import ChannelCard from './ChannelCard';

export default function ChannelPlaylist({ channelItems }) {
	const channelId = useStore(state => state.channelId);
	const playlistId = useStore(state => state.playlistId);
	const currentItem = useStore(state => state.currentItem);

	const [fetchedPlaylistsData, setFetchedPlaylistsData] = useState([]);

	async function handlePlaylistSearch() {
		const fetchedPlaylists = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=25&key=${process.env.NEXT_PUBLIC_API_KEY}`;

		const result = await fetch(fetchedPlaylists);
		const playlistData = await result.json();
		setFetchedPlaylistsData(playlistData);
	}

	const playlistItems = fetchedPlaylistsData?.items;

	const [playlistVideos, setPlaylistVideos] = useState([]);

	async function handleVideoSearch() {
		const fetchedPlaylistVideoURLs = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${process.env.NEXT_PUBLIC_API_KEY}`;

		const result = await fetch(fetchedPlaylistVideoURLs);
		const playlistVideoData = await result.json();
		setPlaylistVideos(playlistVideoData);
	}

	const playlistVideoItems = playlistVideos?.items;

	console.log(playlistVideos);

	return (
		<>
			{currentItem.id === ''
				? channelItems?.map(item => {
						return (
							<ChannelCard
								key={item.channelId}
								item={item}
								playlistItems={playlistItems}
								playlistVideoItems={playlistVideoItems}
								onPlaylistSearch={handlePlaylistSearch}
								onPlaylistVideoSearch={handleVideoSearch}
							/>
						);
				  })
				: channelItems
						?.filter(item => {
							return currentItem.id === item.channelId;
						})
						.map(item => {
							return (
								<ChannelCard
									key={item.channelId}
									item={item}
									playlistItems={playlistItems}
									playlistVideoItems={playlistVideoItems}
									onPlaylistSearch={handlePlaylistSearch}
									onPlaylistVideoSearch={handleVideoSearch}
								/>
							);
						})}
		</>
	);
}
