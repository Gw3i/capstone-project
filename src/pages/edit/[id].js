import Head from 'next/head';

import EditForm from '../../components/EditFrom/EditForm';
import Layout from '../../components/Layout';
import StyledTypography from '../../components/StyledTypography';

export default function Edit() {
	return (
		<>
			<Head>
				<title key="title">Kiddio Edit</title>
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
				<EditForm />
			</Layout>
		</>
	);
}
