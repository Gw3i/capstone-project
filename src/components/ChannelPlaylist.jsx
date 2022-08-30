import useStore from '../hooks/useStore';

import ChannelCard from './ChannelCard';

export default function ChannelPlaylist() {
	const currentItem = useStore(state => state.currentItem);
	const channels = useStore(state => state.channels);

	const channelItems = channels.map(channel => channel.snippet);

	return (
		<>
			{currentItem.id === ''
				? channelItems.map(channelItem => {
						return <ChannelCard key={channelItem.channelId} item={channelItem} />;
				  })
				: channelItems
						.filter(channelItem => {
							return currentItem.id === channelItem.channelId;
						})
						.map(channelItem => {
							return <ChannelCard key={channelItem.channelId} item={channelItem} />;
						})}
		</>
	);
}
