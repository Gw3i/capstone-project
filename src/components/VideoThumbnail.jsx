import Image from 'next/image';
import Link from 'next/link';

import useStore from '../hooks/useStore';
import useYouTubeId from '../hooks/useYouTubeId';

import StyledContainer from './StyledContainer';
import StyledTypography from './StyledTypography';

export default function VideoThumbnail({ YouTubeLink, videoTitle, category, id }) {
	const videoID = useYouTubeId(YouTubeLink);

	const setTimeStamp = useStore(state => state.setTimeStamp);

	return (
		<StyledContainer variant="exploreImg">
			<Link href={`/explore/${category}`}>
				<a
					onClick={() => {
						setTimeStamp(id);
					}}
				>
					<StyledContainer variant="blurContainerExplore">
						<StyledTypography variant="h2" color="white" size="medium">
							{videoTitle}
						</StyledTypography>
					</StyledContainer>

					<Image
						src={`https://i3.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
						alt={videoTitle}
						objectFit="cover"
						width={250}
						height={250}
					/>
				</a>
			</Link>
		</StyledContainer>
	);
}
