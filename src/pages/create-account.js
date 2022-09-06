import CreateAccountForm from '../components/CreateAccoutForm';
import Layout from '../components/Layout';
import Typography from '../components/Typography';

export default function Login() {
	return (
		<Layout>
			<Typography variant="h1" decoration="borderBottom">
				Create new account
			</Typography>
			<CreateAccountForm />
		</Layout>
	);
}
