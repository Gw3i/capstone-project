import dynamic from 'next/dynamic';
import Head from 'next/head';

import StyledContainer from '../components/StyledContainer';
import StyledTypography from '../components/StyledTypography';
import VideoCards from '../components/VideoCards/VideoCards';
import useStore from '../hooks/useStore';

export default function Bookmarks() {
	const videos = useStore(state => state.videos);

	const DynamicLayout = dynamic(() => import('../components/Layout'), {
		ssr: false,
	});

	return (
		<>
			<Head>
				<title key="title">Kiddio Bookmarks</title>
				<meta
					key="description"
					name="description"
					content="Kiddio - the kids leaning app"
				/>
			</Head>
			<DynamicLayout>
				<StyledContainer variant="blurContainerHeadline">
					<StyledTypography variant="h1" decoration="borderBottom">
						Bookmarks
					</StyledTypography>
				</StyledContainer>
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
			</DynamicLayout>
		</>
	);
}
