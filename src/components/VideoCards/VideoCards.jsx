import { useRouter } from 'next/router';

import useYouTubeId from '../../hooks/useYouTubeId';
import StyledVideoContainer from '../StyledVideoContainer';
import StyledVideoFrame from '../StyledVideoFrame';
import VideoCardInfoBox from '../VideoCardInfoBox/VideoCardInfoBox';

export default function VideoCard({ YouTubeLink, videoTitle, videoId, bookmark, category }) {
	const routerId = useRouter().query.id;

	const videoID = useYouTubeId(YouTubeLink);

	return (
		<StyledVideoContainer key={videoId}>
			<VideoCardInfoBox
				videoId={videoId}
				category={category}
				bookmark={bookmark}
				videoTitle={videoTitle}
				routerId={routerId}
			/>
			<StyledVideoFrame
				width="180"
				height="315"
				src={`https://www.youtube.com/embed/${videoID}`}
				title={videoTitle}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			></StyledVideoFrame>
		</StyledVideoContainer>
	);
}
