import Link from 'next/link';
import { useState } from 'react';

import useStore from '../../hooks/useStore';
import DeleteModal from '../DeleteModal/DeleteModal';
import Icon from '../Icon';
import StyledButton from '../StyledBotton/StyledButton';
import StyledCategoryTag from '../StyledCategoryTag';
import StyledContainer from '../StyledContainer';
import StyledLink from '../StyledLink';
import StyledTypography from '../StyledTypography';
import StyledVideoButtonContainer from '../StyledVideoButtonContainer';

export default function VideoCardInfoBox({ videoId, category, bookmark, videoTitle, routerId }) {
	const loginSession = useStore(state => state.loginSession);

	const setIsBookmarked = useStore(state => state.setIsBookmarked);

	function handleBookmark(id) {
		setIsBookmarked(id);
	}

	const [isShown, setIsShown] = useState(false);

	function handleVisibility() {
		setIsShown(!isShown);
	}

	return (
		<>
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
				<StyledTypography variant="h2" color="white" size="medium">
					{videoTitle}
				</StyledTypography>
			</StyledContainer>
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
		</>
	);
}
