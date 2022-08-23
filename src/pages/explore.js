import Layout from '../components/Layout';
import StyledHeadline from '../components/StyledHeadline';
import VideoCard from '../components/VideoCards/VideoCards';
import useStore from '../hooks/useStore';

export default function Explore() {
	const categories = useStore(state => state.categories);
	const videos = useStore(state => state.videos);

	return (
		<Layout>
			<h1>Explore</h1>
			{categories.map(category => {
				return (
					<>
						<StyledHeadline key={category.id}>{category.name}</StyledHeadline>
						<p>
							{videos
								.filter(video => {
									console.log(video.category === category.name);
									return video.category === category.name;
								})
								.map(video => {
									return (
										<VideoCard
											style={{ width: '150px', height: '150px' }}
											key={video.id}
											YouTubeLink={video.YouTubeLink}
											videoTitle={video.videoTitle}
											videoId={video.id}
											bookmark={video.isBookmarked}
											category={video.category}
										/>
									);
								})}
						</p>
					</>
				);
			})}
		</Layout>
	);
}
