import { useEffect } from 'react';

import Layout from '../components/Layout';
import StyledSumbitText from '../components/StyledSubmitText';
import VideoCards from '../components/VideoCards/VideoCards';
import useStore from '../hooks/useStore';

export default function HomePage() {
	const confirmationMessage = useStore(state => state.confirmationMessage);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);

	useEffect(() => {
		setTimeout(() => {
			setConfirmationMessage(null);
			console.log('2345');
		}, 5000);
	}, [setConfirmationMessage]);

	const videos = useStore(state => state.videos);
	return (
		<Layout>
			<h1>Home</h1>
			{confirmationMessage ? (
				<StyledSumbitText variant="editConfirm">{confirmationMessage}</StyledSumbitText>
			) : (
				''
			)}
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
		</Layout>
	);
}
