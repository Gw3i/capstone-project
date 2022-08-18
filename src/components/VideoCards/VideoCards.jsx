import useStore from '../../hooks/useStore';
import StyledVideoContainer from '../StyledVideoContainer';
import StyledVideoFrame from '../StyledVideoFrame';
import StyledVideoTitle from '../StyledVideoTitle';

export default function VideoCard() {
	const videos = useStore(state => state.videos);

	function getYouTubeId(url) {
		url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)/);
		return url[2] !== undefined ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
	}

	return videos.map(video => {
		const videoID = getYouTubeId(video.YouTubeLink);
		return (
			<StyledVideoContainer key={video.id} data-testid="videoContainer">
				<StyledVideoTitle>{video.videoTitle}</StyledVideoTitle>
				<StyledVideoFrame
					width="180"
					height="315"
					aria-label={video.videoTitle}
					src={`https://www.youtube.com/embed/${videoID}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></StyledVideoFrame>
			</StyledVideoContainer>
		);
	});
}
