import { Fragment } from 'react';

import useStore from '../../hooks/useStore';
import StyledContainer from '../StyledContainer';
import StyledTypography from '../StyledTypography';
import Vectors from '../Vectors';
import VideoThumbnail from '../VideoThumbnail';

export default function Category() {
	const videos = useStore(state => state.videos);

	const allCategories = videos.map(video => {
		return video.category;
	});

	const uniqueCategories = [...new Set(allCategories)];

	return (
		<>
			<Vectors variant="bigBlobExplore" />
			<Vectors variant="bigPurpleExplore" />
			{uniqueCategories.map(category => {
				return (
					<Fragment key={category}>
						<StyledContainer variant="exploreWrapper">
							<StyledTypography variant="h3" component="h2" position="explore">
								{category}
							</StyledTypography>
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
					</Fragment>
				);
			})}
		</>
	);
}
