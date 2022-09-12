import dynamic from 'next/dynamic';
import Head from 'next/head';

import EditForm from '../../components/EditFrom/EditForm';
import StyledTypography from '../../components/StyledTypography';

export default function Edit() {
	const DynamicLayout = dynamic(() => import('../../components/Layout'), {
		ssr: false,
	});

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
			<DynamicLayout>
				<StyledTypography variant="h1" decoration="borderBottomCreateAccount">
					Create new account
				</StyledTypography>
				<EditForm />
			</DynamicLayout>
		</>
	);
}
