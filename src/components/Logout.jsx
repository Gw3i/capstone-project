import Link from 'next/link';

import useStore from '../hooks/useStore';

import StyledLink from './StyledLink';

export default function Logout() {
	const setLoginSession = useStore(state => state.setLoginSession);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);
	return (
		<>
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
		</>
	);
}
