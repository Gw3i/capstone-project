import StyledHeadline from '../components/StyledHeadline';
import useStore from '../hooks/useStore';

import StyledContainer from './StyledContainer';
import VideoThumbnail from './VideoThumbnail';

export default function Category() {
	const videos = useStore(state => state.videos);

	const allCategories = videos.map(video => {
		return video.category;
	});

	const uniqueCategories = [...new Set(allCategories)];

	return uniqueCategories.map(category => {
		return (
			<StyledContainer key={category.id} variant="exploreWrapper">
				<StyledHeadline key={category}>{category}</StyledHeadline>
				<StyledContainer variant="scrollVideos">
					{videos
						.filter(video => {
							return video.category === category;
						})
						.map(video => {
							return (
								<VideoThumbnail
									key={video.id}
									YouTubeLink={video.YouTubeLink}
									videoTitle={video.videoTitle}
									category={video.category}
									id={video.id}
								/>
							);
						})}
				</StyledContainer>
			</StyledContainer>
		);
	});
}
