import Link from 'next/link';

import useStore from '../hooks/useStore';

import ConfirmationMessage from './ConfirmationMessage';

export default function Logout() {
	const setLoginSession = useStore(state => state.setLoginSession);
	return (
		<>
			<ConfirmationMessage />
			<Link href="/">
				<a
					onClick={() => {
						setLoginSession(null);
					}}
				>
					Logout
				</a>
			</Link>
		</>
	);
}
