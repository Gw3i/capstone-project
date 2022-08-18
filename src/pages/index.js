import Link from 'next/link';

import Layout from '../components/Layout';
import StyledMain from '../components/StyledMain';
import VideoCards from '../components/VideoCards/VideoCards';

export default function HomePage() {
	return (
		<Layout>
			<StyledMain>
				<h1>Home</h1>
				<Link href="/create">
					<a>to create page</a>
				</Link>
				<VideoCards />
			</StyledMain>
		</Layout>
	);
}
