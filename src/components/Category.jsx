import useStore from '../hooks/useStore';

import StyledContainer from './StyledContainer';
import Typography from './Typography';
import Vectors from './Vectors';
import VideoThumbnail from './VideoThumbnail';

export default function Category() {
	const videos = useStore(state => state.videos);

	const allCategories = videos.map(video => {
		return video.category;
	});

	const uniqueCategories = [...new Set(allCategories)];

	return uniqueCategories.map(category => {
		return (
			<>
				<Vectors variant="bigBlobExplore" />
				<Vectors variant="bigPurpleExplore" />
				<StyledContainer key={category.id} variant="exploreWrapper">
					<Typography variant="h3" component="h2" position="explore" key={category}>
						{category}
					</Typography>
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
			</>
		);
	});
}
