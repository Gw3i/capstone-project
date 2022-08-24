import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import VideoCard from '../../components/VideoCards/VideoCards';
import useStore from '../../hooks/useStore';

export default function ExploreCategory() {
	const router = useRouter();
	const ref = router.query;

	const videos = useStore(state => state.videos);
	return (
		<Layout>
			<h1>{ref.id}</h1>
			{videos
				.filter(video => {
					return video.category === ref.id;
				})
				.map(video => {
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
