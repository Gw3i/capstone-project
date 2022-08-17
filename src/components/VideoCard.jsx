import useStore from '../hooks/useStore';

export default function VideoCard() {
	const videos = useStore(state => state.videos);

	function getYouTubeId(url) {
		url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)/);
		return url[2] !== undefined ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
	}

	return (
		<ul>
			{videos.map(video => {
				const videoID = getYouTubeId(video.YouTubeLink);
				return (
					<iFrame
						key={videoID}
						width="180"
						height="315"
						src={`https://www.youtube.com/embed/${videoID}`}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iFrame>
				);
			})}
		</ul>
	);
}
