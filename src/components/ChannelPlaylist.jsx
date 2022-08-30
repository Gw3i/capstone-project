import useStore from '../hooks/useStore';

import ChannelCard from './ChannelCard';

export default function ChannelPlaylist() {
	const currentItem = useStore(state => state.currentItem);
	const channels = useStore(state => state.channels);

	const channelItems = channels.map(channel => channel.snippet);

	return (
		<>
			{currentItem.id === ''
				? channelItems.map(item => {
						return <ChannelCard key={item.channelId} item={item} />;
				  })
				: channelItems
						.filter(item => {
							return currentItem.id === item.channelId;
						})
						.map(item => {
							return <ChannelCard key={item.channelId} item={item} />;
						})}
		</>
	);
}
