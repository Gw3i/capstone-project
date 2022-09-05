import Link from 'next/link';

import useStore from '../hooks/useStore';

import ConfirmationMessage from './ConfirmationMessage';

export default function Logout() {
	const setLoginSession = useStore(state => state.setLoginSession);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);
	return (
		<>
			<ConfirmationMessage />
			<Link href="/">
				<a
					onClick={() => {
						setLoginSession(null);
						setConfirmationMessage('You are logged out now');
					}}
				>
					Logout
				</a>
			</Link>
		</>
	);
}
