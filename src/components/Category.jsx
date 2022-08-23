import StyledHeadline from '../components/StyledHeadline';
import VideoCard from '../components/VideoCards/VideoCards';
import useStore from '../hooks/useStore';

import StyledContainer from './StyledContainer';

export default function Category() {
	const categories = useStore(state => state.categories);
	const videos = useStore(state => state.videos);

	return categories.map(category => {
		return (
			<>
				<StyledHeadline key={category.id}>{category.name}</StyledHeadline>
				<StyledContainer variant="scroll">
					{videos
						.filter(video => {
							console.log(video.category === category.name);
							return video.category === category.name;
						})
						.map(video => {
							return (
								<>
									<VideoCard
										key={video.id}
										YouTubeLink={video.YouTubeLink}
										videoTitle={video.videoTitle}
										videoId={video.id}
										bookmark={video.isBookmarked}
										category={video.category}
									/>
								</>
							);
						})}
				</StyledContainer>
			</>
		);
	});
}
