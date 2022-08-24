import StyledHeadline from '../components/StyledHeadline';
import VideoCard from '../components/VideoCards/VideoCards';
import useStore from '../hooks/useStore';

import StyledContainer from './StyledContainer';

export default function Category() {
	// const categories = useStore(state => state.categories);
	const videos = useStore(state => state.videos);

	const allCategories = videos.map(video => {
		return video.category;
	});

	let uniqueCategories = [...new Set(allCategories)];

	return uniqueCategories.map(category => {
		return (
			<>
				<StyledHeadline key={category}>{category}</StyledHeadline>
				<StyledContainer variant="scroll">
					{videos
						.filter(video => {
							return video.category === category;
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
										size={'explore'}
										position={'explore'}
									/>
								</>
							);
						})}
				</StyledContainer>
			</>
		);
	});
}
