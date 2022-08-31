import Link from 'next/link';

import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';

export default function Login() {
	return (
		<Layout>
			<h1>Login</h1>
			<LoginForm />
			<p>No account yet?</p>
			<Link href="/create-account">
				<a>Create new account</a>
			</Link>
		</Layout>
	);
}
