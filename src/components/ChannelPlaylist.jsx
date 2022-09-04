import useStore from '../hooks/useStore';

import ChannelCard from './ChannelCard';
import StyledContainer from './StyledContainer';

export default function ChannelPlaylist() {
	const currentItem = useStore(state => state.currentItem);
	const channels = useStore(state => state.channels);

	const channelItems = channels?.map(channel => channel.snippet);

	return (
		<>
			{currentItem.id === ''
				? channelItems?.map(channelItem => {
						return (
							<StyledContainer
								key={channelItem.channelId}
								variant="channelCardWrapper"
							>
								<ChannelCard channelItem={channelItem} />
							</StyledContainer>
						);
				  })
				: channelItems
						?.filter(channelItem => {
							return currentItem.id === channelItem.channelId;
						})
						.map(channelItem => {
							return (
								<StyledContainer
									key={channelItem.channelId}
									variant="channelCardWrapper"
								>
									<ChannelCard channelItem={channelItem} />
								</StyledContainer>
							);
						})}
		</>
	);
}
