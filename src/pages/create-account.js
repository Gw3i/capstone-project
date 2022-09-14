import dynamic from 'next/dynamic';
import Head from 'next/head';

import CreateAccountForm from '../components/CreateAccountForm/CreateAccoutForm';
import StyledTypography from '../components/StyledTypography';

export default function Login() {
	const DynamicLayout = dynamic(() => import('../components/Layout'), {
		ssr: false,
	});
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
			<DynamicLayout>
				<StyledTypography variant="h1" decoration="borderBottomCreateAccount">
					Create new account
				</StyledTypography>
				<CreateAccountForm />
			</DynamicLayout>
		</>
	);
}
