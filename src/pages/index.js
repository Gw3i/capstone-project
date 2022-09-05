import ConfirmationMessage from '../components/ConfirmationMessage';
import Layout from '../components/Layout';
import StyledSumbitText from '../components/StyledSubmitText';
import VideoCards from '../components/VideoCards/VideoCards';
import useStore from '../hooks/useStore';

export default function HomePage() {
	const confirmationMessage = useStore(state => state.confirmationMessage);
	const videos = useStore(state => state.videos);
	return (
		<Layout>
			<ConfirmationMessage />
			{videos.map(video => {
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
			{confirmationMessage && (
				<StyledSumbitText variant="editConfirm">{confirmationMessage}</StyledSumbitText>
			)}
		</Layout>
	);
}
