import Image from 'next/image';

import StyledContainer from './StyledContainer';

export default function ChannelCard({ channelName, thumbnail }) {
	return (
		<StyledContainer variant="channelCard">
			<Image src={thumbnail} alt={channelName} layout="responsive" width={500} height={400} />
			<p>{channelName}</p>
		</StyledContainer>
	);
}
