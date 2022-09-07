import Head from 'next/head';

import Layout from '../../components/Layout';
import Playlist from '../../components/Playlist';

export default function Playlists() {
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
			<Layout>
				<Playlist />
			</Layout>
		</>
	);
}
