import Category from '../components/Category';
import CategoryTags from '../components/CategoryTags';
import Layout from '../components/Layout';

export default function Explore() {
	return (
		<Layout>
			<h1>Explore</h1>
			<CategoryTags />
			<Category />
		</Layout>
	);
}
