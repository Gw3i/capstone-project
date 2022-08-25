import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
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
		<Layout>
			<h1>{ref.id}</h1>
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
		</Layout>
	);
}
