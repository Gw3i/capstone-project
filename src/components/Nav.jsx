import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from './Icon';
import StyledNav from './StyledNav';
import StyledNavLink from './StyledNavLink';

export default function Nav() {
	const router = useRouter();

	return (
		<StyledNav>
			<Link href="/">
				<StyledNavLink>
					<Icon size="24" variant={router.pathname === '/' ? 'homeFilled' : 'home'} />
					Home
				</StyledNavLink>
			</Link>

			<Link href="/create">
				<StyledNavLink>
					<Icon
						size="24"
						variant={router.pathname === '/create' ? 'createFilled' : 'create'}
					/>
					Home
				</StyledNavLink>
			</Link>
		</StyledNav>
	);
}
