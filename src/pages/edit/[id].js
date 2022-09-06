import EditForm from '../../components/EditFrom/EditForm';
import Layout from '../../components/Layout';
import Typography from '../../components/Typography';

export default function Edit() {
	return (
		<Layout>
			<Typography variant="h1" decoration="borderBottom">
				Edit video information
			</Typography>
			<EditForm />
		</Layout>
	);
}
