import Head from 'next/head';

import EditForm from '../../components/EditFrom/EditForm';
import Layout from '../../components/Layout';
import Typography from '../../components/Typography';

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
				<Typography variant="h1" decoration="borderBottomCreateAccount">
					Create new account
				</Typography>
				<EditForm />
			</Layout>
		</>
	);
}
