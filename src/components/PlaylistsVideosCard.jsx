import useFetch from '../hooks/useFetch';
import useStore from '../hooks/useStore';

export default function PlaylistsVideosCard() {
	const playlistId = useStore(state => state.playlistId);

	const fetchedPlaylistVideos = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${process.env.NEXT_PUBLIC_API_KEY}`;

	const { data } = useFetch();

	const playlistVideos = data?.items;

	console.log(fetchedPlaylistVideos);

	return (
		<>
			{playlistVideos?.map(video => {
				<ul>
					<li>{video.snippet.title}</li>
					<li>{video.resourceId.videoId}</li>
				</ul>;
			})}
		</>
	);
}
