import Link from 'next/link';
import { useState } from 'react';

import useStore from '../../hooks/useStore';
import DeleteModal from '../DeleteModal/DeleteModal';
import Icon from '../Icon';
import StyledButton from '../StyledButton';
import StyledVideoContainer from '../StyledVideoContainer';
import StyledVideoFrame from '../StyledVideoFrame';
import StyledVideoTitle from '../StyledVideoTitle';

export default function VideoCard() {
	const [isShown, setIsShown] = useState(false);

	function handleVisibility() {
		setIsShown(!isShown);
	}

	const videos = useStore(state => state.videos);

	function getYouTubeId(url) {
		url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)/);
		return url[2] !== undefined ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
	}

	return videos.map(video => {
		const videoID = getYouTubeId(video.YouTubeLink);
		return (
			<StyledVideoContainer key={video.id} data-testid="videoContainer">
				<StyledButton type="button" variant="deleteIcon" onClick={handleVisibility}>
					<Icon variant={isShown ? 'deleteFilled' : 'delete'} color="white" />
				</StyledButton>
				{isShown ? <DeleteModal onCancel={handleVisibility} videoId={video.id} /> : ''}
				<Link href={`/edit/${video.id}`}>
					<a>
						<StyledButton type="button" variant="editIcon">
							<Icon variant={isShown ? 'editFilled' : 'edit'} color="white" />
						</StyledButton>
					</a>
				</Link>

				<StyledVideoTitle>{video.videoTitle}</StyledVideoTitle>
				<StyledVideoFrame
					width="180"
					height="315"
					src={`https://www.youtube.com/embed/${videoID}`}
					title={video.videoTitle}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></StyledVideoFrame>
			</StyledVideoContainer>
		);
	});
}
