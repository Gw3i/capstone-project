import dynamic from 'next/dynamic';
import Head from 'next/head';

import Playlist from '../../components/Playlist';

export default function Playlists() {
	const DynamicLayout = dynamic(() => import('../../components/Layout'), {
		ssr: false,
	});
	return (
		<>
			<Head>
				<title key="title">Kiddio Add new videos</title>
				<meta
					key="description"
					name="description"
					content="Kiddio - the kids leaning app"
				/>
			</Head>
			<DynamicLayout>
				<Playlist />
			</DynamicLayout>
		</>
	);
}
