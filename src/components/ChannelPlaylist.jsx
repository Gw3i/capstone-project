import useFetch from '../hooks/useFetch';
import useStore from '../hooks/useStore';

import ChannelCard from './ChannelCard';

export default function ChannelPlaylist({ channelItems }) {
	//const channelId = useStore(state => state.channelId);
	//const playlistId = useStore(state => state.playlistId);
	const currentItem = useStore(state => state.currentItem);

	//const fetchedPlaylists = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=25&key=${process.env.NEXT_PUBLIC_API_KEY}`;

	//const fetchedPlaylistVideos = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${process.env.NEXT_PUBLIC_API_KEY}`;

	const { loading: loadingChannelIds, data: dataChannelIds, error: errorChannelIds } = useFetch();

	const {
		loading: loadingPlaylistVideos,
		data: dataPlaylistVideos,
		error: errorPlaylistVideos,
	} = useFetch();

	const playlistItems = dataChannelIds?.items;
	const playlistVideos = dataPlaylistVideos?.items;

	return (
		<>
			{loadingChannelIds && <p>Loading...</p>}
			{errorChannelIds && <p>{errorChannelIds.message}</p>}
			{currentItem.id === ''
				? channelItems?.map(item => {
						return (
							<ChannelCard
								key={item.channelId}
								item={item}
								playlistItems={playlistItems}
								playlistVideos={playlistVideos}
								loading={loadingPlaylistVideos}
								data={dataPlaylistVideos}
								error={errorPlaylistVideos}
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
									playlistVideos={playlistVideos}
									loading={loadingPlaylistVideos}
									data={dataPlaylistVideos}
									error={errorPlaylistVideos}
								/>
							);
						})}
		</>
	);
}
