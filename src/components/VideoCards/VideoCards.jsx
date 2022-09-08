import Link from 'next/link';
import { useRouter } from 'next/router';
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
import Typography from '../Typography';

export default function VideoCard({ YouTubeLink, videoTitle, videoId, bookmark, category }) {
	const [isShown, setIsShown] = useState(false);
	const loginSession = useStore(state => state.loginSession);
	const routerId = useRouter().query.id;

	function handleVisibility() {
		setIsShown(!isShown);
	}

	const setIsBookmarked = useStore(state => state.setIsBookmarked);

	function handleBookmark(id) {
		setIsBookmarked(id);
	}

	const videoID = useYouTubeId(YouTubeLink);

	return (
		<StyledVideoContainer key={videoId}>
			<StyledContainer variant="blurContainer">
				<StyledVideoButtonContainer>
					{loginSession && (
						<StyledButton type="button" variant="videoIcons" onClick={handleVisibility}>
							<Icon
								variant="delete"
								color={isShown ? 'var(--accent-purple)' : 'white'}
							/>
						</StyledButton>
					)}

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
						<Icon
							variant="bookmark"
							color={bookmark ? 'var(--contrast-purple)' : 'white'}
						/>
					</StyledButton>
				</StyledVideoButtonContainer>

				{routerId === [category] ? (
					<Link>
						<StyledCategoryTag>{category}</StyledCategoryTag>
					</Link>
				) : (
					<Link href={`/explore/${category}`}>
						<StyledCategoryTag>{category}</StyledCategoryTag>
					</Link>
				)}
				<Typography variant="h2" color="white" size="medium">
					{videoTitle}
				</Typography>
			</StyledContainer>
			<StyledVideoFrame
				width="180"
				height="315"
				src={`https://www.youtube.com/embed/${videoID}`}
				title={videoTitle}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			></StyledVideoFrame>
			{isShown && (
				<>
					<DeleteModal onCancel={handleVisibility} videoId={videoId} />
					<StyledContainer
						variant="overlay"
						onClick={() => {
							setIsShown(!isShown);
						}}
					/>
				</>
			)}
		</StyledVideoContainer>
	);
}
