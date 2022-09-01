import Link from 'next/link';

import useStore from '../hooks/useStore';

export default function Logout() {
	const setLoginSession = useStore(state => state.setLoginSession);
	return (
		<Link href="/">
			<a
				onClick={() => {
					setLoginSession(null);
				}}
			>
				Logout
			</a>
		</Link>
	);
}
