import Link from 'next/link';

import useStore from '../hooks/useStore';

import StyledContainer from './StyledContainer';
import StyledLink from './StyledLink';

export default function CategoryTags() {
	const categories = useStore(state => state.categories);

	return (
		<StyledContainer variant="tagsWrapper">
			<StyledContainer variant="tags">
				{categories
					.filter((_category, index) => {
						return index <= 6;
					})
					.map(category => {
						return (
							<Link key={category.id} href={`/explore/${category.name}`}>
								<StyledLink variant="tags">{category.name}</StyledLink>
							</Link>
						);
					})}
			</StyledContainer>
			<StyledContainer variant="tags">
				{categories
					.filter((_category, index) => {
						return index > 6;
					})
					.map(category => {
						return (
							<Link key={category.id} href={`/explore/${category.name}`}>
								<StyledLink variant="tags">{category.name}</StyledLink>
							</Link>
						);
					})}
			</StyledContainer>
		</StyledContainer>
	);
}
