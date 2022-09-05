import EditForm from '../../components/EditFrom/EditForm';
import Layout from '../../components/Layout';
import StyledH1 from '../../components/StyledH1';

export default function Edit() {
	return (
		<Layout>
			<StyledH1 variant="borderBottom">Edit video information</StyledH1>
			<EditForm />
		</Layout>
	);
}
