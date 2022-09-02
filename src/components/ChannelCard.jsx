import Image from 'next/image';
import Link from 'next/link';

import useStore from '../hooks/useStore';

import ConfirmationMessage from './ConfirmationMessage';
import Icon from './Icon';
import StyledContainer from './StyledContainer';
import StyledH2 from './StyledH2';
import StyledLink from './StyledLink';

export default function ChannelCard({ channelItem }) {
	const setCurrentItem = useStore(state => state.setCurrentItem);
	const fetchChannelData = useStore(state => state.fetchChannelData);

	return (
		<Link href={`/create/${channelItem.channelId}`}>
			<StyledLink
				variant="channelCard"
				onClick={() => {
					setCurrentItem(channelItem.channelId);
					fetchChannelData({
						variant: 'channelPlaylists',
						id: channelItem.channelId,
					});
				}}
			>
				<ConfirmationMessage />
				<StyledContainer variant="channelCard">
					<Image
						src={channelItem.thumbnails?.high?.url}
						alt={channelItem.channelTitle}
						objectFit="cover"
						width={300}
						height={85}
					/>
					<StyledContainer variant="channelCardText">
						<StyledH2 variant="channelCard">{channelItem.channelTitle}</StyledH2>
						<StyledContainer variant="channelArrow">
							<Icon variant="arrow" />
						</StyledContainer>
					</StyledContainer>
				</StyledContainer>
			</StyledLink>
		</Link>
	);
}
