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
			<StyledList variant="nav">
				<StyledListItem>
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
				<StyledListItem>
					<Link href="/explore">
						<StyledNavLink>
							<Icon
								size="32px"
								variant={
									router.pathname === '/explore' ||
									router.pathname === '/explore/'
										? 'exploreFilled'
										: 'explore'
								}
							/>
							Explore
						</StyledNavLink>
					</Link>
				</StyledListItem>
				<StyledListItem>
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
				<StyledListItem>
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
