import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from './Icon';
import StyledList from './StyledList';
import StyledListItem from './StyledListItem';
import StyledNavLink from './StyledNavLink';

export default function Nav() {
	const router = useRouter();

	return (
		<nav>
			<StyledList>
				<StyledListItem role="listitem">
					<Link href="/">
						<StyledNavLink>
							<Icon
								size="32px"
								variant={router.pathname === '/' ? 'homeFilled' : 'home'}
							/>
							Home
						</StyledNavLink>
					</Link>
				</StyledListItem>
				<StyledListItem role="listitem">
					<Link href="/create">
						<StyledNavLink>
							<Icon
								size="32px"
								variant={router.pathname === '/create' ? 'createFilled' : 'create'}
							/>
							Create
						</StyledNavLink>
					</Link>
				</StyledListItem>
				<StyledListItem role="listitem">
					<Link href="/bookmarks">
						<StyledNavLink>
							<Icon
								size="32px"
								variant={
									router.pathname === '/bookmarks' ? 'bookmarkFilled' : 'bookmark'
								}
							/>
							Bookmarks
						</StyledNavLink>
					</Link>
				</StyledListItem>
			</StyledList>
		</nav>
	);
}
