import Link from 'next/link';

import Layout from '../components/Layout';
import VideoForm from '../components/VideoForm/VideoForm';

export default function Create() {
	return (
		<Layout>
			<h1>Create</h1>

			<VideoForm />
			<Link href="/">
				<a>to home page</a>
			</Link>
		</Layout>
	);
}
