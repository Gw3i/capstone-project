import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import Logout from '../components/Logout';
import VideoForm from '../components/VideoForm/VideoForm';
import useStore from '../hooks/useStore';

export default function Create() {
	const loginSession = useStore(state => state.loginSession);
	return (
		<Layout>
			<h1>Create</h1>
			{loginSession ? (
				<>
					<Logout />
					<VideoForm />
				</>
			) : (
				<>
					<p>You need to be logged in to use this page</p>
					<LoginForm />
				</>
			)}
		</Layout>
	);
}
