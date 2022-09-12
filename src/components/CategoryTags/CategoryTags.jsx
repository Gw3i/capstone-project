import Link from 'next/link';

import useStore from '../../hooks/useStore';
import StyledContainer from '../StyledContainer';
import StyledLink from '../StyledLink';
import StyledList from '../StyledList';
import StyledListItem from '../StyledListItem';

export default function CategoryTags() {
	const categories = useStore(state => state.categories);

	return (
		<StyledContainer variant="tagsWrapper">
			<StyledList variant="tags">
				{categories
					.filter((_category, index) => {
						return index <= 6;
					})
					.map(category => {
						return (
							<StyledListItem variant="marginTopBottom5" key={category.id}>
								<Link href={`/explore/${category.name}`}>
									<StyledLink variant="tags">{category.name}</StyledLink>
								</Link>
							</StyledListItem>
						);
					})}
			</StyledList>
			<StyledList variant="tags">
				{categories
					.filter((_category, index) => {
						return index > 6;
					})
					.map(category => {
						return (
							<StyledListItem variant="marginTopBottom5" key={category.id}>
								<Link href={`/explore/${category.name}`}>
									<StyledLink variant="tags">{category.name}</StyledLink>
								</Link>
							</StyledListItem>
						);
					})}
			</StyledList>
		</StyledContainer>
	);
}
