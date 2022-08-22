import Link from 'next/link';
import { useState } from 'react';

import useStore from '../../hooks/useStore';
import DeleteModal from '../DeleteModal/DeleteModal';
import Icon from '../Icon';
import StyledButton from '../StyledButton';
import StyledVideoButtonContainer from '../StyledVideoButtonContainer';
import StyledVideoContainer from '../StyledVideoContainer';
import StyledVideoFrame from '../StyledVideoFrame';
import StyledVideoTitle from '../StyledVideoTitle';

export default function VideoCard({ YouTubeLink, videoTitle, videoId, bookmark }) {
	const [isShown, setIsShown] = useState(false);

	function handleVisibility() {
		setIsShown(!isShown);
	}

	const setIsBookmarked = useStore(state => state.setIsBookmarked);

	function handleBookmark(id) {
		setIsBookmarked(id);
	}

	function getYouTubeId(url) {
		url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)/);
		return url[2] !== undefined ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
	}

	const videoID = getYouTubeId(YouTubeLink);

	return (
		<StyledVideoContainer key={videoId} data-testid="videoContainer">
			<StyledVideoButtonContainer>
				<StyledButton type="button" variant="videoIcons" onClick={handleVisibility}>
					<Icon variant={isShown ? 'deleteFilled' : 'delete'} color="white" />
				</StyledButton>
				{isShown ? <DeleteModal onCancel={handleVisibility} videoId={videoId} /> : ''}
				<Link href={`/edit/${videoId}`}>
					<a>
						<StyledButton type="button" variant="videoIcons">
							<Icon variant="edit" color="white" />
						</StyledButton>
					</a>
				</Link>
				<StyledButton
					type="button"
					variant="videoIcons"
					onClick={() => handleBookmark(videoId)}
				>
					<Icon variant={bookmark ? 'bookmarkFilled' : 'bookmark'} color="white" />
				</StyledButton>
			</StyledVideoButtonContainer>
			<StyledVideoTitle>{videoTitle}</StyledVideoTitle>
			<StyledVideoFrame
				width="180"
				height="315"
				src={`https://www.youtube.com/embed/${videoID}`}
				title={videoTitle}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></StyledVideoFrame>
		</StyledVideoContainer>
	);
}
