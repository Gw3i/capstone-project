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
				<StyledListItem variant="nav">
					<Link href="/">
						<StyledNavLink variant={router.pathname === '/' && 'bold'}>
							<Icon
								size="32px"
								variant={router.pathname === '/' ? 'homeFilled' : 'home'}
							/>
							Home
						</StyledNavLink>
					</Link>
				</StyledListItem>
				<StyledListItem variant="nav">
					<Link href="/explore">
						<StyledNavLink variant={router.pathname === '/explore' && 'bold'}>
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

				<StyledListItem variant="nav">
					<Link href="/bookmarks">
						<StyledNavLink variant={router.pathname === '/bookmarks' && 'bold'}>
							<Icon
								size="32px"
								variant={
									router.pathname === '/bookmarks'
										? 'bookmark'
										: 'bookmarkOutline'
								}
							/>
							Bookmarks
						</StyledNavLink>
					</Link>
				</StyledListItem>
				<StyledListItem variant="nav">
					<Link href="/create">
						<StyledNavLink variant={router.pathname === '/create' && 'bold'}>
							<Icon
								size="32px"
								variant={router.pathname === '/create' ? 'createFilled' : 'create'}
							/>
							Create
						</StyledNavLink>
					</Link>
				</StyledListItem>
			</StyledList>
		</nav>
	);
}
