import Link from 'next/link';

import StyledMain from '../components/StyledMain';
import VideoCard from '../components/VideoCard/VideoCard';

export default function HomePage() {
	return (
		<StyledMain>
			<h1>Home</h1>
			<Link href="/create">
				<a>to create page</a>
			</Link>
			<VideoCard />
		</StyledMain>
	);
}
