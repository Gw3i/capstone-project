import Layout from '../components/Layout';
import useStore from '../hooks/useStore';

export default function Explore() {
	const categories = useStore(state => state.categories);

	return (
		<Layout>
			<h1>Explore</h1>
			{categories.map(category => {
				return <h2 key={category.id}>{category.name}</h2>;
			})}
		</Layout>
	);
}
