import Link from 'next/link';

import VideoForm from '../components/VideoForm/VideoForm';

export default function Create() {
	return (
		<>
			<h1>Create</h1>

			<VideoForm />
			<Link href="/">
				<a>to home page</a>
			</Link>
		</>
	);
}
