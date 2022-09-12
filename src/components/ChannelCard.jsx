import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useStore from '../hooks/useStore';

import Icon from './Icon';
import StyledContainer from './StyledContainer';
import StyledLink from './StyledLink';
import StyledTypography from './StyledTypography';

export default function ChannelCard({ channelItem }) {
	const setCurrentItem = useStore(state => state.setCurrentItem);
	const fetchChannelData = useStore(state => state.fetchChannelData);
	const routerId = useRouter().query.id;

	return (
		<Link href={`/create/${channelItem?.channelId}`}>
			<StyledLink
				variant="channelCard"
				onClick={() => {
					setCurrentItem(channelItem?.channelId);
					fetchChannelData({
						variant: 'channelPlaylists',
						id: channelItem.channelId,
					});
				}}
			>
				<StyledContainer variant="channelCard">
					<Image
						src={channelItem?.thumbnails?.high?.url}
						alt={channelItem?.channelTitle}
						objectFit="cover"
						width={300}
						height={85}
					/>
					<StyledContainer variant="channelCardText">
						<StyledTypography variant="h2" decoration="channelCard">
							{channelItem?.channelTitle}
						</StyledTypography>
						{routerId === undefined && (
							<StyledContainer variant="channelArrow">
								<Icon variant="arrow" size="36px" />
							</StyledContainer>
						)}
					</StyledContainer>
				</StyledContainer>
			</StyledLink>
		</Link>
	);
}
