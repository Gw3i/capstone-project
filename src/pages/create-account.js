import CreateAccountForm from '../components/CreateAccoutForm';
import Layout from '../components/Layout';
import StyledH1 from '../components/StyledH1';

export default function Login() {
	return (
		<Layout>
			<StyledH1 variant="borderBottom">Create new account</StyledH1>
			<CreateAccountForm />
		</Layout>
	);
}
