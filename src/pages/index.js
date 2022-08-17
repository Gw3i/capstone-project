import Link from 'next/link';

import StyledMain from '../components/StyledMain';
import VideoCard from '../components/VideoCard';

export default function HomePage() {
	return (
		<StyledMain>
			<VideoCard />
			<Link href="/create">
				<a>to create page</a>
			</Link>
		</StyledMain>
	);
}
