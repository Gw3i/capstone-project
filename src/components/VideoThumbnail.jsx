import Image from 'next/image';
import Link from 'next/link';

import useStore from '../hooks/useStore';
import useYouTubeId from '../hooks/useYouTubeId';

import StyledContainer from './StyledContainer';
import StyledVideoTitle from './StyledVideoTitle';

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
					<StyledVideoTitle position="explore">{videoTitle}</StyledVideoTitle>
					<Image
						src={`https://i3.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
						alt={videoTitle}
						layout="responsive"
						width={500}
						height={400}
					/>
				</a>
			</Link>
		</StyledContainer>
	);
}
