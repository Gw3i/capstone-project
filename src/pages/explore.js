import Layout from '../components/Layout';
import StyledHeadline from '../components/StyledHeadline';
import useStore from '../hooks/useStore';

export default function Explore() {
	const categories = useStore(state => state.categories);

	return (
		<Layout>
			<h1>Explore</h1>
			{categories.map(category => {
				return <StyledHeadline key={category.id}>{category.name}</StyledHeadline>;
			})}
		</Layout>
	);
}
