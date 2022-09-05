import Link from 'next/link';

import useStore from '../hooks/useStore';

import ConfirmationMessage from './ConfirmationMessage';
import StyledLink from './StyledLink';

export default function Logout() {
	const setLoginSession = useStore(state => state.setLoginSession);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);
	return (
		<>
			<ConfirmationMessage />
			<Link href="/">
				<StyledLink
					variant="tags"
					onClick={() => {
						setLoginSession(null);
						setConfirmationMessage('You are logged out now');
					}}
				>
					Logout
				</StyledLink>
			</Link>
		</>
	);
}
