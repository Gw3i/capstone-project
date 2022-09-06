import Link from 'next/link';

import useStore from '../hooks/useStore';

import StyledLink from './StyledLink';
import Vectors from './Vectors';

export default function Logout() {
	const setLoginSession = useStore(state => state.setLoginSession);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);
	return (
		<Vectors variant="bigPurple">
			<Link href="/">
				<StyledLink
					variant="buttonSmall"
					onClick={() => {
						setLoginSession(null);
						setConfirmationMessage('You are logged out now');
					}}
				>
					Logout
				</StyledLink>
			</Link>
		</Vectors>
	);
}
