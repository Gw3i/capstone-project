import Head from 'next/head';

import Category from '../components/Category/Category';
import CategoryTags from '../components/CategoryTags';
import EmojiIcons from '../components/EmojiIcons';
import Layout from '../components/Layout';
import Typography from '../components/Typography';

export default function Explore() {
	return (
		<>
			<Head>
				<title key="title">Kiddio Explore</title>
				<meta
					key="description"
					name="description"
					content="Kiddio - the kids leaning app"
				/>
			</Head>
			<Layout>
				<Typography variant="h1" decoration="borderBottom" position="relative">
					<EmojiIcons variant="lens" />
					Explore
				</Typography>
				<CategoryTags />
				<Category />
			</Layout>
		</>
	);
}
