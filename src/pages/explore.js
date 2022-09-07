import Category from '../components/Category';
import CategoryTags from '../components/CategoryTags';
import EmojiIcons from '../components/EmojiIcons';
import Layout from '../components/Layout';
import Typography from '../components/Typography';

export default function Explore() {
	return (
		<Layout>
			<Typography variant="h1" decoration="borderBottom" position="relative">
				<EmojiIcons variant="lens" />
				Explore
			</Typography>
			<CategoryTags />
			<Category />
		</Layout>
	);
}
