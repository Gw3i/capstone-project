import Layout from '../components/Layout';
import VideoCards from '../components/VideoCards/VideoCards';
import useStore from '../hooks/useStore';

export default function Bookmarks() {
	const videos = useStore(state => state.videos);

	return (
		<Layout>
			<h1>Bookmarks</h1>
			{videos
				.filter(video => {
					return video.isBookmarked;
				})
				.map(video => {
					return (
						<VideoCards
							key={video.id}
							YouTubeLink={video.YouTubeLink}
							videoTitle={video.videoTitle}
							videoId={video.id}
							bookmark={video.isBookmarked}
						/>
					);
				})}
		</Layout>
	);
}
