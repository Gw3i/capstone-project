import Head from 'next/head';

import ConfirmationMessage from '../components/ConfirmationMessage';
import Layout from '../components/Layout';
import StyledContainer from '../components/StyledContainer';
import VideoCards from '../components/VideoCards/VideoCards';
import useStore from '../hooks/useStore';

export default function HomePage() {
	const confirmationMessage = useStore(state => state.confirmationMessage);
	const videos = useStore(state => state.videos);
	return (
		<>
			<Head>
				<title key="title">Kiddio Feed</title>
				<meta
					key="description"
					name="description"
					content="Kiddio - the kids leaning app"
				/>
			</Head>
			<Layout>
				<StyledContainer variant="snapScroll">
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
				</StyledContainer>
				{confirmationMessage && <ConfirmationMessage />}
			</Layout>
		</>
	);
}
