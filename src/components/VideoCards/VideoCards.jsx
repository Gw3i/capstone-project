import Link from 'next/link';
import { useState } from 'react';

import useStore from '../../hooks/useStore';
import useYouTubeId from '../../hooks/useYouTubeId';
import DeleteModal from '../DeleteModal/DeleteModal';
import Icon from '../Icon';
import StyledButton from '../StyledButton';
import StyledCategoryTag from '../StyledCategoryTag';
import StyledContainer from '../StyledContainer';
import StyledLink from '../StyledLink';
import StyledVideoButtonContainer from '../StyledVideoButtonContainer';
import StyledVideoContainer from '../StyledVideoContainer';
import StyledVideoFrame from '../StyledVideoFrame';
import StyledVideoTitle from '../StyledVideoTitle';

export default function VideoCard({ YouTubeLink, videoTitle, videoId, bookmark, category }) {
	const [isShown, setIsShown] = useState(false);
	const loginSession = useStore(state => state.loginSession);

	function handleVisibility() {
		setIsShown(!isShown);
	}

	const setIsBookmarked = useStore(state => state.setIsBookmarked);

	function handleBookmark(id) {
		setIsBookmarked(id);
	}

	const videoID = useYouTubeId(YouTubeLink);

	return (
		<StyledVideoContainer key={videoId} data-testid="videoContainer">
			<StyledVideoButtonContainer>
				{loginSession && (
					<StyledButton type="button" variant="videoIcons" onClick={handleVisibility}>
						<Icon variant="delete" color={isShown ? 'var(--accent-purple)' : 'white'} />
					</StyledButton>
				)}

				{isShown && <DeleteModal onCancel={handleVisibility} videoId={videoId} />}

				{loginSession && (
					<Link href={`/edit/${videoId}`}>
						<StyledLink aria-label="edit" variant="default">
							<Icon variant="edit" color="white" />
						</StyledLink>
					</Link>
				)}

				<StyledButton
					type="button"
					variant="videoIcons"
					onClick={() => handleBookmark(videoId)}
				>
					<Icon variant="bookmark" color={bookmark ? 'var(--accent-purple)' : 'white'} />
				</StyledButton>
			</StyledVideoButtonContainer>
			<StyledContainer variant="blurContainer">
				<StyledVideoTitle>{videoTitle}</StyledVideoTitle>
				<StyledCategoryTag>{category}</StyledCategoryTag>
			</StyledContainer>
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
