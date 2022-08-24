import Image from 'next/image';

import useYouTubeId from '../hooks/useYouTubeId';

import StyledContainer from './StyledContainer';

export default function VideoThumbnail({ YouTubeLink, videoTitle }) {
	const videoID = useYouTubeId(YouTubeLink);
	console.log(videoID);
	return (
		<StyledContainer variant="exploreImg">
			<Image
				src={`https://i3.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
				alt={videoTitle}
				layout="responsive"
				width={500}
				height={400}
			/>
		</StyledContainer>
	);
}
