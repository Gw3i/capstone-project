import Image from 'next/image';

import StyledContainer from './StyledContainer';

export default function ChannelCard({ channelName }) {
	return (
		<StyledContainer variant="channelCard">
			<Image
				src={'https://i.ytimg.com/vi/DC471a9qrU4/maxresdefault.jpg'}
				alt={channelName}
				layout="fixed"
				width={70}
				height={70}
			/>
			<StyledContainer variant="channelCardText">
				<h2>Fireship</h2>
				<h3>Playlist: 100 Seconds of Code</h3>
				<ul>
					{/*map through all videos */}
					<li>
						<h3>video title</h3>
						<p>https://youtube.com/embed/knkcduu</p>
					</li>
					<li>
						<h3>video title</h3>
						<p>https://youtube.com/embed/knkcduu</p>
					</li>
					<li>
						<h3>video title</h3>
						<p>https://youtube.com/embed/knkcduu</p>
					</li>
					<li>
						<h3>video title</h3>
						<p>https://youtube.com/embed/knkcduu</p>
					</li>
					<li>
						<h3>video title</h3>
						<p>https://youtube.com/embed/knkcduu</p>
					</li>
					<li>
						<h3>video title</h3>
						<p>https://youtube.com/embed/knkcduu</p>
					</li>
					<li>
						<h3>video title</h3>
						<p>https://youtube.com/embed/knkcduu</p>
					</li>
					<li>
						<h3>video title</h3>
						<p>https://youtube.com/embed/knkcduu</p>
					</li>
					<li>
						<h3>video title</h3>
						<p>https://youtube.com/embed/knkcduu</p>
					</li>
					<li>
						<h3>video title</h3>
						<p>https://youtube.com/embed/knkcduu</p>
					</li>
				</ul>
			</StyledContainer>
		</StyledContainer>
	);
}
