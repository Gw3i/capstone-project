import Head from 'next/head';

import CreateAccountForm from '../components/CreateAccountForm/CreateAccoutForm';
import Layout from '../components/Layout';
import StyledTypography from '../components/StyledTypography';

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
				<StyledTypography variant="h1" decoration="borderBottomCreateAccount">
					Create new account
				</StyledTypography>
				<CreateAccountForm />
			</Layout>
		</>
	);
}
