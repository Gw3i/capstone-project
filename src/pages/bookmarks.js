import Layout from '../components/Layout';
import StyledContainer from '../components/StyledContainer';
import Typography from '../components/Typography';
import VideoCards from '../components/VideoCards/VideoCards';
import useStore from '../hooks/useStore';

export default function Bookmarks() {
	const videos = useStore(state => state.videos);

	return (
		<Layout>
			<Typography variant="h1" decoration="borderBottom">
				Bookmarks
			</Typography>
			<StyledContainer variant="snapScroll">
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
								category={video.category}
							/>
						);
					})}
			</StyledContainer>
		</Layout>
	);
}
