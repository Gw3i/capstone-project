import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import StyledContainer from '../../components/StyledContainer';
import StyledTypography from '../../components/StyledTypography';
import VideoCard from '../../components/VideoCards/VideoCards';
import useStore from '../../hooks/useStore';

export default function ExploreCategory() {
	const router = useRouter();
	const ref = router.query;
	const videos = useStore(state => state.videos);

	const filteredVideosByCategory = videos.filter(video => {
		return video.category === ref.id;
	});

	const sortedCategoryVideos = filteredVideosByCategory.sort(
		(a, b) => Number(b.timeStamp) - Number(a.timeStamp)
	);

	return (
		<>
			<Head>
				<title key="title">Kiddio Explore Category</title>
				<meta
					key="description"
					name="description"
					content="Kiddio - the kids leaning app"
				/>
			</Head>
			<Layout>
				<StyledContainer variant="blurContainerHeadline">
					<StyledTypography variant="h1" decoration="borderBottom">
						{ref.id}
					</StyledTypography>
				</StyledContainer>
				<StyledContainer variant="snapScroll">
					{sortedCategoryVideos.map(video => {
						return (
							<VideoCard
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
		</>
	);
}
