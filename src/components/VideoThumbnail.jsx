import Image from 'next/image';
import Link from 'next/link';

import useYouTubeId from '../hooks/useYouTubeId';

import StyledContainer from './StyledContainer';
import StyledVideoTitle from './StyledVideoTitle';

export default function VideoThumbnail({ YouTubeLink, videoTitle }) {
	const videoID = useYouTubeId(YouTubeLink);
	console.log(videoID);
	return (
		<StyledContainer variant="exploreImg">
			<Link href="/">
				<a>
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
