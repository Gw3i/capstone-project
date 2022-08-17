import Link from 'next/link';

import VideoForm from '../components/VideoForm/VideoForm';

export default function Create() {
	return (
		<>
			<VideoForm />
			<Link href="/">
				<a>to home page</a>
			</Link>
		</>
	);
}
