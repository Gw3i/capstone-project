import Head from 'next/head';

import CreateAccountForm from '../components/CreateAccoutForm';
import Layout from '../components/Layout';
import Typography from '../components/Typography';

export default function Login() {
	return (
		<>
			<Head>
				<title key="title">Kiddio Create Account</title>
				<meta
					key="description"
					name="description"
					content="Kiddio - the kids leaning app"
				/>
			</Head>
			<Layout>
				<Typography variant="h1" decoration="borderBottomCreateAccount">
					Create new account
				</Typography>
				<CreateAccountForm />
			</Layout>
		</>
	);
}
